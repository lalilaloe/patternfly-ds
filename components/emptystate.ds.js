export default {
  displayName: "emptystate",
  name: "emptystate",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/emptystate/",
};

export const variants = [
  {
    displayName: "basic",
    picture: {
      src: "./components/pictures/emptystate/basic.png",
      width: 855,
      height: 351,
    },
    snippet: {
      html: `<div class="pf-c-empty-state">
  <div class="pf-c-empty-state__content">
    <i class="fas fa-cubes pf-c-empty-state__icon" aria-hidden="true"></i>
    <h1 class="pf-c-title pf-m-lg">Empty state</h1>
    <div class="pf-c-empty-state__body">This represents an the empty state pattern in PatternFly 4. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.</div>
    <button class="pf-c-button pf-m-primary" type="button">Primary action</button>
    <div class="pf-c-empty-state__secondary">
      <button class="pf-c-button pf-m-link" type="button">Multiple</button>
      <button class="pf-c-button pf-m-link" type="button">Action buttons</button>
      <button class="pf-c-button pf-m-link" type="button">Can</button>
      <button class="pf-c-button pf-m-link" type="button">Go here</button>
      <button class="pf-c-button pf-m-link" type="button">In the secondary</button>
      <button class="pf-c-button pf-m-link" type="button">Action area</button>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "extra-large",
    picture: {
      src: "./components/pictures/emptystate/extra-large.png",
      width: 855,
      height: 381,
    },
    snippet: {
      html: `<div class="pf-c-empty-state pf-m-xl">
  <div class="pf-c-empty-state__content">
    <i class="fas fa-cubes pf-c-empty-state__icon" aria-hidden="true"></i>
    <h1 class="pf-c-title pf-m-4xl">Empty state</h1>
    <div class="pf-c-empty-state__body">This represents an the empty state pattern in PatternFly 4. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.</div>
    <button class="pf-c-button pf-m-primary" type="button">Primary action</button>
  </div>
</div>`,
    },
  },
  {
    displayName: "large",
    picture: {
      src: "./components/pictures/emptystate/large.png",
      width: 696,
      height: 391,
    },
    snippet: {
      html: `<div class="pf-c-empty-state pf-m-lg">
  <div class="pf-c-empty-state__content">
    <i class="fas fa-cubes pf-c-empty-state__icon" aria-hidden="true"></i>
    <h1 class="pf-c-title pf-m-lg">Empty state</h1>
    <div class="pf-c-empty-state__body">This represents an the empty state pattern in PatternFly 4. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.</div>
    <button class="pf-c-button pf-m-primary" type="button">Primary action</button>
    <div class="pf-c-empty-state__secondary">
      <button class="pf-c-button pf-m-link" type="button">Multiple</button>
      <button class="pf-c-button pf-m-link" type="button">Action buttons</button>
      <button class="pf-c-button pf-m-link" type="button">Can</button>
      <button class="pf-c-button pf-m-link" type="button">Go here</button>
      <button class="pf-c-button pf-m-link" type="button">In the secondary</button>
      <button class="pf-c-button pf-m-link" type="button">Action area</button>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "small",
    picture: {
      src: "./components/pictures/emptystate/small.png",
      width: 496,
      height: 415,
    },
    snippet: {
      html: `<div class="pf-c-empty-state pf-m-sm">
  <div class="pf-c-empty-state__content">
    <i class="fas fa-cubes pf-c-empty-state__icon" aria-hidden="true"></i>
    <h1 class="pf-c-title pf-m-lg">Empty state</h1>
    <div class="pf-c-empty-state__body">This represents an the empty state pattern in PatternFly 4. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.</div>
    <button class="pf-c-button pf-m-primary" type="button">Primary action</button>
    <div class="pf-c-empty-state__secondary">
      <button class="pf-c-button pf-m-link" type="button">Multiple</button>
      <button class="pf-c-button pf-m-link" type="button">Action buttons</button>
      <button class="pf-c-button pf-m-link" type="button">Can</button>
      <button class="pf-c-button pf-m-link" type="button">Go here</button>
      <button class="pf-c-button pf-m-link" type="button">In the secondary</button>
      <button class="pf-c-button pf-m-link" type="button">Action area</button>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "with-primary-element",
    picture: {
      src: "./components/pictures/emptystate/with-primary-element.png",
      width: 855,
      height: 307,
    },
    snippet: {
      html: `<div class="pf-c-empty-state">
  <div class="pf-c-empty-state__content">
    <i class="fas fa-cubes pf-c-empty-state__icon" aria-hidden="true"></i>
    <h1 class="pf-c-title pf-m-lg">Empty State</h1>
    <div class="pf-c-empty-state__body">This represents an the empty state pattern in PatternFly 4. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.</div>
    <div class="pf-c-empty-state__primary">
      <button class="pf-c-button pf-m-link" type="button">Action buttons</button>
    </div>
  </div>
</div>`,
    },
  },
];
