export default {
  displayName: "form",
  name: "form",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/form/",
};

export const variants = [
  {
    displayName: "action-group",
    picture: {
      src: "./pictures/form/action-group.png",
      width: 293,
      height: 101,
    },
    snippet: {
      html: `<form novalidate class="pf-c-form">
  <div class="pf-c-form__group pf-m-action">
    <div class="pf-c-form__actions">
      <button class="pf-c-button pf-m-primary" type="submit">Submit form</button>
      <button class="pf-c-button pf-m-secondary" type="reset">Reset form</button>
    </div>
  </div>
</form>`,
    },
  },
  {
    displayName: "help-text",
    picture: {
      src: "./pictures/form/help-text.png",
      width: 355,
      height: 631,
    },
    snippet: {
      html: `<form novalidate class="pf-c-form">
  <div class="pf-c-form__group">
    <div class="pf-c-form__group-label">
      <label class="pf-c-form__label" for="help-text-form-name">
        <span class="pf-c-form__label-text">Name</span>
        <span class="pf-c-form__label-required" aria-hidden="true">*</span>
      </label>
    </div>
    <div class="pf-c-form__group-control">
      <input class="pf-c-form-control" required type="text" id="help-text-form-name" name="help-text-form-name" aria-describedby="help-text-form-name-helper" />
      <p class="pf-c-form__helper-text" id="help-text-form-name-helper" aria-live="polite">This is helper text</p>
    </div>
  </div>
  <div class="pf-c-form__group">
    <div class="pf-c-form__group-label">
      <label class="pf-c-form__label" for="help-text-form-email">
        <span class="pf-c-form__label-text">E-mail</span>
        <span class="pf-c-form__label-required" aria-hidden="true">*</span>
      </label>
    </div>
    <div class="pf-c-form__group-control">
      <input class="pf-c-form-control pf-m-warning" required type="text" id="help-text-form-email" name="help-text-form-email" aria-describedby="help-text-form-email-helper" />
      <p class="pf-c-form__helper-text pf-m-warning" id="help-text-form-email-helper" aria-live="polite">This is helper text for a warning input</p>
    </div>
  </div>
  <div class="pf-c-form__group">
    <div class="pf-c-form__group-label">
      <label class="pf-c-form__label" for="help-text-form-address">
        <span class="pf-c-form__label-text">Address</span>
        <span class="pf-c-form__label-required" aria-hidden="true">*</span>
      </label>
    </div>
    <div class="pf-c-form__group-control">
      <input class="pf-c-form-control" required type="text" id="help-text-form-address" name="help-text-form-address" aria-invalid="true" aria-describedby="help-text-form-address-helper" />
      <p class="pf-c-form__helper-text pf-m-error" id="help-text-form-address-helper" aria-live="polite">This is helper text for an invalid input</p>
    </div>
  </div>
  <div class="pf-c-form__group">
    <div class="pf-c-form__group-label">
      <label class="pf-c-form__label" for="help-text-form-comment">
        <span class="pf-c-form__label-text">Comment</span>
      </label>
    </div>
    <div class="pf-c-form__group-control">
      <input class="pf-c-form-control pf-m-success" value="This is a valid comment"type="text" id="help-text-form-comment" name="help-text-form-comment" aria-describedby="help-text-form-comment-help" />
      <p class="pf-c-form__helper-text pf-m-success" id="help-text-form-comment-help" aria-live="polite">This is helper text for success input</p>
    </div>
  </div>
  <div class="pf-c-form__group">
    <label class="pf-c-form__label" for="help-text-simple-form-info">
      <span class="pf-c-form__label-text">Information</span>
    </label>
    <textarea class="pf-c-form-control" id="help-text-simple-form-info" name="help-text-simple-form-info" aria-invalid="true" aria-describedby="help-text-simple-form-info-helper"></textarea>
    <p class="pf-c-form__helper-text pf-m-error" id="help-text-simple-form-info-helper" aria-live="polite">
      <span class="pf-c-form__helper-text-icon">
        <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
      </span>This is helper text with an icon.</p>
  </div>
</form>`,
    },
  },
  {
    displayName: "horizontally-aligned-labels",
    picture: {
      src: "./pictures/form/horizontally-aligned-labels.png",
      width: 417,
      height: 243,
    },
    snippet: {
      html: `<form novalidate class="pf-c-form pf-m-horizontal">
  <div class="pf-c-form__group">
    <div class="pf-c-form__group-label">
      <label class="pf-c-form__label" for="horizontal-align-labels-1-form-name">
        <span class="pf-c-form__label-text">Name</span>
        <span class="pf-c-form__label-required" aria-hidden="true">*</span>
      </label>
    </div>
    <div class="pf-c-form__group-control">
      <input class="pf-c-form-control" type="text" id="horizontal-align-labels-1-form-name" name="horizontal-align-labels-1-form-name" required />
    </div>
  </div>
</form>
<br />
<form novalidate class="pf-c-form pf-m-horizontal">
  <div class="pf-c-form__group">
    <div class="pf-c-form__group-label">
      <label class="pf-c-form__label" for="horizontal-align-labels-2-form-name">
        <span class="pf-c-form__label-text">Information</span>
      </label>
      <button class="pf-c-form__group-label-help" aria-label="More info">
        <i class="pficon pf-icon-help" aria-hidden="true"></i>
      </button>
    </div>
    <div class="pf-c-form__group-control">
      <textarea class="pf-c-form-control" type="text" id="horizontal-align-labels-2-form-name-2" name="horizontal-align-labels-2-form-name-2" aria-label="textarea example"></textarea>
    </div>
  </div>
</form>
<br />
<form novalidate class="pf-c-form pf-m-horizontal">
  <div class="pf-c-form__group">
    <div class="pf-c-form__group-label pf-m-no-padding-top">
      <label class="pf-c-form__label" for="horizontal-align-labels-top-form-name">
        <span class="pf-c-form__label-text">Label (no top padding)</span>
      </label>
      <button class="pf-c-form__group-label-help" aria-label="More info">
        <i class="pficon pf-icon-help" aria-hidden="true"></i>
      </button>
    </div>
    <div class="pf-c-form__group-control">
      <div class="pf-c-check">
        <input class="pf-c-check__input" type="checkbox" type="checkbox" id="alt-form-checkbox1" name="alt-form-checkbox1" />
        <label class="pf-c-check__label" for="alt-form-checkbox1">Option 1</label>
      </div>
      <div class="pf-c-check">
        <input class="pf-c-check__input" type="checkbox" type="checkbox" id="alt-form-checkbox2" name="alt-form-checkbox2" />
        <label class="pf-c-check__label" for="alt-form-checkbox2">Option 2</label>
      </div>
    </div>
  </div>
</form>`,
    },
  },
  {
    displayName: "vertically-aligned-labels",
    picture: {
      src: "./pictures/form/vertically-aligned-labels.png",
      width: 293,
      height: 101,
    },
    snippet: {
      html: `<form novalidate class="pf-c-form">
  <div class="pf-c-form__group">
    <div class="pf-c-form__group-label">
      <label class="pf-c-form__label" for="vertical-align-labels-form-name">
        <span class="pf-c-form__label-text">Name</span>
        <span class="pf-c-form__label-required" aria-hidden="true">*</span>
      </label>
      <button class="pf-c-form__group-label-help" aria-label="More info">
        <i class="pficon pf-icon-help" aria-hidden="true"></i>
      </button>
    </div>
    <div class="pf-c-form__group-control">
      <input class="pf-c-form-control" type="text" id="vertical-align-labels-form-name" name="vertical-align-labels-form-name" required />
    </div>
  </div>
</form>`,
    },
  },
];
