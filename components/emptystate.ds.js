export default {
  displayName: "emptystate",
  name: "emptystate",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/emptystate/",
};

export const variants = [
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/emptystate/basic.png",
      width: 800,
      height: 600,
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
    displayName: "Basic",
    picture: {
      src: "./pictures/emptystate/extra-large.png",
      width: 800,
      height: 600,
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
    displayName: "Basic",
    picture: {
      src: "./pictures/emptystate/large.png",
      width: 800,
      height: 600,
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
    displayName: "Basic",
    picture: {
      src: "./pictures/emptystate/small.png",
      width: 800,
      height: 600,
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
    displayName: "Basic",
    picture: {
      src: "./pictures/emptystate/with-primary-element.png",
      width: 800,
      height: 600,
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
