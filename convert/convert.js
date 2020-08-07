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
    if (component.includes("modal")) { // Check for direct component url ready
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
    return pageData.result.pageContext.code.includes("<br />");
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
    browser = await foxr.connect({
        defaultViewport: {
            width: 1000,
            height: 600
        }
    })
    pages = await browser.pages()
    page = pages[0]; // await browser.newPage() // << gives me an error

    const components = getDirectories(componentDir).filter(c => c == 'banner')// for testing use .slice(0, 5); or .filter(c => c == 'name') to limit number of components processed
    console.log("Components found", components.length)
    console.log("Ready to process 🚀:")
    console.log(components)
    for (const component of components) {
        console.log("*", component) // Log component name
        const variants = getDirectories(path.join(componentDir, component))
        const variantSnippets = []
        let componentpath;
        for (const variant of variants) {
            const pageData = parse(path.join(componentDir, component, variant, "page-data.json"));

            if (!componentpath) {
                componentpath = pageData.path.slice(0, -variant.length)
            }
            let screenshotUrl = "http://localhost:8000" + componentpath
            if (component.includes("modal")) { // In case of modal go to (isolated) component url
                screenshotUrl = "http://localhost:8000" + pageData.path;
            }

            let screenshotFullPath;
            if (hasSubVariants(pageData)) {
                process.stdout.write("   - " + variant + "\n") // Log variant name
                const subVariants = pageData.result.pageContext.code.split("<br />")
                const subVariantsProcessed = []
                const duplicates = []
                for (const subVariant of subVariants) {
                    const htmlSnippet = parseHtml(subVariant.replace(/\r?\n|\r/g, ""))
                    if (htmlSnippet.firstChild) {
                        const subVariantTarget = "." + htmlSnippet.firstChild.classNames.join(".")

                        let subVariantName = htmlSnippet.firstChild.getAttribute("aria-label");
                        let hasChildren = false;
                        if (!subVariantName || subVariantName === "Remove") { // In case the snippet does not contain a aria-label
                            if (htmlSnippet.firstChild.tagName === "div") {
                                const niceTargetName = htmlSnippet.firstChild.classNames.join(" ").replace(/pf-/g, '').replace(/c-/g, '').replace(/m-/g, '');
                                subVariantName = variant + " " + niceTargetName;
                            } if (htmlSnippet.firstChild.tagName === "button") { // In case of seperate html elements in this case buttons, 
                                hasChildren = true;
                                const subChildVariantsProcessed = []
                                const duplicateChildren = []
                                for (const child of htmlSnippet.childNodes) {
                                    const subChildVariantTarget = "." + child.classNames.join(".")
                                    const niceTargetName = child.classNames.join(" ").replace(/pf-/g, '').replace(/c-/g, '').replace(/m-/g, '');
                                    const subChildVariantName = variant + " " + niceTargetName;
                                    const subChildVariantFileName = subChildVariantName.toLowerCase().split(" ").join("-")

                                    if (!subChildVariantsProcessed.includes(subChildVariantTarget)) {
                                        process.stdout.write("      - " + subChildVariantFileName) // Log subvariant name
                                        screenshotFullPath = await takeScreenshot(component, subChildVariantFileName, screenshotUrl, subChildVariantTarget, true, true)

                                        variantSnippets.push(getSnippet(screenshotFullPath, child.toString(), subChildVariantName))
                                        subVariantsProcessed.push(subChildVariantTarget)
                                    } else {
                                        duplicateChildren.push(subChildVariantTarget)
                                    }
                                }
                            }
                            // } else { // In case the subvariant is not enclosed in a container div just use default name
                            //     console.log("subvariant unregocnised")
                            //     process.exit()
                            // }

                        }

                        if (!subVariantsProcessed.includes(subVariantTarget) && !hasChildren) {
                            const subVariantFileName = subVariantName.toLowerCase().split(" ").join("-")
                            process.stdout.write("     - " + subVariantFileName) // Log subvariant name
                            screenshotFullPath = await takeScreenshot(component, subVariantFileName, screenshotUrl, subVariantTarget, true)

                            variantSnippets.push(getSnippet(screenshotFullPath, subVariant, subVariantName))
                            subVariantsProcessed.push(subVariantTarget)
                        } else {
                            duplicates.push(subVariantTarget)
                        }
                    }
                }
                if ((duplicates.length + 1) == subVariants.length) {
                    screenshotFullPath = await takeScreenshot(component, variant, screenshotUrl, `#ws-core-c-${component}-${variant}`)
                    console.log(`      INFO: Only duplicates found! Added '${component}-${variant}' as combined variant`)
                    variantSnippets.push(getSnippet(screenshotFullPath, pageData.result.pageContext.code, variant))
                } else if (subVariantsProcessed.length > subVariants.length) {
                    console.log("      INFO: duplicate targets found", (subVariants.length - duplicates.length))
                }
            } else {
                screenshotFullPath = await takeScreenshot(component, variant, screenshotUrl, `#ws-core-c-${component}-${variant}`)
                variantSnippets.push(getSnippet(screenshotFullPath, pageData.result.pageContext.code, variant))
            }
        }
        const outputComponent = buildComponentJson({
            name: component,
            path: componentpath,
            variants: variantSnippets
        })
        const outputComponentPath = path.join(rootDir, "components", component + ".ds.js");
        fs.writeFileSync(outputComponentPath, outputComponent);
        console.log("\n 🎉Succesfull output:", component, outputComponentPath, "\n");
    }
    console.log(" 🎉 The End 🥚 ")
    //await browser.close();
})()