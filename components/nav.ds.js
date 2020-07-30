export default {
  displayName: "nav",
  name: "nav",
  homepage: "https://www.patternfly.org/v4//documentation/core/components/nav/",
};

export const variants = [
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/nav/default.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<nav class="pf-c-nav" aria-label="Global">
  <ul class="pf-c-nav__list">
    <li class="pf-c-nav__item">
      <a href="#" class="pf-c-nav__link">Link 1</a>
    </li>
    <li class="pf-c-nav__item">
      <a href="#" class="pf-c-nav__link pf-m-current" aria-current="page">Current link</a>
    </li>
    <li class="pf-c-nav__item">
      <a href="#" class="pf-c-nav__link">Link 3</a>
    </li>
    <li class="pf-c-nav__item">
      <a href="#" class="pf-c-nav__link">Link 4</a>
    </li>
  </ul>
</nav>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/nav/default-in-light-mode.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<nav class="pf-c-nav pf-m-light" aria-label="Global">
  <ul class="pf-c-nav__list">
    <li class="pf-c-nav__item">
      <a href="#" class="pf-c-nav__link">Current link</a>
    </li>
    <li class="pf-c-nav__item">
      <a href="#" class="pf-c-nav__link pf-m-current" aria-current="page">Link 2</a>
    </li>
    <li class="pf-c-nav__item">
      <a href="#" class="pf-c-nav__link">Link 3</a>
    </li>
    <li class="pf-c-nav__item">
      <a href="#" class="pf-c-nav__link">Link 4</a>
    </li>
  </ul>
</nav>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/nav/expanded.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<nav class="pf-c-nav" aria-label="Global">
  <ul class="pf-c-nav__list">
    <li class="pf-c-nav__item pf-m-expandable pf-m-expanded pf-m-current">
      <button class="pf-c-nav__link" id="expandable-example1" aria-expanded="true">Link 1 (current and expanded example)
        <span class="pf-c-nav__toggle">
          <span class="pf-c-nav__toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
      </button>
      <section class="pf-c-nav__subnav" aria-labelledby="expandable-example1">
        <ul class="pf-c-nav__list">
          <li class="pf-c-nav__item">
            <a href="#" class="pf-c-nav__link">Current link</a>
          </li>
          <li class="pf-c-divider" role="separator"></li>
          <li class="pf-c-nav__item">
            <a href="#" class="pf-c-nav__link">Subnav link 2</a>
          </li>
          <li class="pf-c-nav__item">
            <a href="#" class="pf-c-nav__link pf-m-current" aria-current="page">Subnav link 3</a>
          </li>
        </ul>
      </section>
    </li>
    <li class="pf-c-nav__item pf-m-expandable pf-m-expanded">
      <button class="pf-c-nav__link" id="expandable-example2" aria-expanded="true">Link 2 (expanded, but not current example)
        <span class="pf-c-nav__toggle">
          <span class="pf-c-nav__toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
      </button>
      <section class="pf-c-nav__subnav" aria-labelledby="expandable-example2">
        <ul class="pf-c-nav__list">
          <li class="pf-c-nav__item">
            <a href="#" class="pf-c-nav__link">Subnav link 1</a>
          </li>
          <li class="pf-c-nav__item">
            <a href="#" class="pf-c-nav__link">Subnav link 2</a>
          </li>
        </ul>
      </section>
    </li>
    <li class="pf-c-nav__item pf-m-expandable">
      <button class="pf-c-nav__link" id="expandable-example3" aria-expanded="false">Link 3
        <span class="pf-c-nav__toggle">
          <span class="pf-c-nav__toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
      </button>
      <section class="pf-c-nav__subnav" aria-labelledby="expandable-example3" hidden>
        <ul class="pf-c-nav__list">
          <li class="pf-c-nav__item">
            <a href="#" class="pf-c-nav__link">Subnav link 1</a>
          </li>
          <li class="pf-c-nav__item">
            <a href="#" class="pf-c-nav__link">Subnav link 2</a>
          </li>
        </ul>
      </section>
    </li>
  </ul>
</nav>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/nav/expanded-in-light-mode.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<nav class="pf-c-nav pf-m-light" aria-label="Global">
  <ul class="pf-c-nav__list">
    <li class="pf-c-nav__item pf-m-expandable pf-m-expanded pf-m-current">
      <button class="pf-c-nav__link" id="expandable-example1" aria-expanded="true">Link 1 (current and expanded example)
        <span class="pf-c-nav__toggle">
          <span class="pf-c-nav__toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
      </button>
      <section class="pf-c-nav__subnav" aria-labelledby="expandable-example1">
        <ul class="pf-c-nav__list">
          <li class="pf-c-nav__item">
            <a href="#" class="pf-c-nav__link">Current link</a>
          </li>
          <li class="pf-c-divider" role="separator"></li>
          <li class="pf-c-nav__item">
            <a href="#" class="pf-c-nav__link">Subnav link 2</a>
          </li>
          <li class="pf-c-nav__item">
            <a href="#" class="pf-c-nav__link pf-m-current" aria-current="page">Subnav link 3</a>
          </li>
        </ul>
      </section>
    </li>
    <li class="pf-c-nav__item pf-m-expandable pf-m-expanded">
      <button class="pf-c-nav__link" id="expandable-example2" aria-expanded="true">Link 2 (expanded, but not current example)
        <span class="pf-c-nav__toggle">
          <span class="pf-c-nav__toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
      </button>
      <section class="pf-c-nav__subnav" aria-labelledby="expandable-example2">
        <ul class="pf-c-nav__list">
          <li class="pf-c-nav__item">
            <a href="#" class="pf-c-nav__link">Subnav link 1</a>
          </li>
          <li class="pf-c-nav__item">
            <a href="#" class="pf-c-nav__link">Subnav link 2</a>
          </li>
        </ul>
      </section>
    </li>
    <li class="pf-c-nav__item pf-m-expandable">
      <button class="pf-c-nav__link" id="expandable-example3" aria-expanded="false">Link 3
        <span class="pf-c-nav__toggle">
          <span class="pf-c-nav__toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
      </button>
      <section class="pf-c-nav__subnav" aria-labelledby="expandable-example3" hidden>
        <ul class="pf-c-nav__list">
          <li class="pf-c-nav__item">
            <a href="#" class="pf-c-nav__link">Subnav link 1</a>
          </li>
          <li class="pf-c-nav__item">
            <a href="#" class="pf-c-nav__link">Subnav link 2</a>
          </li>
        </ul>
      </section>
    </li>
  </ul>
</nav>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/nav/expanded-with-subnav-titles.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<nav class="pf-c-nav" aria-label="Global">
  <ul class="pf-c-nav__list">
    <li class="pf-c-nav__item pf-m-expandable pf-m-expanded pf-m-current">
      <button class="pf-c-nav__link" aria-expanded="true">Link 1
        <span class="pf-c-nav__toggle">
          <span class="pf-c-nav__toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
      </button>
      <section class="pf-c-nav__subnav" aria-labelledby="subnav-title1">
        <h2 class="pf-c-nav__subnav-title pf-screen-reader" id="subnav-title1">Current and expanded example sub-navigation</h2>
        <ul class="pf-c-nav__list">
          <li class="pf-c-nav__item">
            <a href="#" class="pf-c-nav__link">Current link</a>
          </li>
          <li class="pf-c-nav__item">
            <a href="#" class="pf-c-nav__link pf-m-current" aria-current="page">Subnav link 2</a>
          </li>
          <li class="pf-c-nav__item">
            <a href="#" class="pf-c-nav__link">Subnav link 3</a>
          </li>
        </ul>
      </section>
    </li>
    <li class="pf-c-nav__item pf-m-expandable pf-m-expanded">
      <button class="pf-c-nav__link" aria-expanded="true">Link 2
        <span class="pf-c-nav__toggle">
          <span class="pf-c-nav__toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
      </button>
      <section class="pf-c-nav__subnav" aria-labelledby="subnav-title2">
        <h2 class="pf-c-nav__subnav-title pf-screen-reader" id="subnav-title2">Expanded, but not current example sub-navigation</h2>
        <ul class="pf-c-nav__list">
          <li class="pf-c-nav__item">
            <a href="#" class="pf-c-nav__link">Subnav link 1</a>
          </li>
          <li class="pf-c-nav__item">
            <a href="#" class="pf-c-nav__link">Subnav link 2</a>
          </li>
        </ul>
      </section>
    </li>
  </ul>
</nav>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/nav/grouped-nav.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<nav class="pf-c-nav" aria-label="Global">
  <section class="pf-c-nav__section" aria-labelledby="grouped-title1">
    <h2 class="pf-c-nav__section-title" id="grouped-title1">Section title 1</h2>
    <ul class="pf-c-nav__list">
      <li class="pf-c-nav__item">
        <a href="#" class="pf-c-nav__link">Link 1</a>
      </li>
      <li class="pf-c-nav__item">
        <a href="#" class="pf-c-nav__link">Link 2</a>
      </li>
      <li class="pf-c-nav__item">
        <a href="#" class="pf-c-nav__link">Link 3</a>
      </li>
    </ul>
  </section>
  <section class="pf-c-nav__section" aria-labelledby="grouped-title2">
    <h2 class="pf-c-nav__section-title" id="grouped-title2">Section title 2</h2>
    <ul class="pf-c-nav__list">
      <li class="pf-c-nav__item">
        <a href="#" class="pf-c-nav__link">Link 1</a>
      </li>
      <li class="pf-c-nav__item">
        <a href="#" class="pf-c-nav__link pf-m-current" aria-current="page">Current link</a>
      </li>
      <li class="pf-c-nav__item">
        <a href="#" class="pf-c-nav__link">Link 3</a>
      </li>
    </ul>
  </section>
</nav>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/nav/horizontal.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<nav class="pf-c-nav pf-m-horizontal" aria-label="Global">
  <button class="pf-c-nav__scroll-button" disabled aria-label="Scroll left">
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-nav__list">
    <li class="pf-c-nav__item">
      <a href="#" class="pf-c-nav__link pf-m-current" aria-current="page">Item 1</a>
    </li>
    <li class="pf-c-nav__item">
      <a href="#" class="pf-c-nav__link">Item 2</a>
    </li>
    <li class="pf-c-nav__item">
      <a href="#" class="pf-c-nav__link">Item 3</a>
    </li>
  </ul>
  <button class="pf-c-nav__scroll-button" disabled aria-label="Scroll right">
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</nav>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/nav/horizontal-overflow.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<nav class="pf-c-nav pf-m-horizontal pf-m-scrollable" aria-label="Global">
  <button class="pf-c-nav__scroll-button" disabled aria-label="Scroll left">
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-nav__list">
    <li class="pf-c-nav__item">
      <a href="#" class="pf-c-nav__link">Horizontal nav item 1</a>
    </li>
    <li class="pf-c-nav__item">
      <a href="#" class="pf-c-nav__link">Horizontal nav item 2</a>
    </li>
    <li class="pf-c-nav__item">
      <a href="#" class="pf-c-nav__link">Horizontal nav item 3</a>
    </li>
    <li class="pf-c-nav__item">
      <a href="#" class="pf-c-nav__link">Horizontal nav item 4</a>
    </li>
    <li class="pf-c-nav__item">
      <a href="#" class="pf-c-nav__link pf-m-current" aria-current="page">Horizontal nav item 5</a>
    </li>
  </ul>
  <button class="pf-c-nav__scroll-button" aria-label="Scroll right">
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</nav>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/nav/mixed.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<nav class="pf-c-nav" aria-label="Global">
  <ul class="pf-c-nav__list">
    <li class="pf-c-nav__item">
      <a href="#" class="pf-c-nav__link">Link 1 (not expandable)</a>
    </li>
    <li class="pf-c-nav__item pf-m-expandable pf-m-expanded">
      <button class="pf-c-nav__link" id="nav-mixed-link2" aria-expanded="true">Link 2 (expanded, but not current example)
        <span class="pf-c-nav__toggle">
          <span class="pf-c-nav__toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
      </button>
      <section class="pf-c-nav__subnav" aria-labelledby="nav-mixed-link2">
        <ul class="pf-c-nav__list">
          <li class="pf-c-nav__item">
            <a href="#" class="pf-c-nav__link">Subnav link 1</a>
          </li>
          <li class="pf-c-nav__item">
            <a href="#" class="pf-c-nav__link">Subnav link 2</a>
          </li>
        </ul>
      </section>
    </li>
    <li class="pf-c-nav__item pf-m-expandable pf-m-current">
      <button class="pf-c-nav__link" id="nav-mixed-link4" aria-expanded="false">Link 3 (current, but not expanded example)
        <span class="pf-c-nav__toggle">
          <span class="pf-c-nav__toggle-icon">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </span>
        </span>
      </button>
      <section class="pf-c-nav__subnav" aria-labelledby="nav-mixed-link4" hidden>
        <ul class="pf-c-nav__list">
          <li class="pf-c-nav__item">
            <a href="#" class="pf-c-nav__link">Subnav link 1</a>
          </li>
          <li class="pf-c-nav__item">
            <a href="#" class="pf-c-nav__link pf-m-current" aria-current="page">Subnav link 2</a>
          </li>
          <li class="pf-c-nav__item">
            <a href="#" class="pf-c-nav__link">Subnav link 3</a>
          </li>
        </ul>
      </section>
    </li>
  </ul>
</nav>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/nav/tertiary.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<nav class="pf-c-nav pf-m-tertiary" aria-label="Local">
  <button class="pf-c-nav__scroll-button" disabled aria-label="Scroll left">
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-nav__list">
    <li class="pf-c-nav__item">
      <a href="#" class="pf-c-nav__link pf-m-current" aria-current="page">Item 1</a>
    </li>
    <li class="pf-c-nav__item">
      <a href="#" class="pf-c-nav__link">Item 2</a>
    </li>
    <li class="pf-c-nav__item">
      <a href="#" class="pf-c-nav__link">Item 3</a>
    </li>
  </ul>
  <button class="pf-c-nav__scroll-button" disabled aria-label="Scroll right">
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</nav>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/nav/tertiary-overflow.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<nav class="pf-c-nav pf-m-tertiary pf-m-scrollable" aria-label="Local">
  <button class="pf-c-nav__scroll-button" disabled aria-label="Scroll left">
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-nav__list">
    <li class="pf-c-nav__item">
      <a href="#" class="pf-c-nav__link pf-m-current" aria-current="page">Tertiary nav item 1</a>
    </li>
    <li class="pf-c-nav__item">
      <a href="#" class="pf-c-nav__link">Tertiary nav item 2</a>
    </li>
    <li class="pf-c-nav__item">
      <a href="#" class="pf-c-nav__link">Tertiary nav item 3</a>
    </li>
    <li class="pf-c-nav__item">
      <a href="#" class="pf-c-nav__link">Tertiary nav item 4</a>
    </li>
    <li class="pf-c-nav__item">
      <a href="#" class="pf-c-nav__link">Tertiary nav item 5</a>
    </li>
  </ul>
  <button class="pf-c-nav__scroll-button" aria-label="Scroll right">
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</nav>`,
    },
  },
];
