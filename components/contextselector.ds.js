export default {
  displayName: "contextselector",
  name: "contextselector",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/contextselector/",
};

export const variants = [
  {
    displayName: "basic",
    picture: {
      src: "./components/pictures/contextselector/basic.png",
      width: 532,
      height: 380,
    },
    snippet: {
      html: `<div class="pf-c-context-selector">
  <span id="context-selector-collapsed-example-label" hidden>Selected project:</span>
  <button class="pf-c-context-selector__toggle" id="context-selector-collapsed-example-toggle"aria-labelledby="context-selector-collapsed-example-label context-selector-collapsed-example-toggle">
    <span class="pf-c-context-selector__toggle-text">My project</span>
    <span class="pf-c-context-selector__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-c-context-selector__menu" hidden>
    <div class="pf-c-context-selector__menu-search">
      <div class="pf-c-input-group">
        <input class="pf-c-form-control" type="search"placeholder="Search"id="textInput1"name="textInput1"aria-labelledby="context-selector-collapsed-example-search-button" />
        <button class="pf-c-button pf-m-control" type="button" id="context-selector-collapsed-example-search-button"aria-label="Search menu items">
          <i class="fas fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <ul class="pf-c-context-selector__menu-list">
      <li>
        <button class="pf-c-context-selector__menu-list-item">My project</button>
      </li>
      <li>
        <button class="pf-c-context-selector__menu-list-item">OpenShift cluster</button>
      </li>
      <li>
        <button class="pf-c-context-selector__menu-list-item">Production Ansible</button>
      </li>
      <li>
        <button class="pf-c-context-selector__menu-list-item">AWS</button>
      </li>
      <li>
        <button class="pf-c-context-selector__menu-list-item">Azure</button>
      </li>
      <li>
        <button class="pf-c-context-selector__menu-list-item">My project</button>
      </li>
      <li>
        <button class="pf-c-context-selector__menu-list-item">OpenShift cluster</button>
      </li>
      <li>
        <button class="pf-c-context-selector__menu-list-item">Production Ansible</button>
      </li>
      <li>
        <button class="pf-c-context-selector__menu-list-item">AWS</button>
      </li>
      <li>
        <button class="pf-c-context-selector__menu-list-item">Azure</button>
      </li>
    </ul>
  </div>
</div>
<div class="pf-c-context-selector pf-m-expanded">
  <span id="context-selector-expanded-example-label" hidden>Selected Project:</span>
  <button class="pf-c-context-selector__toggle" id="context-selector-expanded-example-toggle"aria-labelledby="context-selector-expanded-example-label context-selector-expanded-example-toggle">
    <span class="pf-c-context-selector__toggle-text">My project</span>
    <span class="pf-c-context-selector__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-c-context-selector__menu">
    <div class="pf-c-context-selector__menu-search">
      <div class="pf-c-input-group">
        <input class="pf-c-form-control" type="search" placeholder="Search" id="textInput2" name="textInput2" aria-labelledby="context-selector-expanded-example-search-button" />
        <button class="pf-c-button pf-m-control" type="button" id="context-selector-expanded-example-search-button"aria-label="Search menu items">
          <i class="fas fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <ul class="pf-c-context-selector__menu-list">
      <li>
        <button class="pf-c-context-selector__menu-list-item">My project</button>
      </li>
      <li>
        <button class="pf-c-context-selector__menu-list-item">OpenShift cluster</button>
      </li>
      <li>
        <button class="pf-c-context-selector__menu-list-item">Production Ansible</button>
      </li>
      <li>
        <button class="pf-c-context-selector__menu-list-item">AWS</button>
      </li>
      <li>
        <button class="pf-c-context-selector__menu-list-item">Azure</button>
      </li>
      <li>
        <button class="pf-c-context-selector__menu-list-item">My project</button>
      </li>
      <li>
        <button class="pf-c-context-selector__menu-list-item">OpenShift cluster</button>
      </li>
      <li>
        <button class="pf-c-context-selector__menu-list-item">Production Ansible</button>
      </li>
      <li>
        <button class="pf-c-context-selector__menu-list-item">AWS</button>
      </li>
      <li>
        <button class="pf-c-context-selector__menu-list-item">Azure</button>
      </li>
    </ul>
  </div>
</div>`,
    },
  },
];
