export default {
  displayName: "label",
  name: "label",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/label/",
};

export const variants = [
  {
    displayName: "filled label",
    picture: {
      src: "./pictures/label/filled-label.png",
      width: 46,
      height: 29,
    },
    snippet: {
      html: `<span class="pf-c-label">
  <span class="pf-c-label__content">Grey</span>
</span>
<span class="pf-c-label">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Grey icon</span>
</span>
<span class="pf-c-label">
  <span class="pf-c-label__content">Grey removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="default-grey-close-button" aria-label="Remove" aria-labelledby="default-grey-close-button default-grey-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Grey icon removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="default-grey-icon-close-button" aria-label="Remove" aria-labelledby="default-grey-icon-close-button default-grey-icon-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label">
  <a class="pf-c-label__content" href="#">Grey link</a>
</span>
<span class="pf-c-label">
  <a class="pf-c-label__content" href="#">Grey link removable</a>
  <button class="pf-c-button pf-m-plain" type="button" id="default-grey-link-close-button" aria-label="Remove" aria-labelledby="default-grey-link-close-button default-grey-link-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
`,
    },
  },
  {
    displayName: "filled label blue",
    picture: {
      src: "./pictures/label/filled-label-blue.png",
      width: 44,
      height: 29,
    },
    snippet: {
      html: `
<span class="pf-c-label pf-m-blue">
  <span class="pf-c-label__content">Blue</span>
</span>
<span class="pf-c-label pf-m-blue">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Blue icon</span>
</span>
<span class="pf-c-label pf-m-blue">
  <span class="pf-c-label__content">Blue removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="default-blue-close-button" aria-label="Remove" aria-labelledby="default-blue-close-button default-blue-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label pf-m-blue">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Blue icon removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="default-blue-icon-close-button" aria-label="Remove" aria-labelledby="default-blue-icon-close-button default-blue-icon-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label pf-m-blue">
  <a class="pf-c-label__content" href="#">Blue link</a>
</span>
<span class="pf-c-label pf-m-blue">
  <a class="pf-c-label__content" href="#">Blue link removable</a>
  <button class="pf-c-button pf-m-plain" type="button" id="default-blue-link-close-button" aria-label="Remove" aria-labelledby="default-blue-link-close-button default-blue-link-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
`,
    },
  },
  {
    displayName: "filled label green",
    picture: {
      src: "./pictures/label/filled-label-green.png",
      width: 55,
      height: 29,
    },
    snippet: {
      html: `
<span class="pf-c-label pf-m-green">
  <span class="pf-c-label__content">Green</span>
</span>
<span class="pf-c-label pf-m-green">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Green icon</span>
</span>
<span class="pf-c-label pf-m-green">
  <span class="pf-c-label__content">Green removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="default-green-close-button" aria-label="Remove" aria-labelledby="default-green-close-button default-green-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label pf-m-green">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Green icon removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="default-green-icon-close-button" aria-label="Remove" aria-labelledby="default-green-icon-close-button default-green-icon-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label pf-m-green">
  <a class="pf-c-label__content" href="#">Green link</a>
</span>
<span class="pf-c-label pf-m-green">
  <a class="pf-c-label__content" href="#">Green link removable</a>
  <button class="pf-c-button pf-m-plain" type="button" id="default-green-link-close-button" aria-label="Remove" aria-labelledby="default-green-link-close-button default-green-link-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
`,
    },
  },
  {
    displayName: "filled label orange",
    picture: {
      src: "./pictures/label/filled-label-orange.png",
      width: 63,
      height: 29,
    },
    snippet: {
      html: `
<span class="pf-c-label pf-m-orange">
  <span class="pf-c-label__content">Orange</span>
</span>
<span class="pf-c-label pf-m-orange">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Orange icon</span>
</span>
<span class="pf-c-label pf-m-orange">
  <span class="pf-c-label__content">Orange removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="default-orange-close-button" aria-label="Remove" aria-labelledby="default-orange-close-button default-orange-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label pf-m-orange">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Orange icon removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="default-orange-icon-close-button" aria-label="Remove" aria-labelledby="default-orange-icon-close-button default-orange-icon-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label pf-m-orange">
  <a class="pf-c-label__content" href="#">Orange link</a>
</span>
<span class="pf-c-label pf-m-orange">
  <a class="pf-c-label__content" href="#">Orange link removable</a>
  <button class="pf-c-button pf-m-plain" type="button" id="default-orange-link-close-button" aria-label="Remove" aria-labelledby="default-orange-link-close-button default-orange-link-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
`,
    },
  },
  {
    displayName: "filled label red",
    picture: {
      src: "./pictures/label/filled-label-red.png",
      width: 40,
      height: 29,
    },
    snippet: {
      html: `
<span class="pf-c-label pf-m-red">
  <span class="pf-c-label__content">Red</span>
</span>
<span class="pf-c-label pf-m-red">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Red icon</span>
</span>
<span class="pf-c-label pf-m-red">
  <span class="pf-c-label__content">Red removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="default-red-close-button" aria-label="Remove" aria-labelledby="default-red-close-button default-red-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label pf-m-red">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Red icon removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="default-red-icon-close-button" aria-label="Remove" aria-labelledby="default-red-icon-close-button default-red-icon-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label pf-m-red">
  <a class="pf-c-label__content" href="#">Red link</a>
</span>
<span class="pf-c-label pf-m-red">
  <a class="pf-c-label__content" href="#">Red link removable</a>
  <button class="pf-c-button pf-m-plain" type="button" id="default-red-link-close-button" aria-label="Remove" aria-labelledby="default-red-link-close-button default-red-link-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
`,
    },
  },
  {
    displayName: "filled label purple",
    picture: {
      src: "./pictures/label/filled-label-purple.png",
      width: 56,
      height: 29,
    },
    snippet: {
      html: `
<span class="pf-c-label pf-m-purple">
  <span class="pf-c-label__content">Purple</span>
</span>
<span class="pf-c-label pf-m-purple">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Purple icon</span>
</span>
<span class="pf-c-label pf-m-purple">
  <span class="pf-c-label__content">Purple removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="default-purple-close-button" aria-label="Remove" aria-labelledby="default-purple-close-button default-purple-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label pf-m-purple">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Purple icon removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="default-purple-icon-close-button" aria-label="Remove" aria-labelledby="default-purple-icon-close-button default-purple-icon-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label pf-m-purple">
  <a class="pf-c-label__content" href="#">Purple link</a>
</span>
<span class="pf-c-label pf-m-purple">
  <a class="pf-c-label__content" href="#">Purple link removable</a>
  <button class="pf-c-button pf-m-plain" type="button" id="default-purple-link-close-button" aria-label="Remove" aria-labelledby="default-purple-link-close-button default-purple-link-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
`,
    },
  },
  {
    displayName: "filled label cyan",
    picture: {
      src: "./pictures/label/filled-label-cyan.png",
      width: 48,
      height: 29,
    },
    snippet: {
      html: `
<span class="pf-c-label pf-m-cyan">
  <span class="pf-c-label__content">Cyan</span>
</span>
<span class="pf-c-label pf-m-cyan">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Cyan icon</span>
</span>
<span class="pf-c-label pf-m-cyan">
  <span class="pf-c-label__content">Cyan removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="default-cyan-close-button" aria-label="Remove" aria-labelledby="default-cyan-close-button default-cyan-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label pf-m-cyan">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Cyan icon removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="default-cyan-icon-close-button" aria-label="Remove" aria-labelledby="default-cyan-icon-close-button default-cyan-icon-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label pf-m-cyan">
  <a class="pf-c-label__content" href="#">Cyan link</a>
</span>
<span class="pf-c-label pf-m-cyan">
  <a class="pf-c-label__content" href="#">Cyan link removable</a>
  <button class="pf-c-button pf-m-plain" type="button" id="default-cyan-link-close-button" aria-label="Remove" aria-labelledby="default-cyan-link-close-button default-cyan-link-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>`,
    },
  },
  {
    displayName: "outline label outline",
    picture: {
      src: "./pictures/label/outline-label-outline.png",
      width: 46,
      height: 29,
    },
    snippet: {
      html: `<span class="pf-c-label pf-m-outline">
  <span class="pf-c-label__content">Grey</span>
</span>
<span class="pf-c-label pf-m-outline">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Grey icon</span>
</span>
<span class="pf-c-label pf-m-outline">
  <span class="pf-c-label__content">Grey removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="outline-grey-close-button" aria-label="Remove" aria-labelledby="outline-grey-close-button outline-grey-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label pf-m-outline">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Grey icon removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="outline-grey-icon-close-button" aria-label="Remove" aria-labelledby="outline-grey-icon-close-button outline-grey-icon-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label pf-m-outline">
  <a class="pf-c-label__content" href="#">Grey link</a>
</span>
<span class="pf-c-label pf-m-outline">
  <a class="pf-c-label__content" href="#">Grey link removable</a>
  <button class="pf-c-button pf-m-plain" type="button" id="outline-grey-link-close-button" aria-label="Remove" aria-labelledby="outline-grey-link-close-button outline-grey-link-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
`,
    },
  },
  {
    displayName: "outline label blue outline",
    picture: {
      src: "./pictures/label/outline-label-blue-outline.png",
      width: 44,
      height: 29,
    },
    snippet: {
      html: `
<span class="pf-c-label pf-m-blue pf-m-outline">
  <span class="pf-c-label__content">Blue</span>
</span>
<span class="pf-c-label pf-m-blue pf-m-outline">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Blue icon</span>
</span>
<span class="pf-c-label pf-m-blue pf-m-outline">
  <span class="pf-c-label__content">Blue removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="outline-blue-close-button" aria-label="Remove" aria-labelledby="outline-blue-close-button outline-blue-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label pf-m-blue pf-m-outline">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Blue icon removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="outline-blue-icon-close-button" aria-label="Remove" aria-labelledby="outline-blue-icon-close-button outline-blue-icon-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label pf-m-outline pf-m-blue">
  <a class="pf-c-label__content" href="#">Blue link</a>
</span>
<span class="pf-c-label pf-m-outline pf-m-blue">
  <a class="pf-c-label__content" href="#">Blue link removable</a>
  <button class="pf-c-button pf-m-plain" type="button" id="outline-blue-link-close-button" aria-label="Remove" aria-labelledby="outline-blue-link-close-button outline-blue-link-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
`,
    },
  },
  {
    displayName: "outline label green outline",
    picture: {
      src: "./pictures/label/outline-label-green-outline.png",
      width: 55,
      height: 29,
    },
    snippet: {
      html: `
<span class="pf-c-label pf-m-green pf-m-outline">
  <span class="pf-c-label__content">Green</span>
</span>
<span class="pf-c-label pf-m-green pf-m-outline">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Green icon</span>
</span>
<span class="pf-c-label pf-m-green pf-m-outline">
  <span class="pf-c-label__content">Green removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="outline-green-close-button" aria-label="Remove" aria-labelledby="outline-green-close-button outline-green-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label pf-m-green pf-m-outline">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Green icon removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="outline-green-icon-close-button" aria-label="Remove" aria-labelledby="outline-green-icon-close-button outline-green-icon-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label pf-m-outline pf-m-green">
  <a class="pf-c-label__content" href="#">Green link</a>
</span>
<span class="pf-c-label pf-m-outline pf-m-green">
  <a class="pf-c-label__content" href="#">Green link removable</a>
  <button class="pf-c-button pf-m-plain" type="button" id="outline-green-link-close-button" aria-label="Remove" aria-labelledby="outline-green-link-close-button outline-green-link-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
`,
    },
  },
  {
    displayName: "outline label orange outline",
    picture: {
      src: "./pictures/label/outline-label-orange-outline.png",
      width: 63,
      height: 29,
    },
    snippet: {
      html: `
<span class="pf-c-label pf-m-orange pf-m-outline">
  <span class="pf-c-label__content">Orange</span>
</span>
<span class="pf-c-label pf-m-orange pf-m-outline">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Orange icon</span>
</span>
<span class="pf-c-label pf-m-orange pf-m-outline">
  <span class="pf-c-label__content">Orange removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="outline-orange-close-button" aria-label="Remove" aria-labelledby="outline-orange-close-button outline-orange-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label pf-m-orange pf-m-outline">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Orange icon removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="outline-orange-icon-close-button" aria-label="Remove" aria-labelledby="outline-orange-icon-close-button outline-orange-icon-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label pf-m-outline pf-m-orange">
  <a class="pf-c-label__content" href="#">Orange link</a>
</span>
<span class="pf-c-label pf-m-outline pf-m-orange">
  <a class="pf-c-label__content" href="#">Orange link removable</a>
  <button class="pf-c-button pf-m-plain" type="button" id="outline-orange-link-close-button" aria-label="Remove" aria-labelledby="outline-orange-link-close-button outline-orange-link-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
`,
    },
  },
  {
    displayName: "outline label red outline",
    picture: {
      src: "./pictures/label/outline-label-red-outline.png",
      width: 40,
      height: 29,
    },
    snippet: {
      html: `
<span class="pf-c-label pf-m-red pf-m-outline">
  <span class="pf-c-label__content">Red</span>
</span>
<span class="pf-c-label pf-m-red pf-m-outline">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Red icon</span>
</span>
<span class="pf-c-label pf-m-red pf-m-outline">
  <span class="pf-c-label__content">Red removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="outline-red-close-button" aria-label="Remove" aria-labelledby="outline-red-close-button outline-red-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label pf-m-red pf-m-outline">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Red icon removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="outline-red-icon-close-button" aria-label="Remove" aria-labelledby="outline-red-icon-close-button outline-red-icon-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label pf-m-outline pf-m-red">
  <a class="pf-c-label__content" href="#">Red link</a>
</span>
<span class="pf-c-label pf-m-outline pf-m-red">
  <a class="pf-c-label__content" href="#">Red link removable</a>
  <button class="pf-c-button pf-m-plain" type="button" id="outline-red-link-close-button" aria-label="Remove" aria-labelledby="outline-red-link-close-button outline-red-link-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
`,
    },
  },
  {
    displayName: "outline label purple outline",
    picture: {
      src: "./pictures/label/outline-label-purple-outline.png",
      width: 56,
      height: 29,
    },
    snippet: {
      html: `
<span class="pf-c-label pf-m-purple pf-m-outline">
  <span class="pf-c-label__content">Purple</span>
</span>
<span class="pf-c-label pf-m-purple pf-m-outline">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Purple icon</span>
</span>
<span class="pf-c-label pf-m-purple pf-m-outline">
  <span class="pf-c-label__content">Purple removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="outline-purple-close-button" aria-label="Remove" aria-labelledby="outline-purple-close-button outline-purple-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label pf-m-purple pf-m-outline">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Purple icon removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="outline-purple-icon-close-button" aria-label="Remove" aria-labelledby="outline-purple-icon-close-button outline-purple-icon-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label pf-m-outline pf-m-purple">
  <a class="pf-c-label__content" href="#">Purple link</a>
</span>
<span class="pf-c-label pf-m-outline pf-m-purple">
  <a class="pf-c-label__content" href="#">Purple link removable</a>
  <button class="pf-c-button pf-m-plain" type="button" id="outline-purple-link-close-button" aria-label="Remove" aria-labelledby="outline-purple-link-close-button outline-purple-link-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
`,
    },
  },
  {
    displayName: "outline label cyan outline",
    picture: {
      src: "./pictures/label/outline-label-cyan-outline.png",
      width: 48,
      height: 29,
    },
    snippet: {
      html: `
<span class="pf-c-label pf-m-cyan pf-m-outline">
  <span class="pf-c-label__content">Cyan</span>
</span>
<span class="pf-c-label pf-m-cyan pf-m-outline">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Cyan icon</span>
</span>
<span class="pf-c-label pf-m-cyan pf-m-outline">
  <span class="pf-c-label__content">Cyan removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="outline-cyan-close-button" aria-label="Remove" aria-labelledby="outline-cyan-close-button outline-cyan-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label pf-m-cyan pf-m-outline">
  <span class="pf-c-label__content">
    <span class="pf-c-label__icon">
      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
    </span>Cyan icon removable</span>
  <button class="pf-c-button pf-m-plain" type="button" id="outline-cyan-icon-close-button" aria-label="Remove" aria-labelledby="outline-cyan-icon-close-button outline-cyan-icon-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>
<span class="pf-c-label pf-m-outline pf-m-cyan">
  <a class="pf-c-label__content" href="#">Cyan link</a>
</span>
<span class="pf-c-label pf-m-outline pf-m-cyan">
  <a class="pf-c-label__content" href="#">Cyan link removable</a>
  <button class="pf-c-button pf-m-plain" type="button" id="outline-cyan-link-close-button" aria-label="Remove" aria-labelledby="outline-cyan-link-close-button outline-cyan-link-close-text">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</span>`,
    },
  },
];
