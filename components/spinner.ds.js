export default {
  displayName: "spinner",
  name: "spinner",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/spinner/",
};

export const variants = [
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/spinner/basic.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<span class="pf-c-spinner" role="progressbar" aria-valuetext="Loading...">
  <span class="pf-c-spinner__clipper"></span>
  <span class="pf-c-spinner__lead-ball"></span>
  <span class="pf-c-spinner__tail-ball"></span>
</span>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/spinner/multiple-sizes.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<span class="pf-c-spinner pf-m-sm" role="progressbar" aria-valuetext="Loading...">
  <span class="pf-c-spinner__clipper"></span>
  <span class="pf-c-spinner__lead-ball"></span>
  <span class="pf-c-spinner__tail-ball"></span>
</span>
<span class="pf-c-spinner pf-m-md" role="progressbar" aria-valuetext="Loading...">
  <span class="pf-c-spinner__clipper"></span>
  <span class="pf-c-spinner__lead-ball"></span>
  <span class="pf-c-spinner__tail-ball"></span>
</span>
<span class="pf-c-spinner pf-m-lg" role="progressbar" aria-valuetext="Loading...">
  <span class="pf-c-spinner__clipper"></span>
  <span class="pf-c-spinner__lead-ball"></span>
  <span class="pf-c-spinner__tail-ball"></span>
</span>
<span class="pf-c-spinner pf-m-xl" role="progressbar" aria-valuetext="Loading...">
  <span class="pf-c-spinner__clipper"></span>
  <span class="pf-c-spinner__lead-ball"></span>
  <span class="pf-c-spinner__tail-ball"></span>
</span>`,
    },
  },
];
