export default {
  displayName: "button",
  name: "button",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/button/",
};

export const variants = [
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/button/aria-disabled.png",
      width: 800,
      height: 600,
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
    displayName: "Basic",
    picture: {
      src: "./pictures/button/block-level.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-primary pf-m-block" type="button">Block level button</button>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/button/call-to-action.png",
      width: 800,
      height: 600,
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
    displayName: "Basic",
    picture: {
      src: "./pictures/button/disabled.png",
      width: 800,
      height: 600,
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
    displayName: "Basic",
    picture: {
      src: "./pictures/button/links-as-buttons.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<a class="pf-c-button pf-m-primary" href="https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples">Primary link to W3.org</a>
<a class="pf-c-button pf-m-secondary" href="#overview" aria-label="Read more about button documentation">Secondary link to anchor</a>
<a class="pf-c-button pf-m-tertiary pf-m-disabled" href="https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples" aria-disabled="true" tabindex="-1">Tertiary link to W3.org</a>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/button/types.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-primary" type="submit">Submit</button>
<button class="pf-c-button pf-m-primary" type="reset">Reset</button>
<button class="pf-c-button pf-m-primary" type="button">Default</button>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/button/variations.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-primary" type="button">Primary</button>
<button class="pf-c-button pf-m-secondary" type="button">Secondary</button>
<button class="pf-c-button pf-m-tertiary" type="button">Tertiary</button>
<button class="pf-c-button pf-m-danger" type="button">Danger</button>
<br />
<br />
<button class="pf-c-button pf-m-link" type="button">
  <span class="pf-c-button__icon pf-m-start">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>Link</button>
<button class="pf-c-button pf-m-link" type="button">Link
  <span class="pf-c-button__icon pf-m-end">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>
</button>
<button class="pf-c-button pf-m-inline pf-m-link" type="button">Inline link</button>
<br />
<br />
<button class="pf-c-button pf-m-plain" type="button" aria-label="Remove">
  <i class="fas fa-times" aria-hidden="true"></i>
</button>
<br />
<br />
<button class="pf-c-button pf-m-control" type="button">Control</button>
<button class="pf-c-button pf-m-control" type="button" aria-label="Copy input">
  <i class="fas fa-copy" aria-hidden="true"></i>
</button>
<br />
<br />
<br />
<button class="pf-c-button pf-m-primary pf-m-small" type="button">Primary</button>
<button class="pf-c-button pf-m-secondary pf-m-small" type="button">Secondary</button>
<button class="pf-c-button pf-m-tertiary pf-m-small" type="button">Tertiary</button>
<button class="pf-c-button pf-m-danger pf-m-small" type="button">Danger</button>
<button class="pf-c-button pf-m-link pf-m-small" type="button">Link
  <span class="pf-c-button__icon pf-m-end">
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  </span>
</button>
<button class="pf-c-button pf-m-inline pf-m-link pf-m-small" type="button">Inline link</button>
<button class="pf-c-button pf-m-control pf-m-small" type="button">Control</button>`,
    },
  },
];
