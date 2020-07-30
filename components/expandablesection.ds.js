export default {
  displayName: "expandablesection",
  name: "expandablesection",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/expandablesection/",
};

export const variants = [
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/expandablesection/expanded.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-expandable-section pf-m-expanded">
  <button type="button" class="pf-c-expandable-section__toggle" aria-expanded="true">
    <span class="pf-c-expandable-section__toggle-icon">
      <i class="fas fa-angle-right" aria-hidden="true"></i>
    </span>
    <span class="pf-c-expandable-section__toggle-text">Show less</span>
  </button>
  <div class="pf-c-expandable-section__content">This content is visible only when the component is expanded.</div>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/expandablesection/hidden.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-expandable-section">
  <button type="button" class="pf-c-expandable-section__toggle" aria-expanded="false">
    <span class="pf-c-expandable-section__toggle-icon">
      <i class="fas fa-angle-right" aria-hidden="true"></i>
    </span>
    <span class="pf-c-expandable-section__toggle-text">Show more</span>
  </button>
  <div class="pf-c-expandable-section__content" hidden>This content is visible only when the component is expanded.</div>
</div>`,
    },
  },
];
