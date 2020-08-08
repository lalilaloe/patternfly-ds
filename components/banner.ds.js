export default {
  displayName: "banner",
  name: "banner",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/banner/",
};

export const variants = [
  {
    displayName: "basic banner",
    picture: {
      src: "./pictures/banner/basic-banner.png",
      width: 261,
      height: 29,
    },
    snippet: {
      html: `<div class="pf-c-banner">Default banner</div>
`,
    },
  },
  {
    displayName: "basic banner info",
    picture: {
      src: "./pictures/banner/basic-banner-info.png",
      width: 261,
      height: 29,
    },
    snippet: {
      html: `
<div class="pf-c-banner pf-m-info">Info banner</div>
`,
    },
  },
  {
    displayName: "basic banner danger",
    picture: {
      src: "./pictures/banner/basic-banner-danger.png",
      width: 261,
      height: 29,
    },
    snippet: {
      html: `
<div class="pf-c-banner pf-m-danger">Danger banner</div>
`,
    },
  },
  {
    displayName: "basic banner success",
    picture: {
      src: "./pictures/banner/basic-banner-success.png",
      width: 261,
      height: 29,
    },
    snippet: {
      html: `
<div class="pf-c-banner pf-m-success">Success banner</div>
`,
    },
  },
  {
    displayName: "basic banner warning",
    picture: {
      src: "./pictures/banner/basic-banner-warning.png",
      width: 261,
      height: 29,
    },
    snippet: {
      html: `
<div class="pf-c-banner pf-m-warning">Warning banner</div>`,
    },
  },
];
