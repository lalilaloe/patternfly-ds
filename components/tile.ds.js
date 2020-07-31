export default {
  displayName: "tile",
  name: "tile",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/tile/",
};

export const variants = [
  {
    displayName: "basic-tiles",
    picture: {
      src: "./pictures/tile/basic-tiles.png",
      width: 491,
      height: 336,
    },
    snippet: {
      html: `<div class="pf-c-tile" tabindex="0">
  <div class="pf-c-tile__header">
    <div class="pf-c-tile__title">Default</div>
  </div>
</div>
<div class="pf-c-tile pf-m-selected" tabindex="0">
  <div class="pf-c-tile__header">
    <div class="pf-c-tile__title">Selected</div>
  </div>
</div>
<div class="pf-c-tile pf-m-disabled" tabindex="0">
  <div class="pf-c-tile__header">
    <div class="pf-c-tile__title">Disabled</div>
  </div>
</div>
<br/>
<br/>
<div class="pf-c-tile" tabindex="0">
  <div class="pf-c-tile__header">
    <div class="pf-c-tile__title">Default</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<div class="pf-c-tile pf-m-selected" tabindex="0">
  <div class="pf-c-tile__header">
    <div class="pf-c-tile__title">Selected</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<div class="pf-c-tile pf-m-disabled" tabindex="0">
  <div class="pf-c-tile__header">
    <div class="pf-c-tile__title">Disabled</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<br/>
<br/>
<div class="pf-c-tile" tabindex="0">
  <div class="pf-c-tile__header">
    <div class="pf-c-tile__icon">
      <i class="fas fa-plus" aria-hidden="true"></i>
    </div>
    <div class="pf-c-tile__title">Default</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<div class="pf-c-tile pf-m-selected" tabindex="0">
  <div class="pf-c-tile__header">
    <div class="pf-c-tile__icon">
      <i class="fas fa-plus" aria-hidden="true"></i>
    </div>
    <div class="pf-c-tile__title">Selected</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<div class="pf-c-tile pf-m-disabled" tabindex="0">
  <div class="pf-c-tile__header">
    <div class="pf-c-tile__icon">
      <i class="fas fa-plus" aria-hidden="true"></i>
    </div>
    <div class="pf-c-tile__title">Disabled</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>`,
    },
  },
  {
    displayName: "extra-content",
    picture: {
      src: "./pictures/tile/extra-content.png",
      width: 956,
      height: 205,
    },
    snippet: {
      html: `<div class="pf-c-tile" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <i class="fas fa-bell" aria-hidden="true"></i>
    </div>
    <div class="pf-c-tile__title">Default</div>
  </div>
  <div class="pf-c-tile__body">This is really really long subtext that goes on for so long that it has to wrap to the next line. This is really really long subtext that goes on for so long that it has to wrap to the next line.</div>
</div>
<div class="pf-c-tile" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <i class="fas fa-bell" aria-hidden="true"></i>
    </div>
    <div class="pf-c-tile__title">Default</div>
  </div>
  <div class="pf-c-tile__body">This is really really long subtext that goes on for so long that it has to wrap to the next line.</div>
</div>
<div class="pf-c-tile" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <i class="fas fa-bell" aria-hidden="true"></i>
    </div>
    <div class="pf-c-tile__title">Default</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>`,
    },
  },
  {
    displayName: "stacked-tiles",
    picture: {
      src: "./pictures/tile/stacked-tiles.png",
      width: 491,
      height: 296,
    },
    snippet: {
      html: `<div class="pf-c-tile" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <i class="fas fa-bell" aria-hidden="true"></i>
    </div>
    <div class="pf-c-tile__title">Default</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<div class="pf-c-tile pf-m-selected" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <i class="fas fa-bell" aria-hidden="true"></i>
    </div>
    <div class="pf-c-tile__title">Selected</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<div class="pf-c-tile pf-m-disabled" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <i class="fas fa-bell" aria-hidden="true"></i>
    </div>
    <div class="pf-c-tile__title">Disabled</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<br/>
<br/>
<div class="pf-c-tile" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <img src="node_modules/@patternfly/patternfly/assets/images/pf-logo-small.svg" alt="PatternFly logo" />
    </div>
    <div class="pf-c-tile__title">Default</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<div class="pf-c-tile pf-m-selected" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <img src="node_modules/@patternfly/patternfly/assets/images/pf-logo-small.svg" alt="PatternFly logo" />
    </div>
    <div class="pf-c-tile__title">Selected</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<div class="pf-c-tile pf-m-disabled" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <img src="node_modules/@patternfly/patternfly/assets/images/pf-logo-small.svg" alt="PatternFly logo" />
    </div>
    <div class="pf-c-tile__title">Disabled</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>`,
    },
  },
  {
    displayName: "stacked-tiles-large",
    picture: {
      src: "./pictures/tile/stacked-tiles-large.png",
      width: 491,
      height: 353,
    },
    snippet: {
      html: `<div class="pf-c-tile pf-m-display-lg" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <i class="fas fa-bell" aria-hidden="true"></i>
    </div>
    <div class="pf-c-tile__title">Default</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<div class="pf-c-tile pf-m-selected pf-m-display-lg" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <i class="fas fa-bell" aria-hidden="true"></i>
    </div>
    <div class="pf-c-tile__title">Selected</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<div class="pf-c-tile pf-m-display-lg pf-m-disabled" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <i class="fas fa-bell" aria-hidden="true"></i>
    </div>
    <div class="pf-c-tile__title">Disabled</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<br/>
<br/>
<div class="pf-c-tile pf-m-display-lg" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <img src="node_modules/@patternfly/patternfly/assets/images/pf-logo-small.svg" alt="PatternFly logo" height="54px" width="54px" />
    </div>
    <div class="pf-c-tile__title">Default</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<div class="pf-c-tile pf-m-display-lg pf-m-selected" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <img src="node_modules/@patternfly/patternfly/assets/images/pf-logo-small.svg" alt="PatternFly logo" height="54px" width="54px" />
    </div>
    <div class="pf-c-tile__title">Selected</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<div class="pf-c-tile pf-m-display-lg pf-m-disabled" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <img src="node_modules/@patternfly/patternfly/assets/images/pf-logo-small.svg" alt="PatternFly logo" height="54px" width="54px" />
    </div>
    <div class="pf-c-tile__title">Disabled</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>`,
    },
  },
];
