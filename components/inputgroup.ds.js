export default {
  displayName: "inputgroup",
  name: "inputgroup",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/inputgroup/",
};

export const variants = [
  {
    displayName: "variations",
    picture: {
      src: "./pictures/inputgroup/variations.png",
      width: 493,
      height: 792,
    },
    snippet: {
      html: `<div class="pf-c-input-group">
  <button class="pf-c-button pf-m-control" type="button" id="textAreaButton1">Button</button>
  <textarea class="pf-c-form-control" name="textarea1" id="textarea1" aria-label="Textarea with buttons" aria-describedby="textAreaButton1"></textarea>
  <button class="pf-c-button pf-m-control" type="button">Button</button>
</div>
<br />
<div class="pf-c-input-group">
  <textarea class="pf-c-form-control" name="textarea2" id="textarea2" aria-label="Textarea with button" aria-describedby="textAreaButton2"></textarea>
  <button class="pf-c-button pf-m-control" type="button" id="textAreaButton2">Button</button>
</div>
<br />
<div class="pf-c-input-group">
  <button class="pf-c-button pf-m-control" type="button" id="textAreaButton3">Button</button>
  <button class="pf-c-button pf-m-control" type="button">Button</button>
  <textarea class="pf-c-form-control" name="textarea3" id="textarea3" aria-label="Textarea with buttons" aria-describedby="textAreaButton3"></textarea>
  <button class="pf-c-button pf-m-control" type="button">Button</button>
</div>
<br />
<div class="pf-c-input-group">
  <div class="pf-c-select" style="width: 100px;">
    <span id="select-example-collapsed1-label" hidden>Choose one</span>
    <button class="pf-c-select__toggle" type="button" id="select-example-collapsed1-toggle" aria-haspopup="true" aria-expanded="false" aria-labelledby="select-example-collapsed1-label select-example-collapsed1-toggle">
      <div class="pf-c-select__toggle-wrapper">
        <span class="pf-c-select__toggle-text">Select</span>
      </div>
      <span class="pf-c-select__toggle-arrow">
        <i class="fas fa-caret-down" aria-hidden="true"></i>
      </span>
    </button>
    <ul class="pf-c-select__menu" aria-labelledby="select-example-collapsed1-label" hidden style="width: 100px;">
      <li>
        <button type="button" class="pf-c-select__menu-item" aria-selected="false">Running</button>
      </li>
      <li>
        <button type="button" class="pf-c-select__menu-item" aria-selected="false">Stopped</button>
      </li>
      <li>
        <button type="button" class="pf-c-select__menu-item" aria-selected="false">Down</button>
      </li>
      <li>
        <button type="button" class="pf-c-select__menu-item" aria-selected="false">Degraded</button>
      </li>
      <li>
        <button type="button" class="pf-c-select__menu-item" aria-selected="false">Needs Maintenance</button>
      </li>
    </ul>
  </div>
  <input class="pf-c-form-control" type="text" id="textInput4" name="textInput4" aria-label="Input with select and button" aria-describedby="inputSelectButton1" />
  <button class="pf-c-button pf-m-control" type="button" id="inputSelectButton1">Button</button>
</div>
<br />
<div class="pf-c-input-group">
  <span class="pf-c-input-group__text">
    <i class="fas fa-dollar-sign" aria-hidden="true"></i>
  </span>
  <input class="pf-c-form-control" type="number" id="textInput5" name="textInput5" aria-label=" Dollar amount input example" />
  <span class="pf-c-input-group__text">.00</span>
</div>
<br />
<div class="pf-c-input-group">
  <input class="pf-c-form-control" type="email" id="textInput6" name="textInput6" aria-label="Email input field" aria-describedby="email-example" />
  <span class="pf-c-input-group__text" id="email-example">@example.com</span>
</div>
<br />
<div class="pf-c-input-group">
  <span class="pf-c-input-group__text" aria-label="@" id="username">
    <i class="fas fa-at" aria-hidden="true"></i>
  </span>
  <input class="pf-c-form-control" required type="email" id="textInput7" name="textInput7" aria-invalid="true" aria-label="Error state username example" aria-describedby="username" /></div>
<br />
<div class="pf-c-input-group">
  <label class="pf-c-input-group__text" for="textInput9">
    <i class="fas fa-calendar-alt" aria-hidden="true"></i>
  </label>
  <input class="pf-c-form-control" type="date" id="textInput9" name="textInput9" aria-label="Date input example" /></div>
<br />
<div class="pf-c-input-group">
  <input class="pf-c-form-control" type="search" id="textInput11" name="textInput11" aria-label="Search input example" />
  <button class="pf-c-button pf-m-control" type="button" aria-label="Search button for search input">
    <i class="fas fa-search" aria-hidden="true"></i>
  </button>
</div>
<br />
<div class="pf-c-input-group">
  <input class="pf-c-form-control" type="text" id="textInput13" name="textInput13" aria-label="Input example with popover" />
  <button class="pf-c-button pf-m-control" type="button" aria-label="Popover for input">
    <i class="fas fa-question-circle" aria-hidden="true"></i>
  </button>
</div>
<br />
<div class="pf-c-input-group">
  <input class="pf-c-form-control" type="search" id="textInput12" name="textInput12" aria-label="Input example with popover" />
  <button class="pf-c-button pf-m-plain" type="button" aria-label="Popover for input">
    <i class="fas fa-question-circle" aria-hidden="true"></i>
  </button>
</div>`,
    },
  },
];
