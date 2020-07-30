export default {
  displayName: "pagination",
  name: "pagination",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/pagination/",
};

export const variants = [
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/pagination/bottom.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-pagination pf-m-bottom">
  <div class="pf-c-options-menu">
    <div class="pf-c-options-menu__toggle pf-m-text pf-m-plain">
      <span class="pf-c-options-menu__toggle-text">
        <b>1 - 10</b> of 
        <b>37</b>
      </span>
      <button class="pf-c-options-menu__toggle-button" id="pagination-options-menu-bottom-example-toggle" aria-haspopup="listbox" aria-expanded="false" aria-label="Items per page">
        <span class="pf-c-options-menu__toggle-button-icon">
          <i class="fas fa-caret-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <ul class="pf-c-options-menu__menu" aria-labelledby="pagination-options-menu-bottom-example-toggle" hidden>
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
    <div class="pf-c-pagination__nav-control pf-m-first">
      <button class="pf-c-button pf-m-plain" type="button" disabled aria-label="Go to first page">
        <i class="fas fa-angle-double-left" aria-hidden="true"></i>
      </button>
    </div>
    <div class="pf-c-pagination__nav-control pf-m-prev">
      <button class="pf-c-button pf-m-plain" type="button" disabled aria-label="Go to previous page">
        <i class="fas fa-angle-left" aria-hidden="true"></i>
      </button>
    </div>
    <div class="pf-c-pagination__nav-page-select">
      <input class="pf-c-form-control" aria-label="Current page" type="number" min="1" max="4" value="1" />
      <span aria-hidden="true">of 4</span>
    </div>
    <div class="pf-c-pagination__nav-control pf-m-next">
      <button class="pf-c-button pf-m-plain" type="button" aria-label="Go to next page">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </button>
    </div>
    <div class="pf-c-pagination__nav-control pf-m-last">
      <button class="pf-c-button pf-m-plain" type="button" aria-label="Go to last page">
        <i class="fas fa-angle-double-right" aria-hidden="true"></i>
      </button>
    </div>
  </nav>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/pagination/compact.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-pagination pf-m-compact">
  <div class="pf-c-pagination__total-items">
    <b>1 - 10</b> of 
    <b>37</b>
  </div>
  <div class="pf-c-options-menu">
    <div class="pf-c-options-menu__toggle pf-m-text pf-m-plain">
      <span class="pf-c-options-menu__toggle-text">
        <b>1 - 10</b> of 
        <b>37</b>
      </span>
      <button class="pf-c-options-menu__toggle-button" id="pagination-options-menu-compact-example-toggle" aria-haspopup="listbox" aria-expanded="false" aria-label="Items per page">
        <span class="pf-c-options-menu__toggle-button-icon">
          <i class="fas fa-caret-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <ul class="pf-c-options-menu__menu" aria-labelledby="pagination-options-menu-compact-example-toggle" hidden>
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
    <div class="pf-c-pagination__nav-control pf-m-prev">
      <button class="pf-c-button pf-m-plain" type="button" disabled aria-label="Go to previous page">
        <i class="fas fa-angle-left" aria-hidden="true"></i>
      </button>
    </div>
    <div class="pf-c-pagination__nav-control pf-m-next">
      <button class="pf-c-button pf-m-plain" type="button" aria-label="Go to next page">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </button>
    </div>
  </nav>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/pagination/top.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-pagination">
  <div class="pf-c-pagination__total-items">
    <b>1 - 10</b> of 
    <b>37</b>
  </div>
  <div class="pf-c-options-menu">
    <div class="pf-c-options-menu__toggle pf-m-text pf-m-plain">
      <span class="pf-c-options-menu__toggle-text">
        <b>1 - 10</b> of 
        <b>37</b>
      </span>
      <button class="pf-c-options-menu__toggle-button" id="pagination-options-menu-top-example-toggle" aria-haspopup="listbox" aria-expanded="false" aria-label="Items per page">
        <span class="pf-c-options-menu__toggle-button-icon">
          <i class="fas fa-caret-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <ul class="pf-c-options-menu__menu" aria-labelledby="pagination-options-menu-top-example-toggle" hidden>
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
    <div class="pf-c-pagination__nav-control pf-m-first">
      <button class="pf-c-button pf-m-plain" type="button" disabled aria-label="Go to first page">
        <i class="fas fa-angle-double-left" aria-hidden="true"></i>
      </button>
    </div>
    <div class="pf-c-pagination__nav-control pf-m-prev">
      <button class="pf-c-button pf-m-plain" type="button" disabled aria-label="Go to previous page">
        <i class="fas fa-angle-left" aria-hidden="true"></i>
      </button>
    </div>
    <div class="pf-c-pagination__nav-page-select">
      <input class="pf-c-form-control" aria-label="Current page" type="number" min="1" max="4" value="1" />
      <span aria-hidden="true">of 4</span>
    </div>
    <div class="pf-c-pagination__nav-control pf-m-next">
      <button class="pf-c-button pf-m-plain" type="button" aria-label="Go to next page">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </button>
    </div>
    <div class="pf-c-pagination__nav-control pf-m-last">
      <button class="pf-c-button pf-m-plain" type="button" aria-label="Go to last page">
        <i class="fas fa-angle-double-right" aria-hidden="true"></i>
      </button>
    </div>
  </nav>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/pagination/top-disabled.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-pagination">
  <div class="pf-c-pagination__total-items">
    <b>1 - 10</b> of 
    <b>37</b>
  </div>
  <div class="pf-c-options-menu">
    <div class="pf-c-options-menu__toggle pf-m-text pf-m-disabled pf-m-plain">
      <span class="pf-c-options-menu__toggle-text">
        <b>1 - 10</b> of 
        <b>37</b>
      </span>
      <button class="pf-c-options-menu__toggle-button" id="pagination-options-menu-top-disabled-example-toggle" aria-haspopup="listbox" aria-expanded="false" aria-label="Items per page" disabled>
        <span class="pf-c-options-menu__toggle-button-icon">
          <i class="fas fa-caret-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <ul class="pf-c-options-menu__menu" aria-labelledby="pagination-options-menu-top-disabled-example-toggle" hidden>
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
    <div class="pf-c-pagination__nav-control pf-m-first">
      <button class="pf-c-button pf-m-plain" type="button" disabled aria-label="Go to first page">
        <i class="fas fa-angle-double-left" aria-hidden="true"></i>
      </button>
    </div>
    <div class="pf-c-pagination__nav-control pf-m-prev">
      <button class="pf-c-button pf-m-plain" type="button" disabled aria-label="Go to previous page">
        <i class="fas fa-angle-left" aria-hidden="true"></i>
      </button>
    </div>
    <div class="pf-c-pagination__nav-page-select">
      <input class="pf-c-form-control" disabled aria-label="Current page" type="number" min="1" max="4" value="1" />
      <span aria-hidden="true">of 4</span>
    </div>
    <div class="pf-c-pagination__nav-control pf-m-next">
      <button class="pf-c-button pf-m-plain" type="button" disabled aria-label="Go to next page">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </button>
    </div>
    <div class="pf-c-pagination__nav-control pf-m-last">
      <button class="pf-c-button pf-m-plain" type="button" disabled aria-label="Go to last page">
        <i class="fas fa-angle-double-right" aria-hidden="true"></i>
      </button>
    </div>
  </nav>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/pagination/top-expanded.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-pagination">
  <div class="pf-c-pagination__total-items">
    <b>1 - 10</b> of 
    <b>37</b>
  </div>
  <div class="pf-c-options-menu pf-m-expanded">
    <div class="pf-c-options-menu__toggle pf-m-text pf-m-plain">
      <span class="pf-c-options-menu__toggle-text">
        <b>1 - 10</b> of 
        <b>37</b>
      </span>
      <button class="pf-c-options-menu__toggle-button" id="pagination-options-menu-top-expanded-example-toggle" aria-haspopup="listbox" aria-expanded="true" aria-label="Items per page">
        <span class="pf-c-options-menu__toggle-button-icon">
          <i class="fas fa-caret-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <ul class="pf-c-options-menu__menu" aria-labelledby="pagination-options-menu-top-expanded-example-toggle">
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
    <div class="pf-c-pagination__nav-control pf-m-first">
      <button class="pf-c-button pf-m-plain" type="button" disabled aria-label="Go to first page">
        <i class="fas fa-angle-double-left" aria-hidden="true"></i>
      </button>
    </div>
    <div class="pf-c-pagination__nav-control pf-m-prev">
      <button class="pf-c-button pf-m-plain" type="button" disabled aria-label="Go to previous page">
        <i class="fas fa-angle-left" aria-hidden="true"></i>
      </button>
    </div>
    <div class="pf-c-pagination__nav-page-select">
      <input class="pf-c-form-control" aria-label="Current page" type="number" min="1" max="4" value="1" />
      <span aria-hidden="true">of 4</span>
    </div>
    <div class="pf-c-pagination__nav-control pf-m-next">
      <button class="pf-c-button pf-m-plain" type="button" aria-label="Go to next page">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </button>
    </div>
    <div class="pf-c-pagination__nav-control pf-m-last">
      <button class="pf-c-button pf-m-plain" type="button" aria-label="Go to last page">
        <i class="fas fa-angle-double-right" aria-hidden="true"></i>
      </button>
    </div>
  </nav>
</div>`,
    },
  },
];
