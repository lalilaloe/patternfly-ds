export default {
  displayName: "searchinput",
  name: "searchinput",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/searchinput/",
};

export const variants = [
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/searchinput/basic.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-search-input">
  <span class="pf-c-search-input__text">
    <span class="pf-c-search-input__icon">
      <i class="fas fa-search fa-fw" aria-hidden="true"></i>
    </span>
    <input class="pf-c-search-input__text-input" type="text" placeholder="Find by name" aria-label="Find by name" />
  </span>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/searchinput/match-with-navigable-options.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-search-input">
  <span class="pf-c-search-input__text">
    <span class="pf-c-search-input__icon">
      <i class="fas fa-search fa-fw" aria-hidden="true"></i>
    </span>
    <input class="pf-c-search-input__text-input" type="text" placeholder="Find by name" aria-label="Find by name" value="John Doe" />
  </span>
  <span class="pf-c-search-input__utilities">
    <span class="pf-c-search-input__count">
      <span class="pf-c-badge pf-m-read">1 / 3</span>
    </span>
    <span class="pf-c-search-input__nav">
      <button class="pf-c-button pf-m-plain" type="button" disabled aria-label="Previous">
        <i class="fas fa-angle-down fa-fw" aria-hidden="true"></i>
      </button>
      <button class="pf-c-button pf-m-plain" type="button" aria-label="Next">
        <i class="fas fa-angle-up fa-fw" aria-hidden="true"></i>
      </button>
    </span>
    <span class="pf-c-search-input__clear">
      <button class="pf-c-button pf-m-plain" type="button" aria-label="Clear">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </button>
    </span>
  </span>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/searchinput/match-with-result-count.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-search-input">
  <span class="pf-c-search-input__text">
    <span class="pf-c-search-input__icon">
      <i class="fas fa-search fa-fw" aria-hidden="true"></i>
    </span>
    <input class="pf-c-search-input__text-input" type="text" placeholder="Find by name" aria-label="Find by name" value="John Doe" />
  </span>
  <span class="pf-c-search-input__utilities">
    <span class="pf-c-search-input__count">
      <span class="pf-c-badge pf-m-read">3</span>
    </span>
    <span class="pf-c-search-input__clear">
      <button class="pf-c-button pf-m-plain" type="button" aria-label="Clear">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </button>
    </span>
  </span>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/searchinput/no-match.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-search-input">
  <span class="pf-c-search-input__text">
    <span class="pf-c-search-input__icon">
      <i class="fas fa-search fa-fw" aria-hidden="true"></i>
    </span>
    <input class="pf-c-search-input__text-input" type="text" placeholder="Find by name" aria-label="Find by name" value="Joh" />
  </span>
  <span class="pf-c-search-input__utilities">
    <span class="pf-c-search-input__clear">
      <button class="pf-c-button pf-m-plain" type="button" aria-label="Clear">
        <i class="fas fa-times fa-fw" aria-hidden="true"></i>
      </button>
    </span>
  </span>
</div>`,
    },
  },
];
