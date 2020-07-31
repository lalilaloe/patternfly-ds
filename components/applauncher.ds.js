export default {
  displayName: "applauncher",
  name: "applauncher",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/applauncher/",
};

export const variants = [
  {
    displayName: "aligned-right",
    picture: {
      src: "./pictures/applauncher/aligned-right.png",
      width: 293,
      height: 216,
    },
    snippet: {
      html: `<nav class="pf-c-app-launcher pf-m-expanded" aria-label="Application launcher">
  <button class="pf-c-app-launcher__toggle" type="button" id="app-launcher-aligned-right-button" aria-expanded="true" aria-label="Application launcher">
    <i class="fas fa-th" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-app-launcher__menu pf-m-align-right" aria-labelledby="app-launcher-aligned-right-button">
    <li>
      <a class="pf-c-app-launcher__menu-item" href="#">Link</a>
    </li>
    <li>
      <button class="pf-c-app-launcher__menu-item" type="button">Action</button>
    </li>
    <li class="pf-c-divider" role="separator"></li>
    <li>
      <a class="pf-c-app-launcher__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
    </li>
  </ul>
</nav>`,
    },
  },
  {
    displayName: "aligned-top",
    picture: {
      src: "./pictures/applauncher/aligned-top.png",
      width: 293,
      height: 216,
    },
    snippet: {
      html: `<nav class="pf-c-app-launcher pf-m-expanded pf-m-top" aria-label="Application launcher">
  <button class="pf-c-app-launcher__toggle" type="button" id="app-launcher-aligned-top-button" aria-expanded="true" aria-label="Application launcher">
    <i class="fas fa-th" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-app-launcher__menu" aria-labelledby="app-launcher-aligned-top-button">
    <li>
      <a class="pf-c-app-launcher__menu-item" href="#">Link</a>
    </li>
    <li>
      <button class="pf-c-app-launcher__menu-item" type="button">Action</button>
    </li>
    <li class="pf-c-divider" role="separator"></li>
    <li>
      <a class="pf-c-app-launcher__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
    </li>
  </ul>
</nav>`,
    },
  },
  {
    displayName: "collapsed",
    picture: {
      src: "./pictures/applauncher/collapsed.png",
      width: 293,
      height: 69,
    },
    snippet: {
      html: `<nav class="pf-c-app-launcher" aria-label="Application launcher">
  <button class="pf-c-app-launcher__toggle" type="button" id="app-launcher-collapsed-button" aria-expanded="false" aria-label="Application launcher">
    <i class="fas fa-th" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-app-launcher__menu" aria-labelledby="app-launcher-collapsed-button" hidden>
    <li>
      <a class="pf-c-app-launcher__menu-item" href="#">Link</a>
    </li>
    <li>
      <button class="pf-c-app-launcher__menu-item" type="button">Action</button>
    </li>
    <li class="pf-c-divider" role="separator"></li>
    <li>
      <a class="pf-c-app-launcher__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
    </li>
  </ul>
</nav>`,
    },
  },
  {
    displayName: "disabled",
    picture: {
      src: "./pictures/applauncher/disabled.png",
      width: 293,
      height: 69,
    },
    snippet: {
      html: `<nav class="pf-c-app-launcher" aria-label="Application launcher">
  <button class="pf-c-app-launcher__toggle" type="button" id="app-launcher-disabled-button" aria-expanded="false" aria-label="Application launcher" disabled>
    <i class="fas fa-th" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-app-launcher__menu" aria-labelledby="app-launcher-disabled-button" hidden>
    <li>
      <a class="pf-c-app-launcher__menu-item" href="#">Link</a>
    </li>
    <li>
      <button class="pf-c-app-launcher__menu-item" type="button">Action</button>
    </li>
    <li class="pf-c-divider" role="separator"></li>
    <li>
      <a class="pf-c-app-launcher__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
    </li>
  </ul>
</nav>`,
    },
  },
  {
    displayName: "expanded",
    picture: {
      src: "./pictures/applauncher/expanded.png",
      width: 293,
      height: 216,
    },
    snippet: {
      html: `<nav class="pf-c-app-launcher pf-m-expanded" aria-label="Application launcher">
  <button class="pf-c-app-launcher__toggle" type="button" id="app-launcher-expanded-button" aria-expanded="true" aria-label="Application launcher">
    <i class="fas fa-th" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-app-launcher__menu" aria-labelledby="app-launcher-expanded-button">
    <li>
      <a class="pf-c-app-launcher__menu-item" href="#">Link</a>
    </li>
    <li>
      <button class="pf-c-app-launcher__menu-item" type="button">Action</button>
    </li>
    <li class="pf-c-divider" role="separator"></li>
    <li>
      <a class="pf-c-app-launcher__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
    </li>
  </ul>
</nav>`,
    },
  },
  {
    displayName: "favorites",
    picture: {
      src: "./pictures/applauncher/favorites.png",
      width: 293,
      height: 540,
    },
    snippet: {
      html: `<nav class="pf-c-app-launcher pf-m-expanded" aria-label="Application launcher">
  <button class="pf-c-app-launcher__toggle" type="button" id="app-launcher-favorites-button" aria-expanded="true" aria-label="Application launcher">
    <i class="fas fa-th" aria-hidden="true"></i>
  </button>
  <div class="pf-c-app-launcher__menu" aria-labelledby="app-launcher-favorites-button">
    <div class="pf-c-app-launcher__menu-search">
      <input class="pf-c-form-control" type="search" aria-label="Type to filter" placeholder="Filter by name..." id="app-launcher-favorites-text-input" name="textInput1" />
    </div>
    <section class="pf-c-app-launcher__group">
      <h1 class="pf-c-app-launcher__group-title">Favorites</h1>
      <ul>
        <li class="pf-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite">
          <a class="pf-c-app-launcher__menu-item pf-m-link" href="#" target="_blank">
            <span class="pf-c-app-launcher__menu-item-icon">
              <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo" />
            </span>Link 2
            <span class="pf-c-app-launcher__menu-item-external-icon">
              <i class="fas fa-external-link-alt" aria-hidden="true"></i>
            </span>
            <span class="pf-screen-reader">(opens new window)</span>
          </a>
          <button class="pf-c-app-launcher__menu-item pf-m-action" type="button">
            <i class="fas fa-star" aria-label="Favorite"></i>
          </button>
        </li>
        <li class="pf-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite">
          <a class="pf-c-app-launcher__menu-item pf-m-link" href="#" target="_blank">
            <span class="pf-c-app-launcher__menu-item-icon">
              <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo" />
            </span>Link 3
            <span class="pf-c-app-launcher__menu-item-external-icon">
              <i class="fas fa-external-link-alt" aria-hidden="true"></i>
            </span>
            <span class="pf-screen-reader">(opens new window)</span>
          </a>
          <button class="pf-c-app-launcher__menu-item pf-m-action" type="button">
            <i class="fas fa-star" aria-label="Favorite"></i>
          </button>
        </li>
      </ul>
    </section>
    <hr class="pf-c-divider" />
    <section class="pf-c-app-launcher__group">
      <h1 class="pf-c-app-launcher__group-title">Group 1</h1>
      <ul>
        <li class="pf-c-app-launcher__menu-wrapper pf-m-external">
          <a class="pf-c-app-launcher__menu-item pf-m-link" href="#" target="_blank">
            <span class="pf-c-app-launcher__menu-item-icon">
              <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo" />
            </span>Link 1
            <span class="pf-c-app-launcher__menu-item-external-icon">
              <i class="fas fa-external-link-alt" aria-hidden="true"></i>
            </span>
            <span class="pf-screen-reader">(opens new window)</span>
          </a>
          <button class="pf-c-app-launcher__menu-item pf-m-action" type="button">
            <i class="fas fa-star" aria-label="Favorite"></i>
          </button>
        </li>
        <li class="pf-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite">
          <a class="pf-c-app-launcher__menu-item pf-m-link" href="#" target="_blank">
            <span class="pf-c-app-launcher__menu-item-icon">
              <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo" />
            </span>Link 2
            <span class="pf-c-app-launcher__menu-item-external-icon">
              <i class="fas fa-external-link-alt" aria-hidden="true"></i>
            </span>
            <span class="pf-screen-reader">(opens new window)</span>
          </a>
          <button class="pf-c-app-launcher__menu-item pf-m-action" type="button">
            <i class="fas fa-star" aria-label="Favorite"></i>
          </button>
        </li>
      </ul>
    </section>
    <hr class="pf-c-divider" />
    <section class="pf-c-app-launcher__group">
      <h1 class="pf-c-app-launcher__group-title">Group 2</h1>
      <ul>
        <li class="pf-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite">
          <a class="pf-c-app-launcher__menu-item pf-m-link" href="#" target="_blank">
            <span class="pf-c-app-launcher__menu-item-icon">
              <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo" />
            </span>Link 3
            <span class="pf-c-app-launcher__menu-item-external-icon">
              <i class="fas fa-external-link-alt" aria-hidden="true"></i>
            </span>
            <span class="pf-screen-reader">(opens new window)</span>
          </a>
          <button class="pf-c-app-launcher__menu-item pf-m-action" type="button">
            <i class="fas fa-star" aria-label="Favorite"></i>
          </button>
        </li>
        <li class="pf-c-app-launcher__menu-wrapper pf-m-external">
          <a class="pf-c-app-launcher__menu-item pf-m-link" href="#" target="_blank">
            <span class="pf-c-app-launcher__menu-item-icon">
              <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo" />
            </span>Link 4
            <span class="pf-c-app-launcher__menu-item-external-icon">
              <i class="fas fa-external-link-alt" aria-hidden="true"></i>
            </span>
            <span class="pf-screen-reader">(opens new window)</span>
          </a>
          <button class="pf-c-app-launcher__menu-item pf-m-action" type="button">
            <i class="fas fa-star" aria-label="Favorite"></i>
          </button>
        </li>
      </ul>
    </section>
  </div>
</nav>`,
    },
  },
  {
    displayName: "with-sections-and-dividers-between-items",
    picture: {
      src:
        "./pictures/applauncher/with-sections-and-dividers-between-items.png",
      width: 293,
      height: 424,
    },
    snippet: {
      html: `<nav class="pf-c-app-launcher pf-m-expanded" aria-label="Application launcher">
  <button class="pf-c-app-launcher__toggle" type="button" id="app-launcher-sections-and-dividers-between-items-button" aria-expanded="true" aria-label="Application launcher">
    <i class="fas fa-th" aria-hidden="true"></i>
  </button>
  <div class="pf-c-app-launcher__menu" aria-labelledby="app-launcher-sections-and-dividers-between-items-button">
    <section class="pf-c-app-launcher__group">
      <ul>
        <li>
          <a class="pf-c-app-launcher__menu-item" href="#">Link not in group</a>
        </li>
        <li class="pf-c-divider" role="separator"></li>
      </ul>
    </section>
    <section class="pf-c-app-launcher__group">
      <h1 class="pf-c-app-launcher__group-title">Group 1</h1>
      <ul>
        <li>
          <a class="pf-c-app-launcher__menu-item" href="#">Group 1 link</a>
        </li>
        <li>
          <a class="pf-c-app-launcher__menu-item" href="#">Group 1 link</a>
        </li>
        <li class="pf-c-divider" role="separator"></li>
      </ul>
    </section>
    <section class="pf-c-app-launcher__group">
      <h1 class="pf-c-app-launcher__group-title">Group 2</h1>
      <ul>
        <li>
          <a class="pf-c-app-launcher__menu-item" href="#">Group 2 link</a>
        </li>
        <li>
          <a class="pf-c-app-launcher__menu-item" href="#">Group 2 link</a>
        </li>
      </ul>
    </section>
  </div>
</nav>`,
    },
  },
  {
    displayName: "with-sections-and-dividers-between-sections",
    picture: {
      src:
        "./pictures/applauncher/with-sections-and-dividers-between-sections.png",
      width: 293,
      height: 424,
    },
    snippet: {
      html: `<nav class="pf-c-app-launcher pf-m-expanded" aria-label="Application launcher">
  <button class="pf-c-app-launcher__toggle" type="button" id="app-launcher-sections-and-dividers-between-sections-button" aria-expanded="true" aria-label="Application launcher">
    <i class="fas fa-th" aria-hidden="true"></i>
  </button>
  <div class="pf-c-app-launcher__menu" aria-labelledby="app-launcher-sections-and-dividers-between-sections-button">
    <section class="pf-c-app-launcher__group">
      <ul>
        <li>
          <a class="pf-c-app-launcher__menu-item" href="#">Link not in group</a>
        </li>
      </ul>
    </section>
    <hr class="pf-c-divider" />
    <section class="pf-c-app-launcher__group">
      <h1 class="pf-c-app-launcher__group-title">Group 1</h1>
      <ul>
        <li>
          <a class="pf-c-app-launcher__menu-item" href="#">Group 1 link</a>
        </li>
        <li>
          <a class="pf-c-app-launcher__menu-item" href="#">Group 1 link</a>
        </li>
      </ul>
    </section>
    <hr class="pf-c-divider" />
    <section class="pf-c-app-launcher__group">
      <h1 class="pf-c-app-launcher__group-title">Group 2</h1>
      <ul>
        <li>
          <a class="pf-c-app-launcher__menu-item" href="#">Group 2 link</a>
        </li>
        <li>
          <a class="pf-c-app-launcher__menu-item" href="#">Group 2 link</a>
        </li>
      </ul>
    </section>
  </div>
</nav>`,
    },
  },
  {
    displayName: "with-sections-dividers-icons-and-external-links",
    picture: {
      src:
        "./pictures/applauncher/with-sections-dividers-icons-and-external-links.png",
      width: 293,
      height: 424,
    },
    snippet: {
      html: `<nav class="pf-c-app-launcher pf-m-expanded" aria-label="Application launcher">
  <button class="pf-c-app-launcher__toggle" type="button" id="app-launcher-sections-dividers-icons-and-external-links-button" aria-expanded="true" aria-label="Application launcher">
    <i class="fas fa-th" aria-hidden="true"></i>
  </button>
  <div class="pf-c-app-launcher__menu" aria-labelledby="app-launcher-sections-dividers-icons-and-external-links-button">
    <section class="pf-c-app-launcher__group">
      <ul>
        <li>
          <a class="pf-c-app-launcher__menu-item" href="#">
            <span class="pf-c-app-launcher__menu-item-icon">
              <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo" />
            </span>Link not in group</a>
        </li>
      </ul>
    </section>
    <li class="pf-c-divider" role="separator"></li>
    <section class="pf-c-app-launcher__group">
      <h1 class="pf-c-app-launcher__group-title">Group 1</h1>
      <ul>
        <li>
          <a class="pf-c-app-launcher__menu-item pf-m-external" href="#" target="_blank">
            <span class="pf-c-app-launcher__menu-item-icon">
              <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo" />
            </span>Group 1 link
            <span class="pf-c-app-launcher__menu-item-external-icon">
              <i class="fas fa-external-link-alt" aria-hidden="true"></i>
            </span>
            <span class="pf-screen-reader">(opens new window)</span>
          </a>
        </li>
        <li>
          <a class="pf-c-app-launcher__menu-item pf-m-external" href="#" target="_blank">
            <span class="pf-c-app-launcher__menu-item-icon">
              <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo" />
            </span>Group 1 link
            <span class="pf-c-app-launcher__menu-item-external-icon">
              <i class="fas fa-external-link-alt" aria-hidden="true"></i>
            </span>
            <span class="pf-screen-reader">(opens new window)</span>
          </a>
        </li>
        <li class="pf-c-divider" role="separator"></li>
      </ul>
    </section>
    <section class="pf-c-app-launcher__group">
      <h1 class="pf-c-app-launcher__group-title">Group 2</h1>
      <ul>
        <li>
          <a class="pf-c-app-launcher__menu-item pf-m-external" href="#" target="_blank">
            <span class="pf-c-app-launcher__menu-item-icon">
              <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo" />
            </span>Group 2 link
            <span class="pf-c-app-launcher__menu-item-external-icon">
              <i class="fas fa-external-link-alt" aria-hidden="true"></i>
            </span>
            <span class="pf-screen-reader">(opens new window)</span>
          </a>
        </li>
        <li>
          <a class="pf-c-app-launcher__menu-item pf-m-external" href="#" target="_blank">
            <span class="pf-c-app-launcher__menu-item-icon">
              <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo" />
            </span>Group 2 link
            <span class="pf-c-app-launcher__menu-item-external-icon">
              <i class="fas fa-external-link-alt" aria-hidden="true"></i>
            </span>
            <span class="pf-screen-reader">(opens new window)</span>
          </a>
        </li>
      </ul>
    </section>
  </div>
</nav>`,
    },
  },
];
