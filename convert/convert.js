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
    return pageData.result.pageContext.code.includes("<br />") || pageData.result.pageContext.code.split("button").length - 1 || pageData.result.pageContext.code.split("a").length - 1;
}

function subVariantHasChildren(html) {
    return html.split("button").length - 1 || html.split("a").length - 1;
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
        if (component.includes("modal")) { // If modal go to (isolated) component page
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
        case "variations" || "variant":
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

    const components = getDirectories(componentDir).filter(c => c == 'button')// for testing use .slice(0, 5); or .filter(c => c == 'name') to limit number of components processed
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
            if (component.includes("modal")) {
                isolatedComponents.push(component)
            }

            const screenshotUrl = getScreenshotUrl(component, componentPath, pageData.path);

            let screenshotFullPath;
            if (hasSubVariants(pageData)) {
                process.stdout.write("   - " + variant + "\n") // Log variant name
                const subVariants = pageData.result.pageContext.code.split("<br />")
                const subVariantsProcessed = []
                let duplicates = 0;
                for (const subVariant of subVariants) {
                    const htmlSnippet = parseHtml(subVariant.replace(/\r?\n|\r/g, ""))
                    if (htmlSnippet.firstChild) {
                        const subVariantTarget = "." + htmlSnippet.firstChild.classNames.join(".")

                        let subVariantName = htmlSnippet.firstChild.getAttribute("aria-label");
                        let hasChildren = false;
                        if (!subVariantName || subVariantName === "Remove") { // In case the snippet does not contain a aria-label
                            if (htmlSnippet.firstChild.tagName === "div") {
                                const niceTargetName = getTargetName(htmlSnippet.firstChild.classNames)
                                subVariantName = getVariantName(variant) + niceTargetName;
                            }
                            // } else { // In case the subvariant is not enclosed in a container div just use default name
                            //     console.log("subvariant unregocnised")
                            //     process.exit()
                            // }

                        }
                        if (subVariantHasChildren(subVariant)) { // In case of seperate html elements in this case buttons, 
                            hasChildren = true;
                            const subChildVariantsProcessed = []
                            const duplicateChildren = []
                            for (const child of htmlSnippet.childNodes) {
                                const subChildVariantTarget = "." + child.classNames.join(".")
                                const niceTargetName = getTargetName(child.classNames);
                                const subChildVariantName = getVariantName(variant) + niceTargetName;
                                const subChildVariantFileName = subChildVariantName.toLowerCase().split(" ").join("-")

                                if (!subChildVariantsProcessed.includes(subChildVariantTarget)) {
                                    process.stdout.write("      - " + subChildVariantFileName) // Log subvariant name
                                    screenshotFullPath = await takeScreenshot(component, subChildVariantFileName, screenshotUrl, subChildVariantTarget, true, hasChildren)

                                    variantSnippets.push(getSnippet(screenshotFullPath, child.toString(), subChildVariantName))
                                    subVariantsProcessed.push(subChildVariantTarget)
                                } else {
                                    duplicateChildren.push(subChildVariantTarget)
                                }
                            }
                        }
                        if (!subVariantsProcessed.includes(subVariantTarget) && !hasChildren) {
                            const subVariantFileName = subVariantName.toLowerCase().split(" ").join("-")
                            process.stdout.write("     - " + subVariantFileName) // Log subvariant name
                            screenshotFullPath = await takeScreenshot(component, subVariantFileName, screenshotUrl, subVariantTarget, true)

                            variantSnippets.push(getSnippet(screenshotFullPath, subVariant, subVariantName))
                            subVariantsProcessed.push(subVariantTarget)
                        } else {
                            duplicates++
                        }
                    }
                }
                if ((duplicates + 1) == subVariants.length) {
                    if (subVariants.length > 1) {
                        const lastVariant = variantSnippets.pop() // Remove last added variant snippet to avoid duplicates
                        fs.unlinkSync(path.join(rootDir, "components", lastVariant.screenshot.url)) // Remove last taken screenshot
                        process.stdout.cursorTo(0); // Replace previous line
                        process.stdout.write(`      INFO: Only duplicates found! Trying to split the variants` + "\n\033[0G")
                        isolatedComponents.push(component)
                        const screenshotUrl = getScreenshotUrl(component, componentPath, pageData.path);
                        for (let index = 0; index < subVariants.length; index++) {
                            const subVariant = subVariants[index];
                            const htmlSnippet = parseHtml(subVariant.replace(/\r?\n|\r/g, ""))
                            if (htmlSnippet.firstChild) {
                                const subVariantTargetName = "." + htmlSnippet.firstChild.classNames.join(".")
                                const subVariantName = `${component} ${variant.endsWith("s") ? variant.slice(0, variant.length - 1) : variant} ${index + 1}`
                                //  const subVariantName = htmlSnippet.firstChild.getAttribute("aria-label") + ` ${index + 1}` // Get nice name for variant
                                const subVariantTarget = subVariantTargetName + `:nth-of-type(${index + 1})`
                                const subVariantFileName = subVariantName.toLowerCase().split(" ").join("-")
                                process.stdout.write("     - " + subVariantFileName) // Log subvariant name

                                browser = await foxr.connect({
                                    defaultViewport: { width: 600, height: 600 } // Set smaller viewport
                                })
                                screenshotFullPath = await takeScreenshot(component, subVariantFileName, screenshotUrl, subVariantTarget, true)

                                variantSnippets.push(getSnippet(screenshotFullPath, subVariant, subVariantName))
                            }
                        }
                        browser = await foxr.connect({
                            defaultViewport: defaultViewport // Set viewport to default
                        })
                    } else {
                        screenshotFullPath = await takeScreenshot(component, variant, screenshotUrl, `#ws-core-c-${component}-${variant}`)
                        console.log(`      INFO: Only duplicates found! Added '${component}-${variant}' as combined variant`)
                        variantSnippets.push(getSnippet(screenshotFullPath, pageData.result.pageContext.code, variant))
                    }
                } else if (subVariantsProcessed.length > subVariants.length) {
                    // Processed more than subVariants
                } else if (subVariants.length - duplicates) {
                    console.log("      INFO: duplicate targets found", (subVariants.length - duplicates))
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