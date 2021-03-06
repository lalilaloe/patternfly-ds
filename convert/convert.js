const fs = require('fs');
const jsonfile = require('jsonfile');
const foxr = require('foxr').default
const path = require('path');
const slash = require('slash');
const he = require('he');
const sizeOf = require('image-size');
const parseHtml = require('node-html-parser').default;

const parse = (file) => {
    return jsonfile.readFileSync(file);
}

function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
        return fs.statSync(path + '/' + file).isDirectory();
    });
}

function buildComponentJson(component) {
    return `export default {
    displayName: "${component.name}",
    name: "${component.name.toLowerCase()}",
    homepage: "https://www.patternfly.org/v4/${component.path}"
}

${buildVariantJson(component)}`
}

function objectToString(input) {
    return JSON.stringify(input).replace(/"([^"]+)":/g, '\n$1:');
}

function buildVariantJson(component) {
    const variants = []
    component.variants.forEach(variant => {
        variants.push(objectToString(
            {
                displayName: variant.name,
                picture: {
                    src: `./${variant.screenshot.url}`.replace("//", "/"), // Compatible with windows replacint double slashes
                    width: variant.screenshot.width,
                    height: variant.screenshot.height
                },
                snippet: {
                    html: "html",
                }
            }).replace("\"html\"", variant.html)) // The replace is done to avoid qoutes bing added/processed by objectToString
    });
    return `export const variants = [
${variants.join(',\n')}
]`;
}

async function notReady(component) {
    if (isolatedComponents.includes(component)) { // Check for direct component url ready
        if (!await page.$(".ws-fullscreen-example div")) {
            return true
        }
    } else { // Check for component preview box ready
        if (!await page.$(".ws-preview-html")) {
            return true
        }
    }
    return false
}

async function ready(component) {
    while (await notReady(component)) {
        await new Promise(r => setTimeout(r, 500)) // Wait for page to be ready
    }
}

function hasSubVariants(pageData) {
    const div = pageData.result.pageContext.code.substring(0, 3)
    return pageData.result.pageContext.code.includes("<br />") ||
        (div == "<bu" && pageData.result.pageContext.code.split("<button").length - 1) ||
        (div == "<a " && pageData.result.pageContext.code.split("<a").length - 1) || (div == "<fo" && (pageData.result.pageContext.code.split(`<div class="pf-c-form__group">`).length - 1) > 1)
}

function isLabel(parsedHtml) {
    return parsedHtml.firstChild.classNames.filter(c => c === "pf-c-label").length
}

function isSingleForm(parsedHtml) {
    return parsedHtml.firstChild.tagName == "form" && parsedHtml.childNodes.filter(c => c.tagName === "form").length === 1
}

function retreiveLabel(parsedHtml) {
    const labelContent = parsedHtml.childNodes.find(c => c.classNames && c.classNames[0] === "pf-c-label__content"); // Get content span
    return labelContent.childNodes.find(c => c.constructor.name === "TextNode" && c.rawText.trim()).rawText // Extract text from span
}

function subVariantHasChildren(html) {
    const div = html.substring(0, 1) == "<" ? html.substring(0, 3) : html.substring(1, 4)
    return (div == "<bu" && html.split("<button").length - 1) ||
        (div == "<a " && html.split("<a").length - 1)
}

