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
    displayName: "basic info",
    picture: {
      src: "./pictures/banner/basic-info.png",
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
    displayName: "basic danger",
    picture: {
      src: "./pictures/banner/basic-danger.png",
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
    displayName: "basic success",
    picture: {
      src: "./pictures/banner/basic-success.png",
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
    displayName: "basic warning",
    picture: {
      src: "./pictures/banner/basic-warning.png",
      width: 261,
      height: 29,
    },
    snippet: {
      html: `
<div class="pf-c-banner pf-m-warning">Warning banner</div>`,
    },
  },
];
