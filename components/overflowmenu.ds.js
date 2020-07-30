export default {
  displayName: "overflowmenu",
  name: "overflowmenu",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/overflowmenu/",
};

export const variants = [
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/overflowmenu/additional-options-in-dropdown-hidden.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-overflow-menu" id="overflow-menu-simple-additional-options-hidden">
  <div class="pf-c-overflow-menu__control">
    <div class="pf-c-dropdown pf-m-expanded">
      <button class="pf-c-button pf-c-dropdown__toggle pf-m-plain" type="button" id="overflow-menu-simple-additional-options-hidden-dropdown-toggle" aria-label="Dropdown with additional options">
        <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
      </button>
      <ul class="pf-c-dropdown__menu" aria-labelledby="overflow-menu-simple-additional-options-hidden-dropdown-toggle">
        <li>
          <button class="pf-c-dropdown__menu-item">Primary</button>
        </li>
        <li>
          <button class="pf-c-dropdown__menu-item">Secondary</button>
        </li>
        <li>
          <button class="pf-c-dropdown__menu-item">Tertiary</button>
        </li>
        <li>
          <button class="pf-c-dropdown__menu-item">Align left</button>
        </li>
        <li>
          <button class="pf-c-dropdown__menu-item">Align center</button>
        </li>
        <li>
          <button class="pf-c-dropdown__menu-item">Align right</button>
        </li>
        <li>
          <button class="pf-c-dropdown__menu-item">Action 7</button>
        </li>
      </ul>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/overflowmenu/additional-options-in-dropdown-visible.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-overflow-menu" id="overflow-menu-simple-additional-options-visible">
  <div class="pf-c-overflow-menu__content">
    <div class="pf-c-overflow-menu__group pf-m-button-group">
      <div class="pf-c-overflow-menu__item">
        <button class="pf-c-button pf-m-primary" type="button">Primary</button>
      </div>
      <div class="pf-c-overflow-menu__item">
        <button class="pf-c-button pf-m-secondary" type="button">Secondary</button>
      </div>
      <div class="pf-c-overflow-menu__item">
        <button class="pf-c-button pf-m-tertiary" type="button">Tertiary</button>
      </div>
    </div>
    <div class="pf-c-overflow-menu__group pf-m-icon-button-group">
      <div class="pf-c-overflow-menu__item">
        <button class="pf-c-button pf-m-plain" type="button" aria-label="Align left">
          <i class="fas fa-align-left" aria-hidden="true"></i>
        </button>
      </div>
      <div class="pf-c-overflow-menu__item">
        <button class="pf-c-button pf-m-plain" type="button" aria-label="Align center">
          <i class="fas fa-align-center" aria-hidden="true"></i>
        </button>
      </div>
      <div class="pf-c-overflow-menu__item">
        <button class="pf-c-button pf-m-plain" type="button" aria-label="Align right">
          <i class="fas fa-align-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
  <div class="pf-c-overflow-menu__control">
    <div class="pf-c-dropdown pf-m-expanded">
      <button class="pf-c-button pf-c-dropdown__toggle pf-m-plain" type="button" id="overflow-menu-simple-additional-options-visible-dropdown-toggle" aria-label="Dropdown with additional options">
        <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
      </button>
      <ul class="pf-c-dropdown__menu" aria-labelledby="overflow-menu-simple-additional-options-visible-dropdown-toggle">
        <li>
          <button class="pf-c-dropdown__menu-item">Action 7</button>
        </li>
      </ul>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/overflowmenu/group-types.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-overflow-menu" id="overflow-menu-button-group-example">
  <div class="pf-c-overflow-menu__content">
    <div class="pf-c-overflow-menu__group">
      <div class="pf-c-overflow-menu__item">Item 1</div>
      <div class="pf-c-overflow-menu__item">Item 2</div>
      <div class="pf-c-overflow-menu__item">Item 3</div>
    </div>
    <div class="pf-c-overflow-menu__group pf-m-button-group">
      <div class="pf-c-overflow-menu__item">
        <button class="pf-c-button pf-m-primary" type="button">Primary</button>
      </div>
      <div class="pf-c-overflow-menu__item">
        <button class="pf-c-button pf-m-secondary" type="button">Secondary</button>
      </div>
      <div class="pf-c-overflow-menu__item">
        <button class="pf-c-button pf-m-tertiary" type="button">Tertiary</button>
      </div>
    </div>
    <div class="pf-c-overflow-menu__group pf-m-icon-button-group">
      <div class="pf-c-overflow-menu__item">
        <button class="pf-c-button pf-m-plain" type="button" aria-label="Align left">
          <i class="fas fa-align-left" aria-hidden="true"></i>
        </button>
      </div>
      <div class="pf-c-overflow-menu__item">
        <button class="pf-c-button pf-m-plain" type="button" aria-label="Align center">
          <i class="fas fa-align-center" aria-hidden="true"></i>
        </button>
      </div>
      <div class="pf-c-overflow-menu__item">
        <button class="pf-c-button pf-m-plain" type="button" aria-label="Align right">
          <i class="fas fa-align-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/overflowmenu/persistent-additional-options-hidden.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-overflow-menu" id="overflow-menu-persistent-hidden">
  <div class="pf-c-overflow-menu__content">
    <div class="pf-c-overflow-menu__group pf-m-button-group">
      <div class="pf-c-overflow-menu__item">
        <button class="pf-c-button pf-m-primary" type="button">Primary</button>
      </div>
    </div>
  </div>
  <div class="pf-c-overflow-menu__control">
    <div class="pf-c-dropdown pf-m-expanded">
      <button class="pf-c-button pf-c-dropdown__toggle pf-m-plain" type="button" id="overflow-menu-persistent-hidden-dropdown-toggle" aria-label="Dropdown for persistent example">
        <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
      </button>
      <ul class="pf-c-dropdown__menu" aria-labelledby="overflow-menu-persistent-hidden-dropdown-toggle">
        <li>
          <button class="pf-c-dropdown__menu-item">Secondary</button>
        </li>
        <li>
          <button class="pf-c-dropdown__menu-item">Tertiary</button>
        </li>
        <li>
          <button class="pf-c-dropdown__menu-item">Action 4</button>
        </li>
      </ul>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/overflowmenu/persistent-additional-options-visible.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-overflow-menu" id="overflow-menu-persistent-visible-example">
  <div class="pf-c-overflow-menu__content">
    <div class="pf-c-overflow-menu__group pf-m-button-group">
      <div class="pf-c-overflow-menu__item">
        <button class="pf-c-button pf-m-primary" type="button">Primary</button>
      </div>
      <div class="pf-c-overflow-menu__item">
        <button class="pf-c-button pf-m-secondary" type="button">Secondary</button>
      </div>
      <div class="pf-c-overflow-menu__item">
        <button class="pf-c-button pf-m-tertiary" type="button">Tertiary</button>
      </div>
    </div>
  </div>
  <div class="pf-c-overflow-menu__control">
    <div class="pf-c-dropdown pf-m-expanded">
      <button class="pf-c-button pf-c-dropdown__toggle pf-m-plain" type="button" id="overflow-menu-persistent-visible-example-dropdown-toggle" aria-label="Dropdown for persistent example">
        <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
      </button>
      <ul class="pf-c-dropdown__menu" aria-labelledby="overflow-menu-persistent-visible-example-dropdown-toggle">
        <li>
          <button class="pf-c-dropdown__menu-item">Action 4</button>
        </li>
      </ul>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/overflowmenu/simple-collapsed.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-overflow-menu" id="overflow-menu-simple">
  <div class="pf-c-overflow-menu__control">
    <div class="pf-c-dropdown pf-m-expanded">
      <button class="pf-c-button pf-c-dropdown__toggle pf-m-plain" type="button" id="overflow-menu-simple-dropdown-toggle" aria-label="Generic options">
        <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
      </button>
      <ul class="pf-c-dropdown__menu" aria-labelledby="overflow-menu-simple-dropdown-toggle">
        <li>
          <button class="pf-c-dropdown__menu-item">Item 1</button>
        </li>
        <li>
          <button class="pf-c-dropdown__menu-item">Item 2</button>
        </li>
        <li>
          <button class="pf-c-dropdown__menu-item">Item 3</button>
        </li>
        <li>
          <button class="pf-c-dropdown__menu-item">Item 4</button>
        </li>
        <li>
          <button class="pf-c-dropdown__menu-item">Item 5</button>
        </li>
      </ul>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/overflowmenu/simple-expanded.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-overflow-menu" id="overflow-menu-simple-expanded">
  <div class="pf-c-overflow-menu__content">
    <div class="pf-c-overflow-menu__item">Item 1</div>
    <div class="pf-c-overflow-menu__item">Item 2</div>
    <div class="pf-c-overflow-menu__group">
      <div class="pf-c-overflow-menu__item">Item 3</div>
      <div class="pf-c-overflow-menu__item">Item 4</div>
      <div class="pf-c-overflow-menu__item">Item 5</div>
    </div>
  </div>
</div>`,
    },
  },
];
