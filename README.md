# Patternfly design system

Patternfly-ds is a package that describes components from Patternfly, so that a design tool like Hadron can use it to provide a design experience with its components.

All credits go to [Patternfly](https://www.patternfly.org), i just made it usable as design system in Hadron.

## Installation

Add patternfly-ds as a dependency to your project

```bash
npm install patternfly-ds
```

## Converting components with variants from Patternfly docs

Of course not everything was done by hand, i created a small script to automatically generate the design systems json files and take screenshots of the example elements. The way Patternfly is documented is wonderful by itself but also extremely convenient for extracting component variants

To run the script yourself execute the following commands.

*Requirements*
- run ```firefox.exe -headless -marionette -safe-mode```
- you can use chrome by changing the import to ```const foxr = require('puppeteer'); ``` See
[https://github.com/puppeteer/puppeteer](https://github.com/puppeteer/puppeteer)

```bash
# Clone patternfly repo inside project (so "./patternfly" is created)
git clone https://github.com/patternfly/patternfly.git

# install dependencies (seperate npm project, might be transfered to own repo in the future)
cd convert
npm install

# build and startup patternfly docs locally
npm run build
npm start:patternfly

# start converting
npm start

# to clean up the files after conversion
npm run prettier

# if you want to check if the files are exported correctly
npm run lint
```

## Contributing
Requests are welcome. Especially when using the convert script for another project, we might be able to make it universal and move it to a repo of it's own. Please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)