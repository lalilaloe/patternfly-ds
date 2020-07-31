export default {
  displayName: "optionsmenu",
  name: "optionsmenu",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/optionsmenu/",
};

export const variants = [
  {
    displayName: "align-right",
    picture: {
      src: "./components/pictures/optionsmenu/align-right.png",
      width: 293,
      height: 215,
    },
    snippet: {
      html: `<div class="pf-c-options-menu pf-m-expanded pf-m-align-right">
  <button class="pf-c-options-menu__toggle" type="button" id="options-menu-align-right-example-toggle" aria-haspopup="listbox" aria-expanded="true">
    <span class="pf-c-options-menu__toggle-text">Options menu</span>
    <div class="pf-c-options-menu__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </div>
  </button>
  <ul class="pf-c-options-menu__menu pf-m-align-right" aria-labelledby="options-menu-align-right-example-toggle">
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>
    </li>
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 2
        <div class="pf-c-options-menu__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </div>
      </button>
    </li>
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 3</button>
    </li>
  </ul>
</div>`,
    },
  },
  {
    displayName: "align-top",
    picture: {
      src: "./components/pictures/optionsmenu/align-top.png",
      width: 293,
      height: 215,
    },
    snippet: {
      html: `<div class="pf-c-options-menu pf-m-expanded pf-m-top">
  <button class="pf-c-options-menu__toggle" type="button" id="options-menu-top-example-toggle" aria-haspopup="listbox" aria-expanded="true">
    <span class="pf-c-options-menu__toggle-text">Options menu</span>
    <div class="pf-c-options-menu__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </div>
  </button>
  <ul class="pf-c-options-menu__menu pf-m-top" aria-labelledby="options-menu-top-example-toggle">
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>
    </li>
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 2
        <div class="pf-c-options-menu__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </div>
      </button>
    </li>
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 3</button>
    </li>
  </ul>
</div>`,
    },
  },
  {
    displayName: "disabled",
    picture: {
      src: "./components/pictures/optionsmenu/disabled.png",
      width: 293,
      height: 69,
    },
    snippet: {
      html: `<div class="pf-c-options-menu">
  <button class="pf-c-options-menu__toggle" type="button" id="options-menu-single-disabled-example-toggle" aria-haspopup="listbox" aria-expanded="false" disabled>
    <span class="pf-c-options-menu__toggle-text">Disabled options menu</span>
    <div class="pf-c-options-menu__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </div>
  </button>
</div>`,
    },
  },
  {
    displayName: "multiple-options",
    picture: {
      src: "./components/pictures/optionsmenu/multiple-options.png",
      width: 293,
      height: 350,
    },
    snippet: {
      html: `<div class="pf-c-options-menu">
  <button class="pf-c-options-menu__toggle" type="button" id="options-menu-multiple-example-toggle" aria-haspopup="listbox" aria-expanded="false">
    <span class="pf-c-options-menu__toggle-text">Sort by</span>
    <div class="pf-c-options-menu__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </div>
  </button>
  <ul class="pf-c-options-menu__menu" aria-labelledby="options-menu-multiple-example-toggle" hidden>
    <li>
      <ul aria-label="Sort by">
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Name</button>
        </li>
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Date
            <div class="pf-c-options-menu__menu-item-icon">
              <i class="fas fa-check" aria-hidden="true"></i>
            </div>
          </button>
        </li>
        <li>
          <button class="pf-c-options-menu__menu-item" type="button" disabled>Disabled</button>
        </li>
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Size</button>
        </li>
      </ul>
    </li>
    <li class="pf-c-divider" role="separator"></li>
    <li>
      <ul aria-label="Sort direction">
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Ascending
            <div class="pf-c-options-menu__menu-item-icon">
              <i class="fas fa-check" aria-hidden="true"></i>
            </div>
          </button>
        </li>
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Descending</button>
        </li>
      </ul>
    </li>
  </ul>
</div>
<div class="pf-c-options-menu pf-m-expanded">
  <button class="pf-c-options-menu__toggle" type="button" id="options-menu-multiple-expanded-example-toggle" aria-haspopup="listbox" aria-expanded="true">
    <span class="pf-c-options-menu__toggle-text">Sort by</span>
    <div class="pf-c-options-menu__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </div>
  </button>
  <ul class="pf-c-options-menu__menu" aria-labelledby="options-menu-multiple-expanded-example-toggle">
    <li>
      <ul aria-label="Sort by">
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Name</button>
        </li>
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Date
            <div class="pf-c-options-menu__menu-item-icon">
              <i class="fas fa-check" aria-hidden="true"></i>
            </div>
          </button>
        </li>
        <li>
          <button class="pf-c-options-menu__menu-item" type="button" disabled>Disabled</button>
        </li>
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Size</button>
        </li>
      </ul>
    </li>
    <li class="pf-c-divider" role="separator"></li>
    <li>
      <ul aria-label="Sort direction">
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Ascending
            <div class="pf-c-options-menu__menu-item-icon">
              <i class="fas fa-check" aria-hidden="true"></i>
            </div>
          </button>
        </li>
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Descending</button>
        </li>
      </ul>
    </li>
  </ul>
</div>`,
    },
  },
  {
    displayName: "plain",
    picture: {
      src: "./components/pictures/optionsmenu/plain.png",
      width: 293,
      height: 215,
    },
    snippet: {
      html: `<div class="pf-c-options-menu">
  <button class="pf-c-options-menu__toggle pf-m-plain" type="button" id="options-menu-plain-disabled-example-toggle" aria-haspopup="listbox" aria-expanded="false" disabled aria-label="Sort by">
    <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-options-menu__menu" aria-labelledby="options-menu-plain-disabled-example-toggle" hidden>
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>
    </li>
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 2
        <div class="pf-c-options-menu__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </div>
      </button>
    </li>
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 3</button>
    </li>
  </ul>
</div>
<div class="pf-c-options-menu">
  <button class="pf-c-options-menu__toggle pf-m-plain" type="button" id="options-menu-plain-example-toggle" aria-haspopup="listbox" aria-expanded="false" aria-label="Sort by">
    <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-options-menu__menu" aria-labelledby="options-menu-plain-example-toggle" hidden>
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>
    </li>
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 2
        <div class="pf-c-options-menu__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </div>
      </button>
    </li>
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 3</button>
    </li>
  </ul>
</div>
<div class="pf-c-options-menu pf-m-expanded">
  <button class="pf-c-options-menu__toggle pf-m-plain" type="button" id="options-menu-plain-expanded-example-toggle" aria-haspopup="listbox" aria-expanded="true" aria-label="Sort by">
    <i class="fas fa-sort-amount-down" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-options-menu__menu" aria-labelledby="options-menu-plain-expanded-example-toggle">
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>
    </li>
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 2
        <div class="pf-c-options-menu__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </div>
      </button>
    </li>
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 3</button>
    </li>
  </ul>
</div>`,
    },
  },
  {
    displayName: "plain-with-text",
    picture: {
      src: "./components/pictures/optionsmenu/plain-with-text.png",
      width: 396,
      height: 280,
    },
    snippet: {
      html: `<div class="pf-c-options-menu">
  <div class="pf-c-options-menu__toggle pf-m-text pf-m-disabled pf-m-plain">
    <span class="pf-c-options-menu__toggle-text">Custom text</span>
    <button class="pf-c-options-menu__toggle-button" id="options-menu-disabled-text-example-toggle" aria-haspopup="listbox" aria-expanded="false" aria-label="Options menu" disabled>
      <span class="pf-c-options-menu__toggle-button-icon">
        <i class="fas fa-caret-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <ul class="pf-c-options-menu__menu" aria-labelledby="options-menu-disabled-text-example-toggle" hidden>
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>
    </li>
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 2
        <div class="pf-c-options-menu__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </div>
      </button>
    </li>
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 3</button>
    </li>
  </ul>
</div>
<div class="pf-c-options-menu">
  <div class="pf-c-options-menu__toggle pf-m-text pf-m-plain">
    <span class="pf-c-options-menu__toggle-text">Custom text</span>
    <button class="pf-c-options-menu__toggle-button" id="options-menu-plain-text-example-toggle" aria-haspopup="listbox" aria-expanded="false" aria-label="Options menu">
      <span class="pf-c-options-menu__toggle-button-icon">
        <i class="fas fa-caret-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <ul class="pf-c-options-menu__menu" aria-labelledby="options-menu-plain-text-example-toggle" hidden>
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>
    </li>
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 2
        <div class="pf-c-options-menu__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </div>
      </button>
    </li>
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 3</button>
    </li>
  </ul>
</div>
<div class="pf-c-options-menu pf-m-expanded">
  <div class="pf-c-options-menu__toggle pf-m-text pf-m-plain">
    <span class="pf-c-options-menu__toggle-text">Custom text</span>
    <button class="pf-c-options-menu__toggle-button" id="options-menu-plain-text-expanded-example-toggle" aria-haspopup="listbox" aria-expanded="true" aria-label="Options menu">
      <span class="pf-c-options-menu__toggle-button-icon">
        <i class="fas fa-caret-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <ul class="pf-c-options-menu__menu" aria-labelledby="options-menu-plain-text-expanded-example-toggle">
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>
    </li>
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 2
        <div class="pf-c-options-menu__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </div>
      </button>
    </li>
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 3</button>
    </li>
  </ul>
</div>`,
    },
  },
  {
    displayName: "single-option",
    picture: {
      src: "./components/pictures/optionsmenu/single-option.png",
      width: 333,
      height: 215,
    },
    snippet: {
      html: `<div class="pf-c-options-menu">
  <button class="pf-c-options-menu__toggle" type="button" id="options-menu-single-example-toggle" aria-haspopup="listbox" aria-expanded="false">
    <span class="pf-c-options-menu__toggle-text">Options menu</span>
    <div class="pf-c-options-menu__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </div>
  </button>
  <ul class="pf-c-options-menu__menu" aria-labelledby="options-menu-single-example-toggle" hidden>
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>
    </li>
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 2
        <div class="pf-c-options-menu__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </div>
      </button>
    </li>
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 3</button>
    </li>
  </ul>
</div>
<div class="pf-c-options-menu pf-m-expanded">
  <button class="pf-c-options-menu__toggle" type="button" id="options-menu-single-expanded-example-toggle" aria-haspopup="listbox" aria-expanded="true">
    <span class="pf-c-options-menu__toggle-text">Options menu</span>
    <div class="pf-c-options-menu__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </div>
  </button>
  <ul class="pf-c-options-menu__menu" aria-labelledby="options-menu-single-expanded-example-toggle">
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>
    </li>
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 2
        <div class="pf-c-options-menu__menu-item-icon">
          <i class="fas fa-check" aria-hidden="true"></i>
        </div>
      </button>
    </li>
    <li>
      <button class="pf-c-options-menu__menu-item" type="button">Option 3</button>
    </li>
  </ul>
</div>`,
    },
  },
  {
    displayName: "with-groups",
    picture: {
      src: "./components/pictures/optionsmenu/with-groups.png",
      width: 293,
      height: 450,
    },
    snippet: {
      html: `<div class="pf-c-options-menu pf-m-expanded">
  <button class="pf-c-options-menu__toggle" type="button" id="options-menu-groups-toggle" aria-haspopup="listbox" aria-expanded="true">
    <span class="pf-c-options-menu__toggle-text">Options menu</span>
    <div class="pf-c-options-menu__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </div>
  </button>
  <div class="pf-c-options-menu__menu" aria-labelledby="options-menu-groups-toggle">
    <section class="pf-c-options-menu__group">
      <ul>
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>
        </li>
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Option 2
            <div class="pf-c-options-menu__menu-item-icon">
              <i class="fas fa-check" aria-hidden="true"></i>
            </div>
          </button>
        </li>
      </ul>
    </section>
    <section class="pf-c-options-menu__group">
      <h1 class="pf-c-options-menu__group-title">Group 1</h1>
      <ul>
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>
        </li>
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Option 2</button>
        </li>
      </ul>
    </section>
    <section class="pf-c-options-menu__group">
      <h1 class="pf-c-options-menu__group-title">Group 2</h1>
      <ul>
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>
        </li>
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Option 2</button>
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
      src:
        "./components/pictures/optionsmenu/with-groups-and-dividers-between-groups.png",
      width: 293,
      height: 450,
    },
    snippet: {
      html: `<div class="pf-c-options-menu pf-m-expanded">
  <button class="pf-c-options-menu__toggle" type="button" id="options-menu-groups-and-dividers-between-groups-toggle" aria-haspopup="listbox" aria-expanded="true">
    <span class="pf-c-options-menu__toggle-text">Options menu</span>
    <div class="pf-c-options-menu__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </div>
  </button>
  <div class="pf-c-options-menu__menu" aria-labelledby="options-menu-groups-and-dividers-between-groups-toggle">
    <section class="pf-c-options-menu__group">
      <ul>
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>
        </li>
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Option 2
            <div class="pf-c-options-menu__menu-item-icon">
              <i class="fas fa-check" aria-hidden="true"></i>
            </div>
          </button>
        </li>
      </ul>
    </section>
    <hr class="pf-c-divider" />
    <section class="pf-c-options-menu__group">
      <h1 class="pf-c-options-menu__group-title">Group 1</h1>
      <ul>
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>
        </li>
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Option 2</button>
        </li>
      </ul>
    </section>
    <hr class="pf-c-divider" />
    <section class="pf-c-options-menu__group">
      <h1 class="pf-c-options-menu__group-title">Group 2</h1>
      <ul>
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>
        </li>
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Option 2</button>
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
      src:
        "./components/pictures/optionsmenu/with-groups-and-dividers-between-items.png",
      width: 293,
      height: 450,
    },
    snippet: {
      html: `<div class="pf-c-options-menu pf-m-expanded">
  <button class="pf-c-options-menu__toggle" type="button" id="options-menu-groups-and-dividers-between-items-toggle" aria-haspopup="listbox" aria-expanded="true">
    <span class="pf-c-options-menu__toggle-text">Options menu</span>
    <div class="pf-c-options-menu__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </div>
  </button>
  <div class="pf-c-options-menu__menu" aria-labelledby="options-menu-groups-and-dividers-between-items-toggle">
    <section class="pf-c-options-menu__group">
      <ul>
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>
        </li>
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Option 2
            <div class="pf-c-options-menu__menu-item-icon">
              <i class="fas fa-check" aria-hidden="true"></i>
            </div>
          </button>
        </li>
        <li class="pf-c-divider" role="separator"></li>
      </ul>
    </section>
    <section class="pf-c-options-menu__group">
      <h1 class="pf-c-options-menu__group-title">Group 1</h1>
      <ul>
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>
        </li>
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Option 2</button>
        </li>
        <li class="pf-c-divider" role="separator"></li>
      </ul>
    </section>
    <section class="pf-c-options-menu__group">
      <h1 class="pf-c-options-menu__group-title">Group 2</h1>
      <ul>
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Option 1</button>
        </li>
        <li>
          <button class="pf-c-options-menu__menu-item" type="button">Option 2</button>
        </li>
      </ul>
    </section>
  </div>
</div>`,
    },
  },
];
