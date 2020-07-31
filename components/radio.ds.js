export default {
  displayName: "radio",
  name: "radio",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/radio/",
};

export const variants = [
  {
    displayName: "basic",
    picture: {
      src: "./pictures/radio/basic.png",
      width: 293,
      height: 53,
    },
    snippet: {
      html: `<div class="pf-c-radio">
  <input class="pf-c-radio__input" type="radio" id="radio-simple" name="exampleRadioSimple" />
  <label class="pf-c-radio__label" for="radio-simple">Radio</label>
</div>`,
    },
  },
  {
    displayName: "checked",
    picture: {
      src: "./pictures/radio/checked.png",
      width: 293,
      height: 53,
    },
    snippet: {
      html: `<div class="pf-c-radio">
  <input class="pf-c-radio__input" type="radio" id="radio-checked" name="exampleRadioChecked" checked />
  <label class="pf-c-radio__label" for="radio-checked">Radio checked</label>
</div>`,
    },
  },
  {
    displayName: "disabled",
    picture: {
      src: "./pictures/radio/disabled.png",
      width: 293,
      height: 74,
    },
    snippet: {
      html: `<div class="pf-c-radio">
  <input class="pf-c-radio__input" type="radio" id="radio-disabled" name="exampleRadioDisabled" disabled />
  <label class="pf-c-radio__label pf-m-disabled" for="radio-disabled">Radio disabled</label>
</div>
<div class="pf-c-radio">
  <input class="pf-c-radio__input" type="radio" id="radio-disabled-checked" name="exampleRadioDisabledChecked" disabled checked />
  <label class="pf-c-radio__label pf-m-disabled" for="radio-disabled-checked">Radio disabled checked</label>
</div>`,
    },
  },
  {
    displayName: "label-wrapping-input",
    picture: {
      src: "./pictures/radio/label-wrapping-input.png",
      width: 293,
      height: 53,
    },
    snippet: {
      html: `<label class="pf-c-radio" for="radio-wrap">
  <input class="pf-c-radio__input" type="radio" id="radio-wrap" name="exampleRadioWrap" />
  <span class="pf-c-radio__label">Radio label wraps input</span>
</label>`,
    },
  },
  {
    displayName: "reversed",
    picture: {
      src: "./pictures/radio/reversed.png",
      width: 293,
      height: 53,
    },
    snippet: {
      html: `<div class="pf-c-radio">
  <label class="pf-c-radio__label" for="radio-rev">Radio reversed</label>
  <input class="pf-c-radio__input" type="radio" id="radio-rev" name="exampleRadioReversed" /></div>`,
    },
  },
  {
    displayName: "with-description",
    picture: {
      src: "./pictures/radio/with-description.png",
      width: 855,
      height: 99,
    },
    snippet: {
      html: `<div class="pf-c-radio">
  <input class="pf-c-radio__input" type="radio" id="radio-description" name="exampleRadioDescription" />
  <label class="pf-c-radio__label" for="radio-description">Radio with description</label>
  <div class="pf-c-radio__description">Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS od GCP.</div>
</div>`,
    },
  },
];
