export default {
  displayName: "chip",
  name: "chip",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/chip/",
};

export const variants = [
  {
    displayName: "basic chip",
    picture: {
      src: "./pictures/chip/basic-chip.png",
      width: 61,
      height: 26,
    },
    snippet: {
      html: `<div class="pf-c-chip">
  <span class="pf-c-chip__text" id="chip_one">Chip</span>
  <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="remove_chip_one chip_one" aria-label="Remove" id="remove_chip_one">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</div>
`,
    },
  },
  {
    displayName: "basic chip  1",
    picture: {
      src: "./pictures/chip/basic-chip-1.png",
      width: 162,
      height: 26,
    },
    snippet: {
      html: `
<div class="pf-c-chip">
  <span class="pf-c-chip__text" id="chip_two">Really long chip that goes on and on</span>
  <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="remove_chip_two chip_two" aria-label="Remove" id="remove_chip_two">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</div>
`,
    },
  },
  {
    displayName: "basic chip  2",
    picture: {
      src: "./pictures/chip/basic-chip-2.png",
      width: 97,
      height: 26,
    },
    snippet: {
      html: `
<div class="pf-c-chip">
  <span class="pf-c-chip__text" id="chip_three">Chip</span>
  <span class="pf-c-badge pf-m-read">00</span>
  <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="remove_chip_three chip_three" aria-label="Remove" id="remove_chip_three">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</div>
`,
    },
  },
  {
    displayName: "basic chip read-only",
    picture: {
      src: "./pictures/chip/basic-chip-read-only.png",
      width: 96,
      height: 26,
    },
    snippet: {
      html: `
<div class="pf-c-chip pf-m-read-only">
  <span class="pf-c-chip__text">Read-only chip</span>
</div>
`,
    },
  },
  {
    displayName: "basic chip overflow",
    picture: {
      src: "./pictures/chip/basic-chip-overflow.png",
      width: 90,
      height: 26,
    },
    snippet: {
      html: `<button class="pf-c-chip pf-m-overflow">  <span class="pf-c-chip__text">Overflow chip</span></button>`,
    },
  },
];