async function takeScreenshot(component, variant, screenshotUrl, target, subvariant = false, child = false) {
    const screenshotPath = path.join(screenshotDir, component)
    const screenshotFileName = variant + ".png"
    const screenshotFullPath = path.join(screenshotPath, screenshotFileName)

    if (!fs.existsSync(screenshotFullPath)) {
        if (await page.url() != screenshotUrl) { // If not already on page
            console.log("     Browsing to:", screenshotUrl);
            page.removeAllListeners(); // Avoid MaxListenersExceededWarning that crashes the script when used in large badges

            await page.goto(screenshotUrl, { waitUntil: 'load', timeout: 0 }).catch(error => {
                console.log("ERROR: Can't reach page", screenshotUrl)
                console.log("Are you sure the patterfly docs are locally running? Start it by running npm run start:patternfly")
            })
        }
        await ready(component);

        let element;
        if (isolatedComponents.includes(component)) { // If modal go to (isolated) component page
            element = await page.$(".ws-fullscreen-example div") // Select child div to avoid white-space
        } else {
            await page.evaluate(function () {
                var examples = document.getElementsByClassName('ws-example');
                for (var i = 0; i < examples.length; i++) {
                    examples[i].style.display = "inline-block" // Changes preview container size to fit component size
                }
                var titles = document.getElementsByClassName('pf-c-title');
                for (var i = 0; i < titles.length; i++) {
                    titles[i].style.display = "none" // Remove titles to scale preview box down to component size
                }
            })
            element = await page.$(target)
        }
        if (!fs.existsSync(screenshotPath)) {
            fs.mkdirSync(screenshotPath, { recursive: true });
        }

        //await page.screenshot({ path: screenshotFullPath })
        if (element) {
            await element.screenshot({ path: screenshotFullPath })
            //console.log("     Screenshot:", screenshotFullPath)
            process.stdout.cursorTo(0);
            process.stdout.write(` ✅ ${subvariant ? child ? '  -' : ' -' : '-'} ` + variant + "\n\033[0G"); // The last bit replaces the whole line
        } else {
            process.stdout.cursorTo(0);
            process.stdout.write(` ❌ ${subvariant ? child ? '  -' : ' -' : '-'} ` + variant + "\n\033[0G")
            return false;
        }
    } else {
        //console.log("     Screenshot exist:", screenshotFullPath)
        process.stdout.cursorTo(0);
        process.stdout.write(` ❎ ${subvariant ? child ? '  -' : ' -' : '-'} ` + variant + "\n\033[0G");
    }
    return screenshotFullPath
}

