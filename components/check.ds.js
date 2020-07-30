export default {
  displayName: "check",
  name: "check",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/check/",
};

export const variants = [
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/check/basic.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-check">
  <input class="pf-c-check__input" type="checkbox" id="check-basic" name="check-basic" />
  <label class="pf-c-check__label" for="check-basic">Check</label>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/check/checked.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-check">
  <input class="pf-c-check__input" type="checkbox" id="check-checked" name="check-checked" checked />
  <label class="pf-c-check__label" for="check-checked">Check checked</label>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/check/disabled.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-check">
  <input class="pf-c-check__input" type="checkbox" id="check-disabled" name="check-disabled" disabled />
  <label class="pf-c-check__label pf-m-disabled" for="check-disabled">Check disabled</label>
</div>
<div class="pf-c-check">
  <input class="pf-c-check__input" type="checkbox" id="check-disabled-2" name="check-disabled-2" checked disabled />
  <label class="pf-c-check__label pf-m-disabled" for="check-disabled-2">Check disabled checked</label>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/check/label-wrapping-input.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<label class="pf-c-check" for="check-label-wrapping-input">
  <input class="pf-c-check__input" type="checkbox" id="check-label-wrapping-input" name="check-label-wrapping-input" />
  <span class="pf-c-check__label">Check label wraps input</span>
</label>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/check/reversed.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-check">
  <label class="pf-c-check__label" for="check-reversed">Check reversed</label>
  <input class="pf-c-check__input" type="checkbox" id="check-reversed" name="check-reversed" /></div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/check/with-description.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-check">
  <input class="pf-c-check__input" type="checkbox" id="check-with-description" name="check-with-description" />
  <label class="pf-c-check__label" for="check-with-description">Check with description</label>
  <div class="pf-c-check__description">Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS od GCP.</div>
</div>`,
    },
  },
];
