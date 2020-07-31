export default {
  displayName: "chip",
  name: "chip",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/chip/",
};

export const variants = [
  {
    displayName: "basic",
    picture: {
      src: "./components/pictures/chip/basic.png",
      width: 293,
      height: 261,
    },
    snippet: {
      html: `<div class="pf-c-chip">
  <span class="pf-c-chip__text" id="chip_one">Chip</span>
  <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="remove_chip_one chip_one" aria-label="Remove" id="remove_chip_one">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</div>
<br />
<br />
<div class="pf-c-chip">
  <span class="pf-c-chip__text" id="chip_two">Really long chip that goes on and on</span>
  <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="remove_chip_two chip_two" aria-label="Remove" id="remove_chip_two">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</div>
<br />
<br />
<div class="pf-c-chip">
  <span class="pf-c-chip__text" id="chip_three">Chip</span>
  <span class="pf-c-badge pf-m-read">00</span>
  <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="remove_chip_three chip_three" aria-label="Remove" id="remove_chip_three">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
</div>
<br />
<br />
<div class="pf-c-chip pf-m-read-only">
  <span class="pf-c-chip__text">Read-only chip</span>
</div>
<br />
<br />
<button class="pf-c-chip pf-m-overflow">
  <span class="pf-c-chip__text">Overflow chip</span>
</button>`,
    },
  },
];
