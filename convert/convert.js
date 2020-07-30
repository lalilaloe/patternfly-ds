const fs = require('fs');
const jsonfile = require('jsonfile');
const foxr = require('foxr').default
const path = require('path');
const he = require('he');


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
                displayName: 'Basic',
                picture: {
                    src: `./${variant.screenshot}`,
                    width: 800,
                    height: 600
                },
                snippet: {
                    html: "html",
                }
            }).replace("\"html\"", variant.html)) // The replace is done 
    });
    return `export const variants = [
${variants.join(',\n')}
]`;
}

async function notReady(component) {
    if (component.includes("modal")) {
        if (!await page.$(".ws-fullscreen-example div")) {
            return true
        }
    } else {
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

    const components = getDirectories(componentDir) // for testing use .slice(0, 5); to limit number of components processed
    console.log(components)
    for (const component of components) {
        console.log("*", component)
        const variants = getDirectories(path.join(componentDir, component))
        const variantSnippets = []
        let componentpath;
        for (const variant of variants) {
            const pageData = parse(path.join(componentDir, component, variant, "page-data.json"));

            if (!componentpath) {
                componentpath = pageData.path.slice(0, -variant.length)
            }
            let screenshotUrl = "http://localhost:8000" + componentpath
            if (component.includes("modal")) {
                screenshotUrl = "http://localhost:8000" + pageData.path;
            }


            const screenshotPath = path.join(screenshotDir, component)
            const screenshotFileName = variant + ".png"
            const screenshotFullPath = path.join(screenshotPath, screenshotFileName)

            if (!fs.existsSync(screenshotFullPath)) {
                if (await page.url() != screenshotUrl) { // If not already on page
                    console.log("     Browsing to:", screenshotUrl);
                    page.removeAllListeners(); // Avoid MaxListenersExceededWarning that crashes the script when used in large badges
                    await page.goto(screenshotUrl, { waitUntil: 'load', timeout: 0 })
                }
                console.log("   -", variant)
                await ready(component)
                let element;
                if (component.includes("modal")) { // If modal go to component page
                    console.log("modal")
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

                    element = await page.$(`#ws-core-c-${component}-${variant}`)
                }
                if (!fs.existsSync(screenshotPath)) {
                    fs.mkdirSync(screenshotPath, { recursive: true });
                }

                //await page.screenshot({ path: screenshotFullPath })
                if (element) {
                    await element.screenshot({ path: screenshotFullPath })
                    //console.log("     Screenshot:", screenshotFullPath)
                    process.stdout.write("  ✅-" + variant + "\n\033[0G");
                } else {
                    process.stdout.write("  ❌-" + variant + "\n\033[0G")
                }

            } else {
                //console.log("     Screenshot exist:", screenshotFullPath)
                process.stdout.write("  📃-" + variant + "\n\033[0G");
            }
            variantSnippets.push({
                name: variant,
                screenshot: screenshotFullPath.replace(rootDir, '').replace('/components/', ''),
                html: `\`${he.decode(pageData.result.pageContext.code)}\``
            })

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