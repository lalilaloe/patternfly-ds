export default {
  displayName: "badge",
  name: "badge",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/badge/",
};

export const variants = [
  {
    displayName: "read",
    picture: {
      src: "./components/pictures/badge/read.png",
      width: 293,
      height: 57,
    },
    snippet: {
      html: `<span class="pf-c-badge pf-m-read">7</span>
<span class="pf-c-badge pf-m-read">24</span>
<span class="pf-c-badge pf-m-read">240</span>
<span class="pf-c-badge pf-m-read">999+</span>`,
    },
  },
  {
    displayName: "unread",
    picture: {
      src: "./components/pictures/badge/unread.png",
      width: 293,
      height: 57,
    },
    snippet: {
      html: `<span class="pf-c-badge pf-m-unread">7</span>
<span class="pf-c-badge pf-m-unread">24</span>
<span class="pf-c-badge pf-m-unread">240</span>
<span class="pf-c-badge pf-m-unread">999+</span>`,
    },
  },
];
