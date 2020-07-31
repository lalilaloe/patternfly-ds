export default {
  displayName: "dropdown",
  name: "dropdown",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/dropdown/",
};

export const variants = [
  {
    displayName: "align-right",
    picture: {
      src: "./pictures/dropdown/align-right.png",
      width: 293,
      height: 310,
    },
    snippet: {
      html: `<div class="pf-c-dropdown pf-m-expanded">
  <button class="pf-c-dropdown__toggle" type="button" id="dropdown-align-right-button" aria-expanded="true">
    <span class="pf-c-dropdown__toggle-text">Right</span>
    <span class="pf-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="dropdown-align-right-button">
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
</div>`,
    },
  },
  {
    displayName: "align-top",
    picture: {
      src: "./pictures/dropdown/align-top.png",
      width: 293,
      height: 310,
    },
    snippet: {
      html: `<div class="pf-c-dropdown pf-m-top">
  <button class="pf-c-dropdown__toggle" type="button" id="dropdown-align-top-button" aria-expanded="false">
    <span class="pf-c-dropdown__toggle-text">Top</span>
    <span class="pf-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul class="pf-c-dropdown__menu" aria-labelledby="dropdown-align-top-button" hidden>
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
<div class="pf-c-dropdown pf-m-expanded pf-m-top">
  <button class="pf-c-dropdown__toggle" type="button" id="dropdown-align-top-expanded-button" aria-expanded="true">
    <span class="pf-c-dropdown__toggle-text">Top</span>
    <span class="pf-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul class="pf-c-dropdown__menu" aria-labelledby="dropdown-align-top-expanded-button">
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
</div>`,
    },
  },
  {
    displayName: "collapsed",
    picture: {
      src: "./pictures/dropdown/collapsed.png",
      width: 293,
      height: 69,
    },
    snippet: {
      html: `<div class="pf-c-dropdown">
  <button class="pf-c-dropdown__toggle" type="button" id="dropdown-collapsed-button" aria-expanded="false">
    <span class="pf-c-dropdown__toggle-text">Collapsed dropdown</span>
    <span class="pf-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul class="pf-c-dropdown__menu" aria-labelledby="dropdown-collapsed-button" hidden>
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
</div>`,
    },
  },
  {
    displayName: "disabled",
    picture: {
      src: "./pictures/dropdown/disabled.png",
      width: 293,
      height: 69,
    },
    snippet: {
      html: `<div class="pf-c-dropdown">
  <button class="pf-c-dropdown__toggle" type="button" id="dropdown-disabled-button" aria-expanded="false" disabled>
    <span class="pf-c-dropdown__toggle-text">Disabled dropdown</span>
    <span class="pf-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul class="pf-c-dropdown__menu" aria-labelledby="dropdown-disabled-button" hidden>
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
</div>`,
    },
  },
  {
    displayName: "dropdown-with-description",
    picture: {
      src: "./pictures/dropdown/dropdown-with-description.png",
      width: 293,
      height: 400,
    },
    snippet: {
      html: `<div class="pf-c-dropdown pf-m-expanded">
  <button class="pf-c-dropdown__toggle" type="button" id="dropdown-with-description-button" aria-expanded="true">
    <span class="pf-c-dropdown__toggle-text">Expanded dropdown</span>
    <span class="pf-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul class="pf-c-dropdown__menu" aria-labelledby="dropdown-with-description-button">
    <li>
      <button class="pf-c-dropdown__menu-item pf-m-description" type="button">
        <div class="pf-c-dropdown__menu-item-main">Menu item default</div>
        <div class="pf-c-dropdown__menu-item-description">This is a description</div>
      </button>
    </li>
    <li>
      <button class="pf-c-dropdown__menu-item pf-m-description" type="button">
        <div class="pf-c-dropdown__menu-item-main">Menu item with long description</div>
        <div class="pf-c-dropdown__menu-item-description">This is a really long description that describes the menu item.</div>
      </button>
    </li>
    <li>
      <button class="pf-c-dropdown__menu-item pf-m-description" type="button" disabled>
        <div class="pf-c-dropdown__menu-item-main">Menu item disabled</div>
        <div class="pf-c-dropdown__menu-item-description">This is a description</div>
      </button>
    </li>
    <li>
      <a class="pf-c-dropdown__menu-item pf-m-icon pf-m-description" href="#">
        <div class="pf-c-dropdown__menu-item-main">
          <span class="pf-c-dropdown__menu-item-icon">
            <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo" />
          </span>Link</div>
        <div class="pf-c-dropdown__menu-item-description">This is a description</div>
      </a>
    </li>
    <li>
      <button class="pf-c-dropdown__menu-item pf-m-icon pf-m-description" type="button">
        <div class="pf-c-dropdown__menu-item-main">
          <span class="pf-c-dropdown__menu-item-icon">
            <i class="fas fa-cog" aria-hidden="true"></i>
          </span>Action</div>
        <div class="pf-c-dropdown__menu-item-description">This is a description</div>
      </button>
    </li>
  </ul>
</div>`,
    },
  },
  {
    displayName: "dropdown-with-image-and-text",
    picture: {
      src: "./pictures/dropdown/dropdown-with-image-and-text.png",
      width: 293,
      height: 337,
    },
    snippet: {
      html: `<div class="pf-c-dropdown pf-m-expanded">
  <button class="pf-c-dropdown__toggle" type="button" id="dropdown-with-image-and-text-example-button" aria-expanded="true">
    <span class="pf-c-dropdown__toggle-image">
      <img class="pf-c-avatar" src="/assets/images/img_avatar.svg" alt="Avatar image" />
    </span>
    <span class="pf-c-dropdown__toggle-text">Ned Username</span>
    <span class="pf-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-c-dropdown__menu" aria-labelledby="dropdown-with-image-and-text-example-button">
    <section class="pf-c-dropdown__group">
      <div class="pf-c-dropdown__menu-item pf-m-text">Text</div>
      <div class="pf-c-dropdown__menu-item pf-m-text">More text</div>
    </section>
    <hr class="pf-c-divider" />
    <section class="pf-c-dropdown__group">
      <ul>
        <li>
          <a class="pf-c-dropdown__menu-item" href="#">My profile</a>
        </li>
        <li>
          <a class="pf-c-dropdown__menu-item" href="#">User management</a>
        </li>
        <li>
          <a class="pf-c-dropdown__menu-item" href="#">Logout</a>
        </li>
      </ul>
    </section>
  </div>
</div>`,
    },
  },
  {
    displayName: "expanded",
    picture: {
      src: "./pictures/dropdown/expanded.png",
      width: 293,
      height: 310,
    },
    snippet: {
      html: `<div class="pf-c-dropdown pf-m-expanded">
  <button class="pf-c-dropdown__toggle" type="button" id="dropdown-expanded-button" aria-expanded="true">
    <span class="pf-c-dropdown__toggle-text">Expanded dropdown</span>
    <span class="pf-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul class="pf-c-dropdown__menu" aria-labelledby="dropdown-expanded-button">
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
</div>`,
    },
  },
  {
    displayName: "kebab",
    picture: {
      src: "./pictures/dropdown/kebab.png",
      width: 293,
      height: 310,
    },
    snippet: {
      html: `<div class="pf-c-dropdown">
  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="dropdown-kebab-disabled-button" aria-expanded="false" disabled aria-label="Actions">
    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-dropdown__menu" aria-labelledby="dropdown-kebab-disabled-button" hidden>
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
<div class="pf-c-dropdown">
  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="dropdown-kebab-button" aria-expanded="false" aria-label="Actions">
    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-dropdown__menu" aria-labelledby="dropdown-kebab-button" hidden>
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
<div class="pf-c-dropdown pf-m-expanded">
  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="dropdown-kebab-expanded-button" aria-expanded="true" aria-label="Actions">
    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-dropdown__menu" aria-labelledby="dropdown-kebab-expanded-button">
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
</div>`,
    },
  },
  {
    displayName: "kebab-align-right",
    picture: {
      src: "./pictures/dropdown/kebab-align-right.png",
      width: 291,
      height: 310,
    },
    snippet: {
      html: `<div class="pf-c-dropdown pf-m-expanded">
  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="dropdown-kebab-align-right-button" aria-expanded="true" aria-label="Actions">
    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="dropdown-kebab-align-right-button">
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
</div>`,
    },
  },
  {
    displayName: "menu-item-icons",
    picture: {
      src: "./pictures/dropdown/menu-item-icons.png",
      width: 293,
      height: 310,
    },
    snippet: {
      html: `<div class="pf-c-dropdown pf-m-expanded">
  <button class="pf-c-dropdown__toggle" type="button" id="dropdown-menu-item-icons-button" aria-expanded="true">
    <span class="pf-c-dropdown__toggle-text">Expanded dropdown</span>
    <span class="pf-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul class="pf-c-dropdown__menu" aria-labelledby="dropdown-menu-item-icons-button">
    <li>
      <a class="pf-c-dropdown__menu-item pf-m-icon" href="#">
        <span class="pf-c-dropdown__menu-item-icon">
          <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo" />
        </span>Link</a>
    </li>
    <li>
      <button class="pf-c-dropdown__menu-item pf-m-icon" type="button">
        <span class="pf-c-dropdown__menu-item-icon">
          <i class="fas fa-cog" aria-hidden="true"></i>
        </span>Action</button>
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
</div>`,
    },
  },
  {
    displayName: "panel",
    picture: {
      src: "./pictures/dropdown/panel.png",
      width: 293,
      height: 130,
    },
    snippet: {
      html: `<div class="pf-c-dropdown pf-m-expanded">
  <button class="pf-c-dropdown__toggle" type="button" id="dropdown-panel-button" aria-expanded="true">
    <span class="pf-c-dropdown__toggle-text">Expanded dropdown</span>
    <span class="pf-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-c-dropdown__menu">[Panel contents here]</div>
</div>`,
    },
  },
  {
    displayName: "primary-toggle",
    picture: {
      src: "./pictures/dropdown/primary-toggle.png",
      width: 429,
      height: 310,
    },
    snippet: {
      html: `<div class="pf-c-dropdown">
  <button class="pf-c-dropdown__toggle pf-m-primary" type="button" id="dropdown-primary-toggle-button" aria-expanded="false">
    <span class="pf-c-dropdown__toggle-text">Collapsed dropdown</span>
    <span class="pf-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul class="pf-c-dropdown__menu" aria-labelledby="dropdown-primary-toggle-button" hidden>
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
<div class="pf-c-dropdown pf-m-expanded">
  <button class="pf-c-dropdown__toggle pf-m-primary" type="button" id="dropdown-primary-toggle-expanded-button" aria-expanded="true">
    <span class="pf-c-dropdown__toggle-text">Expanded dropdown</span>
    <span class="pf-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul class="pf-c-dropdown__menu" aria-labelledby="dropdown-primary-toggle-expanded-button">
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
</div>`,
    },
  },
  {
    displayName: "split-button-action",
    picture: {
      src: "./pictures/dropdown/split-button-action.png",
      width: 332,
      height: 210,
    },
    snippet: {
      html: `<div class="pf-c-dropdown">
  <div class="pf-c-dropdown__toggle pf-m-split-button pf-m-action">
    <button class="pf-c-dropdown__toggle-button" type="button">Action</button>
    <button class="pf-c-dropdown__toggle-button" type="button" aria-expanded="false" id="dropdown-split-button-action-toggle-button" aria-label="Select">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-c-dropdown__menu" aria-labelledby="dropdown-split-button-action-toggle-button" hidden>
    <li>
      <button class="pf-c-dropdown__menu-item" type="button">Action</button>
    </li>
    <li>
      <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
    </li>
    <li>
      <button class="pf-c-dropdown__menu-item" type="button">Other action</button>
    </li>
  </ul>
</div>
<div class="pf-c-dropdown pf-m-expanded">
  <div class="pf-c-dropdown__toggle pf-m-split-button pf-m-action">
    <button class="pf-c-dropdown__toggle-button" type="button">Action</button>
    <button class="pf-c-dropdown__toggle-button" type="button" aria-expanded="true" id="dropdown-split-button-action-expanded-toggle-button" aria-label="Select">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-c-dropdown__menu" aria-labelledby="dropdown-split-button-action-expanded-toggle-button">
    <li>
      <button class="pf-c-dropdown__menu-item" type="button">Action</button>
    </li>
    <li>
      <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
    </li>
    <li>
      <button class="pf-c-dropdown__menu-item" type="button">Other action</button>
    </li>
  </ul>
</div>
<div class="pf-c-dropdown">
  <div class="pf-c-dropdown__toggle pf-m-split-button pf-m-action">
    <button class="pf-c-dropdown__toggle-button" type="button" aria-label="Settings">
      <i class="fas fa-cog" aria-hidden="true"></i>
    </button>
    <button class="pf-c-dropdown__toggle-button" type="button" aria-expanded="false" id="dropdown-split-button-action-icon-toggle-button" aria-label="Select">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-c-dropdown__menu" aria-labelledby="dropdown-split-button-action-icon-toggle-button" hidden>
    <li>
      <button class="pf-c-dropdown__menu-item" type="button">Action</button>
    </li>
    <li>
      <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
    </li>
    <li>
      <button class="pf-c-dropdown__menu-item" type="button">Other action</button>
    </li>
  </ul>
</div>
<div class="pf-c-dropdown pf-m-expanded">
  <div class="pf-c-dropdown__toggle pf-m-split-button pf-m-action">
    <button class="pf-c-dropdown__toggle-button" type="button" aria-label="Settings">
      <i class="fas fa-cog" aria-hidden="true"></i>
    </button>
    <button class="pf-c-dropdown__toggle-button" type="button" aria-expanded="true" id="dropdown-split-button-action-icon-expanded-toggle-button" aria-label="Select">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-c-dropdown__menu" aria-labelledby="dropdown-split-button-action-icon-expanded-toggle-button">
    <li>
      <button class="pf-c-dropdown__menu-item pf-m-icon" type="button">
        <span class="pf-c-dropdown__menu-item-icon">
          <i class="fas fa-cog" aria-hidden="true"></i>
        </span>Action</button>
    </li>
    <li>
      <button class="pf-c-dropdown__menu-item pf-m-icon" type="button" disabled>
        <span class="pf-c-dropdown__menu-item-icon">
          <i class="fas fa-bell" aria-hidden="true"></i>
        </span>Disabled action</button>
    </li>
    <li>
      <button class="pf-c-dropdown__menu-item pf-m-icon" type="button">
        <span class="pf-c-dropdown__menu-item-icon">
          <i class="fas fa-cubes" aria-hidden="true"></i>
        </span>Other action</button>
    </li>
  </ul>
</div>`,
    },
  },
  {
    displayName: "split-button-checkbox",
    picture: {
      src: "./pictures/dropdown/split-button-checkbox.png",
      width: 293,
      height: 210,
    },
    snippet: {
      html: `<div class="pf-c-dropdown">
  <div class="pf-c-dropdown__toggle pf-m-disabled pf-m-split-button">
    <label class="pf-c-dropdown__toggle-check" for="dropdown-split-button-disabled-toggle-check">
      <input type="checkbox" id="dropdown-split-button-disabled-toggle-check" disabled aria-label="Select all" />
    </label>
    <button class="pf-c-dropdown__toggle-button" type="button" aria-expanded="false" id="dropdown-split-button-disabled-toggle-button" aria-label="Select" disabled>
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-c-dropdown__menu" aria-labelledby="dropdown-split-button-disabled-toggle-button" hidden>
    <li>
      <button class="pf-c-dropdown__menu-item" type="button">Action</button>
    </li>
    <li>
      <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
    </li>
    <li>
      <button class="pf-c-dropdown__menu-item" type="button">Other action</button>
    </li>
  </ul>
</div>
<div class="pf-c-dropdown">
  <div class="pf-c-dropdown__toggle pf-m-split-button">
    <label class="pf-c-dropdown__toggle-check" for="dropdown-split-button-toggle-check">
      <input type="checkbox" id="dropdown-split-button-toggle-check" aria-label="Select all" />
    </label>
    <button class="pf-c-dropdown__toggle-button" type="button" aria-expanded="false" id="dropdown-split-button-toggle-button" aria-label="Select">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-c-dropdown__menu" aria-labelledby="dropdown-split-button-toggle-button" hidden>
    <li>
      <button class="pf-c-dropdown__menu-item" type="button">Action</button>
    </li>
    <li>
      <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
    </li>
    <li>
      <button class="pf-c-dropdown__menu-item" type="button">Other action</button>
    </li>
  </ul>
</div>
<div class="pf-c-dropdown pf-m-expanded">
  <div class="pf-c-dropdown__toggle pf-m-split-button">
    <label class="pf-c-dropdown__toggle-check" for="dropdown-split-button-expanded-toggle-check">
      <input type="checkbox" id="dropdown-split-button-expanded-toggle-check" aria-label="Select all" />
    </label>
    <button class="pf-c-dropdown__toggle-button" type="button" aria-expanded="true" id="dropdown-split-button-expanded-toggle-button" aria-label="Select">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-c-dropdown__menu" aria-labelledby="dropdown-split-button-expanded-toggle-button">
    <li>
      <button class="pf-c-dropdown__menu-item" type="button">Action</button>
    </li>
    <li>
      <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
    </li>
    <li>
      <button class="pf-c-dropdown__menu-item" type="button">Other action</button>
    </li>
  </ul>
</div>`,
    },
  },
  {
    displayName: "split-button-checkbox-with-toggle-text",
    picture: {
      src: "./pictures/dropdown/split-button-checkbox-with-toggle-text.png",
      width: 293,
      height: 69,
    },
    snippet: {
      html: `<div class="pf-c-dropdown">
  <div class="pf-c-dropdown__toggle pf-m-split-button">
    <label class="pf-c-dropdown__toggle-check" for="dropdown-split-button-text-toggle-check">
      <input type="checkbox" id="dropdown-split-button-text-toggle-check" aria-label="Unselect all" checked aria-labelledby="dropdown-split-button-text-toggle-check dropdown-split-button-text-toggle-check-text" />
      <span class="pf-c-dropdown__toggle-text" aria-hidden="true" id="dropdown-split-button-text-toggle-check-text">10 selected</span>
    </label>
    <button class="pf-c-dropdown__toggle-button" type="button" aria-expanded="false" id="dropdown-split-button-text-toggle-button" aria-label="Select">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-c-dropdown__menu" aria-labelledby="dropdown-split-button-text-toggle-button" hidden>
    <li>
      <button class="pf-c-dropdown__menu-item" type="button">Select all</button>
    </li>
    <li>
      <button class="pf-c-dropdown__menu-item" type="button">Select none</button>
    </li>
    <li>
      <button class="pf-c-dropdown__menu-item" type="button">Other action</button>
    </li>
  </ul>
</div>`,
    },
  },
  {
    displayName: "with-groups",
    picture: {
      src: "./pictures/dropdown/with-groups.png",
      width: 293,
      height: 440,
    },
    snippet: {
      html: `<div class="pf-c-dropdown pf-m-expanded">
  <button class="pf-c-dropdown__toggle" type="button" id="dropdown-groups-button" aria-expanded="true">
    <span class="pf-c-dropdown__toggle-text">Groups</span>
    <span class="pf-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-c-dropdown__menu" aria-labelledby="dropdown-groups-button">
    <section class="pf-c-dropdown__group">
      <ul>
        <li>
          <button class="pf-c-dropdown__menu-item" type="button" href="#">Link</button>
        </li>
        <li>
          <button class="pf-c-dropdown__menu-item" type="button">Action</button>
        </li>
      </ul>
    </section>
    <section class="pf-c-dropdown__group">
      <h1 class="pf-c-dropdown__group-title">Group 2</h1>
      <ul>
        <li>
          <button class="pf-c-dropdown__menu-item" type="button" href="#">Group 2 link</button>
        </li>
        <li>
          <button class="pf-c-dropdown__menu-item" type="button">Group 2 action</button>
        </li>
      </ul>
    </section>
    <section class="pf-c-dropdown__group">
      <h1 class="pf-c-dropdown__group-title">Group 3</h1>
      <ul>
        <li>
          <button class="pf-c-dropdown__menu-item" type="button" href="#">Group 3 link</button>
        </li>
        <li>
          <button class="pf-c-dropdown__menu-item" type="button">Group 3 action</button>
        </li>
      </ul>
    </section>
  </div>
</div>`,
    },
  },
  {
    displayName: "with-groups-and-dividers-between-groups",
    picture: {
      src: "./pictures/dropdown/with-groups-and-dividers-between-groups.png",
      width: 293,
      height: 440,
    },
    snippet: {
      html: `<div class="pf-c-dropdown pf-m-expanded">
  <button class="pf-c-dropdown__toggle" type="button" id="dropdown-groups-and-dividers-between-groups-button" aria-expanded="true">
    <span class="pf-c-dropdown__toggle-text">Groups</span>
    <span class="pf-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-c-dropdown__menu" aria-labelledby="dropdown-groups-and-dividers-between-groups-button">
    <section class="pf-c-dropdown__group">
      <ul>
        <li>
          <button class="pf-c-dropdown__menu-item" type="button" href="#">Link</button>
        </li>
        <li>
          <button class="pf-c-dropdown__menu-item" type="button">Action</button>
        </li>
      </ul>
    </section>
    <hr class="pf-c-divider" />
    <section class="pf-c-dropdown__group">
      <h1 class="pf-c-dropdown__group-title">Group 2</h1>
      <ul>
        <li>
          <button class="pf-c-dropdown__menu-item" type="button" href="#">Group 2 link</button>
        </li>
        <li>
          <button class="pf-c-dropdown__menu-item" type="button">Group 2 action</button>
        </li>
      </ul>
    </section>
    <hr class="pf-c-divider" />
    <section class="pf-c-dropdown__group">
      <h1 class="pf-c-dropdown__group-title">Group 3</h1>
      <ul>
        <li>
          <button class="pf-c-dropdown__menu-item" type="button" href="#">Group 3 link</button>
        </li>
        <li>
          <button class="pf-c-dropdown__menu-item" type="button">Group 3 action</button>
        </li>
      </ul>
    </section>
  </div>
</div>`,
    },
  },
  {
    displayName: "with-groups-and-dividers-between-items",
    picture: {
      src: "./pictures/dropdown/with-groups-and-dividers-between-items.png",
      width: 293,
      height: 440,
    },
    snippet: {
      html: `<div class="pf-c-dropdown pf-m-expanded">
  <button class="pf-c-dropdown__toggle" type="button" id="dropdown-groups-and-dividers-between-items-button" aria-expanded="true">
    <span class="pf-c-dropdown__toggle-text">Groups</span>
    <span class="pf-c-dropdown__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-c-dropdown__menu" aria-labelledby="dropdown-groups-and-dividers-between-items-button">
    <section class="pf-c-dropdown__group">
      <ul>
        <li>
          <button class="pf-c-dropdown__menu-item" type="button" href="#">Link</button>
        </li>
        <li>
          <button class="pf-c-dropdown__menu-item" type="button">Action</button>
        </li>
        <li class="pf-c-divider" role="separator"></li>
      </ul>
    </section>
    <section class="pf-c-dropdown__group">
      <h1 class="pf-c-dropdown__group-title">Group 2</h1>
      <ul>
        <li>
          <button class="pf-c-dropdown__menu-item" type="button" href="#">Group 2 link</button>
        </li>
        <li>
          <button class="pf-c-dropdown__menu-item" type="button">Group 2 action</button>
        </li>
        <li class="pf-c-divider" role="separator"></li>
      </ul>
    </section>
    <section class="pf-c-dropdown__group">
      <h1 class="pf-c-dropdown__group-title">Group 3</h1>
      <ul>
        <li>
          <button class="pf-c-dropdown__menu-item" type="button" href="#">Group 3 link</button>
        </li>
        <li>
          <button class="pf-c-dropdown__menu-item" type="button">Group 3 action</button>
        </li>
      </ul>
    </section>
  </div>
</div>`,
    },
  },
];
