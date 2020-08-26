export default {
  displayName: "hint",
  name: "hint",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/hint/",
};

export const variants = [
  {
    displayName: "default-with-no-title hint",
    picture: {
      src: "./pictures/hint/default-with-no-title-hint.png",
      width: 780,
      height: 120,
    },
    snippet: {
      html: `<div class="pf-c-hint">
  <div class="pf-c-hint__body">Welcome to the new documentation experience.
    <button class="pf-c-button pf-m-link pf-m-inline" type="button">Learn more about the improved features.</button>
  </div>
</div>
`,
    },
  },
  {
    displayName: "default-with-no-title hint  1",
    picture: {
      src: "./pictures/hint/default-with-no-title-hint-1.png",
      width: 780,
      height: 160,
    },
    snippet: {
      html: `
<div class="pf-c-hint">
  <div class="pf-c-hint__actions">
    <div class="pf-c-dropdown">
      <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="hint-with-no-title-dropdown-kebab-button" aria-expanded="false" aria-label="Actions">
        <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
      </button>
      <ul class="pf-c-dropdown__menu" aria-labelledby="hint-with-no-title-dropdown-kebab-button" hidden>
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
  </div>
  <div class="pf-c-hint__body">Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.</div>
  <div class="pf-c-hint__footer">
    <button class="pf-c-button pf-m-link pf-m-inline" type="button">Try it for 90 days</button>
  </div>
</div>`,
    },
  },
  {
    displayName: "hint-with-title hint",
    picture: {
      src: "./pictures/hint/hint-with-title-hint.png",
      width: 780,
      height: 120,
    },
    snippet: {
      html: `<div class="pf-c-hint">
  <div class="pf-c-hint__actions">
    <div class="pf-c-dropdown">
      <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="hint-with-title-dropdown-kebab-button" aria-expanded="false" aria-label="Actions">
        <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
      </button>
      <ul class="pf-c-dropdown__menu" aria-labelledby="hint-with-title-dropdown-kebab-button" hidden>
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
  </div>
  <div class="pf-c-hint__title">Do more with Find it Fix it capabilities</div>
  <div class="pf-c-hint__body">Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.</div>
</div>
`,
    },
  },
  {
    displayName: "hint-with-title hint  1",
    picture: {
      src: "./pictures/hint/hint-with-title-hint-1.png",
      width: 780,
      height: 160,
    },
    snippet: {
      html: `
<div class="pf-c-hint">
  <div class="pf-c-hint__actions">
    <div class="pf-c-dropdown">
      <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="hint-with-title-with-footer-dropdown-kebab-button" aria-expanded="false" aria-label="Actions">
        <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
      </button>
      <ul class="pf-c-dropdown__menu" aria-labelledby="hint-with-title-with-footer-dropdown-kebab-button" hidden>
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
  </div>
  <div class="pf-c-hint__title">Do more with Find it Fix it capabilities</div>
  <div class="pf-c-hint__body">Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.</div>
  <div class="pf-c-hint__footer">
    <button class="pf-c-button pf-m-link pf-m-inline" type="button">Try it for 90 days</button>
  </div>
</div>`,
    },
  },
];
