export default {
  displayName: "toolbar",
  name: "toolbar",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/toolbar/",
};

export const variants = [
  {
    displayName: "adjusted-group-spacers",
    picture: {
      src: "./pictures/toolbar/adjusted-group-spacers.png",
      width: 293,
      height: 89,
    },
    snippet: {
      html: `<div class="pf-c-toolbar" id="toolbar-group-spacer-example">
  <div class="pf-c-toolbar__content">
    <div class="pf-c-toolbar__content-section">
      <div class="pf-c-toolbar__group pf-m-space-items-lg">
        <div class="pf-c-toolbar__item">Item</div>
        <div class="pf-c-toolbar__item">Item</div>
      </div>
      <hr class="pf-c-divider pf-m-vertical" />
      <div class="pf-c-toolbar__group pf-m-space-items-none pf-m-space-items-sm-on-md pf-m-space-items-md-on-lg pf-m-space-items-lg-on-xl">
        <div class="pf-c-toolbar__item">Item</div>
        <div class="pf-c-toolbar__item">Item</div>
      </div>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "adjusted-spacers",
    picture: {
      src: "./pictures/toolbar/adjusted-spacers.png",
      width: 338,
      height: 89,
    },
    snippet: {
      html: `<div class="pf-c-toolbar" id="toolbar-spacer-example">
  <div class="pf-c-toolbar__content">
    <div class="pf-c-toolbar__content-section">
      <div class="pf-c-toolbar__item pf-m-spacer-none">Item</div>
      <div class="pf-c-toolbar__item pf-m-spacer-sm">Item</div>
      <div class="pf-c-toolbar__item pf-m-spacer-md">Item</div>
      <div class="pf-c-toolbar__item pf-m-spacer-lg">Item</div>
      <hr class="pf-c-divider pf-m-vertical" />
      <div class="pf-c-toolbar__item pf-m-spacer-none pf-m-spacer-sm-on-md pf-m-spacer-md-on-lg pf-m-spacer-lg-on-xl">Item</div>
      <div class="pf-c-toolbar__item">Item</div>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "expanded-elements",
    picture: {
      src: "./pictures/toolbar/expanded-elements.png",
      width: 606,
      height: 101,
    },
    snippet: {
      html: `<div class="pf-c-toolbar" id="toolbar-expanded-elements-example">
  <div class="pf-c-toolbar__content">
    <div class="pf-c-toolbar__content-section">
      <div class="pf-c-toolbar__item pf-m-bulk-select">
        <div class="pf-c-dropdown pf-m-expanded">
          <div class="pf-c-dropdown__toggle pf-m-split-button">
            <label class="pf-c-dropdown__toggle-check" for="toolbar-expanded-elements-example-dropdown-toggle-check">
              <input type="checkbox" id="toolbar-expanded-elements-example-dropdown-toggle-check" aria-label="Select all" />
            </label>
            <button class="pf-c-dropdown__toggle-button" type="button" aria-expanded="true" id="toolbar-expanded-elements-example-dropdown-toggle-button" aria-label="Select">
              <i class="fas fa-caret-down" aria-hidden="true"></i>
            </button>
          </div>
          <ul class="pf-c-dropdown__menu" aria-labelledby="toolbar-expanded-elements-example-dropdown-toggle-button">
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
        </div>
      </div>
      <div class="pf-c-toolbar__group pf-m-toggle-group pf-m-show-on-xl">
        <div class="pf-c-toolbar__toggle">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Show filters" aria-expanded="false" aria-controls="toolbar-expanded-elements-example-expandable-content">
            <i class="fas fa-filter" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-c-toolbar__item pf-m-search-filter ">
          <div class="pf-c-input-group" aria-label="search filter" role="group">
            <div class="pf-c-dropdown">
              <button class="pf-c-dropdown__toggle" type="button" id="toolbar-expanded-elements-example-content-button" aria-expanded="false">
                <span class="pf-c-dropdown__toggle-text">Name</span>
                <span class="pf-c-dropdown__toggle-icon">
                  <i class="fas fa-caret-down" aria-hidden="true"></i>
                </span>
              </button>
              <div class="pf-c-dropdown__menu" hidden>[Panel contents here]</div>
            </div>
            <input class="pf-c-form-control" type="search" id="toolbar-expanded-elements-example-content-search-filter-input" name="toolbar-expanded-elements-example-search-filter-input" aria-label="input with dropdown and button" aria-describedby="toolbar-expanded-elements-example-content-button" />
          </div>
        </div>
        <div class="pf-c-toolbar__group pf-m-filter-group">
          <div class="pf-c-toolbar__item">
            <div class="pf-c-select pf-m-expanded">
              <span id="toolbar-expanded-elements-example-select-checkbox-status-label" hidden>Choose one</span>
              <button class="pf-c-select__toggle" type="button" id="toolbar-expanded-elements-example-select-checkbox-status-toggle" aria-haspopup="true" aria-expanded="true" aria-labelledby="toolbar-expanded-elements-example-select-checkbox-status-label toolbar-expanded-elements-example-select-checkbox-status-toggle">
                <div class="pf-c-select__toggle-wrapper">
                  <span class="pf-c-select__toggle-text">Status</span>
                </div>
                <span class="pf-c-select__toggle-arrow">
                  <i class="fas fa-caret-down" aria-hidden="true"></i>
                </span>
              </button>
              <div class="pf-c-select__menu">
                <fieldset class="pf-c-select__menu-fieldset" aria-label="Select input">
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-expanded-elements-example-select-checkbox-status-active">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-expanded-elements-example-select-checkbox-status-active" name="toolbar-expanded-elements-example-select-checkbox-status-active" />
                    <span class="pf-c-check__label">Active</span>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-expanded-elements-example-select-checkbox-status-cancelled">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-expanded-elements-example-select-checkbox-status-cancelled" name="toolbar-expanded-elements-example-select-checkbox-status-cancelled" checked />
                    <span class="pf-c-check__label">Cancelled</span>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-expanded-elements-example-select-checkbox-status-paused">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-expanded-elements-example-select-checkbox-status-paused" name="toolbar-expanded-elements-example-select-checkbox-status-paused" checked />
                    <span class="pf-c-check__label">Paused</span>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-expanded-elements-example-select-checkbox-status-warning">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-expanded-elements-example-select-checkbox-status-warning" name="toolbar-expanded-elements-example-select-checkbox-status-warning" />
                    <span class="pf-c-check__label">Warning</span>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-expanded-elements-example-select-checkbox-status-restarted">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-expanded-elements-example-select-checkbox-status-restarted" name="toolbar-expanded-elements-example-select-checkbox-status-restarted" checked />
                    <span class="pf-c-check__label">Restarted</span>
                  </label>
                </fieldset>
              </div>
            </div>
          </div>
          <div class="pf-c-toolbar__item">
            <div class="pf-c-select pf-m-expanded">
              <span id="toolbar-expanded-elements-example-select-checkbox-risk-label" hidden>Choose one</span>
              <button class="pf-c-select__toggle" type="button" id="toolbar-expanded-elements-example-select-checkbox-risk-toggle" aria-haspopup="true" aria-expanded="true" aria-labelledby="toolbar-expanded-elements-example-select-checkbox-risk-label toolbar-expanded-elements-example-select-checkbox-risk-toggle">
                <div class="pf-c-select__toggle-wrapper">
                  <span class="pf-c-select__toggle-text">Risk</span>
                </div>
                <span class="pf-c-select__toggle-arrow">
                  <i class="fas fa-caret-down" aria-hidden="true"></i>
                </span>
              </button>
              <div class="pf-c-select__menu">
                <fieldset class="pf-c-select__menu-fieldset" aria-label="Select input">
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-expanded-elements-example-select-checkbox-risk-active">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-expanded-elements-example-select-checkbox-risk-active" name="toolbar-expanded-elements-example-select-checkbox-risk-active" />
                    <span class="pf-c-check__label">Active</span>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-expanded-elements-example-select-checkbox-risk-cancelled">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-expanded-elements-example-select-checkbox-risk-cancelled" name="toolbar-expanded-elements-example-select-checkbox-risk-cancelled" checked />
                    <span class="pf-c-check__label">Cancelled</span>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-expanded-elements-example-select-checkbox-risk-paused">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-expanded-elements-example-select-checkbox-risk-paused" name="toolbar-expanded-elements-example-select-checkbox-risk-paused" checked />
                    <span class="pf-c-check__label">Paused</span>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-expanded-elements-example-select-checkbox-risk-warning">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-expanded-elements-example-select-checkbox-risk-warning" name="toolbar-expanded-elements-example-select-checkbox-risk-warning" />
                    <span class="pf-c-check__label">Warning</span>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-expanded-elements-example-select-checkbox-risk-restarted">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-expanded-elements-example-select-checkbox-risk-restarted" name="toolbar-expanded-elements-example-select-checkbox-risk-restarted" checked />
                    <span class="pf-c-check__label">Restarted</span>
                  </label>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pf-c-toolbar__group pf-m-icon-button-group">
        <div class="pf-c-toolbar__item">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Edit">
            <i class="fas fa-edit" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-c-toolbar__item">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Clone">
            <i class="fas fa-clone" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-c-toolbar__item">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Sync">
            <i class="fas fa-sync" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="pf-c-toolbar__item pf-m-overflow-menu">
        <div class="pf-c-overflow-menu" id="toolbar-expanded-elements-example-overflow-menu">
          <div class="pf-c-overflow-menu__content">
            <div class="pf-c-overflow-menu__group pf-m-button-group">
              <div class="pf-c-overflow-menu__item">
                <button class="pf-c-button pf-m-primary" type="button">Primary</button>
              </div>
              <div class="pf-c-overflow-menu__item">
                <button class="pf-c-button pf-m-secondary" type="button">Secondary</button>
              </div>
            </div>
          </div>
          <div class="pf-c-overflow-menu__control">
            <div class="pf-c-dropdown pf-m-expanded">
              <button class="pf-c-button pf-c-dropdown__toggle pf-m-plain" type="button" id="toolbar-expanded-elements-example-overflow-menu-dropdown-toggle" aria-label="Overflow menu">
                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
              </button>
              <ul class="pf-c-dropdown__menu" aria-labelledby="toolbar-expanded-elements-example-overflow-menu-dropdown-toggle">
                <li>
                  <button class="pf-c-dropdown__menu-item">Tertiary</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pf-c-toolbar__expandable-content pf-m-hidden" id="toolbar-expanded-elements-example-expandable-content" hidden></div>
  </div>
</div>`,
    },
  },
  {
    displayName: "group-types",
    picture: {
      src: "./pictures/toolbar/group-types.png",
      width: 824,
      height: 101,
    },
    snippet: {
      html: `<div class="pf-c-toolbar" id="toolbar-group-types-example">
  <div class="pf-c-toolbar__content">
    <div class="pf-c-toolbar__content-section">
      <div class="pf-c-toolbar__group pf-m-filter-group">
        <div class="pf-c-toolbar__item">
          <div class="pf-c-select">
            <span id="toolbar-group-types-example-select-checkbox-filter1-label" hidden>Choose one</span>
            <button class="pf-c-select__toggle" type="button" id="toolbar-group-types-example-select-checkbox-filter1-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="toolbar-group-types-example-select-checkbox-filter1-label toolbar-group-types-example-select-checkbox-filter1-toggle">
              <div class="pf-c-select__toggle-wrapper">
                <span class="pf-c-select__toggle-text">Filter 1</span>
              </div>
              <span class="pf-c-select__toggle-arrow">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </span>
            </button>
            <ul class="pf-c-select__menu" aria-labelledby="toolbar-group-types-example-select-checkbox-filter1-label" hidden>
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
          </div>
        </div>
        <div class="pf-c-toolbar__item">
          <div class="pf-c-select">
            <span id="toolbar-group-types-example-select-checkbox-filter2-label" hidden>Choose one</span>
            <button class="pf-c-select__toggle" type="button" id="toolbar-group-types-example-select-checkbox-filter2-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="toolbar-group-types-example-select-checkbox-filter2-label toolbar-group-types-example-select-checkbox-filter2-toggle">
              <div class="pf-c-select__toggle-wrapper">
                <span class="pf-c-select__toggle-text">Filter 2</span>
              </div>
              <span class="pf-c-select__toggle-arrow">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </span>
            </button>
            <ul class="pf-c-select__menu" aria-labelledby="toolbar-group-types-example-select-checkbox-filter2-label" hidden>
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
          </div>
        </div>
        <div class="pf-c-toolbar__item">
          <div class="pf-c-select">
            <span id="toolbar-group-types-example-select-checkbox-filter3-label" hidden>Choose one</span>
            <button class="pf-c-select__toggle" type="button" id="toolbar-group-types-example-select-checkbox-filter3-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="toolbar-group-types-example-select-checkbox-filter3-label toolbar-group-types-example-select-checkbox-filter3-toggle">
              <div class="pf-c-select__toggle-wrapper">
                <span class="pf-c-select__toggle-text">Filter 3</span>
              </div>
              <span class="pf-c-select__toggle-arrow">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </span>
            </button>
            <ul class="pf-c-select__menu" aria-labelledby="toolbar-group-types-example-select-checkbox-filter3-label" hidden>
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
          </div>
        </div>
      </div>
      <div class="pf-c-toolbar__group pf-m-icon-button-group">
        <div class="pf-c-toolbar__item">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Edit">
            <i class="fas fa-edit" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-c-toolbar__item">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Clone">
            <i class="fas fa-clone" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-c-toolbar__item">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Sync">
            <i class="fas fa-sync" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="pf-c-toolbar__group pf-m-button-group">
        <div class="pf-c-toolbar__item">
          <button class="pf-c-button pf-m-primary" type="button">Action</button>
        </div>
        <div class="pf-c-toolbar__item">
          <button class="pf-c-button pf-m-secondary" type="button">Secondary</button>
        </div>
        <div class="pf-c-toolbar__item">
          <button class="pf-c-button pf-m-tertiary" type="button">Tertiary</button>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "selected-filters-on-desktop-not-responsive",
    picture: {
      src: "./pictures/toolbar/selected-filters-on-desktop-not-responsive.png",
      width: 840,
      height: 159,
    },
    snippet: {
      html: `<div class="pf-c-toolbar" id="toolbar-selected-filters-example">
  <div class="pf-c-toolbar__content">
    <div class="pf-c-toolbar__content-section">
      <div class="pf-c-toolbar__item pf-m-bulk-select">
        <div class="pf-c-dropdown">
          <div class="pf-c-dropdown__toggle pf-m-split-button">
            <label class="pf-c-dropdown__toggle-check" for="toolbar-selected-filters-example-bulk-select-toggle-check">
              <input type="checkbox" id="toolbar-selected-filters-example-bulk-select-toggle-check" aria-label="Select all" />
            </label>
            <button class="pf-c-dropdown__toggle-button" type="button" aria-expanded="false" id="toolbar-selected-filters-example-bulk-select-toggle-button" aria-label="Select">
              <i class="fas fa-caret-down" aria-hidden="true"></i>
            </button>
          </div>
          <ul class="pf-c-dropdown__menu" aria-labelledby="toolbar-selected-filters-example-bulk-select-toggle-button" hidden>
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
        </div>
      </div>
      <div class="pf-c-toolbar__group pf-m-toggle-group pf-m-show">
        <div class="pf-c-toolbar__toggle">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Show filters" aria-expanded="false" aria-controls="toolbar-selected-filters-example-expandable-content">
            <i class="fas fa-filter" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-c-toolbar__group pf-m-filter-group">
          <div class="pf-c-toolbar__item">
            <div class="pf-c-select">
              <span id="toolbar-selected-filters-example-select-checkbox-status-label" hidden>Choose one</span>
              <button class="pf-c-select__toggle" type="button" id="toolbar-selected-filters-example-select-checkbox-status-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="toolbar-selected-filters-example-select-checkbox-status-label toolbar-selected-filters-example-select-checkbox-status-toggle">
                <div class="pf-c-select__toggle-wrapper">
                  <span class="pf-c-select__toggle-text">Status</span>
                </div>
                <span class="pf-c-select__toggle-arrow">
                  <i class="fas fa-caret-down" aria-hidden="true"></i>
                </span>
              </button>
              <div class="pf-c-select__menu" hidden>
                <fieldset class="pf-c-select__menu-fieldset" aria-label="Select input">
                  <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="toolbar-selected-filters-example-select-checkbox-status-active">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-example-select-checkbox-status-active" name="toolbar-selected-filters-example-select-checkbox-status-active" />
                    <span class="pf-c-check__label">Active</span>
                    <div class="pf-c-check__description">This is a description</div>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="toolbar-selected-filters-example-select-checkbox-status-cancelled">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-example-select-checkbox-status-cancelled" name="toolbar-selected-filters-example-select-checkbox-status-cancelled" />
                    <span class="pf-c-check__label">Cancelled</span>
                    <div class="pf-c-check__description">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-selected-filters-example-select-checkbox-status-paused">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-example-select-checkbox-status-paused" name="toolbar-selected-filters-example-select-checkbox-status-paused" />
                    <span class="pf-c-check__label">Paused</span>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-selected-filters-example-select-checkbox-status-warning">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-example-select-checkbox-status-warning" name="toolbar-selected-filters-example-select-checkbox-status-warning" />
                    <span class="pf-c-check__label">Warning</span>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-selected-filters-example-select-checkbox-status-restarted">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-example-select-checkbox-status-restarted" name="toolbar-selected-filters-example-select-checkbox-status-restarted" />
                    <span class="pf-c-check__label">Restarted</span>
                  </label>
                </fieldset>
              </div>
            </div>
          </div>
          <div class="pf-c-toolbar__item">
            <div class="pf-c-select">
              <span id="toolbar-selected-filters-example-select-checkbox-risk-label" hidden>Choose one</span>
              <button class="pf-c-select__toggle" type="button" id="toolbar-selected-filters-example-select-checkbox-risk-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="toolbar-selected-filters-example-select-checkbox-risk-label toolbar-selected-filters-example-select-checkbox-risk-toggle">
                <div class="pf-c-select__toggle-wrapper">
                  <span class="pf-c-select__toggle-text">Risk</span>
                </div>
                <span class="pf-c-select__toggle-arrow">
                  <i class="fas fa-caret-down" aria-hidden="true"></i>
                </span>
              </button>
              <div class="pf-c-select__menu" hidden>
                <fieldset class="pf-c-select__menu-fieldset" aria-label="Select input">
                  <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="toolbar-selected-filters-example-select-checkbox-risk-active">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-example-select-checkbox-risk-active" name="toolbar-selected-filters-example-select-checkbox-risk-active" />
                    <span class="pf-c-check__label">Active</span>
                    <div class="pf-c-check__description">This is a description</div>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="toolbar-selected-filters-example-select-checkbox-risk-cancelled">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-example-select-checkbox-risk-cancelled" name="toolbar-selected-filters-example-select-checkbox-risk-cancelled" />
                    <span class="pf-c-check__label">Cancelled</span>
                    <div class="pf-c-check__description">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-selected-filters-example-select-checkbox-risk-paused">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-example-select-checkbox-risk-paused" name="toolbar-selected-filters-example-select-checkbox-risk-paused" />
                    <span class="pf-c-check__label">Paused</span>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-selected-filters-example-select-checkbox-risk-warning">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-example-select-checkbox-risk-warning" name="toolbar-selected-filters-example-select-checkbox-risk-warning" />
                    <span class="pf-c-check__label">Warning</span>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-selected-filters-example-select-checkbox-risk-restarted">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-example-select-checkbox-risk-restarted" name="toolbar-selected-filters-example-select-checkbox-risk-restarted" />
                    <span class="pf-c-check__label">Restarted</span>
                  </label>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pf-c-toolbar__group pf-m-icon-button-group">
        <div class="pf-c-toolbar__item">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Edit">
            <i class="fas fa-edit" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-c-toolbar__item">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Clone">
            <i class="fas fa-clone" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-c-toolbar__item">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Sync">
            <i class="fas fa-sync" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="pf-c-toolbar__item pf-m-overflow-menu">
        <div class="pf-c-overflow-menu" id="toolbar-selected-filters-example-overflow-menu">
          <div class="pf-c-overflow-menu__content">
            <div class="pf-c-overflow-menu__group pf-m-button-group">
              <div class="pf-c-overflow-menu__item">
                <button class="pf-c-button pf-m-primary" type="button">Primary</button>
              </div>
              <div class="pf-c-overflow-menu__item">
                <button class="pf-c-button pf-m-secondary" type="button">Secondary</button>
              </div>
            </div>
          </div>
          <div class="pf-c-overflow-menu__control">
            <div class="pf-c-dropdown">
              <button class="pf-c-button pf-c-dropdown__toggle pf-m-plain" type="button" id="toolbar-selected-filters-example-overflow-menu-dropdown-toggle" aria-label="Overflow menu">
                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
              </button>
              <ul class="pf-c-dropdown__menu" aria-labelledby="toolbar-selected-filters-example-overflow-menu-dropdown-toggle" hidden>
                <li>
                  <button class="pf-c-dropdown__menu-item">Tertiary</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-c-toolbar__content pf-m-chip-container">
    <div class="pf-c-toolbar__group">
      <div class="pf-c-toolbar__item pf-m-chip-group ">
        <div class="pf-c-chip-group pf-m-category">
          <span class="pf-c-chip-group__label" aria-hidden="true" id="toolbar-selected-filters-example-chip-group-status-chip-group-label">Status</span>
          <ul class="pf-c-chip-group__list" role="list" aria-labelledby="toolbar-selected-filters-example-chip-group-status-chip-group-label">
            <li class="pf-c-chip-group__list-item">
              <div class="pf-c-chip">
                <span class="pf-c-chip__text" id="toolbar-selected-filters-example-chip-group-statuschip-one">Chip one</span>
                <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="toolbar-selected-filters-example-chip-group-statusremove-chip-one toolbar-selected-filters-example-chip-group-statuschip-one" aria-label="Remove" id="toolbar-selected-filters-example-chip-group-statusremove-chip-one">
                  <i class="fas fa-times" aria-hidden="true"></i>
                </button>
              </div>
            </li>
            <li class="pf-c-chip-group__list-item">
              <div class="pf-c-chip">
                <span class="pf-c-chip__text" id="toolbar-selected-filters-example-chip-group-statuschip-two">Chip two</span>
                <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="toolbar-selected-filters-example-chip-group-statusremove-chip-two toolbar-selected-filters-example-chip-group-statuschip-two" aria-label="Remove" id="toolbar-selected-filters-example-chip-group-statusremove-chip-two">
                  <i class="fas fa-times" aria-hidden="true"></i>
                </button>
              </div>
            </li>
            <li class="pf-c-chip-group__list-item">
              <div class="pf-c-chip">
                <span class="pf-c-chip__text" id="toolbar-selected-filters-example-chip-group-statuschip-three">Chip three</span>
                <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="toolbar-selected-filters-example-chip-group-statusremove-chip-three toolbar-selected-filters-example-chip-group-statuschip-three" aria-label="Remove" id="toolbar-selected-filters-example-chip-group-statusremove-chip-three">
                  <i class="fas fa-times" aria-hidden="true"></i>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="pf-c-toolbar__item pf-m-chip-group ">
        <div class="pf-c-chip-group pf-m-category">
          <span class="pf-c-chip-group__label" aria-hidden="true" id="toolbar-selected-filters-example-chip-group-risk-chip-group-label">Risk</span>
          <ul class="pf-c-chip-group__list" role="list" aria-labelledby="toolbar-selected-filters-example-chip-group-risk-chip-group-label">
            <li class="pf-c-chip-group__list-item">
              <div class="pf-c-chip">
                <span class="pf-c-chip__text" id="toolbar-selected-filters-example-chip-group-riskchip-one">Chip one</span>
                <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="toolbar-selected-filters-example-chip-group-riskremove-chip-one toolbar-selected-filters-example-chip-group-riskchip-one" aria-label="Remove" id="toolbar-selected-filters-example-chip-group-riskremove-chip-one">
                  <i class="fas fa-times" aria-hidden="true"></i>
                </button>
              </div>
            </li>
            <li class="pf-c-chip-group__list-item">
              <div class="pf-c-chip">
                <span class="pf-c-chip__text" id="toolbar-selected-filters-example-chip-group-riskchip-two">Chip two</span>
                <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="toolbar-selected-filters-example-chip-group-riskremove-chip-two toolbar-selected-filters-example-chip-group-riskchip-two" aria-label="Remove" id="toolbar-selected-filters-example-chip-group-riskremove-chip-two">
                  <i class="fas fa-times" aria-hidden="true"></i>
                </button>
              </div>
            </li>
            <li class="pf-c-chip-group__list-item">
              <div class="pf-c-chip">
                <span class="pf-c-chip__text" id="toolbar-selected-filters-example-chip-group-riskchip-three">Chip three</span>
                <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="toolbar-selected-filters-example-chip-group-riskremove-chip-three toolbar-selected-filters-example-chip-group-riskchip-three" aria-label="Remove" id="toolbar-selected-filters-example-chip-group-riskremove-chip-three">
                  <i class="fas fa-times" aria-hidden="true"></i>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="pf-c-toolbar__item">
      <button class="pf-c-button pf-m-link pf-m-inline" type="button">Clear all filters</button>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName:
      "selected-filters-on-mobile-filters-collapsed-expandable-content-expanded",
    picture: {
      src:
        "./pictures/toolbar/selected-filters-on-mobile-filters-collapsed-expandable-content-expanded.png",
      width: 855,
      height: 339,
    },
    snippet: {
      html: `<div class="pf-c-toolbar" id="toolbar-selected-filters-toggle-group-expanded-example">
  <div class="pf-c-toolbar__content">
    <div class="pf-c-toolbar__content-section">
      <div class="pf-c-toolbar__item pf-m-bulk-select">
        <div class="pf-c-dropdown">
          <div class="pf-c-dropdown__toggle pf-m-split-button">
            <label class="pf-c-dropdown__toggle-check" for="toolbar-selected-filters-toggle-group-expanded-example-bulk-select-toggle-check">
              <input type="checkbox" id="toolbar-selected-filters-toggle-group-expanded-example-bulk-select-toggle-check" aria-label="Select all" />
            </label>
            <button class="pf-c-dropdown__toggle-button" type="button" aria-expanded="false" id="toolbar-selected-filters-toggle-group-expanded-example-bulk-select-toggle-button" aria-label="Select">
              <i class="fas fa-caret-down" aria-hidden="true"></i>
            </button>
          </div>
          <ul class="pf-c-dropdown__menu" aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-bulk-select-toggle-button" hidden>
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
        </div>
      </div>
      <div class="pf-c-toolbar__group pf-m-toggle-group">
        <div class="pf-c-toolbar__toggle pf-m-expanded">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Show filters" aria-expanded="true" aria-controls="toolbar-selected-filters-toggle-group-expanded-example-expandable-content">
            <i class="fas fa-filter" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="pf-c-toolbar__group pf-m-icon-button-group">
        <div class="pf-c-toolbar__item">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Edit">
            <i class="fas fa-edit" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-c-toolbar__item">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Clone">
            <i class="fas fa-clone" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-c-toolbar__item">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Sync">
            <i class="fas fa-sync" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="pf-c-toolbar__item pf-m-overflow-menu">
        <div class="pf-c-overflow-menu" id="toolbar-selected-filters-toggle-group-expanded-example-overflow-menu">
          <div class="pf-c-overflow-menu__control">
            <div class="pf-c-dropdown">
              <button class="pf-c-button pf-c-dropdown__toggle pf-m-plain" type="button" id="toolbar-selected-filters-toggle-group-expanded-example-overflow-menu-dropdown-toggle" aria-label="Overflow menu">
                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
              </button>
              <ul class="pf-c-dropdown__menu" aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-overflow-menu-dropdown-toggle" hidden>
                <li>
                  <button class="pf-c-dropdown__menu-item">Primary</button>
                </li>
                <li>
                  <button class="pf-c-dropdown__menu-item">Secondary</button>
                </li>
                <li>
                  <button class="pf-c-dropdown__menu-item">Tertiary</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pf-c-toolbar__expandable-content pf-m-expanded" id="toolbar-selected-filters-toggle-group-expanded-example-expandable-content">
      <div class="pf-c-toolbar__item pf-m-search-filter ">
        <div class="pf-c-input-group" aria-label="search filter" role="group">
          <div class="pf-c-dropdown">
            <button class="pf-c-dropdown__toggle" type="button" id="toolbar-selected-filters-toggle-group-expanded-example-expanded-content-button" aria-expanded="false">
              <span class="pf-c-dropdown__toggle-text">Name</span>
              <span class="pf-c-dropdown__toggle-icon">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </span>
            </button>
            <div class="pf-c-dropdown__menu" hidden>[Panel contents here]</div>
          </div>
          <input class="pf-c-form-control" type="search" id="toolbar-selected-filters-toggle-group-expanded-example-expanded-content-search-filter-input" name="toolbar-selected-filters-toggle-group-expanded-example-search-filter-input" aria-label="input with dropdown and button" aria-describedby="toolbar-selected-filters-toggle-group-expanded-example-expanded-content-button" />
        </div>
      </div>
      <div class="pf-c-toolbar__group pf-m-filter-group">
        <div class="pf-c-toolbar__item">
          <div class="pf-c-select">
            <span id="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-label" hidden>Choose one</span>
            <button class="pf-c-select__toggle" type="button" id="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-label toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-toggle">
              <div class="pf-c-select__toggle-wrapper">
                <span class="pf-c-select__toggle-text">Status</span>
              </div>
              <span class="pf-c-select__toggle-arrow">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </span>
            </button>
            <div class="pf-c-select__menu" hidden>
              <fieldset class="pf-c-select__menu-fieldset" aria-label="Select input">
                <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-active">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-active" name="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-active" />
                  <span class="pf-c-check__label">Active</span>
                  <div class="pf-c-check__description">This is a description</div>
                </label>
                <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-cancelled">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-cancelled" name="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-cancelled" />
                  <span class="pf-c-check__label">Cancelled</span>
                  <div class="pf-c-check__description">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>
                </label>
                <label class="pf-c-check pf-c-select__menu-item" for="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-paused">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-paused" name="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-paused" />
                  <span class="pf-c-check__label">Paused</span>
                </label>
                <label class="pf-c-check pf-c-select__menu-item" for="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-warning">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-warning" name="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-warning" />
                  <span class="pf-c-check__label">Warning</span>
                </label>
                <label class="pf-c-check pf-c-select__menu-item" for="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-restarted">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-restarted" name="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-restarted" />
                  <span class="pf-c-check__label">Restarted</span>
                </label>
              </fieldset>
            </div>
          </div>
        </div>
        <div class="pf-c-toolbar__item">
          <div class="pf-c-select">
            <span id="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-label" hidden>Choose one</span>
            <button class="pf-c-select__toggle" type="button" id="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-label toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-toggle">
              <div class="pf-c-select__toggle-wrapper">
                <span class="pf-c-select__toggle-text">Risk</span>
              </div>
              <span class="pf-c-select__toggle-arrow">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </span>
            </button>
            <div class="pf-c-select__menu" hidden>
              <fieldset class="pf-c-select__menu-fieldset" aria-label="Select input">
                <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-active">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-active" name="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-active" />
                  <span class="pf-c-check__label">Active</span>
                  <div class="pf-c-check__description">This is a description</div>
                </label>
                <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-cancelled">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-cancelled" name="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-cancelled" />
                  <span class="pf-c-check__label">Cancelled</span>
                  <div class="pf-c-check__description">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>
                </label>
                <label class="pf-c-check pf-c-select__menu-item" for="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-paused">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-paused" name="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-paused" />
                  <span class="pf-c-check__label">Paused</span>
                </label>
                <label class="pf-c-check pf-c-select__menu-item" for="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-warning">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-warning" name="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-warning" />
                  <span class="pf-c-check__label">Warning</span>
                </label>
                <label class="pf-c-check pf-c-select__menu-item" for="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-restarted">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-restarted" name="toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-restarted" />
                  <span class="pf-c-check__label">Restarted</span>
                </label>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <div class="pf-c-toolbar__group pf-m-chip-container">
        <div class="pf-c-toolbar__group">
          <div class="pf-c-toolbar__item pf-m-chip-group ">
            <div class="pf-c-chip-group pf-m-category">
              <span class="pf-c-chip-group__label" aria-hidden="true" id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-status-chip-group-label">Status</span>
              <ul class="pf-c-chip-group__list" role="list" aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-chip-group-status-chip-group-label">
                <li class="pf-c-chip-group__list-item">
                  <div class="pf-c-chip">
                    <span class="pf-c-chip__text" id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-statuschip-one">Chip one</span>
                    <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-chip-group-statusremove-chip-one toolbar-selected-filters-toggle-group-expanded-example-chip-group-statuschip-one" aria-label="Remove" id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-statusremove-chip-one">
                      <i class="fas fa-times" aria-hidden="true"></i>
                    </button>
                  </div>
                </li>
                <li class="pf-c-chip-group__list-item">
                  <div class="pf-c-chip">
                    <span class="pf-c-chip__text" id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-statuschip-two">Chip two</span>
                    <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-chip-group-statusremove-chip-two toolbar-selected-filters-toggle-group-expanded-example-chip-group-statuschip-two" aria-label="Remove" id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-statusremove-chip-two">
                      <i class="fas fa-times" aria-hidden="true"></i>
                    </button>
                  </div>
                </li>
                <li class="pf-c-chip-group__list-item">
                  <div class="pf-c-chip">
                    <span class="pf-c-chip__text" id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-statuschip-three">Chip three</span>
                    <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-chip-group-statusremove-chip-three toolbar-selected-filters-toggle-group-expanded-example-chip-group-statuschip-three" aria-label="Remove" id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-statusremove-chip-three">
                      <i class="fas fa-times" aria-hidden="true"></i>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="pf-c-toolbar__item pf-m-chip-group ">
            <div class="pf-c-chip-group pf-m-category">
              <span class="pf-c-chip-group__label" aria-hidden="true" id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-risk-chip-group-label">Risk</span>
              <ul class="pf-c-chip-group__list" role="list" aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-chip-group-risk-chip-group-label">
                <li class="pf-c-chip-group__list-item">
                  <div class="pf-c-chip">
                    <span class="pf-c-chip__text" id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskchip-one">Chip one</span>
                    <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskremove-chip-one toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskchip-one" aria-label="Remove" id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskremove-chip-one">
                      <i class="fas fa-times" aria-hidden="true"></i>
                    </button>
                  </div>
                </li>
                <li class="pf-c-chip-group__list-item">
                  <div class="pf-c-chip">
                    <span class="pf-c-chip__text" id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskchip-two">Chip two</span>
                    <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskremove-chip-two toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskchip-two" aria-label="Remove" id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskremove-chip-two">
                      <i class="fas fa-times" aria-hidden="true"></i>
                    </button>
                  </div>
                </li>
                <li class="pf-c-chip-group__list-item">
                  <div class="pf-c-chip">
                    <span class="pf-c-chip__text" id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskchip-three">Chip three</span>
                    <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskremove-chip-three toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskchip-three" aria-label="Remove" id="toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskremove-chip-three">
                      <i class="fas fa-times" aria-hidden="true"></i>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="pf-c-toolbar__item">
          <button class="pf-c-button pf-m-link pf-m-inline" type="button">Clear all filters</button>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName:
      "selected-filters-on-mobile-filters-collapsed-selected-filters-summary-visible",
    picture: {
      src:
        "./pictures/toolbar/selected-filters-on-mobile-filters-collapsed-selected-filters-summary-visible.png",
      width: 395,
      height: 149,
    },
    snippet: {
      html: `<div class="pf-c-toolbar" id="toolbar-selected-filters-toggle-group-collapsed-example">
  <div class="pf-c-toolbar__content">
    <div class="pf-c-toolbar__content-section">
      <div class="pf-c-toolbar__item pf-m-bulk-select">
        <div class="pf-c-dropdown">
          <div class="pf-c-dropdown__toggle pf-m-split-button">
            <label class="pf-c-dropdown__toggle-check" for="toolbar-selected-filters-toggle-group-collapsed-example-bulk-select-toggle-check">
              <input type="checkbox" id="toolbar-selected-filters-toggle-group-collapsed-example-bulk-select-toggle-check" aria-label="Select all" />
            </label>
            <button class="pf-c-dropdown__toggle-button" type="button" aria-expanded="false" id="toolbar-selected-filters-toggle-group-collapsed-example-bulk-select-toggle-button" aria-label="Select">
              <i class="fas fa-caret-down" aria-hidden="true"></i>
            </button>
          </div>
          <ul class="pf-c-dropdown__menu" aria-labelledby="toolbar-selected-filters-toggle-group-collapsed-example-bulk-select-toggle-button" hidden>
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
        </div>
      </div>
      <div class="pf-c-toolbar__group pf-m-toggle-group">
        <div class="pf-c-toolbar__toggle">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Show filters" aria-expanded="false" aria-controls="toolbar-selected-filters-toggle-group-collapsed-example-expandable-content">
            <i class="fas fa-filter" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-c-toolbar__item pf-m-search-filter ">
          <div class="pf-c-input-group" aria-label="search filter" role="group">
            <div class="pf-c-dropdown">
              <button class="pf-c-dropdown__toggle" type="button" id="toolbar-selected-filters-toggle-group-collapsed-example-content-button" aria-expanded="false">
                <span class="pf-c-dropdown__toggle-text">Name</span>
                <span class="pf-c-dropdown__toggle-icon">
                  <i class="fas fa-caret-down" aria-hidden="true"></i>
                </span>
              </button>
              <div class="pf-c-dropdown__menu" hidden>[Panel contents here]</div>
            </div>
            <input class="pf-c-form-control" type="search" id="toolbar-selected-filters-toggle-group-collapsed-example-content-search-filter-input" name="toolbar-selected-filters-toggle-group-collapsed-example-search-filter-input" aria-label="input with dropdown and button" aria-describedby="toolbar-selected-filters-toggle-group-collapsed-example-content-button" />
          </div>
        </div>
        <div class="pf-c-toolbar__group pf-m-filter-group">
          <div class="pf-c-toolbar__item">
            <div class="pf-c-select">
              <span id="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-label" hidden>Choose one</span>
              <button class="pf-c-select__toggle" type="button" id="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-label toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-toggle">
                <div class="pf-c-select__toggle-wrapper">
                  <span class="pf-c-select__toggle-text">Status</span>
                </div>
                <span class="pf-c-select__toggle-arrow">
                  <i class="fas fa-caret-down" aria-hidden="true"></i>
                </span>
              </button>
              <div class="pf-c-select__menu" hidden>
                <fieldset class="pf-c-select__menu-fieldset" aria-label="Select input">
                  <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-active">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-active" name="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-active" />
                    <span class="pf-c-check__label">Active</span>
                    <div class="pf-c-check__description">This is a description</div>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-cancelled">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-cancelled" name="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-cancelled" />
                    <span class="pf-c-check__label">Cancelled</span>
                    <div class="pf-c-check__description">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-paused">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-paused" name="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-paused" />
                    <span class="pf-c-check__label">Paused</span>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-warning">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-warning" name="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-warning" />
                    <span class="pf-c-check__label">Warning</span>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-restarted">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-restarted" name="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-restarted" />
                    <span class="pf-c-check__label">Restarted</span>
                  </label>
                </fieldset>
              </div>
            </div>
          </div>
          <div class="pf-c-toolbar__item">
            <div class="pf-c-select">
              <span id="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-label" hidden>Choose one</span>
              <button class="pf-c-select__toggle" type="button" id="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-label toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-toggle">
                <div class="pf-c-select__toggle-wrapper">
                  <span class="pf-c-select__toggle-text">Risk</span>
                </div>
                <span class="pf-c-select__toggle-arrow">
                  <i class="fas fa-caret-down" aria-hidden="true"></i>
                </span>
              </button>
              <div class="pf-c-select__menu" hidden>
                <fieldset class="pf-c-select__menu-fieldset" aria-label="Select input">
                  <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-active">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-active" name="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-active" />
                    <span class="pf-c-check__label">Active</span>
                    <div class="pf-c-check__description">This is a description</div>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-cancelled">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-cancelled" name="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-cancelled" />
                    <span class="pf-c-check__label">Cancelled</span>
                    <div class="pf-c-check__description">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-paused">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-paused" name="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-paused" />
                    <span class="pf-c-check__label">Paused</span>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-warning">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-warning" name="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-warning" />
                    <span class="pf-c-check__label">Warning</span>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-restarted">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-restarted" name="toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-restarted" />
                    <span class="pf-c-check__label">Restarted</span>
                  </label>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pf-c-toolbar__group pf-m-icon-button-group">
        <div class="pf-c-toolbar__item">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Edit">
            <i class="fas fa-edit" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-c-toolbar__item">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Clone">
            <i class="fas fa-clone" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-c-toolbar__item">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Sync">
            <i class="fas fa-sync" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="pf-c-toolbar__item pf-m-overflow-menu">
        <div class="pf-c-overflow-menu" id="toolbar-selected-filters-toggle-group-collapsed-example-overflow-menu">
          <div class="pf-c-overflow-menu__control">
            <div class="pf-c-dropdown">
              <button class="pf-c-button pf-c-dropdown__toggle pf-m-plain" type="button" id="toolbar-selected-filters-toggle-group-collapsed-example-overflow-menu-dropdown-toggle" aria-label="Overflow menu">
                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
              </button>
              <ul class="pf-c-dropdown__menu" aria-labelledby="toolbar-selected-filters-toggle-group-collapsed-example-overflow-menu-dropdown-toggle" hidden>
                <li>
                  <button class="pf-c-dropdown__menu-item">Primary</button>
                </li>
                <li>
                  <button class="pf-c-dropdown__menu-item">Secondary</button>
                </li>
                <li>
                  <button class="pf-c-dropdown__menu-item">Tertiary</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pf-c-toolbar__expandable-content pf-m-hidden" id="toolbar-selected-filters-toggle-group-collapsed-example-expandable-content" hidden>
      <div class="pf-c-toolbar__group pf-m-chip-container">
        <div class="pf-c-toolbar__item pf-m-chip-group ">
          <div class="pf-c-chip-group pf-m-category">
            <span class="pf-c-chip-group__label" aria-hidden="true" id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-status-chip-group-label">Status</span>
            <ul class="pf-c-chip-group__list" role="list" aria-labelledby="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-status-chip-group-label">
              <li class="pf-c-chip-group__list-item">
                <div class="pf-c-chip">
                  <span class="pf-c-chip__text" id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statuschip-one">Chip one</span>
                  <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statusremove-chip-one toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statuschip-one" aria-label="Remove" id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statusremove-chip-one">
                    <i class="fas fa-times" aria-hidden="true"></i>
                  </button>
                </div>
              </li>
              <li class="pf-c-chip-group__list-item">
                <div class="pf-c-chip">
                  <span class="pf-c-chip__text" id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statuschip-two">Chip two</span>
                  <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statusremove-chip-two toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statuschip-two" aria-label="Remove" id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statusremove-chip-two">
                    <i class="fas fa-times" aria-hidden="true"></i>
                  </button>
                </div>
              </li>
              <li class="pf-c-chip-group__list-item">
                <div class="pf-c-chip">
                  <span class="pf-c-chip__text" id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statuschip-three">Chip three</span>
                  <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statusremove-chip-three toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statuschip-three" aria-label="Remove" id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statusremove-chip-three">
                    <i class="fas fa-times" aria-hidden="true"></i>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="pf-c-toolbar__item pf-m-chip-group ">
          <div class="pf-c-chip-group pf-m-category">
            <span class="pf-c-chip-group__label" aria-hidden="true" id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-risk-chip-group-label">Risk</span>
            <ul class="pf-c-chip-group__list" role="list" aria-labelledby="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-risk-chip-group-label">
              <li class="pf-c-chip-group__list-item">
                <div class="pf-c-chip">
                  <span class="pf-c-chip__text" id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskchip-one">Chip one</span>
                  <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskremove-chip-one toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskchip-one" aria-label="Remove" id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskremove-chip-one">
                    <i class="fas fa-times" aria-hidden="true"></i>
                  </button>
                </div>
              </li>
              <li class="pf-c-chip-group__list-item">
                <div class="pf-c-chip">
                  <span class="pf-c-chip__text" id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskchip-two">Chip two</span>
                  <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskremove-chip-two toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskchip-two" aria-label="Remove" id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskremove-chip-two">
                    <i class="fas fa-times" aria-hidden="true"></i>
                  </button>
                </div>
              </li>
              <li class="pf-c-chip-group__list-item">
                <div class="pf-c-chip">
                  <span class="pf-c-chip__text" id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskchip-three">Chip three</span>
                  <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskremove-chip-three toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskchip-three" aria-label="Remove" id="toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskremove-chip-three">
                    <i class="fas fa-times" aria-hidden="true"></i>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pf-c-toolbar__content">
    <div class="pf-c-toolbar__item">6 filters applied</div>
    <div class="pf-c-toolbar__item">
      <button class="pf-c-button pf-m-link pf-m-inline" type="button">Clear all filters</button>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "simple",
    picture: {
      src: "./pictures/toolbar/simple.png",
      width: 516,
      height: 89,
    },
    snippet: {
      html: `<div class="pf-c-toolbar" id="toolbar-simple-example">
  <div class="pf-c-toolbar__content">
    <div class="pf-c-toolbar__content-section">
      <div class="pf-c-toolbar__item">Item</div>
      <div class="pf-c-toolbar__item">Item</div>
      <div class="pf-c-toolbar__item">Item</div>
      <hr class="pf-c-divider pf-m-vertical" />
      <div class="pf-c-toolbar__group">
        <div class="pf-c-toolbar__item">Item</div>
        <div class="pf-c-toolbar__item">Item</div>
        <div class="pf-c-toolbar__item">Item</div>
      </div>
      <hr class="pf-c-divider pf-m-vertical" />
      <div class="pf-c-toolbar__item">Item</div>
      <div class="pf-c-toolbar__item">Item</div>
      <div class="pf-c-toolbar__item">Item</div>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "stacked-on-desktop",
    picture: {
      src: "./pictures/toolbar/stacked-on-desktop.png",
      width: 544,
      height: 186,
    },
    snippet: {
      html: `<div class="pf-c-toolbar" id="toolbar-stacked-example">
  <div class="pf-c-toolbar__content">
    <div class="pf-c-toolbar__content-section">
      <div class="pf-c-toolbar__group pf-m-toggle-group pf-m-show-on-2xl">
        <div class="pf-c-toolbar__toggle">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Show filters" aria-expanded="false" aria-controls="toolbar-stacked-example-expandable-content">
            <i class="fas fa-filter" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-c-toolbar__group">
          <div class="pf-c-toolbar__item pf-m-label" id="-select-checkbox-resource-label" aria-hidden="true">Resource</div>
          <div class="pf-c-toolbar__item">
            <div class="pf-c-select">
              <button class="pf-c-select__toggle" type="button" id="-select-checkbox-resource-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="-select-checkbox-resource-label -select-checkbox-resource-toggle">
                <div class="pf-c-select__toggle-wrapper">
                  <span class="pf-c-select__toggle-text">Pod</span>
                </div>
                <span class="pf-c-select__toggle-arrow">
                  <i class="fas fa-caret-down" aria-hidden="true"></i>
                </span>
              </button>
              <div class="pf-c-select__menu" hidden>
                <fieldset class="pf-c-select__menu-fieldset" aria-label="Select input">
                  <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="-select-checkbox-resource-active">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="-select-checkbox-resource-active" name="-select-checkbox-resource-active" />
                    <span class="pf-c-check__label">Active</span>
                    <div class="pf-c-check__description">This is a description</div>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="-select-checkbox-resource-cancelled">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="-select-checkbox-resource-cancelled" name="-select-checkbox-resource-cancelled" />
                    <span class="pf-c-check__label">Cancelled</span>
                    <div class="pf-c-check__description">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="-select-checkbox-resource-paused">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="-select-checkbox-resource-paused" name="-select-checkbox-resource-paused" />
                    <span class="pf-c-check__label">Paused</span>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="-select-checkbox-resource-warning">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="-select-checkbox-resource-warning" name="-select-checkbox-resource-warning" />
                    <span class="pf-c-check__label">Warning</span>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="-select-checkbox-resource-restarted">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="-select-checkbox-resource-restarted" name="-select-checkbox-resource-restarted" />
                    <span class="pf-c-check__label">Restarted</span>
                  </label>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
        <div class="pf-c-toolbar__group">
          <div class="pf-c-toolbar__item pf-m-label" id="-select-checkbox-status-label" aria-hidden="true">Status</div>
          <div class="pf-c-toolbar__item">
            <div class="pf-c-select">
              <button class="pf-c-select__toggle" type="button" id="-select-checkbox-status-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="-select-checkbox-status-label -select-checkbox-status-toggle">
                <div class="pf-c-select__toggle-wrapper">
                  <span class="pf-c-select__toggle-text">Running</span>
                </div>
                <span class="pf-c-select__toggle-arrow">
                  <i class="fas fa-caret-down" aria-hidden="true"></i>
                </span>
              </button>
              <div class="pf-c-select__menu" hidden>
                <fieldset class="pf-c-select__menu-fieldset" aria-label="Select input">
                  <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="-select-checkbox-status-active">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="-select-checkbox-status-active" name="-select-checkbox-status-active" />
                    <span class="pf-c-check__label">Active</span>
                    <div class="pf-c-check__description">This is a description</div>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="-select-checkbox-status-cancelled">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="-select-checkbox-status-cancelled" name="-select-checkbox-status-cancelled" />
                    <span class="pf-c-check__label">Cancelled</span>
                    <div class="pf-c-check__description">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="-select-checkbox-status-paused">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="-select-checkbox-status-paused" name="-select-checkbox-status-paused" />
                    <span class="pf-c-check__label">Paused</span>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="-select-checkbox-status-warning">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="-select-checkbox-status-warning" name="-select-checkbox-status-warning" />
                    <span class="pf-c-check__label">Warning</span>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="-select-checkbox-status-restarted">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="-select-checkbox-status-restarted" name="-select-checkbox-status-restarted" />
                    <span class="pf-c-check__label">Restarted</span>
                  </label>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
        <div class="pf-c-toolbar__group">
          <div class="pf-c-toolbar__item pf-m-label" id="-select-checkbox-type-label" aria-hidden="true">Type</div>
          <div class="pf-c-toolbar__item">
            <div class="pf-c-select">
              <button class="pf-c-select__toggle" type="button" id="-select-checkbox-type-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="-select-checkbox-type-label -select-checkbox-type-toggle">
                <div class="pf-c-select__toggle-wrapper">
                  <span class="pf-c-select__toggle-text">Any</span>
                </div>
                <span class="pf-c-select__toggle-arrow">
                  <i class="fas fa-caret-down" aria-hidden="true"></i>
                </span>
              </button>
              <div class="pf-c-select__menu" hidden>
                <fieldset class="pf-c-select__menu-fieldset" aria-label="Select input">
                  <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="-select-checkbox-type-active">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="-select-checkbox-type-active" name="-select-checkbox-type-active" />
                    <span class="pf-c-check__label">Active</span>
                    <div class="pf-c-check__description">This is a description</div>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="-select-checkbox-type-cancelled">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="-select-checkbox-type-cancelled" name="-select-checkbox-type-cancelled" />
                    <span class="pf-c-check__label">Cancelled</span>
                    <div class="pf-c-check__description">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="-select-checkbox-type-paused">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="-select-checkbox-type-paused" name="-select-checkbox-type-paused" />
                    <span class="pf-c-check__label">Paused</span>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="-select-checkbox-type-warning">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="-select-checkbox-type-warning" name="-select-checkbox-type-warning" />
                    <span class="pf-c-check__label">Warning</span>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="-select-checkbox-type-restarted">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="-select-checkbox-type-restarted" name="-select-checkbox-type-restarted" />
                    <span class="pf-c-check__label">Restarted</span>
                  </label>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pf-c-toolbar__group pf-m-icon-button-group">
        <div class="pf-c-toolbar__item">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Edit">
            <i class="fas fa-edit" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-c-toolbar__item">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Clone">
            <i class="fas fa-clone" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-c-toolbar__item">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Sync">
            <i class="fas fa-sync" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="pf-c-toolbar__item pf-m-overflow-menu">
        <div class="pf-c-overflow-menu" id="toolbar-stacked-example-overflow-menu">
          <div class="pf-c-overflow-menu__content">
            <div class="pf-c-overflow-menu__group pf-m-button-group">
              <div class="pf-c-overflow-menu__item">
                <button class="pf-c-button pf-m-primary" type="button">Primary</button>
              </div>
              <div class="pf-c-overflow-menu__item">
                <button class="pf-c-button pf-m-secondary" type="button">Secondary</button>
              </div>
            </div>
          </div>
          <div class="pf-c-overflow-menu__control">
            <div class="pf-c-dropdown">
              <button class="pf-c-button pf-c-dropdown__toggle pf-m-plain" type="button" id="toolbar-stacked-example-overflow-menu-dropdown-toggle" aria-label="Overflow menu">
                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
              </button>
              <ul class="pf-c-dropdown__menu" aria-labelledby="toolbar-stacked-example-overflow-menu-dropdown-toggle" hidden>
                <li>
                  <button class="pf-c-dropdown__menu-item">Tertiary</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pf-c-toolbar__expandable-content pf-m-hidden" id="toolbar-stacked-example-expandable-content" hidden></div>
  </div>
  <hr class="pf-c-divider" />
  <div class="pf-c-toolbar__content">
    <div class="pf-c-toolbar__content-section">
      <div class="pf-c-toolbar__item pf-m-bulk-select">
        <div class="pf-c-dropdown">
          <div class="pf-c-dropdown__toggle pf-m-split-button">
            <label class="pf-c-dropdown__toggle-check" for="toolbar-stacked-example-bulk-select-toggle-check">
              <input type="checkbox" id="toolbar-stacked-example-bulk-select-toggle-check" aria-label="Select all" />
            </label>
            <button class="pf-c-dropdown__toggle-button" type="button" aria-expanded="false" id="toolbar-stacked-example-bulk-select-toggle-button" aria-label="Select">
              <i class="fas fa-caret-down" aria-hidden="true"></i>
            </button>
          </div>
          <ul class="pf-c-dropdown__menu" aria-labelledby="toolbar-stacked-example-bulk-select-toggle-button" hidden>
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
        </div>
      </div>
      <div class="pf-c-toolbar__item pf-m-pagination ">
        <div class="pf-c-pagination" aria-label="Element pagination">
          <div class="pf-c-pagination__total-items">37 items</div>
          <div class="pf-c-options-menu">
            <div class="pf-c-options-menu__toggle pf-m-text pf-m-plain">
              <span class="pf-c-options-menu__toggle-text">
                <b>1 - 10</b> of 
                <b>37</b>
              </span>
              <button class="pf-c-options-menu__toggle-button" id="toolbar-stacked-example-pagination-options-menu-toggle" aria-haspopup="listbox" aria-expanded="false" aria-label="Items per page">
                <span class="pf-c-options-menu__toggle-button-icon">
                  <i class="fas fa-caret-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <ul class="pf-c-options-menu__menu" aria-labelledby="toolbar-stacked-example-pagination-options-menu-toggle" hidden>
              <li>
                <button class="pf-c-options-menu__menu-item" type="button">5 per page</button>
              </li>
              <li>
                <button class="pf-c-options-menu__menu-item" type="button">10 per page
                  <div class="pf-c-options-menu__menu-item-icon">
                    <i class="fas fa-check" aria-hidden="true"></i>
                  </div>
                </button>
              </li>
              <li>
                <button class="pf-c-options-menu__menu-item" type="button">20 per page</button>
              </li>
            </ul>
          </div>
          <nav class="pf-c-pagination__nav" aria-label="Pagination">
            <button class="pf-c-button pf-m-plain pf-m-disabled" type="button" aria-label="Go to first page" aria-disabled="true">
              <i class="fas fa-angle-double-left" aria-hidden="true"></i>
            </button>
            <button class="pf-c-button pf-m-plain pf-m-disabled" type="button" aria-label="Go to previous page" aria-disabled="true">
              <i class="fas fa-angle-left" aria-hidden="true"></i>
            </button>
            <div class="pf-c-pagination__nav-page-select" aria-label="Current page 1 of 4">
              <input class="pf-c-form-control" aria-label="Current page" type="number" min="1" max="4" value="1" />
              <span aria-hidden="true">of 4</span>
            </div>
            <button class="pf-c-button pf-m-plain" type="button" aria-label="Go to next page">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </button>
            <button class="pf-c-button pf-m-plain" type="button" aria-label="Go to last page">
              <i class="fas fa-angle-double-right" aria-hidden="true"></i>
            </button>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName:
      "stacked-on-mobile-filters-collapsed-expandable-content-expanded",
    picture: {
      src:
        "./pictures/toolbar/stacked-on-mobile-filters-collapsed-expandable-content-expanded.png",
      width: 544,
      height: 366,
    },
    snippet: {
      html: `<div class="pf-c-toolbar" id="toolbar-stacked-collapsed-example">
  <div class="pf-c-toolbar__content">
    <div class="pf-c-toolbar__content-section">
      <div class="pf-c-toolbar__group pf-m-toggle-group">
        <div class="pf-c-toolbar__toggle pf-m-expanded">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Show filters" aria-expanded="true" aria-controls="toolbar-stacked-collapsed-example-expandable-content">
            <i class="fas fa-filter" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="pf-c-toolbar__group pf-m-icon-button-group">
        <div class="pf-c-toolbar__item">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Edit">
            <i class="fas fa-edit" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-c-toolbar__item">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Clone">
            <i class="fas fa-clone" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-c-toolbar__item">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Sync">
            <i class="fas fa-sync" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="pf-c-toolbar__item pf-m-overflow-menu">
        <div class="pf-c-overflow-menu" id="toolbar-stacked-collapsed-example-overflow-menu">
          <div class="pf-c-overflow-menu__control">
            <div class="pf-c-dropdown">
              <button class="pf-c-button pf-c-dropdown__toggle pf-m-plain" type="button" id="toolbar-stacked-collapsed-example-overflow-menu-dropdown-toggle" aria-label="Overflow menu">
                <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
              </button>
              <ul class="pf-c-dropdown__menu" aria-labelledby="toolbar-stacked-collapsed-example-overflow-menu-dropdown-toggle" hidden>
                <li>
                  <button class="pf-c-dropdown__menu-item">Primary</button>
                </li>
                <li>
                  <button class="pf-c-dropdown__menu-item">Secondary</button>
                </li>
                <li>
                  <button class="pf-c-dropdown__menu-item">Tertiary</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pf-c-toolbar__expandable-content pf-m-expanded" id="toolbar-stacked-collapsed-example-expandable-content">
      <div class="pf-c-toolbar__group">
        <div class="pf-c-toolbar__item pf-m-label" id="toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-label">Resource</div>
        <div class="pf-c-toolbar__item">
          <div class="pf-c-select">
            <button class="pf-c-select__toggle" type="button" id="toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-label toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-toggle">
              <div class="pf-c-select__toggle-wrapper">
                <span class="pf-c-select__toggle-text">Pod</span>
              </div>
              <span class="pf-c-select__toggle-arrow">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </span>
            </button>
            <div class="pf-c-select__menu" hidden>
              <fieldset class="pf-c-select__menu-fieldset" aria-label="Select input">
                <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-active">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-active" name="toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-active" />
                  <span class="pf-c-check__label">Active</span>
                  <div class="pf-c-check__description">This is a description</div>
                </label>
                <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-cancelled">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-cancelled" name="toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-cancelled" />
                  <span class="pf-c-check__label">Cancelled</span>
                  <div class="pf-c-check__description">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>
                </label>
                <label class="pf-c-check pf-c-select__menu-item" for="toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-paused">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-paused" name="toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-paused" />
                  <span class="pf-c-check__label">Paused</span>
                </label>
                <label class="pf-c-check pf-c-select__menu-item" for="toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-warning">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-warning" name="toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-warning" />
                  <span class="pf-c-check__label">Warning</span>
                </label>
                <label class="pf-c-check pf-c-select__menu-item" for="toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-restarted">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-restarted" name="toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-restarted" />
                  <span class="pf-c-check__label">Restarted</span>
                </label>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <div class="pf-c-toolbar__group">
        <div class="pf-c-toolbar__item pf-m-label" id="toolbar-stacked-collapsed-example-select-checkbox-status-expanded-label">Status</div>
        <div class="pf-c-toolbar__item">
          <div class="pf-c-select">
            <button class="pf-c-select__toggle" type="button" id="toolbar-stacked-collapsed-example-select-checkbox-status-expanded-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="toolbar-stacked-collapsed-example-select-checkbox-status-expanded-label toolbar-stacked-collapsed-example-select-checkbox-status-expanded-toggle">
              <div class="pf-c-select__toggle-wrapper">
                <span class="pf-c-select__toggle-text">Running</span>
              </div>
              <span class="pf-c-select__toggle-arrow">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </span>
            </button>
            <div class="pf-c-select__menu" hidden>
              <fieldset class="pf-c-select__menu-fieldset" aria-label="Select input">
                <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="toolbar-stacked-collapsed-example-select-checkbox-status-expanded-active">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-stacked-collapsed-example-select-checkbox-status-expanded-active" name="toolbar-stacked-collapsed-example-select-checkbox-status-expanded-active" />
                  <span class="pf-c-check__label">Active</span>
                  <div class="pf-c-check__description">This is a description</div>
                </label>
                <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="toolbar-stacked-collapsed-example-select-checkbox-status-expanded-cancelled">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-stacked-collapsed-example-select-checkbox-status-expanded-cancelled" name="toolbar-stacked-collapsed-example-select-checkbox-status-expanded-cancelled" />
                  <span class="pf-c-check__label">Cancelled</span>
                  <div class="pf-c-check__description">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>
                </label>
                <label class="pf-c-check pf-c-select__menu-item" for="toolbar-stacked-collapsed-example-select-checkbox-status-expanded-paused">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-stacked-collapsed-example-select-checkbox-status-expanded-paused" name="toolbar-stacked-collapsed-example-select-checkbox-status-expanded-paused" />
                  <span class="pf-c-check__label">Paused</span>
                </label>
                <label class="pf-c-check pf-c-select__menu-item" for="toolbar-stacked-collapsed-example-select-checkbox-status-expanded-warning">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-stacked-collapsed-example-select-checkbox-status-expanded-warning" name="toolbar-stacked-collapsed-example-select-checkbox-status-expanded-warning" />
                  <span class="pf-c-check__label">Warning</span>
                </label>
                <label class="pf-c-check pf-c-select__menu-item" for="toolbar-stacked-collapsed-example-select-checkbox-status-expanded-restarted">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-stacked-collapsed-example-select-checkbox-status-expanded-restarted" name="toolbar-stacked-collapsed-example-select-checkbox-status-expanded-restarted" />
                  <span class="pf-c-check__label">Restarted</span>
                </label>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <div class="pf-c-toolbar__group">
        <div class="pf-c-toolbar__item pf-m-label" id="toolbar-stacked-collapsed-example-select-checkbox-type-expanded-label">Type</div>
        <div class="pf-c-toolbar__item">
          <div class="pf-c-select">
            <button class="pf-c-select__toggle" type="button" id="toolbar-stacked-collapsed-example-select-checkbox-type-expanded-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="toolbar-stacked-collapsed-example-select-checkbox-type-expanded-label toolbar-stacked-collapsed-example-select-checkbox-type-expanded-toggle">
              <div class="pf-c-select__toggle-wrapper">
                <span class="pf-c-select__toggle-text">Any</span>
              </div>
              <span class="pf-c-select__toggle-arrow">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </span>
            </button>
            <div class="pf-c-select__menu" hidden>
              <fieldset class="pf-c-select__menu-fieldset" aria-label="Select input">
                <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="toolbar-stacked-collapsed-example-select-checkbox-type-expanded-active">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-stacked-collapsed-example-select-checkbox-type-expanded-active" name="toolbar-stacked-collapsed-example-select-checkbox-type-expanded-active" />
                  <span class="pf-c-check__label">Active</span>
                  <div class="pf-c-check__description">This is a description</div>
                </label>
                <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="toolbar-stacked-collapsed-example-select-checkbox-type-expanded-cancelled">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-stacked-collapsed-example-select-checkbox-type-expanded-cancelled" name="toolbar-stacked-collapsed-example-select-checkbox-type-expanded-cancelled" />
                  <span class="pf-c-check__label">Cancelled</span>
                  <div class="pf-c-check__description">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>
                </label>
                <label class="pf-c-check pf-c-select__menu-item" for="toolbar-stacked-collapsed-example-select-checkbox-type-expanded-paused">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-stacked-collapsed-example-select-checkbox-type-expanded-paused" name="toolbar-stacked-collapsed-example-select-checkbox-type-expanded-paused" />
                  <span class="pf-c-check__label">Paused</span>
                </label>
                <label class="pf-c-check pf-c-select__menu-item" for="toolbar-stacked-collapsed-example-select-checkbox-type-expanded-warning">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-stacked-collapsed-example-select-checkbox-type-expanded-warning" name="toolbar-stacked-collapsed-example-select-checkbox-type-expanded-warning" />
                  <span class="pf-c-check__label">Warning</span>
                </label>
                <label class="pf-c-check pf-c-select__menu-item" for="toolbar-stacked-collapsed-example-select-checkbox-type-expanded-restarted">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-stacked-collapsed-example-select-checkbox-type-expanded-restarted" name="toolbar-stacked-collapsed-example-select-checkbox-type-expanded-restarted" />
                  <span class="pf-c-check__label">Restarted</span>
                </label>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr class="pf-c-divider" />
  <div class="pf-c-toolbar__content">
    <div class="pf-c-toolbar__content-section">
      <div class="pf-c-toolbar__item pf-m-bulk-select">
        <div class="pf-c-dropdown">
          <div class="pf-c-dropdown__toggle pf-m-split-button">
            <label class="pf-c-dropdown__toggle-check" for="toolbar-stacked-collapsed-example-bulk-select-toggle-check">
              <input type="checkbox" id="toolbar-stacked-collapsed-example-bulk-select-toggle-check" aria-label="Select all" />
            </label>
            <button class="pf-c-dropdown__toggle-button" type="button" aria-expanded="false" id="toolbar-stacked-collapsed-example-bulk-select-toggle-button" aria-label="Select">
              <i class="fas fa-caret-down" aria-hidden="true"></i>
            </button>
          </div>
          <ul class="pf-c-dropdown__menu" aria-labelledby="toolbar-stacked-collapsed-example-bulk-select-toggle-button" hidden>
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
        </div>
      </div>
      <div class="pf-c-toolbar__item pf-m-pagination ">
        <div class="pf-c-pagination" aria-label="Element pagination">
          <div class="pf-c-pagination__total-items">37 items</div>
          <div class="pf-c-options-menu">
            <div class="pf-c-options-menu__toggle pf-m-text pf-m-plain">
              <span class="pf-c-options-menu__toggle-text">
                <b>1 - 10</b> of 
                <b>37</b>
              </span>
              <button class="pf-c-options-menu__toggle-button" id="toolbar-stacked-collapsed-example-pagination-options-menu-toggle" aria-haspopup="listbox" aria-expanded="false" aria-label="Items per page">
                <span class="pf-c-options-menu__toggle-button-icon">
                  <i class="fas fa-caret-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <ul class="pf-c-options-menu__menu" aria-labelledby="toolbar-stacked-collapsed-example-pagination-options-menu-toggle" hidden>
              <li>
                <button class="pf-c-options-menu__menu-item" type="button">5 per page</button>
              </li>
              <li>
                <button class="pf-c-options-menu__menu-item" type="button">10 per page
                  <div class="pf-c-options-menu__menu-item-icon">
                    <i class="fas fa-check" aria-hidden="true"></i>
                  </div>
                </button>
              </li>
              <li>
                <button class="pf-c-options-menu__menu-item" type="button">20 per page</button>
              </li>
            </ul>
          </div>
          <nav class="pf-c-pagination__nav" aria-label="Pagination">
            <button class="pf-c-button pf-m-plain pf-m-disabled" type="button" aria-label="Go to first page" aria-disabled="true">
              <i class="fas fa-angle-double-left" aria-hidden="true"></i>
            </button>
            <button class="pf-c-button pf-m-plain pf-m-disabled" type="button" aria-label="Go to previous page" aria-disabled="true">
              <i class="fas fa-angle-left" aria-hidden="true"></i>
            </button>
            <div class="pf-c-pagination__nav-page-select" aria-label="Current page 1 of 4">
              <input class="pf-c-form-control" aria-label="Current page" type="number" min="1" max="4" value="1" />
              <span aria-hidden="true">of 4</span>
            </div>
            <button class="pf-c-button pf-m-plain" type="button" aria-label="Go to next page">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </button>
            <button class="pf-c-button pf-m-plain" type="button" aria-label="Go to last page">
              <i class="fas fa-angle-double-right" aria-hidden="true"></i>
            </button>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "toggle-group",
    picture: {
      src: "./pictures/toolbar/toggle-group.png",
      width: 539,
      height: 101,
    },
    snippet: {
      html: `<div class="pf-c-toolbar" id="toolbar-toggle-group-example">
  <div class="pf-c-toolbar__content">
    <div class="pf-c-toolbar__content-section">
      <div class="pf-c-toolbar__group pf-m-toggle-group pf-m-show-on-lg">
        <div class="pf-c-toolbar__toggle">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Show filters" aria-expanded="false" aria-controls="toolbar-toggle-group-example-expandable-content">
            <i class="fas fa-filter" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-c-toolbar__item pf-m-search-filter ">
          <div class="pf-c-input-group" aria-label="search filter" role="group">
            <div class="pf-c-dropdown">
              <button class="pf-c-dropdown__toggle" type="button" id="toolbar-toggle-group-example-content-button" aria-expanded="false">
                <span class="pf-c-dropdown__toggle-text">Name</span>
                <span class="pf-c-dropdown__toggle-icon">
                  <i class="fas fa-caret-down" aria-hidden="true"></i>
                </span>
              </button>
              <div class="pf-c-dropdown__menu" hidden>[Panel contents here]</div>
            </div>
            <input class="pf-c-form-control" type="search" id="toolbar-toggle-group-example-content-search-filter-input" name="toolbar-toggle-group-example-search-filter-input" aria-label="input with dropdown and button" aria-describedby="toolbar-toggle-group-example-content-button" />
          </div>
        </div>
        <div class="pf-c-toolbar__group pf-m-filter-group">
          <div class="pf-c-toolbar__item">
            <div class="pf-c-select">
              <span id="toolbar-toggle-group-example-select-checkbox-status-label" hidden>Choose one</span>
              <button class="pf-c-select__toggle" type="button" id="toolbar-toggle-group-example-select-checkbox-status-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="toolbar-toggle-group-example-select-checkbox-status-label toolbar-toggle-group-example-select-checkbox-status-toggle">
                <div class="pf-c-select__toggle-wrapper">
                  <span class="pf-c-select__toggle-text">Status</span>
                </div>
                <span class="pf-c-select__toggle-arrow">
                  <i class="fas fa-caret-down" aria-hidden="true"></i>
                </span>
              </button>
              <div class="pf-c-select__menu" hidden>
                <fieldset class="pf-c-select__menu-fieldset" aria-label="Select input">
                  <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="toolbar-toggle-group-example-select-checkbox-status-active">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-toggle-group-example-select-checkbox-status-active" name="toolbar-toggle-group-example-select-checkbox-status-active" />
                    <span class="pf-c-check__label">Active</span>
                    <div class="pf-c-check__description">This is a description</div>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="toolbar-toggle-group-example-select-checkbox-status-cancelled">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-toggle-group-example-select-checkbox-status-cancelled" name="toolbar-toggle-group-example-select-checkbox-status-cancelled" />
                    <span class="pf-c-check__label">Cancelled</span>
                    <div class="pf-c-check__description">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-toggle-group-example-select-checkbox-status-paused">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-toggle-group-example-select-checkbox-status-paused" name="toolbar-toggle-group-example-select-checkbox-status-paused" />
                    <span class="pf-c-check__label">Paused</span>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-toggle-group-example-select-checkbox-status-warning">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-toggle-group-example-select-checkbox-status-warning" name="toolbar-toggle-group-example-select-checkbox-status-warning" />
                    <span class="pf-c-check__label">Warning</span>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-toggle-group-example-select-checkbox-status-restarted">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-toggle-group-example-select-checkbox-status-restarted" name="toolbar-toggle-group-example-select-checkbox-status-restarted" />
                    <span class="pf-c-check__label">Restarted</span>
                  </label>
                </fieldset>
              </div>
            </div>
          </div>
          <div class="pf-c-toolbar__item">
            <div class="pf-c-select">
              <span id="toolbar-toggle-group-example-select-checkbox-risk-label" hidden>Choose one</span>
              <button class="pf-c-select__toggle" type="button" id="toolbar-toggle-group-example-select-checkbox-risk-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="toolbar-toggle-group-example-select-checkbox-risk-label toolbar-toggle-group-example-select-checkbox-risk-toggle">
                <div class="pf-c-select__toggle-wrapper">
                  <span class="pf-c-select__toggle-text">Risk</span>
                </div>
                <span class="pf-c-select__toggle-arrow">
                  <i class="fas fa-caret-down" aria-hidden="true"></i>
                </span>
              </button>
              <div class="pf-c-select__menu" hidden>
                <fieldset class="pf-c-select__menu-fieldset" aria-label="Select input">
                  <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="toolbar-toggle-group-example-select-checkbox-risk-active">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-toggle-group-example-select-checkbox-risk-active" name="toolbar-toggle-group-example-select-checkbox-risk-active" />
                    <span class="pf-c-check__label">Active</span>
                    <div class="pf-c-check__description">This is a description</div>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="toolbar-toggle-group-example-select-checkbox-risk-cancelled">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-toggle-group-example-select-checkbox-risk-cancelled" name="toolbar-toggle-group-example-select-checkbox-risk-cancelled" />
                    <span class="pf-c-check__label">Cancelled</span>
                    <div class="pf-c-check__description">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-toggle-group-example-select-checkbox-risk-paused">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-toggle-group-example-select-checkbox-risk-paused" name="toolbar-toggle-group-example-select-checkbox-risk-paused" />
                    <span class="pf-c-check__label">Paused</span>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-toggle-group-example-select-checkbox-risk-warning">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-toggle-group-example-select-checkbox-risk-warning" name="toolbar-toggle-group-example-select-checkbox-risk-warning" />
                    <span class="pf-c-check__label">Warning</span>
                  </label>
                  <label class="pf-c-check pf-c-select__menu-item" for="toolbar-toggle-group-example-select-checkbox-risk-restarted">
                    <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-toggle-group-example-select-checkbox-risk-restarted" name="toolbar-toggle-group-example-select-checkbox-risk-restarted" />
                    <span class="pf-c-check__label">Restarted</span>
                  </label>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pf-c-toolbar__expandable-content pf-m-hidden" id="toolbar-toggle-group-example-expandable-content" hidden></div>
  </div>
</div>`,
    },
  },
  {
    displayName:
      "toggle-group-on-mobile-filters-collapsed-expandable-content-expanded",
    picture: {
      src:
        "./pictures/toolbar/toggle-group-on-mobile-filters-collapsed-expandable-content-expanded.png",
      width: 405,
      height: 281,
    },
    snippet: {
      html: `<div class="pf-c-toolbar" id="toolbar-toggle-group-collapsed-example">
  <div class="pf-c-toolbar__content">
    <div class="pf-c-toolbar__content-section">
      <div class="pf-c-toolbar__group pf-m-toggle-group">
        <div class="pf-c-toolbar__toggle pf-m-expanded">
          <button class="pf-c-button pf-m-plain" type="button" aria-label="Show filters" aria-expanded="true" aria-controls="toolbar-toggle-group-collapsed-example-expandable-content">
            <i class="fas fa-filter" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="pf-c-toolbar__expandable-content pf-m-expanded" id="toolbar-toggle-group-collapsed-example-expandable-content">
      <div class="pf-c-toolbar__item pf-m-search-filter ">
        <div class="pf-c-input-group" aria-label="search filter" role="group">
          <div class="pf-c-dropdown">
            <button class="pf-c-dropdown__toggle" type="button" id="toolbar-toggle-group-collapsed-example-expandable-content-button" aria-expanded="false">
              <span class="pf-c-dropdown__toggle-text">Name</span>
              <span class="pf-c-dropdown__toggle-icon">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </span>
            </button>
            <div class="pf-c-dropdown__menu" hidden>[Panel contents here]</div>
          </div>
          <input class="pf-c-form-control" type="search" id="toolbar-toggle-group-collapsed-example-expandable-content-search-filter-input" name="toolbar-toggle-group-collapsed-example-search-filter-input" aria-label="input with dropdown and button" aria-describedby="toolbar-toggle-group-collapsed-example-expandable-content-button" />
        </div>
      </div>
      <div class="pf-c-toolbar__group pf-m-filter-group">
        <div class="pf-c-toolbar__item">
          <div class="pf-c-select">
            <span id="toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-label" hidden>Choose one</span>
            <button class="pf-c-select__toggle" type="button" id="toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-label toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-toggle">
              <div class="pf-c-select__toggle-wrapper">
                <span class="pf-c-select__toggle-text">Status</span>
              </div>
              <span class="pf-c-select__toggle-arrow">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </span>
            </button>
            <div class="pf-c-select__menu" hidden>
              <fieldset class="pf-c-select__menu-fieldset" aria-label="Select input">
                <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-active">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-active" name="toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-active" />
                  <span class="pf-c-check__label">Active</span>
                  <div class="pf-c-check__description">This is a description</div>
                </label>
                <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-cancelled">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-cancelled" name="toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-cancelled" />
                  <span class="pf-c-check__label">Cancelled</span>
                  <div class="pf-c-check__description">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>
                </label>
                <label class="pf-c-check pf-c-select__menu-item" for="toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-paused">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-paused" name="toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-paused" />
                  <span class="pf-c-check__label">Paused</span>
                </label>
                <label class="pf-c-check pf-c-select__menu-item" for="toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-warning">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-warning" name="toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-warning" />
                  <span class="pf-c-check__label">Warning</span>
                </label>
                <label class="pf-c-check pf-c-select__menu-item" for="toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-restarted">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-restarted" name="toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-restarted" />
                  <span class="pf-c-check__label">Restarted</span>
                </label>
              </fieldset>
            </div>
          </div>
        </div>
        <div class="pf-c-toolbar__item">
          <div class="pf-c-select">
            <span id="toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-label" hidden>Choose one</span>
            <button class="pf-c-select__toggle" type="button" id="toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-label toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-toggle">
              <div class="pf-c-select__toggle-wrapper">
                <span class="pf-c-select__toggle-text">Risk</span>
              </div>
              <span class="pf-c-select__toggle-arrow">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
              </span>
            </button>
            <div class="pf-c-select__menu" hidden>
              <fieldset class="pf-c-select__menu-fieldset" aria-label="Select input">
                <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-active">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-active" name="toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-active" />
                  <span class="pf-c-check__label">Active</span>
                  <div class="pf-c-check__description">This is a description</div>
                </label>
                <label class="pf-c-check pf-c-select__menu-item pf-m-description" for="toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-cancelled">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-cancelled" name="toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-cancelled" />
                  <span class="pf-c-check__label">Cancelled</span>
                  <div class="pf-c-check__description">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>
                </label>
                <label class="pf-c-check pf-c-select__menu-item" for="toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-paused">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-paused" name="toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-paused" />
                  <span class="pf-c-check__label">Paused</span>
                </label>
                <label class="pf-c-check pf-c-select__menu-item" for="toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-warning">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-warning" name="toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-warning" />
                  <span class="pf-c-check__label">Warning</span>
                </label>
                <label class="pf-c-check pf-c-select__menu-item" for="toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-restarted">
                  <input class="pf-c-check__input" type="checkbox" type="checkbox" id="toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-restarted" name="toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-restarted" />
                  <span class="pf-c-check__label">Restarted</span>
                </label>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
  },
];