function decodeHtml(html) {
    return he.decode(html) // decode html for export to file
        .replace(/\/assets/g, 'node_modules/@patternfly/patternfly/assets') // Make assets resolve correctly when using snipit
        .replace(/`/g, '\\`') // Occasionally backticks are used in the snippets (ex. page component)
}

function getSnippet(screenshotFullPath, htmlCode, variantName) {
    const imageSize = sizeOf(screenshotFullPath);
    const html = `\`${decodeHtml(htmlCode)}\``
    return {
        name: variantName,
        screenshot: {
            url: slash(screenshotFullPath.replace(rootDir, '')).replace('/components/', ''),
            width: imageSize.width,
            height: imageSize.height
        },
        html: html
    }
}

function getTargetName(classNames) {
    return classNames.join(" ").replace(/pf-/g, '').replace(/c-/g, '').replace(/m-/g, '');
}

const isolatedComponents = []

function getScreenshotUrl(component, componentpath, path) {
    let screenshotUrl = "http://localhost:8000" + componentpath
    if (isolatedComponents.includes(component)) { // In case of modal go to (isolated) component url
        screenshotUrl = "http://localhost:8000" + path;
    }
    return screenshotUrl;
}

function getVariantName(variant) {
    switch (variant) {
        case "variations" || "variant" || "variants":
            return ""
        case "call-to-action":
            return "cta "
        default:
            return variant + " "
    }
}

// foxr.launch({
//     executablePath: 'C:/Program Files/Firefox Developer Edition/firefox.exe'
// }).then(browser => {
//     browser.pages()
//         .then(pages => {
//             pages[0].goto('http://localhost:8000/documentation/core/components/aboutmodalbox/basic')
//                 .then(_ => new Promise(r => setTimeout(r, 2000)))
//                 .then(_ => pages[0].screenshot({ path: 'example.png' }))
//         });
// });

const rootDir = path.resolve(__dirname, '..');
const componentDir = path.join(rootDir, "/patternfly/public/page-data/documentation/core/components")
const screenshotDir = path.join(rootDir, "/components/pictures");

(async () => {
    await foxr.launch({
        executablePath: 'C:/Program Files/Firefox Developer Edition/firefox.exe'
    })
    const defaultViewport = {
        width: 1000,
        height: 600
    }
    browser = await foxr.connect({
        defaultViewport: defaultViewport
    })
    pages = await browser.pages()
    page = pages[0]; // await browser.newPage() // << gives me an error

    const components = getDirectories(componentDir)// for testing use .slice(0, 5); or .filter(c => c == 'name') to limit number of components processed
    console.log("Components found", components.length)
    console.log("Ready to process 🚀:")
    console.log(components)
    for (const component of components) {
        console.log("*", component) // Log component name
        const variants = getDirectories(path.join(componentDir, component))
        const variantSnippets = []
        let componentPath;
        for (const variant of variants) {
            const pageData = parse(path.join(componentDir, component, variant, "page-data.json"));

            if (!componentPath) {
                componentPath = pageData.path.slice(0, -variant.length)
            }
            if (component.includes("modal") || component.includes("skiptocontent")) {
                isolatedComponents.push(component)
            }

            const screenshotUrl = getScreenshotUrl(component, componentPath, pageData.path);

            let screenshotFullPath;
            if (hasSubVariants(pageData)) {
                process.stdout.write("   - " + variant + "\n") // Log variant name
                let subVariants = pageData.result.pageContext.code.split("<br />")
                const subVariantsProcessed = []
                const duplicates = [];
                let isForm = false;
                if (subVariants.length == 1) {
                    const parsedHtml = parseHtml(subVariants)
                    isForm = isSingleForm(parsedHtml)
                    if (isForm) { // In case of single form, with variants
                        subVariants.pop(); // remove form element
                        for (const child of parsedHtml.firstChild.childNodes.filter(c => c.classNames && c.classNames.find(n => n === "pf-c-form__group"))) {
                            subVariants.push(child.toString())
                        }
                    } else if (parsedHtml.firstChild.tagName === "button") {
                        subVariants.pop(); // remove previous non-splited element
                        for (const child of parsedHtml.childNodes.filter(c => c.classNames && c.classNames.find(n => n === "pf-c-button"))) {
                            subVariants.push(child.toString())
                        }
                    } else {
                        // console.log("     ERROR: problem getting correct subvariants, please update the code to support this component.")
                        // console.log("     DEBUG: detected subvariants, but could not seperate them.")
                        // console.log(subVariants)
                        // process.exit()
                    }
                }

                for (const subVariant of subVariants) {
                    const htmlSnippet = parseHtml(subVariant.replace(/\r?\n|\r/g, ""))
                    if (htmlSnippet.firstChild) {
                        let subVariantTarget = "." + htmlSnippet.firstChild.classNames.join(".")
                        let subVariantTargetChildNumber = 0;
                        if (subVariantTarget == ".") {
                            if (htmlSnippet.firstChild.tagName == "h4") {
                                subVariantTarget = "." + htmlSnippet.childNodes[1].classNames.join(".")
                                subVariantTargetChildNumber = 1
                            } else {
                                console.log(htmlSnippet.firstChild.tagName)
                                console.log("     ERROR: problem generating correct target, please update the code to support this component. Stuck on tag:", htmlSnippet.firstChild.tagName)
                                process.exit()
                            }
                        }

                        let subVariantName = htmlSnippet.firstChild.getAttribute("aria-label");
                        let hasChildren = false;
                        if (!subVariantName || subVariantName === "Remove") { // In case the snippet does not contain a aria-label
                            if ((subVariantHasChildren(subVariant) || isLabel(htmlSnippet)) && // In case of seperate repeating html elements
                                (   // Whitelist, of full contant pages to ignore
                                    !htmlSnippet.firstChild.classNames.includes("pf-c-skip-to-content") // basic-skip-to-content-button-primary
                                )) {
                                const label = isLabel(htmlSnippet);
                                hasChildren = true;
                                const subChildVariantsProcessed = []
                                const duplicateChildren = []
                                for (const child of htmlSnippet.childNodes) {
                                    let subChildVariantTarget = "." + child.classNames.join(".")
                                    const niceTargetName = getTargetName(child.classNames);
                                    let subChildVariantName = getVariantName(variant) + (label ? retreiveLabel(child) : niceTargetName);
                                    const subChildVariantFileName = subChildVariantName.toLowerCase().split(" ").join("-")

                                    if (!subChildVariantsProcessed.includes(subChildVariantTarget)) {
                                        process.stdout.write("      - " + subChildVariantFileName) // Log subvariant name
                                        screenshotFullPath = await takeScreenshot(component, subChildVariantFileName, screenshotUrl, subChildVariantTarget, true, hasChildren)

                                        variantSnippets.push(getSnippet(screenshotFullPath, child.toString(), subChildVariantName))
                                        subChildVariantsProcessed.push(subChildVariantTarget)
                                    } else if (subChildVariantsProcessed.includes(subChildVariantTarget)) { // Duplicate but try to identify if there is a difference
                                        const nthNumber = subChildVariantsProcessed.filter(v => v.substring(0, subChildVariantTarget.length) == subChildVariantTarget).length // It is found as duplicate, so it is the first child + the number of other duplicates of this target
                                        let subChildVariantNthTarget = subChildVariantTarget;
                                        for (let index = 0; index < nthNumber; index++) {
                                            subChildVariantNthTarget += " ~ " + subChildVariantTarget // Using ~ selector to select child number by target classes
                                        }
                                        const subChildVariantFileName = subChildVariantName.toLowerCase().split(" ").join("-").replace(/--/g, "-")
                                        screenshotFullPath = await takeScreenshot(component, subChildVariantFileName, screenshotUrl, subChildVariantNthTarget, true, true)

                                        variantSnippets.push(getSnippet(screenshotFullPath, child.toString(), subChildVariantName))
                                        subChildVariantsProcessed.push(subChildVariantTarget)
                                    } else {
                                        duplicateChildren.push(subChildVariantTarget)
                                    }

                                }
                                if ((duplicateChildren.length + 1) == htmlSnippet.childNodes.length) {
                                    console.log(`      INFO: Only duplicate children found!`)
                                } else if (subVariantsProcessed.length > htmlSnippet.childNodes.length) {
                                    // Processed more than subVariants
                                } else if (duplicateChildren.length) {
                                    console.log("      INFO: duplicate child targets found", duplicateChildren.length)
                                }

                            } else { //if (htmlSnippet.firstChild.tagName === "div") {
                                const niceTargetName = getTargetName(htmlSnippet.childNodes[subVariantTargetChildNumber].classNames)
                                subVariantName = getVariantName(variant) + niceTargetName;
                            }
                            // } else { // In case the subvariant is not enclosed in a container div just use default name
                            //     console.log("subvariant unregocnised")
                            //     process.exit()
                            // }
                        }

                        if (!subVariantsProcessed.includes(subVariantTarget) && !hasChildren) { // If variant is not already processed
                            console.log("normal", subVariantTarget)
                            const subVariantFileName = subVariantName.toLowerCase().split(" ").join("-")
                            process.stdout.write("     - " + subVariantFileName) // Log subvariant name
                            if (isForm && subVariantTarget === ".pf-c-form__group") {
                                // Cheat the selector to target the third example group (TODO dynamic? variants.findIndex(v => v == variant))
                                screenshotFullPath = await takeScreenshot(component, subVariantFileName, screenshotUrl, `.ws-example:nth-of-type(3) ` + subVariantTarget, true)
                            } else if (subVariantTarget === ".pf-c-button.pf-m-plain") {
                                // Make sure to take elements from example container, not from the page itself
                                screenshotFullPath = await takeScreenshot(component, subVariantFileName, screenshotUrl, `.ws-example ` + subVariantTarget, true)
                            } else {
                                screenshotFullPath = await takeScreenshot(component, subVariantFileName, screenshotUrl, subVariantTarget, true)
                            }

                            variantSnippets.push(getSnippet(screenshotFullPath, subVariant, subVariantName))
                            subVariantsProcessed.push(subVariantTarget)
                        } else if ((subVariantsProcessed.includes(subVariantTarget) && !hasChildren)) { // Duplicate but try to identify if there is a difference
                            console.log("duplicate", subVariantTarget)
                            const nthNumber = subVariantsProcessed.filter(v => v.substring(0, subVariantTarget.length) == subVariantTarget).length // It is found as duplicate, so it is the first child + the number of other duplicates of this target
                            let subVariantNthTarget = subVariantTarget;
                            for (let index = 0; index < nthNumber; index++) {
                                subVariantNthTarget += " ~ " + subVariantTarget // Using ~ selector to select child number by target classes
                            }
                            const variantPrefix = variant.endsWith("s") ? variant.slice(0, variant.length - 1) : variant
                            subVariantName = `${subVariantName} ${subVariantName.includes(variantPrefix) ? "" : variantPrefix} ${nthNumber}`
                            const subVariantFileName = subVariantName.toLowerCase().split(" ").join("-").replace(/--/g, "-")
                            screenshotFullPath = await takeScreenshot(component, subVariantFileName, screenshotUrl, subVariantNthTarget, true)

                            variantSnippets.push(getSnippet(screenshotFullPath, subVariant, subVariantName))
                            subVariantsProcessed.push(subVariantTarget)
                        } else {
                            duplicates.push(subVariantTarget)
                        }
                    }
                }
                if (duplicates.length && (duplicates.length + 1) == subVariants.length) {
                    // if (subVariants.length > 1) {
                    //     const lastVariant = variantSnippets.pop() // Remove last added variant snippet to avoid duplicates
                    //     if (variantSnippets.filter(v => v.screenshot.url == lastVariant.screenshot.url).length == 0) {
                    //         fs.unlinkSync(path.join(rootDir, "components", lastVariant.screenshot.url)) // Remove last taken screenshot
                    //     }
                    //     process.stdout.cursorTo(0); // Replace previous line
                    //     process.stdout.write(`      INFO: Only duplicates found! Trying to split the variants` + "\n\033[0G")
                    //     isolatedComponents.push(component)
                    //     const screenshotUrl = getScreenshotUrl(component, componentPath, pageData.path);
                    //     for (let index = 0; index < subVariants.length; index++) {
                    //         const subVariant = subVariants[index];
                    //         const htmlSnippet = parseHtml(subVariant.replace(/\r?\n|\r/g, ""))
                    //         if (htmlSnippet.firstChild) {
                    //             const subVariantTargetName = "." + htmlSnippet.firstChild.classNames.join(".")
                    //             const subVariantName = `${component} ${variant.endsWith("s") ? variant.slice(0, variant.length - 1) : variant} ${index + 1}`
                    //             //  const subVariantName = htmlSnippet.firstChild.getAttribute("aria-label") + ` ${index + 1}` // Get nice name for variant
                    //             const subVariantTarget = subVariantTargetName + `:nth-of-type(${index + 1})`
                    //             const subVariantFileName = subVariantName.toLowerCase().split(" ").join("-")
                    //             process.stdout.write("     - " + subVariantFileName) // Log subvariant name

                    //             browser = await foxr.connect({
                    //                 defaultViewport: { width: 600, height: 600 } // Set smaller viewport
                    //             })
                    //             screenshotFullPath = await takeScreenshot(component, subVariantFileName, screenshotUrl, subVariantTarget, true)

                    //             variantSnippets.push(getSnippet(screenshotFullPath, subVariant, subVariantName))
                    //         }
                    //     }
                    //     browser = await foxr.connect({
                    //         defaultViewport: defaultViewport // Set viewport to default
                    //     })
                    // } else {
                    screenshotFullPath = await takeScreenshot(component, variant, screenshotUrl, `#ws-core-c-${component}-${variant}`)
                    console.log(`      INFO: Only duplicates found! Added '${component}-${variant}' as combined variant`)
                    variantSnippets.push(getSnippet(screenshotFullPath, pageData.result.pageContext.code, variant))
                    //}
                } else if (subVariantsProcessed.length > subVariants.length) {
                    // Processed more than subVariants
                } else if (duplicates.length && subVariantsProcessed.length) {
                    console.log("      INFO: duplicate targets found", duplicates.length)
                }
            } else {
                screenshotFullPath = await takeScreenshot(component, variant, screenshotUrl, `#ws-core-c-${component}-${variant}`)
                variantSnippets.push(getSnippet(screenshotFullPath, pageData.result.pageContext.code, variant))
            }
        }
        const outputComponent = buildComponentJson({
            name: component,
            path: componentPath,
            variants: variantSnippets
        })
        const outputComponentPath = path.join(rootDir, "components", component + ".ds.js");
        fs.writeFileSync(outputComponentPath, outputComponent);
        console.log("\n 🎉Succesfull output:", component, outputComponentPath, "\n");
    }
    console.log(" 🎉 The End 🥚 ")
    //await browser.close();
})()