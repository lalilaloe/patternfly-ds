export default {
  displayName: "divider",
  name: "divider",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/divider/",
};

export const variants = [
  {
    displayName: "div",
    picture: {
      src: "./pictures/divider/div.png",
      width: 293,
      height: 34,
    },
    snippet: {
      html: `<div class="pf-c-divider" role="separator"></div>`,
    },
  },
  {
    displayName: "hr",
    picture: {
      src: "./pictures/divider/hr.png",
      width: 293,
      height: 34,
    },
    snippet: {
      html: `<hr class="pf-c-divider" />`,
    },
  },
  {
    displayName: "inset-medium",
    picture: {
      src: "./pictures/divider/inset-medium.png",
      width: 293,
      height: 34,
    },
    snippet: {
      html: `<div class="pf-c-divider pf-m-inset-md" role="separator"></div>`,
    },
  },
  {
    displayName: "li",
    picture: {
      src: "./pictures/divider/li.png",
      width: 293,
      height: 82,
    },
    snippet: {
      html: `<ul>
  <li>List item one</li>
  <li class="pf-c-divider" role="separator"></li>
  <li>List item two</li>
</ul>`,
    },
  },
  {
    displayName: "md-inset-no-inset-on-md-3xl-inset-on-lg-lg-inset-on-xl",
    picture: {
      src:
        "./pictures/divider/md-inset-no-inset-on-md-3xl-inset-on-lg-lg-inset-on-xl.png",
      width: 293,
      height: 34,
    },
    snippet: {
      html: `<div class="pf-c-divider pf-m-inset-md pf-m-inset-none-on-md pf-m-inset-3xl-on-lg pf-m-inset-lg-on-xl" role="separator"></div>`,
    },
  },
  {
    displayName: "vertical",
    picture: {
      src: "./pictures/divider/vertical.png",
      width: 293,
      height: 81,
    },
    snippet: {
      html: `<div class="pf-c-divider pf-m-vertical pf-m-inset-md" role="separator"></div>`,
    },
  },
  {
    displayName: "vertical-inset-medium",
    picture: {
      src: "./pictures/divider/vertical-inset-medium.png",
      width: 293,
      height: 81,
    },
    snippet: {
      html: `<div class="pf-c-divider pf-m-vertical pf-m-inset-md" role="separator"></div>`,
    },
  },
  {
    displayName:
      "vertical-md-inset-no-inset-on-md-lg-inset-on-lg-sm-inset-on-xl",
    picture: {
      src:
        "./pictures/divider/vertical-md-inset-no-inset-on-md-lg-inset-on-lg-sm-inset-on-xl.png",
      width: 293,
      height: 81,
    },
    snippet: {
      html: `<div class="pf-c-divider pf-m-vertical pf-m-inset-md pf-m-inset-none-on-md pf-m-inset-lg-on-lg pf-m-inset-sm-on-xl" role="separator"></div>`,
    },
  },
];
