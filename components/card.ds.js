export default {
  displayName: "card",
  name: "card",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/card/",
};

export const variants = [
  {
    displayName: "basic",
    picture: {
      src: "./pictures/card/basic.png",
      width: 293,
      height: 193,
    },
    snippet: {
      html: `<div class="pf-c-card">
  <div class="pf-c-card__title">Title</div>
  <div class="pf-c-card__body">Body</div>
  <div class="pf-c-card__footer">Footer</div>
</div>`,
    },
  },
  {
    displayName: "compact",
    picture: {
      src: "./pictures/card/compact.png",
      width: 293,
      height: 155,
    },
    snippet: {
      html: `<div class="pf-c-card pf-m-compact">
  <div class="pf-c-card__title">Title</div>
  <div class="pf-c-card__body">Body</div>
  <div class="pf-c-card__footer">Footer</div>
</div>`,
    },
  },
  {
    displayName: "flat",
    picture: {
      src: "./pictures/card/flat.png",
      width: 293,
      height: 195,
    },
    snippet: {
      html: `<div class="pf-c-card pf-m-flat">
  <div class="pf-c-card__title">Title</div>
  <div class="pf-c-card__body">Body</div>
  <div class="pf-c-card__footer">Footer</div>
</div>`,
    },
  },
  {
    displayName: "hover",
    picture: {
      src: "./pictures/card/hover.png",
      width: 293,
      height: 193,
    },
    snippet: {
      html: `<div class="pf-c-card pf-m-hoverable">
  <div class="pf-c-card__title">Title</div>
  <div class="pf-c-card__body">Body</div>
  <div class="pf-c-card__footer">Footer</div>
</div>`,
    },
  },
  {
    displayName: "selectable",
    picture: {
      src: "./pictures/card/selectable.png",
      width: 293,
      height: 193,
    },
    snippet: {
      html: `<div class="pf-c-card pf-m-selectable" tabindex="0">
  <div class="pf-c-card__title">Title</div>
  <div class="pf-c-card__body">Body</div>
  <div class="pf-c-card__footer">Footer</div>
</div>`,
    },
  },
  {
    displayName: "selected",
    picture: {
      src: "./pictures/card/selected.png",
      width: 293,
      height: 193,
    },
    snippet: {
      html: `<div class="pf-c-card pf-m-selectable pf-m-selected" tabindex="0">
  <div class="pf-c-card__title">Title</div>
  <div class="pf-c-card__body">Body</div>
  <div class="pf-c-card__footer">Footer</div>
</div>`,
    },
  },
  {
    displayName: "with-image-and-action",
    picture: {
      src: "./pictures/card/with-image-and-action.png",
      width: 459,
      height: 271,
    },
    snippet: {
      html: `<div class="pf-c-card" id="card-action-example-1">
  <div class="pf-c-card__header">
    <div class="pf-c-card__header-main">
      <img src="node_modules/@patternfly/patternfly/assets/images/pf_logo.svg" width="300px" alt="Logo" />
    </div>
    <div class="pf-c-card__actions">
      <div class="pf-c-dropdown">
        <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="card-action-example-1-dropdown-kebab-right-aligned-button" aria-expanded="false" aria-label="Actions">
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </button>
        <ul class="pf-c-dropdown__menu" aria-labelledby="card-action-example-1-dropdown-kebab-right-aligned-button" hidden>
          <li>
            <a class="pf-c-dropdown__menu-item" href="#">Link</a>
          </li>
          <li>
            <button class="pf-c-dropdown__menu-item" type="button">Action</button>
          </li>
          <li>
            <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
          </li>
          <li>
            <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
          </li>
          <li class="pf-c-divider" role="separator"></li>
          <li>
            <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
          </li>
        </ul>
      </div>
      <input type="checkbox" id="card-action-example-1-check" name="card-action-example-1-check" aria-labelledby="card-action-example-1-check-label" />
    </div>
  </div>
  <div class="pf-c-card__title" id="card-action-example-1-check-label">Title</div>
  <div class="pf-c-card__body">Body</div>
  <div class="pf-c-card__footer">Footer</div>
</div>`,
    },
  },
  {
    displayName: "with-multiple-body-sections",
    picture: {
      src: "./pictures/card/with-multiple-body-sections.png",
      width: 293,
      height: 289,
    },
    snippet: {
      html: `<div class="pf-c-card">
  <div class="pf-c-card__title">Title</div>
  <div class="pf-c-card__body">Body</div>
  <div class="pf-c-card__body">Body</div>
  <div class="pf-c-card__body">Body</div>
  <div class="pf-c-card__footer">Footer</div>
</div>`,
    },
  },
  {
    displayName: "with-no-footer",
    picture: {
      src: "./pictures/card/with-no-footer.png",
      width: 293,
      height: 145,
    },
    snippet: {
      html: `<div class="pf-c-card">
  <div class="pf-c-card__title">Title</div>
  <div class="pf-c-card__body">This card has no footer</div>
</div>`,
    },
  },
  {
    displayName: "with-no-title",
    picture: {
      src: "./pictures/card/with-no-title.png",
      width: 293,
      height: 153,
    },
    snippet: {
      html: `<div class="pf-c-card">
  <div class="pf-c-card__body">This card has no title</div>
  <div class="pf-c-card__footer">Footer</div>
</div>`,
    },
  },
  {
    displayName: "with-only-a-content-section",
    picture: {
      src: "./pictures/card/with-only-a-content-section.png",
      width: 293,
      height: 105,
    },
    snippet: {
      html: `<div class="pf-c-card">
  <div class="pf-c-card__body">Body</div>
</div>`,
    },
  },
  {
    displayName: "with-only-actions-in-head-no-titlefooter",
    picture: {
      src: "./pictures/card/with-only-actions-in-head-no-titlefooter.png",
      width: 506,
      height: 157,
    },
    snippet: {
      html: `<div class="pf-c-card" id="card-action-example-3">
  <div class="pf-c-card__header">
    <div class="pf-c-card__actions">
      <div class="pf-c-dropdown">
        <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="card-action-example-3-dropdown-kebab-right-aligned-button" aria-expanded="false" aria-label="Actions">
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </button>
        <ul class="pf-c-dropdown__menu" aria-labelledby="card-action-example-3-dropdown-kebab-right-aligned-button" hidden>
          <li>
            <a class="pf-c-dropdown__menu-item" href="#">Link</a>
          </li>
          <li>
            <button class="pf-c-dropdown__menu-item" type="button">Action</button>
          </li>
          <li>
            <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
          </li>
          <li>
            <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
          </li>
          <li class="pf-c-divider" role="separator"></li>
          <li>
            <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
          </li>
        </ul>
      </div>
      <input type="checkbox" id="card-action-example-3-check" name="card-action-example-3-check" aria-labelledby="card-action-example-3-check-label" />
    </div>
  </div>
  <div class="pf-c-card__body" id="card-action-example-3-check-label">This is the card body, there are only actions in the card head.</div>
</div>`,
    },
  },
  {
    displayName: "with-only-image-in-head",
    picture: {
      src: "./pictures/card/with-only-image-in-head.png",
      width: 380,
      height: 271,
    },
    snippet: {
      html: `<div class="pf-c-card">
  <div class="pf-c-card__header">
    <div class="pf-c-card__header-main">
      <img src="node_modules/@patternfly/patternfly/assets/images/pf_logo.svg" width="300px" alt="Logo" />
    </div>
  </div>
  <div class="pf-c-card__title">Title</div>
  <div class="pf-c-card__body">Body</div>
  <div class="pf-c-card__footer">Footer</div>
</div>`,
    },
  },
  {
    displayName: "with-only-one-body-that-fills",
    picture: {
      src: "./pictures/card/with-only-one-body-that-fills.png",
      width: 293,
      height: 289,
    },
    snippet: {
      html: `<div class="pf-c-card">
  <div class="pf-c-card__title">Title</div>
  <div class="pf-c-card__body pf-m-no-fill">Body pf-m-no-fill</div>
  <div class="pf-c-card__body pf-m-no-fill">Body pf-m-no-fill</div>
  <div class="pf-c-card__body">Body</div>
  <div class="pf-c-card__footer">Footer</div>
</div>`,
    },
  },
  {
    displayName: "with-title-in-head",
    picture: {
      src: "./pictures/card/with-title-in-head.png",
      width: 728,
      height: 205,
    },
    snippet: {
      html: `<div class="pf-c-card" id="card-action-example-2">
  <div class="pf-c-card__header">
    <div class="pf-c-card__actions">
      <div class="pf-c-dropdown">
        <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="card-action-example-2-dropdown-kebab-right-aligned-button" aria-expanded="false" aria-label="Actions">
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </button>
        <ul class="pf-c-dropdown__menu" aria-labelledby="card-action-example-2-dropdown-kebab-right-aligned-button" hidden>
          <li>
            <a class="pf-c-dropdown__menu-item" href="#">Link</a>
          </li>
          <li>
            <button class="pf-c-dropdown__menu-item" type="button">Action</button>
          </li>
          <li>
            <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
          </li>
          <li>
            <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
          </li>
          <li class="pf-c-divider" role="separator"></li>
          <li>
            <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
          </li>
        </ul>
      </div>
      <input type="checkbox" id="card-action-example-2-check" name="card-action-example-2-check" aria-labelledby="card-action-example-2-check-label" />
    </div>
    <div class="pf-c-card__title" id="card-action-example-2-check-label">This is a really really really really really really really really really really long title</div>
  </div>
  <div class="pf-c-card__body">Body</div>
  <div class="pf-c-card__footer">Footer</div>
</div>`,
    },
  },
];
