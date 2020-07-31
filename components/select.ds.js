export default {
  displayName: "select",
  name: "select",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/select/",
};

export const variants = [
  {
    displayName: "checkbox",
    picture: {
      src: "./pictures/select/checkbox.png",
      width: 293,
      height: 69,
    },
    snippet: {
      html: `<div class="pf-c-select">
  <span id="select-checkbox-label" hidden>Choose one</span>
  <button class="pf-c-select__toggle" type="button" id="select-checkbox-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="select-checkbox-label select-checkbox-toggle">
    <div class="pf-c-select__toggle-wrapper">
      <span class="pf-c-select__toggle-text">Filter by status</span>
    </div>
    <span class="pf-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-c-select__menu" hidden>
    <fieldset class="pf-c-select__menu-fieldset" aria-label="Select input">
      <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="select-checkbox-active">
        <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-active" name="select-checkbox-active" />
        <span class="pf-c-check__label">Active</span>
        <div class="pf-c-check__description">This is a description</div>
      </label>
      <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="select-checkbox-cancelled">
        <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-cancelled" name="select-checkbox-cancelled" />
        <span class="pf-c-check__label">Cancelled</span>
        <div class="pf-c-check__description">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>
      </label>
      <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-paused">
        <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-paused" name="select-checkbox-paused" />
        <span class="pf-c-check__label">Paused</span>
      </label>
      <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-warning">
        <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-warning" name="select-checkbox-warning" />
        <span class="pf-c-check__label">Warning</span>
      </label>
      <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-restarted">
        <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-restarted" name="select-checkbox-restarted" />
        <span class="pf-c-check__label">Restarted</span>
      </label>
    </fieldset>
  </div>
</div>`,
    },
  },
  {
    displayName: "checkbox-expanded",
    picture: {
      src: "./pictures/select/checkbox-expanded.png",
      width: 293,
      height: 270,
    },
    snippet: {
      html: `<div class="pf-c-select pf-m-expanded">
  <span id="select-checkbox-expanded-label" hidden>Choose one</span>
  <button class="pf-c-select__toggle" type="button" id="select-checkbox-expanded-toggle" aria-haspopup="true" aria-expanded="true" aria-labelledby="select-checkbox-expanded-label select-checkbox-expanded-toggle">
    <div class="pf-c-select__toggle-wrapper">
      <span class="pf-c-select__toggle-text">Filter</span>
    </div>
    <span class="pf-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-c-select__menu">
    <fieldset class="pf-c-select__menu-fieldset" aria-label="Select input">
      <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-expanded-active">
        <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-active" name="select-checkbox-expanded-active" />
        <span class="pf-c-check__label">Active</span>
      </label>
      <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-expanded-cancelled">
        <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-cancelled" name="select-checkbox-expanded-cancelled" checked />
        <span class="pf-c-check__label">Cancelled</span>
      </label>
      <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-expanded-paused">
        <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-paused" name="select-checkbox-expanded-paused" checked />
        <span class="pf-c-check__label">Paused</span>
      </label>
      <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-expanded-warning">
        <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-warning" name="select-checkbox-expanded-warning" />
        <span class="pf-c-check__label">Warning</span>
      </label>
      <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-expanded-restarted">
        <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-restarted" name="select-checkbox-expanded-restarted" checked />
        <span class="pf-c-check__label">Restarted</span>
      </label>
    </fieldset>
  </div>
</div>`,
    },
  },
  {
    displayName: "checkbox-expanded-and-selected-with-groups",
    picture: {
      src: "./pictures/select/checkbox-expanded-and-selected-with-groups.png",
      width: 293,
      height: 460,
    },
    snippet: {
      html: `<div class="pf-c-select pf-m-expanded">
  <span id="select-checkbox-expanded-selected-label" hidden>Choose one</span>
  <button class="pf-c-select__toggle" type="button" id="select-checkbox-expanded-selected-toggle" aria-haspopup="true" aria-expanded="true" aria-labelledby="select-checkbox-expanded-selected-label select-checkbox-expanded-selected-toggle">
    <div class="pf-c-select__toggle-wrapper">
      <span class="pf-c-select__toggle-text">Filter by status</span>
    </div>
    <span class="pf-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-c-select__menu">
    <div class="pf-c-select__menu-group">
      <div class="pf-c-select__menu-group-title" aria-hidden="true" id="select-checkbox-expanded-selected-group-status">Status</div>
      <fieldset class="pf-c-select__menu-fieldset" aria-labelledby="select-checkbox-expanded-selected-group-status">
        <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-expanded-selected-running">
          <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-selected-running" name="running" />
          <span class="pf-c-check__label">Running</span>
        </label>
        <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-expanded-selected-stopped">
          <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-selected-stopped" name="stopped" checked />
          <span class="pf-c-check__label">Stopped</span>
        </label>
        <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-expanded-selected-down">
          <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-selected-down" name="down" checked />
          <span class="pf-c-check__label">Down</span>
        </label>
        <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-expanded-selected-degraded">
          <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-selected-degraded" name="degraded" />
          <span class="pf-c-check__label">Degraded</span>
        </label>
        <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-expanded-selected-needsMaintenance">
          <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-selected-needsMaintenance" name="needsMaintenance" checked />
          <span class="pf-c-check__label">Needs maintenance</span>
        </label>
      </fieldset>
    </div>
    <div class="pf-c-select__menu-group">
      <div class="pf-c-select__menu-group-title" aria-hidden="true" id="select-checkbox-expanded-selected-group-vendor">Vendor</div>
      <fieldset class="pf-c-select__menu-fieldset" aria-labelledby="select-checkbox-expanded-selected-group-vendor">
        <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-expanded-selected-dell">
          <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-selected-dell" name="dell" />
          <span class="pf-c-check__label">Dell</span>
        </label>
        <label class="pf-c-check pf-c-select__menu-item pf-m-disabled" for="select-checkbox-expanded-selected-samsung">
          <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-selected-samsung" name="samsung" disabled />
          <span class="pf-c-check__label pf-m-disabled">Samsung</span>
        </label>
        <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-expanded-selected-hp">
          <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-selected-hp" name="hp" />
          <span class="pf-c-check__label">Hewlett-Packard</span>
        </label>
      </fieldset>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "checkbox-expanded-and-selected-with-groups-and-filter",
    picture: {
      src:
        "./pictures/select/checkbox-expanded-and-selected-with-groups-and-filter.png",
      width: 293,
      height: 530,
    },
    snippet: {
      html: `<div class="pf-c-select pf-m-expanded">
  <span id="select-checkbox-expanded-selected-filter-example-label" hidden>Choose one</span>
  <button class="pf-c-select__toggle" type="button" id="select-checkbox-expanded-selected-filter-example-toggle" aria-haspopup="true" aria-expanded="true" aria-labelledby="select-checkbox-expanded-selected-filter-example-label select-checkbox-expanded-selected-filter-example-toggle">
    <div class="pf-c-select__toggle-wrapper">
      <span class="pf-c-select__toggle-text">Filter by status</span>
    </div>
    <span class="pf-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-c-select__menu">
    <div class="pf-c-select__menu-search">
      <input class="pf-c-form-control pf-m-search" type="search" id="select-checkbox-expanded-selected-filter-example-search-input" name="select-checkbox-expanded-selected-filter-example-search-input" aria-label="Search" />
    </div>
    <hr class="pf-c-divider" />
    <div class="pf-c-select__menu-group">
      <div class="pf-c-select__menu-group-title" aria-hidden="true" id="select-checkbox-expanded-selected-filter-example-group-status">Status</div>
      <fieldset class="pf-c-select__menu-fieldset" aria-labelledby="select-checkbox-expanded-selected-filter-example-group-status">
        <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-expanded-selected-filter-example-running">
          <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-selected-filter-example-running" name="running" />
          <span class="pf-c-check__label">Running</span>
        </label>
        <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-expanded-selected-filter-example-stopped">
          <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-selected-filter-example-stopped" name="stopped" checked />
          <span class="pf-c-check__label">Stopped</span>
        </label>
        <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-expanded-selected-filter-example-down">
          <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-selected-filter-example-down" name="down" checked />
          <span class="pf-c-check__label">Down</span>
        </label>
        <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-expanded-selected-filter-example-degraded">
          <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-selected-filter-example-degraded" name="degraded" />
          <span class="pf-c-check__label">Degraded</span>
        </label>
        <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-expanded-selected-filter-example-needsMaintenance">
          <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-selected-filter-example-needsMaintenance" name="needsMaintenance" checked />
          <span class="pf-c-check__label">Needs maintenance</span>
        </label>
      </fieldset>
    </div>
    <div class="pf-c-select__menu-group">
      <div class="pf-c-select__menu-group-title" aria-hidden="true" id="select-checkbox-expanded-selected-filter-example-group-vendor">Vendor</div>
      <fieldset class="pf-c-select__menu-fieldset" aria-labelledby="select-checkbox-expanded-selected-filter-example-group-vendor">
        <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-expanded-selected-filter-example-dell">
          <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-selected-filter-example-dell" name="dell" />
          <span class="pf-c-check__label">Dell</span>
        </label>
        <label class="pf-c-check pf-c-select__menu-item pf-m-disabled" for="select-checkbox-expanded-selected-filter-example-samsung">
          <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-selected-filter-example-samsung" name="samsung" disabled />
          <span class="pf-c-check__label pf-m-disabled">Samsung</span>
        </label>
        <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-expanded-selected-filter-example-hp">
          <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-expanded-selected-filter-example-hp" name="hp" />
          <span class="pf-c-check__label">Hewlett-Packard</span>
        </label>
      </fieldset>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "checkbox-expanded-without-badge",
    picture: {
      src: "./pictures/select/checkbox-expanded-without-badge.png",
      width: 293,
      height: 270,
    },
    snippet: {
      html: `<div class="pf-c-select pf-m-expanded">
  <span id="select-checkbox-without-badge-label" hidden>Choose one</span>
  <button class="pf-c-select__toggle" type="button" id="select-checkbox-without-badge-toggle" aria-haspopup="true" aria-expanded="true" aria-labelledby="select-checkbox-without-badge-label select-checkbox-without-badge-toggle">
    <div class="pf-c-select__toggle-wrapper">
      <span class="pf-c-select__toggle-text">Filter</span>
    </div>
    <span class="pf-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-c-select__menu">
    <fieldset class="pf-c-select__menu-fieldset" aria-label="Select input">
      <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-without-badge-active">
        <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-without-badge-active" name="select-checkbox-without-badge-active" />
        <span class="pf-c-check__label">Active</span>
      </label>
      <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-without-badge-cancelled">
        <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-without-badge-cancelled" name="select-checkbox-without-badge-cancelled" checked />
        <span class="pf-c-check__label">Cancelled</span>
      </label>
      <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-without-badge-paused">
        <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-without-badge-paused" name="select-checkbox-without-badge-paused" checked />
        <span class="pf-c-check__label">Paused</span>
      </label>
      <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-without-badge-warning">
        <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-without-badge-warning" name="select-checkbox-without-badge-warning" />
        <span class="pf-c-check__label">Warning</span>
      </label>
      <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-without-badge-restarted">
        <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-without-badge-restarted" name="select-checkbox-without-badge-restarted" checked />
        <span class="pf-c-check__label">Restarted</span>
      </label>
    </fieldset>
  </div>
</div>`,
    },
  },
  {
    displayName: "checkbox-with-description",
    picture: {
      src: "./pictures/select/checkbox-with-description.png",
      width: 293,
      height: 350,
    },
    snippet: {
      html: `<div class="pf-c-select pf-m-expanded">
  <span id="select-checkbox-description-label" hidden>Choose one</span>
  <button class="pf-c-select__toggle" type="button" id="select-checkbox-description-toggle" aria-haspopup="true" aria-expanded="true" aria-labelledby="select-checkbox-description-label select-checkbox-description-toggle">
    <div class="pf-c-select__toggle-wrapper">
      <span class="pf-c-select__toggle-text">Filter</span>
    </div>
    <span class="pf-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-c-select__menu">
    <fieldset class="pf-c-select__menu-fieldset" aria-label="Select input">
      <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="select-checkbox-description-active">
        <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-description-active" name="select-checkbox-description-active" />
        <span class="pf-c-check__label">Active</span>
        <div class="pf-c-check__description">This is a description</div>
      </label>
      <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="select-checkbox-description-cancelled">
        <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-description-cancelled" name="select-checkbox-description-cancelled" />
        <span class="pf-c-check__label">Cancelled</span>
        <div class="pf-c-check__description">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>
      </label>
      <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-description-paused">
        <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-description-paused" name="select-checkbox-description-paused" />
        <span class="pf-c-check__label">Paused</span>
      </label>
      <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-description-warning">
        <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-description-warning" name="select-checkbox-description-warning" />
        <span class="pf-c-check__label">Warning</span>
      </label>
      <label class="pf-c-check pf-c-select__menu-item" for="select-checkbox-description-restarted">
        <input class="pf-c-check__input" type="checkbox" type="checkbox" id="select-checkbox-description-restarted" name="select-checkbox-description-restarted" />
        <span class="pf-c-check__label">Restarted</span>
      </label>
    </fieldset>
  </div>
</div>`,
    },
  },
  {
    displayName: "disabled",
    picture: {
      src: "./pictures/select/disabled.png",
      width: 293,
      height: 69,
    },
    snippet: {
      html: `<div class="pf-c-select">
  <span id="select-disabled-label" hidden>Choose one</span>
  <button class="pf-c-select__toggle" type="button" id="select-disabled-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="select-disabled-label select-disabled-toggle" disabled>
    <div class="pf-c-select__toggle-wrapper">
      <span class="pf-c-select__toggle-text">Filter by birth month</span>
    </div>
    <span class="pf-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul class="pf-c-select__menu" aria-labelledby="select-disabled-label" hidden>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Running</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Stopped</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Down</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Degraded</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Needs Maintenance</button>
    </li>
  </ul>
</div>`,
    },
  },
  {
    displayName: "disabled-with-typeahead",
    picture: {
      src: "./pictures/select/disabled-with-typeahead.png",
      width: 293,
      height: 69,
    },
    snippet: {
      html: `<div class="pf-c-select">
  <span id="select-single-typeahead-disabled-label" hidden>Choose a state</span>
  <div class="pf-c-select__toggle pf-m-disabled pf-m-typeahead">
    <div class="pf-c-select__toggle-wrapper">
      <input class="pf-c-form-control pf-c-select__toggle-typeahead" type="text" id="select-single-typeahead-disabled-typeahead" aria-label="Type to filter" placeholder="Choose a state" disabled />
    </div>
    <button class="pf-c-button pf-m-plain pf-c-select__toggle-button" type="button" id="select-single-typeahead-disabled-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="select-single-typeahead-disabled-label select-single-typeahead-disabled-toggle" aria-label="Select" disabled>
      <i class="fas fa-caret-down pf-c-select__toggle-arrow" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-c-select__menu" aria-labelledby="select-single-typeahead-disabled-label" hidden>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Alabama</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Florida</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">New Jersey</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">New Mexico</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">New York</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">North Carolina</button>
    </li>
  </ul>
</div>`,
    },
  },
  {
    displayName: "favorites",
    picture: {
      src: "./pictures/select/favorites.png",
      width: 293,
      height: 650,
    },
    snippet: {
      html: `<div class="pf-c-select pf-m-expanded">
  <span id="select-favorites-label" hidden>Choose one</span>
  <button class="pf-c-select__toggle" type="button" id="select-favorites-toggle" aria-haspopup="true" aria-expanded="true" aria-labelledby="select-favorites-label select-favorites-toggle">
    <div class="pf-c-select__toggle-wrapper">
      <span class="pf-c-select__toggle-text">Favorites</span>
    </div>
    <span class="pf-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-c-select__menu" aria-labelledby="select-favorites-label">
    <div class="pf-c-select__menu-search">
      <input class="pf-c-form-control pf-m-search" type="search" id="select-favorites-search-input" name="select-favorites-search-input" aria-label="Search" />
    </div>
    <hr class="pf-c-divider" />
    <div class="pf-c-select__menu-group">
      <div class="pf-c-select__menu-group-title" aria-hidden="true">Favorites</div>
      <ul>
        <li class="pf-c-select__menu-wrapper pf-m-favorite">
          <button class="pf-c-select__menu-item pf-m-link pf-m-description" aria-label="Not starred">
            <span class="pf-c-select__menu-item-main">Item 1</span>
            <span class="pf-c-select__menu-item-description">This is a description.</span>
          </button>
          <button class="pf-c-select__menu-item pf-m-action pf-m-favorite-action" aria-label="Starred">
            <span class="pf-c-select__menu-item-action-icon">
              <i class="fas fa-star" aria-hidden="true"></i>
            </span>
          </button>
        </li>
        <li class="pf-c-select__menu-wrapper pf-m-favorite">
          <button class="pf-c-select__menu-item pf-m-link" aria-label="Not starred">Item 4</button>
          <button class="pf-c-select__menu-item pf-m-action pf-m-favorite-action" aria-label="Starred">
            <span class="pf-c-select__menu-item-action-icon">
              <i class="fas fa-star" aria-hidden="true"></i>
            </span>
          </button>
        </li>
      </ul>
    </div>
    <hr class="pf-c-divider" />
    <div class="pf-c-select__menu-group">
      <div class="pf-c-select__menu-group-title" aria-hidden="true">Group 1</div>
      <ul>
        <li class="pf-c-select__menu-wrapper pf-m-favorite">
          <button class="pf-c-select__menu-item pf-m-link pf-m-description" aria-label="Not starred">
            <span class="pf-c-select__menu-item-main">Item 1</span>
            <span class="pf-c-select__menu-item-description">This is a description.</span>
          </button>
          <button class="pf-c-select__menu-item pf-m-action pf-m-favorite-action" aria-label="Starred">
            <span class="pf-c-select__menu-item-action-icon">
              <i class="fas fa-star" aria-hidden="true"></i>
            </span>
          </button>
        </li>
        <li class="pf-c-select__menu-wrapper">
          <button class="pf-c-select__menu-item pf-m-selected pf-m-link" aria-selected="true">Item 2
            <span class="pf-c-select__menu-item-icon">
              <i class="fas fa-check" aria-hidden="true"></i>
            </span>
          </button>
          <button class="pf-c-select__menu-item pf-m-action pf-m-favorite-action">
            <span class="pf-c-select__menu-item-action-icon">
              <i class="fas fa-star" aria-hidden="true"></i>
            </span>
          </button>
        </li>
        <li class="pf-c-select__menu-wrapper pf-m-disabled">
          <button class="pf-c-select__menu-item pf-m-link" disabled>Item 3 (disabled)</button>
          <button class="pf-c-select__menu-item pf-m-action pf-m-favorite-action" disabled>
            <span class="pf-c-select__menu-item-action-icon">
              <i class="fas fa-star" aria-hidden="true"></i>
            </span>
          </button>
        </li>
      </ul>
    </div>
    <hr class="pf-c-divider" />
    <div class="pf-c-select__menu-group">
      <div class="pf-c-select__menu-group-title" aria-hidden="true">Group 2</div>
      <ul>
        <li class="pf-c-select__menu-wrapper pf-m-favorite">
          <button class="pf-c-select__menu-item pf-m-link" aria-label="Not starred">Item 4</button>
          <button class="pf-c-select__menu-item pf-m-action pf-m-favorite-action" aria-label="Starred">
            <span class="pf-c-select__menu-item-action-icon">
              <i class="fas fa-star" aria-hidden="true"></i>
            </span>
          </button>
        </li>
        <li class="pf-c-select__menu-wrapper">
          <button class="pf-c-select__menu-item pf-m-link pf-m-description">
            <span class="pf-c-select__menu-item-main">Item 5</span>
            <span class="pf-c-select__menu-item-description">This is a description.</span>
          </button>
          <button class="pf-c-select__menu-item pf-m-action pf-m-favorite-action">
            <span class="pf-c-select__menu-item-action-icon">
              <i class="fas fa-star" aria-hidden="true"></i>
            </span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "icon",
    picture: {
      src: "./pictures/select/icon.png",
      width: 293,
      height: 69,
    },
    snippet: {
      html: `<div class="pf-c-select">
  <span id="select-icon-label" hidden>Choose one</span>
  <button class="pf-c-select__toggle" type="button" id="select-icon-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="select-icon-label select-icon-toggle">
    <div class="pf-c-select__toggle-wrapper">
      <span class="pf-c-select__toggle-icon">
        <i class="fas fa-filter" aria-hidden="true"></i>
      </span>
      <span class="pf-c-select__toggle-text">Filter by status</span>
    </div>
    <span class="pf-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul class="pf-c-select__menu" aria-labelledby="select-icon-label" hidden>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Running</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Stopped</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Down</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Degraded</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Needs Maintenance</button>
    </li>
  </ul>
</div>`,
    },
  },
  {
    displayName: "multi-with-typeahead-chip-group-collapsed",
    picture: {
      src: "./pictures/select/multi-with-typeahead-chip-group-collapsed.png",
      width: 684,
      height: 210,
    },
    snippet: {
      html: `<div class="pf-c-select pf-m-expanded">
  <span id="select-multi-typeahead-expanded-selected-label" hidden>New</span>
  <div class="pf-c-select__toggle pf-m-typeahead">
    <div class="pf-c-select__toggle-wrapper">
      <div class="pf-c-chip-group">
        <ul class="pf-c-chip-group__list" role="list" aria-label="Chip group list">
          <li class="pf-c-chip-group__list-item">
            <div class="pf-c-chip">
              <span class="pf-c-chip__text" id="select-multi-typeahead-expanded-selected-chip_one">Arkansas</span>
              <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="remove_select-multi-typeahead-expanded-selected_chip_one select-multi-typeahead-expanded-selected-chip_one" aria-label="Remove" id="remove_select-multi-typeahead-expanded-selected_chip_one">
                <i class="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </li>
          <li class="pf-c-chip-group__list-item">
            <div class="pf-c-chip">
              <span class="pf-c-chip__text" id="select-multi-typeahead-expanded-selected-chip_two">Massachusetts</span>
              <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="remove_select-multi-typeahead-expanded-selected_chip_two select-multi-typeahead-expanded-selected-chip_two" aria-label="Remove" id="remove_select-multi-typeahead-expanded-selected_chip_two">
                <i class="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </li>
          <li class="pf-c-chip-group__list-item">
            <div class="pf-c-chip">
              <span class="pf-c-chip__text" id="select-multi-typeahead-expanded-selected-chip_three">New Mexico</span>
              <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="remove_select-multi-typeahead-expanded-selected_chip_three select-multi-typeahead-expanded-selected-chip_three" aria-label="Remove" id="remove_select-multi-typeahead-expanded-selected_chip_three">
                <i class="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </li>
          <li class="pf-c-chip-group__list-item">
            <button class="pf-c-chip pf-m-overflow">
              <span class="pf-c-chip__text">2 more</span>
            </button>
          </li>
        </ul>
      </div>
      <input class="pf-c-form-control pf-c-select__toggle-typeahead" type="text" id="select-multi-typeahead-expanded-selected-typeahead" aria-label="Type to filter" value="New" />
    </div>
    <button class="pf-c-button pf-m-plain pf-c-select__toggle-clear" type="button" aria-label="Clear all">
      <i class="fas fa-times-circle" aria-hidden="true"></i>
    </button>
    <button class="pf-c-button pf-m-plain pf-c-select__toggle-button" type="button" id="select-multi-typeahead-expanded-selected-toggle" aria-haspopup="true" aria-expanded="true" aria-labelledby="select-multi-typeahead-expanded-selected-label select-multi-typeahead-expanded-selected-toggle" aria-label="Select">
      <i class="fas fa-caret-down pf-c-select__toggle-arrow" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-c-select__menu" aria-labelledby="select-multi-typeahead-expanded-selected-label">
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">
        <mark class="pf-c-select__menu-item--match">New</mark>Jersey</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">
        <mark class="pf-c-select__menu-item--match">New</mark>York</button>
    </li>
  </ul>
</div>`,
    },
  },
  {
    displayName: "multi-with-typeahead-chip-group-expanded",
    picture: {
      src: "./pictures/select/multi-with-typeahead-chip-group-expanded.png",
      width: 796,
      height: 365,
    },
    snippet: {
      html: `<div class="pf-c-select pf-m-expanded">
  <span id="select-multi-typeahead-expanded-label" hidden>Choose states</span>
  <div class="pf-c-select__toggle pf-m-typeahead">
    <div class="pf-c-select__toggle-wrapper">
      <div class="pf-c-chip-group">
        <ul class="pf-c-chip-group__list" role="list" aria-label="Chip group list">
          <li class="pf-c-chip-group__list-item">
            <div class="pf-c-chip">
              <span class="pf-c-chip__text" id="select-multi-typeahead-expanded-chip_one">Arkansas</span>
              <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="remove_select-multi-typeahead-expanded_chip_one select-multi-typeahead-expanded-chip_two" aria-label="Remove" id="remove_select-multi-typeahead-expanded_chip_one">
                <i class="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </li>
          <li class="pf-c-chip-group__list-item">
            <div class="pf-c-chip">
              <span class="pf-c-chip__text" id="select-multi-typeahead-expanded-chip_two">Massachusetts</span>
              <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="remove_select-multi-typeahead-expanded_chip_two select-multi-typeahead-expanded-chip_two" aria-label="Remove" id="remove_select-multi-typeahead-expanded_chip_two">
                <i class="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </li>
          <li class="pf-c-chip-group__list-item">
            <div class="pf-c-chip">
              <span class="pf-c-chip__text" id="select-multi-typeahead-expanded-chip_three">New Mexico</span>
              <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="remove_select-multi-typeahead-expanded_chip_three select-multi-typeahead-expanded-chip_three" aria-label="Remove" id="remove_select-multi-typeahead-expanded_chip_three">
                <i class="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </li>
          <li class="pf-c-chip-group__list-item">
            <div class="pf-c-chip">
              <span class="pf-c-chip__text" id="select-multi-typeahead-expanded-chip_four">Ohio</span>
              <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="remove_select-multi-typeahead-expanded_chip_four select-multi-typeahead-expanded-chip_four" aria-label="Remove" id="remove_select-multi-typeahead-expanded_chip_four">
                <i class="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </li>
          <li class="pf-c-chip-group__list-item">
            <div class="pf-c-chip">
              <span class="pf-c-chip__text" id="select-multi-typeahead-expanded-chip_five">Washington</span>
              <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="remove_select-multi-typeahead-expanded_chip_five select-multi-typeahead-expanded-chip_five" aria-label="Remove" id="remove_select-multi-typeahead-expanded_chip_five">
                <i class="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </li>
        </ul>
      </div>
      <input class="pf-c-form-control pf-c-select__toggle-typeahead" type="text" id="select-multi-typeahead-expanded-typeahead" aria-label="Type to filter" value="Choose states" />
    </div>
    <button class="pf-c-button pf-m-plain pf-c-select__toggle-clear" type="button" aria-label="Clear all">
      <i class="fas fa-times-circle" aria-hidden="true"></i>
    </button>
    <button class="pf-c-button pf-m-plain pf-c-select__toggle-button" type="button" id="select-multi-typeahead-expanded-toggle" aria-haspopup="true" aria-expanded="true" aria-labelledby="select-multi-typeahead-expanded-label select-multi-typeahead-expanded-toggle" aria-label="Select">
      <i class="fas fa-caret-down pf-c-select__toggle-arrow" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-c-select__menu" aria-labelledby="select-multi-typeahead-expanded-label">
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Alabama</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Florida</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">New Jersey</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">New York</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">North Carolina</button>
    </li>
  </ul>
</div>`,
    },
  },
  {
    displayName: "panel",
    picture: {
      src: "./pictures/select/panel.png",
      width: 293,
      height: 120,
    },
    snippet: {
      html: `<div class="pf-c-select pf-m-expanded">
  <span id="select-panel-label" hidden>Choose one</span>
  <button class="pf-c-select__toggle" type="button" id="select-panel-toggle" aria-haspopup="true" aria-expanded="true" aria-labelledby="select-panel-label select-panel-toggle">
    <div class="pf-c-select__toggle-wrapper">
      <span class="pf-c-select__toggle-text">Filter by birth month</span>
    </div>
    <span class="pf-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-c-select__menu" aria-labelledby="select-panel-label">[Panel contents here]</div>
</div>`,
    },
  },
  {
    displayName: "plain",
    picture: {
      src: "./pictures/select/plain.png",
      width: 293,
      height: 69,
    },
    snippet: {
      html: `<div class="pf-c-select">
  <span id="select-plain-label" hidden>Choose one</span>
  <button class="pf-c-select__toggle pf-m-plain" type="button" id="select-plain-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="select-plain-label select-plain-toggle">
    <div class="pf-c-select__toggle-wrapper">
      <span class="pf-c-select__toggle-text">Filter by birth month</span>
    </div>
    <span class="pf-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul class="pf-c-select__menu" aria-labelledby="select-plain-label" hidden>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Running</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Stopped</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Down</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Degraded</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Needs Maintenance</button>
    </li>
  </ul>
</div>`,
    },
  },
  {
    displayName: "plain-expanded",
    picture: {
      src: "./pictures/select/plain-expanded.png",
      width: 293,
      height: 330,
    },
    snippet: {
      html: `<div class="pf-c-select pf-m-expanded">
  <span id="select-plain-expanded-label" hidden>Choose one</span>
  <button class="pf-c-select__toggle pf-m-plain" type="button" id="select-plain-expanded-toggle" aria-haspopup="true" aria-expanded="true" aria-labelledby="select-plain-expanded-label select-plain-expanded-toggle">
    <div class="pf-c-select__toggle-wrapper">
      <span class="pf-c-select__toggle-text">Filter by birth month</span>
    </div>
    <span class="pf-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul class="pf-c-select__menu" aria-labelledby="select-plain-expanded-label">
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Running</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Stopped</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Down</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Degraded</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Needs Maintenance</button>
    </li>
  </ul>
</div>`,
    },
  },
  {
    displayName: "select-multi-with-typeahead",
    picture: {
      src: "./pictures/select/select-multi-with-typeahead.png",
      width: 293,
      height: 69,
    },
    snippet: {
      html: `<div class="pf-c-select">
  <span id="select-multi-typeahead-label" hidden>Choose states</span>
  <div class="pf-c-select__toggle pf-m-typeahead">
    <div class="pf-c-select__toggle-wrapper">
      <input class="pf-c-form-control pf-c-select__toggle-typeahead" type="text" id="select-multi-typeahead-typeahead" aria-label="Type to filter" placeholder="Choose states" />
    </div>
    <button class="pf-c-button pf-m-plain pf-c-select__toggle-button" type="button" id="select-multi-typeahead-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="select-multi-typeahead-label select-multi-typeahead-toggle" aria-label="Select">
      <i class="fas fa-caret-down pf-c-select__toggle-arrow" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-c-select__menu" aria-labelledby="select-multi-typeahead-label" hidden>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Alabama</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Florida</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">New Jersey</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">New York</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">North Carolina</button>
    </li>
  </ul>
</div>`,
    },
  },
  {
    displayName: "single",
    picture: {
      src: "./pictures/select/single.png",
      width: 293,
      height: 69,
    },
    snippet: {
      html: `<div class="pf-c-select">
  <span id="select-single-label" hidden>Choose one</span>
  <button class="pf-c-select__toggle" type="button" id="select-single-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="select-single-label select-single-toggle">
    <div class="pf-c-select__toggle-wrapper">
      <span class="pf-c-select__toggle-text">Filter by birth month</span>
    </div>
    <span class="pf-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul class="pf-c-select__menu" aria-labelledby="select-single-label" hidden>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Running</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Stopped</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Down</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Degraded</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Needs Maintenance</button>
    </li>
  </ul>
</div>`,
    },
  },
  {
    displayName: "single-expanded",
    picture: {
      src: "./pictures/select/single-expanded.png",
      width: 293,
      height: 330,
    },
    snippet: {
      html: `<div class="pf-c-select pf-m-expanded">
  <span id="select-single-expanded-label" hidden>Choose one</span>
  <button class="pf-c-select__toggle" type="button" id="select-single-expanded-toggle" aria-haspopup="true" aria-expanded="true" aria-labelledby="select-single-expanded-label select-single-expanded-toggle">
    <div class="pf-c-select__toggle-wrapper">
      <span class="pf-c-select__toggle-text">Filter by birth month</span>
    </div>
    <span class="pf-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul class="pf-c-select__menu" aria-labelledby="select-single-expanded-label">
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Running</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Stopped</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Down</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Degraded</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Needs Maintenance</button>
    </li>
  </ul>
</div>`,
    },
  },
  {
    displayName: "single-expanded-and-selected",
    picture: {
      src: "./pictures/select/single-expanded-and-selected.png",
      width: 293,
      height: 330,
    },
    snippet: {
      html: `<div class="pf-c-select pf-m-expanded">
  <span id="select-single-expanded-selected-label" hidden>Choose one</span>
  <button class="pf-c-select__toggle" type="button" id="select-single-expanded-selected-toggle" aria-haspopup="true" aria-expanded="true" aria-labelledby="select-single-expanded-selected-label select-single-expanded-selected-toggle">
    <div class="pf-c-select__toggle-wrapper">
      <span class="pf-c-select__toggle-text">April</span>
    </div>
    <span class="pf-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul class="pf-c-select__menu" aria-labelledby="select-single-expanded-selected-label">
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Running</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item pf-m-selected" aria-selected="true">Stopped
        <span class="pf-c-select__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Down</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Degraded</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Needs Maintenance</button>
    </li>
  </ul>
</div>`,
    },
  },
  {
    displayName: "single-with-top-expanded",
    picture: {
      src: "./pictures/select/single-with-top-expanded.png",
      width: 293,
      height: 330,
    },
    snippet: {
      html: `<div class="pf-c-select pf-m-expanded pf-m-top">
  <span id="select-single-top-expanded-label" hidden>Choose one</span>
  <button class="pf-c-select__toggle" type="button" id="select-single-top-expanded-toggle" aria-haspopup="true" aria-expanded="true" aria-labelledby="select-single-top-expanded-label select-single-top-expanded-toggle">
    <div class="pf-c-select__toggle-wrapper">
      <span class="pf-c-select__toggle-text">Filter by birth month</span>
    </div>
    <span class="pf-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul class="pf-c-select__menu" aria-labelledby="select-single-top-expanded-label">
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Running</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Stopped</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Down</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Degraded</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Needs Maintenance</button>
    </li>
  </ul>
</div>`,
    },
  },
  {
    displayName: "single-with-typeahead",
    picture: {
      src: "./pictures/select/single-with-typeahead.png",
      width: 293,
      height: 69,
    },
    snippet: {
      html: `<div class="pf-c-select">
  <span id="select-single-typeahead-label" hidden>Choose a state</span>
  <div class="pf-c-select__toggle pf-m-typeahead">
    <div class="pf-c-select__toggle-wrapper">
      <input class="pf-c-form-control pf-c-select__toggle-typeahead" type="text" id="select-single-typeahead-typeahead" aria-label="Type to filter" placeholder="Choose a state" />
    </div>
    <button class="pf-c-button pf-m-plain pf-c-select__toggle-button" type="button" id="select-single-typeahead-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="select-single-typeahead-label select-single-typeahead-toggle" aria-label="Select">
      <i class="fas fa-caret-down pf-c-select__toggle-arrow" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-c-select__menu" aria-labelledby="select-single-typeahead-label" hidden>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Alabama</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Florida</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">New Jersey</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">New Mexico</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">New York</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">North Carolina</button>
    </li>
  </ul>
</div>`,
    },
  },
  {
    displayName: "single-with-typeahead-expanded",
    picture: {
      src: "./pictures/select/single-with-typeahead-expanded.png",
      width: 306,
      height: 210,
    },
    snippet: {
      html: `<div class="pf-c-select pf-m-expanded">
  <span id="select-single-typeahead-expanded-label" hidden>New</span>
  <div class="pf-c-select__toggle pf-m-typeahead">
    <div class="pf-c-select__toggle-wrapper">
      <input class="pf-c-form-control pf-c-select__toggle-typeahead" type="text" id="select-single-typeahead-expanded-typeahead" aria-label="Type to filter" value="New" />
    </div>
    <button class="pf-c-button pf-m-plain pf-c-select__toggle-clear" type="button" aria-label="Clear all">
      <i class="fas fa-times-circle" aria-hidden="true"></i>
    </button>
    <button class="pf-c-button pf-m-plain pf-c-select__toggle-button" type="button" id="select-single-typeahead-expanded-toggle" aria-haspopup="true" aria-expanded="true" aria-labelledby="select-single-typeahead-expanded-label select-single-typeahead-expanded-toggle" aria-label="Select">
      <i class="fas fa-caret-down pf-c-select__toggle-arrow" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-c-select__menu" aria-labelledby="select-single-typeahead-expanded-label">
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">
        <mark class="pf-c-select__menu-item--match">New</mark>Jersey</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item pf-m-selected" aria-selected="true">
        <mark class="pf-c-select__menu-item--match">New</mark>Mexico
        <span class="pf-c-select__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">
        <mark class="pf-c-select__menu-item--match">New</mark>York</button>
    </li>
  </ul>
</div>`,
    },
  },
  {
    displayName: "single-with-typeahead-expanded-and-selected",
    picture: {
      src: "./pictures/select/single-with-typeahead-expanded-and-selected.png",
      width: 306,
      height: 330,
    },
    snippet: {
      html: `<div class="pf-c-select pf-m-expanded">
  <span id="select-single-typeahead-expanded-selected-label" hidden>New Mexico</span>
  <div class="pf-c-select__toggle pf-m-typeahead">
    <div class="pf-c-select__toggle-wrapper">
      <input class="pf-c-form-control pf-c-select__toggle-typeahead" type="text" id="select-single-typeahead-expanded-selected-typeahead" aria-label="Type to filter" value="New Mexico" />
    </div>
    <button class="pf-c-button pf-m-plain pf-c-select__toggle-clear" type="button" aria-label="Clear all">
      <i class="fas fa-times-circle" aria-hidden="true"></i>
    </button>
    <button class="pf-c-button pf-m-plain pf-c-select__toggle-button" type="button" id="select-single-typeahead-expanded-selected-toggle" aria-haspopup="true" aria-expanded="true" aria-labelledby="select-single-typeahead-expanded-selected-label select-single-typeahead-expanded-selected-toggle" aria-label="Select">
      <i class="fas fa-caret-down pf-c-select__toggle-arrow" aria-hidden="true"></i>
    </button>
  </div>
  <ul class="pf-c-select__menu" aria-labelledby="select-single-typeahead-expanded-selected-label">
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Alabama</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">Florida</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">New Jersey</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item pf-m-selected" aria-selected="true">New Mexico
        <span class="pf-c-select__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">New York</button>
    </li>
    <li>
      <button type="button" class="pf-c-select__menu-item" aria-selected="false">North Carolina</button>
    </li>
  </ul>
</div>`,
    },
  },
  {
    displayName: "with-description",
    picture: {
      src: "./pictures/select/with-description.png",
      width: 293,
      height: 350,
    },
    snippet: {
      html: `<div class="pf-c-select pf-m-expanded">
  <span id="select-with-description-label" hidden>Choose one</span>
  <button class="pf-c-select__toggle" type="button" id="select-with-description-toggle" aria-haspopup="true" aria-expanded="true" aria-labelledby="select-with-description-label select-with-description-toggle">
    <div class="pf-c-select__toggle-wrapper">
      <span class="pf-c-select__toggle-text">Select with description</span>
    </div>
    <span class="pf-c-select__toggle-arrow">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <ul class="pf-c-select__menu pf-m-wrap" aria-labelledby="select-with-description-label">
    <li>
      <button class="pf-c-select__menu-item">Menu item</button>
    </li>
    <li>
      <button class="pf-c-select__menu-item pf-m-selected" aria-selected="true">Menu item selected
        <span class="pf-c-select__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </span>
      </button>
    </li>
    <li>
      <button class="pf-c-select__menu-item pf-m-description">
        <span class="pf-c-select__menu-item-main">Menu item description</span>
        <span class="pf-c-select__menu-item-description">This is a description.</span>
      </button>
    </li>
    <li>
      <button class="pf-c-select__menu-item pf-m-description" disabled>
        <span class="pf-c-select__menu-item-main">
          <span class="pf-c-select__menu-item-main">Menu item description disabled</span>
        </span>
        <span class="pf-c-select__menu-item-description">This is a description.</span>
      </button>
    </li>
    <li>
      <button class="pf-c-select__menu-item pf-m-selected pf-m-description" aria-selected="true">
        <span class="pf-c-select__menu-item-main">Menu item description selected
          <span class="pf-c-select__menu-item-icon">
            <i class="fas fa-check" aria-hidden="true"></i>
          </span>
        </span>
        <span class="pf-c-select__menu-item-description">This is a description.</span>
      </button>
    </li>
    <li>
      <button class="pf-c-select__menu-item pf-m-selected pf-m-description" aria-selected="true">
        <span class="pf-c-select__menu-item-main">Menu item long description
          <span class="pf-c-select__menu-item-icon">
            <i class="fas fa-check" aria-hidden="true"></i>
          </span>
        </span>
        <span class="pf-c-select__menu-item-description">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</span>
      </button>
    </li>
  </ul>
</div>`,
    },
  },
];
