export default {
  displayName: "title",
  name: "title",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/title/",
};

export const variants = [
  {
    displayName: "size-modifiers",
    picture: {
      src: "./pictures/title/size-modifiers.png",
      width: 293,
      height: 33,
    },
    snippet: {
      html: `<h1 class="pf-c-title pf-m-4xl">4xl title</h1>
<h1 class="pf-c-title pf-m-3xl">3xl title</h1>
<h1 class="pf-c-title pf-m-2xl">2xl title</h1>
<h1 class="pf-c-title pf-m-xl">xl title</h1>
<h1 class="pf-c-title pf-m-lg">lg title</h1>
<h1 class="pf-c-title pf-m-md">md title</h1>`,
    },
  },
];
