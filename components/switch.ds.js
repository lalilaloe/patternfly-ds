export default {
  displayName: "switch",
  name: "switch",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/switch/",
};

export const variants = [
  {
    displayName: "basic",
    picture: {
      src: "./components/pictures/switch/basic.png",
      width: 293,
      height: 108,
    },
    snippet: {
      html: `<label class="pf-c-switch" for="switch-with-label-1">
  <input class="pf-c-switch__input" type="checkbox" id="switch-with-label-1" aria-labelledby="switch-with-label-1-on" name="switchExample1" checked />
  <span class="pf-c-switch__toggle"></span>
  <span class="pf-c-switch__label pf-m-on" id="switch-with-label-1-on" aria-hidden="true">Message when on</span>
  <span class="pf-c-switch__label pf-m-off" id="switch-with-label-1-off" aria-hidden="true">Message when off</span>
</label>
<br/>
<br/>
<label class="pf-c-switch" for="switch-with-label-2">
  <input class="pf-c-switch__input" type="checkbox" id="switch-with-label-2" aria-labelledby="switch-with-label-2-on" name="switchExample2" />
  <span class="pf-c-switch__toggle"></span>
  <span class="pf-c-switch__label pf-m-on" id="switch-with-label-2-on" aria-hidden="true">Message when on</span>
  <span class="pf-c-switch__label pf-m-off" id="switch-with-label-2-off" aria-hidden="true">Message when off</span>
</label>`,
    },
  },
  {
    displayName: "disabled",
    picture: {
      src: "./components/pictures/switch/disabled.png",
      width: 293,
      height: 108,
    },
    snippet: {
      html: `<label class="pf-c-switch" for="switch-disabled-1">
  <input class="pf-c-switch__input" type="checkbox" id="switch-disabled-1" aria-labelledby="switch-disabled-1-on" name="switchExample5" disabled checked />
  <span class="pf-c-switch__toggle"></span>
  <span class="pf-c-switch__label pf-m-on" id="switch-disabled-1-on" aria-hidden="true">Message when on</span>
  <span class="pf-c-switch__label pf-m-off" id="switch-disabled-1-off" aria-hidden="true">Message when off</span>
</label>
<br/>
<br/>
<label class="pf-c-switch" for="switch-disabled-2">
  <input class="pf-c-switch__input" type="checkbox" id="switch-disabled-2" aria-labelledby="switch-disabled-2-on" name="switchExample6" disabled />
  <span class="pf-c-switch__toggle"></span>
  <span class="pf-c-switch__label pf-m-on" id="switch-disabled-2-on" aria-hidden="true">Message when on</span>
  <span class="pf-c-switch__label pf-m-off" id="switch-disabled-2-off" aria-hidden="true">Message when off</span>
</label>`,
    },
  },
  {
    displayName: "without-label",
    picture: {
      src: "./components/pictures/switch/without-label.png",
      width: 293,
      height: 108,
    },
    snippet: {
      html: `<label class="pf-c-switch" for="switch-with-icon-1">
  <input class="pf-c-switch__input" type="checkbox" id="switch-with-icon-1" aria-label="switch is off" name="switchExample3" checked />
  <span class="pf-c-switch__toggle">
    <span class="pf-c-switch__toggle-icon">
      <i class="fas fa-check" aria-hidden="true"></i>
    </span>
  </span>
</label>
<br/>
<br/>
<label class="pf-c-switch" for="switch-with-icon-2">
  <input class="pf-c-switch__input" type="checkbox" id="switch-with-icon-2" aria-label="switch is off" name="switchExample4" />
  <span class="pf-c-switch__toggle">
    <span class="pf-c-switch__toggle-icon">
      <i class="fas fa-check" aria-hidden="true"></i>
    </span>
  </span>
</label>`,
    },
  },
];
