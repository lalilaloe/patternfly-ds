export default {
  displayName: "button",
  name: "button",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/button/",
};

export const variants = [
  {
    displayName: "aria-disabled button primary aria-disabled",
    picture: {
      src: "./pictures/button/aria-disabled-button-primary-aria-disabled.png",
      width: 150,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-primary pf-m-aria-disabled" type="button" aria-disabled="true">Primary disabled</button>`,
    },
  },
  {
    displayName: "aria-disabled button secondary aria-disabled",
    picture: {
      src: "./pictures/button/aria-disabled-button-secondary-aria-disabled.png",
      width: 172,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-secondary pf-m-aria-disabled" type="button" aria-disabled="true">Secondary disabled</button>`,
    },
  },
  {
    displayName: "aria-disabled button tertiary aria-disabled",
    picture: {
      src: "./pictures/button/aria-disabled-button-tertiary-aria-disabled.png",
      width: 150,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-tertiary pf-m-aria-disabled" type="button" aria-disabled="true">Tertiary disabled</button>`,
    },
  },
  {
    displayName: "aria-disabled button danger aria-disabled",
    picture: {
      src: "./pictures/button/aria-disabled-button-danger-aria-disabled.png",
      width: 148,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-danger pf-m-aria-disabled" type="button" aria-disabled="true">Danger disabled</button>`,
    },
  },
  {
    displayName: "aria-disabled button link aria-disabled",
    picture: {
      src: "./pictures/button/aria-disabled-button-link-aria-disabled.png",
      width: 149,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-link pf-m-aria-disabled" type="button" aria-disabled="true">  <span class="pf-c-button__icon pf-m-start">    <i class="fas fa-plus-circle" aria-hidden="true"></i>  </span>Link disabled</button>`,
    },
  },
  {
    displayName: "aria-disabled button link inline aria-disabled",
    picture: {
      src:
        "./pictures/button/aria-disabled-button-link-inline-aria-disabled.png",
      width: 128,
      height: 24,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-link pf-m-inline pf-m-aria-disabled" type="button" aria-disabled="true">Inline link disabled</button>`,
    },
  },
  {
    displayName: "aria-disabled button plain aria-disabled",
    picture: {
      src: "./pictures/button/aria-disabled-button-plain-aria-disabled.png",
      width: 43,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-plain pf-m-aria-disabled" type="button" aria-label="Remove" aria-disabled="true">  <i class="fas fa-times" aria-hidden="true"></i></button>`,
    },
  },
  {
    displayName: "aria-disabled button control aria-disabled",
    picture: {
      src: "./pictures/button/aria-disabled-button-control-aria-disabled.png",
      width: 148,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-control pf-m-aria-disabled" type="button" aria-disabled="true">Control disabled</button>`,
    },
  },
  {
    displayName: "block-level button primary block",
    picture: {
      src: "./pictures/button/block-level-button-primary-block.png",
      width: 261,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-primary pf-m-block" type="button">Block level button</button>`,
    },
  },
  {
    displayName: "cta button primary display-lg",
    picture: {
      src: "./pictures/button/cta-button-primary-display-lg.png",
      width: 162,
      height: 56,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-primary pf-m-display-lg" type="button">Call to action</button>`,
    },
  },
  {
    displayName: "cta button secondary display-lg",
    picture: {
      src: "./pictures/button/cta-button-secondary-display-lg.png",
      width: 162,
      height: 56,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-secondary pf-m-display-lg" type="button">Call to action</button>`,
    },
  },
  {
    displayName: "cta button tertiary display-lg",
    picture: {
      src: "./pictures/button/cta-button-tertiary-display-lg.png",
      width: 162,
      height: 56,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-tertiary pf-m-display-lg" type="button">Call to action</button>`,
    },
  },
  {
    displayName: "cta button link display-lg",
    picture: {
      src: "./pictures/button/cta-button-link-display-lg.png",
      width: 198,
      height: 59,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-link pf-m-display-lg" type="button">Call to action  <span class="pf-c-button__icon pf-m-end">    <i class="fas fa-arrow-right" aria-hidden="true"></i>  </span></button>`,
    },
  },
  {
    displayName: "cta button link inline display-lg",
    picture: {
      src: "./pictures/button/cta-button-link-inline-display-lg.png",
      width: 134,
      height: 27,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-link pf-m-inline pf-m-display-lg" type="button">Call to action  <span class="pf-c-button__icon pf-m-end">    <i class="fas fa-arrow-right" aria-hidden="true"></i>  </span></button>`,
    },
  },
  {
    displayName: "disabled button primary",
    picture: {
      src: "./pictures/button/disabled-button-primary.png",
      width: 144,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-primary" type="button" disabled>Primary disabled</button>`,
    },
  },
  {
    displayName: "disabled button secondary",
    picture: {
      src: "./pictures/button/disabled-button-secondary.png",
      width: 108,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-secondary" type="button" disabled>Secondary disabled</button>`,
    },
  },
  {
    displayName: "disabled button tertiary",
    picture: {
      src: "./pictures/button/disabled-button-tertiary.png",
      width: 86,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-tertiary" type="button" disabled>Tertiary disabled</button>`,
    },
  },
  {
    displayName: "disabled button danger",
    picture: {
      src: "./pictures/button/disabled-button-danger.png",
      width: 84,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-danger" type="button" disabled>Danger disabled</button>`,
    },
  },
  {
    displayName: "disabled button link",
    picture: {
      src: "./pictures/button/disabled-button-link.png",
      width: 85,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-link" type="button" disabled>  <span class="pf-c-button__icon pf-m-start">    <i class="fas fa-plus-circle" aria-hidden="true"></i>  </span>Link disabled</button>`,
    },
  },
  {
    displayName: "disabled button link inline",
    picture: {
      src: "./pictures/button/disabled-button-link-inline.png",
      width: 65,
      height: 24,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-link pf-m-inline" type="button" disabled>Inline link disabled</button>`,
    },
  },
  {
    displayName: "disabled button plain",
    picture: {
      src: "./pictures/button/disabled-button-plain.png",
      width: 40,
      height: 40,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-plain" type="button" aria-label="Remove" disabled>  <i class="fas fa-times" aria-hidden="true"></i></button>`,
    },
  },
  {
    displayName: "disabled button control",
    picture: {
      src: "./pictures/button/disabled-button-control.png",
      width: 85,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-control" type="button" disabled>Control disabled</button>`,
    },
  },
  {
    displayName: "links-as-buttons button primary",
    picture: {
      src: "./pictures/button/links-as-buttons-button-primary.png",
      width: 144,
      height: 36,
    },
    snippet: {
      html: `<a class="pf-c-button pf-m-primary" href="https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples">Primary link to W3.org</a>`,
    },
  },
  {
    displayName: "links-as-buttons button secondary",
    picture: {
      src: "./pictures/button/links-as-buttons-button-secondary.png",
      width: 108,
      height: 36,
    },
    snippet: {
      html: `<a class="pf-c-button pf-m-secondary" href="#overview" aria-label="Read more about button documentation">Secondary link to anchor</a>`,
    },
  },
  {
    displayName: "links-as-buttons button tertiary disabled",
    picture: {
      src: "./pictures/button/links-as-buttons-button-tertiary-disabled.png",
      width: 187,
      height: 36,
    },
    snippet: {
      html: `<a class="pf-c-button pf-m-tertiary pf-m-disabled" href="https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples" aria-disabled="true" tabindex="-1">Tertiary link to W3.org</a>`,
    },
  },
  {
    displayName: "types button primary",
    picture: {
      src: "./pictures/button/types-button-primary.png",
      width: 144,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-primary" type="submit">Submit</button>`,
    },
  },
  {
    displayName: "types button primary",
    picture: {
      src: "./pictures/button/types-button-primary.png",
      width: 144,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-primary" type="reset">Reset</button>`,
    },
  },
  {
    displayName: "types button primary",
    picture: {
      src: "./pictures/button/types-button-primary.png",
      width: 144,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-primary" type="button">Default</button>`,
    },
  },
  {
    displayName: "button primary",
    picture: {
      src: "./pictures/button/button-primary.png",
      width: 144,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-primary" type="button">Primary</button>`,
    },
  },
  {
    displayName: "button secondary",
    picture: {
      src: "./pictures/button/button-secondary.png",
      width: 108,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-secondary" type="button">Secondary</button>`,
    },
  },
  {
    displayName: "button tertiary",
    picture: {
      src: "./pictures/button/button-tertiary.png",
      width: 86,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-tertiary" type="button">Tertiary</button>`,
    },
  },
  {
    displayName: "button danger",
    picture: {
      src: "./pictures/button/button-danger.png",
      width: 84,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-danger" type="button">Danger</button>`,
    },
  },
  {
    displayName: "button link",
    picture: {
      src: "./pictures/button/button-link.png",
      width: 85,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-link" type="button">  <span class="pf-c-button__icon pf-m-start">    <i class="fas fa-plus-circle" aria-hidden="true"></i>  </span>Link</button>`,
    },
  },
  {
    displayName: "button link",
    picture: {
      src: "./pictures/button/button-link.png",
      width: 85,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-link" type="button">Link  <span class="pf-c-button__icon pf-m-end">    <i class="fas fa-plus-circle" aria-hidden="true"></i>  </span></button>`,
    },
  },
  {
    displayName: "button inline link",
    picture: {
      src: "./pictures/button/button-inline-link.png",
      width: 65,
      height: 24,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-inline pf-m-link" type="button">Inline link</button>`,
    },
  },
  {
    displayName: "button plain",
    picture: {
      src: "./pictures/button/button-plain.png",
      width: 40,
      height: 40,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-plain" type="button" aria-label="Remove">  <i class="fas fa-times" aria-hidden="true"></i></button>`,
    },
  },
  {
    displayName: "button control",
    picture: {
      src: "./pictures/button/button-control.png",
      width: 85,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-control" type="button">Control</button>`,
    },
  },
  {
    displayName: "button control",
    picture: {
      src: "./pictures/button/button-control.png",
      width: 85,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-control" type="button" aria-label="Copy input">  <i class="fas fa-copy" aria-hidden="true"></i></button>`,
    },
  },
  {
    displayName: "button primary small",
    picture: {
      src: "./pictures/button/button-primary-small.png",
      width: 80,
      height: 33,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-primary pf-m-small" type="button">Primary</button>`,
    },
  },
  {
    displayName: "button secondary small",
    picture: {
      src: "./pictures/button/button-secondary-small.png",
      width: 99,
      height: 33,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-secondary pf-m-small" type="button">Secondary</button>`,
    },
  },
  {
    displayName: "button tertiary small",
    picture: {
      src: "./pictures/button/button-tertiary-small.png",
      width: 79,
      height: 33,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-tertiary pf-m-small" type="button">Tertiary</button>`,
    },
  },
  {
    displayName: "button danger small",
    picture: {
      src: "./pictures/button/button-danger-small.png",
      width: 78,
      height: 33,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-danger pf-m-small" type="button">Danger</button>`,
    },
  },
  {
    displayName: "button link small",
    picture: {
      src: "./pictures/button/button-link-small.png",
      width: 79,
      height: 33,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-link pf-m-small" type="button">Link  <span class="pf-c-button__icon pf-m-end">    <i class="fas fa-plus-circle" aria-hidden="true"></i>  </span></button>`,
    },
  },
  {
    displayName: "button inline link small",
    picture: {
      src: "./pictures/button/button-inline-link-small.png",
      width: 65,
      height: 24,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-inline pf-m-link pf-m-small" type="button">Inline link</button>`,
    },
  },
  {
    displayName: "button control small",
    picture: {
      src: "./pictures/button/button-control-small.png",
      width: 78,
      height: 33,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-control pf-m-small" type="button">Control</button>`,
    },
  },
];
