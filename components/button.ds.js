export default {
  displayName: "button",
  name: "button",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/button/",
};

export const variants = [
  {
    displayName: "aria-disabled",
    picture: {
      src: "./pictures/button/aria-disabled.png",
      width: 855,
      height: 117,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-primary pf-m-aria-disabled" type="button" aria-disabled="true">Primary disabled</button>
<button class="pf-c-button pf-m-secondary pf-m-aria-disabled" type="button" aria-disabled="true">Secondary disabled</button>
<button class="pf-c-button pf-m-tertiary pf-m-aria-disabled" type="button" aria-disabled="true">Tertiary disabled</button>
<button class="pf-c-button pf-m-danger pf-m-aria-disabled" type="button" aria-disabled="true">Danger disabled</button>
<button class="pf-c-button pf-m-link pf-m-aria-disabled" type="button" aria-disabled="true">
  <span class="pf-c-button__icon pf-m-start">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>Link disabled</button>
<button class="pf-c-button pf-m-link pf-m-inline pf-m-aria-disabled" type="button" aria-disabled="true">Inline link disabled</button>
<button class="pf-c-button pf-m-plain pf-m-aria-disabled" type="button" aria-label="Remove" aria-disabled="true">
  <i class="fas fa-times" aria-hidden="true"></i>
</button>
<button class="pf-c-button pf-m-control pf-m-aria-disabled" type="button" aria-disabled="true">Control disabled</button>`,
    },
  },
  {
    displayName: "block-level",
    picture: {
      src: "./pictures/button/block-level.png",
      width: 293,
      height: 75,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-primary pf-m-block" type="button">Block level button</button>`,
    },
  },
  {
    displayName: "call-to-action",
    picture: {
      src: "./pictures/button/call-to-action.png",
      width: 855,
      height: 131,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-primary pf-m-display-lg" type="button">Call to action</button>
<button class="pf-c-button pf-m-secondary pf-m-display-lg" type="button">Call to action</button>
<button class="pf-c-button pf-m-tertiary pf-m-display-lg" type="button">Call to action</button>
<button class="pf-c-button pf-m-link pf-m-display-lg" type="button">Call to action
  <span class="pf-c-button__icon pf-m-end">
    <i class="fas fa-arrow-right" aria-hidden="true"></i>
  </span>
</button>
<button class="pf-c-button pf-m-link pf-m-inline pf-m-display-lg" type="button">Call to action
  <span class="pf-c-button__icon pf-m-end">
    <i class="fas fa-arrow-right" aria-hidden="true"></i>
  </span>
</button>`,
    },
  },
  {
    displayName: "disabled",
    picture: {
      src: "./pictures/button/disabled.png",
      width: 855,
      height: 117,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-primary" type="button" disabled>Primary disabled</button>
<button class="pf-c-button pf-m-secondary" type="button" disabled>Secondary disabled</button>
<button class="pf-c-button pf-m-tertiary" type="button" disabled>Tertiary disabled</button>
<button class="pf-c-button pf-m-danger" type="button" disabled>Danger disabled</button>
<button class="pf-c-button pf-m-link" type="button" disabled>
  <span class="pf-c-button__icon pf-m-start">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>Link disabled</button>
<button class="pf-c-button pf-m-link pf-m-inline" type="button" disabled>Inline link disabled</button>
<button class="pf-c-button pf-m-plain" type="button" aria-label="Remove" disabled>
  <i class="fas fa-times" aria-hidden="true"></i>
</button>
<button class="pf-c-button pf-m-control" type="button" disabled>Control disabled</button>`,
    },
  },
  {
    displayName: "links-as-buttons",
    picture: {
      src: "./pictures/button/links-as-buttons.png",
      width: 632,
      height: 75,
    },
    snippet: {
      html: `<a class="pf-c-button pf-m-primary" href="https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples">Primary link to W3.org</a>
<a class="pf-c-button pf-m-secondary" href="#overview" aria-label="Read more about button documentation">Secondary link to anchor</a>
<a class="pf-c-button pf-m-tertiary pf-m-disabled" href="https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples" aria-disabled="true" tabindex="-1">Tertiary link to W3.org</a>`,
    },
  },
  {
    displayName: "types",
    picture: {
      src: "./pictures/button/types.png",
      width: 293,
      height: 75,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-primary" type="submit">Submit</button>
<button class="pf-c-button pf-m-primary" type="reset">Reset</button>
<button class="pf-c-button pf-m-primary" type="button">Default</button>`,
    },
  },
  {
    displayName: "variations button primary",
    picture: {
      src: "./pictures/button/variations-button-primary.png",
      width: 144,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-primary" type="button">Primary</button>`,
    },
  },
  {
    displayName: "variations button secondary",
    picture: {
      src: "./pictures/button/variations-button-secondary.png",
      width: 108,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-secondary" type="button">Secondary</button>`,
    },
  },
  {
    displayName: "variations button tertiary",
    picture: {
      src: "./pictures/button/variations-button-tertiary.png",
      width: 86,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-tertiary" type="button">Tertiary</button>`,
    },
  },
  {
    displayName: "variations button danger",
    picture: {
      src: "./pictures/button/variations-button-danger.png",
      width: 84,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-danger" type="button">Danger</button>`,
    },
  },
  {
    displayName: "variations button link",
    picture: {
      src: "./pictures/button/variations-button-link.png",
      width: 85,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-link" type="button">  <span class="pf-c-button__icon pf-m-start">    <i class="fas fa-plus-circle" aria-hidden="true"></i>  </span>Link</button>`,
    },
  },
  {
    displayName: "variations button link",
    picture: {
      src: "./pictures/button/variations-button-link.png",
      width: 85,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-link" type="button">Link  <span class="pf-c-button__icon pf-m-end">    <i class="fas fa-plus-circle" aria-hidden="true"></i>  </span></button>`,
    },
  },
  {
    displayName: "variations button inline link",
    picture: {
      src: "./pictures/button/variations-button-inline-link.png",
      width: 65,
      height: 24,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-inline pf-m-link" type="button">Inline link</button>`,
    },
  },
  {
    displayName: "variations button plain",
    picture: {
      src: "./pictures/button/variations-button-plain.png",
      width: 40,
      height: 40,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-plain" type="button" aria-label="Remove">  <i class="fas fa-times" aria-hidden="true"></i></button>`,
    },
  },
  {
    displayName: "variations button control",
    picture: {
      src: "./pictures/button/variations-button-control.png",
      width: 85,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-control" type="button">Control</button>`,
    },
  },
  {
    displayName: "variations button control",
    picture: {
      src: "./pictures/button/variations-button-control.png",
      width: 85,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-control" type="button" aria-label="Copy input">  <i class="fas fa-copy" aria-hidden="true"></i></button>`,
    },
  },
  {
    displayName: "variations button primary small",
    picture: {
      src: "./pictures/button/variations-button-primary-small.png",
      width: 80,
      height: 33,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-primary pf-m-small" type="button">Primary</button>`,
    },
  },
  {
    displayName: "variations button secondary small",
    picture: {
      src: "./pictures/button/variations-button-secondary-small.png",
      width: 99,
      height: 33,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-secondary pf-m-small" type="button">Secondary</button>`,
    },
  },
  {
    displayName: "variations button tertiary small",
    picture: {
      src: "./pictures/button/variations-button-tertiary-small.png",
      width: 79,
      height: 33,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-tertiary pf-m-small" type="button">Tertiary</button>`,
    },
  },
  {
    displayName: "variations button danger small",
    picture: {
      src: "./pictures/button/variations-button-danger-small.png",
      width: 78,
      height: 33,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-danger pf-m-small" type="button">Danger</button>`,
    },
  },
  {
    displayName: "variations button link small",
    picture: {
      src: "./pictures/button/variations-button-link-small.png",
      width: 79,
      height: 33,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-link pf-m-small" type="button">Link  <span class="pf-c-button__icon pf-m-end">    <i class="fas fa-plus-circle" aria-hidden="true"></i>  </span></button>`,
    },
  },
  {
    displayName: "variations button inline link small",
    picture: {
      src: "./pictures/button/variations-button-inline-link-small.png",
      width: 65,
      height: 24,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-inline pf-m-link pf-m-small" type="button">Inline link</button>`,
    },
  },
  {
    displayName: "variations button control small",
    picture: {
      src: "./pictures/button/variations-button-control-small.png",
      width: 78,
      height: 33,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-control pf-m-small" type="button">Control</button>`,
    },
  },
];
