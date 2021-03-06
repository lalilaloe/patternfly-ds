export default {
  displayName: "clipboardcopy",
  name: "clipboardcopy",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/clipboardcopy/",
};

export const variants = [
  {
    displayName: "basic clipboard-copy",
    picture: {
      src: "./pictures/clipboardcopy/basic-clipboard-copy.png",
      width: 261,
      height: 36,
    },
    snippet: {
      html: `<div class="pf-c-clipboard-copy">
  <div class="pf-c-clipboard-copy__group">
    <input class="pf-c-form-control" type="text" value="This is editable" id="basic-editable-text-input" aria-label="Copyable input" />
    <button class="pf-c-button pf-m-control" type="button" aria-label="Copy to clipboard" id="basic-editable-copy-button" aria-labelledby="basic-editable-copy-button basic-editable-text-input">
      <i class="fas fa-copy" aria-hidden="true"></i>
    </button>
  </div>
</div>
`,
    },
  },
  {
    displayName: "basic clipboard-copy  1",
    picture: {
      src: "./pictures/clipboardcopy/basic-clipboard-copy-1.png",
      width: 261,
      height: 36,
    },
    snippet: {
      html: `
<div class="pf-c-clipboard-copy">
  <div class="pf-c-clipboard-copy__group">
    <input class="pf-c-form-control" readonly type="text" value="This is read-only" id="basic-readonly-text-input" aria-label="Copyable input" />
    <button class="pf-c-button pf-m-control" type="button" aria-label="Copy to clipboard" id="basic-readonly-copy-button" aria-labelledby="basic-readonly-copy-button basic-readonly-text-input">
      <i class="fas fa-copy" aria-hidden="true"></i>
    </button>
  </div>
</div>`,
    },
  },
  {
    displayName: "expandable clipboard-copy",
    picture: {
      src: "./pictures/clipboardcopy/expandable-clipboard-copy.png",
      width: 261,
      height: 36,
    },
    snippet: {
      html: `<h4>Editable</h4>
<div class="pf-c-clipboard-copy">
  <div class="pf-c-clipboard-copy__group">
    <button class="pf-c-button pf-m-control" type="button" id="expandable-not-expanded-editable-toggle" aria-labelledby="expandable-not-expanded-editable-toggle expandable-not-expanded-editable-text-input" aria-controls="expandable-not-expanded-editable-content">
      <div class="pf-c-clipboard-copy__toggle-icon">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </div>
    </button>
    <input class="pf-c-form-control" type="text" value="This is an editable version of the Copy to Clipboard Component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion." id="expandable-not-expanded-editable-text-input" aria-label="Copyable input" />
    <button class="pf-c-button pf-m-control" type="button" aria-label="Copy to clipboard" id="expandable-not-expanded-editable-copy-button" aria-labelledby="expandable-not-expanded-editable-copy-button expandable-not-expanded-editable-text-input">
      <i class="fas fa-copy" aria-hidden="true"></i>
    </button>
  </div>
  <div class="pf-c-clipboard-copy__expandable-content" hidden id="expandable-not-expanded-editable-content">This is an editable version of the Copy to Clipboard Component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.</div>
</div>
`,
    },
  },
  {
    displayName: "expandable clipboard-copy expanded",
    picture: {
      src: "./pictures/clipboardcopy/expandable-clipboard-copy-expanded.png",
      width: 823,
      height: 117,
    },
    snippet: {
      html: `
<div class="pf-c-clipboard-copy pf-m-expanded">
  <div class="pf-c-clipboard-copy__group">
    <button class="pf-c-button pf-m-control pf-m-expanded" type="button" id="expandable-expanded-editable-toggle" aria-labelledby="expandable-expanded-editable-toggle expandable-expanded-editable-text-input" aria-controls="expandable-expanded-editable-content">
      <div class="pf-c-clipboard-copy__toggle-icon">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </div>
    </button>
    <input class="pf-c-form-control" readonly type="text" value="This is an editable version of the Copy to Clipboard Component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion." id="expandable-expanded-editable-text-input" aria-label="Copyable input" />
    <button class="pf-c-button pf-m-control" type="button" aria-label="Copy to clipboard" id="expandable-expanded-editable-copy-button" aria-labelledby="expandable-expanded-editable-copy-button expandable-expanded-editable-text-input">
      <i class="fas fa-copy" aria-hidden="true"></i>
    </button>
  </div>
  <div class="pf-c-clipboard-copy__expandable-content" contenteditable="true" id="expandable-expanded-editable-content">This is an editable version of the Copy to Clipboard Component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.</div>
</div>
`,
    },
  },
  {
    displayName: "expandable clipboard-copy  2",
    picture: {
      src: "./pictures/clipboardcopy/expandable-clipboard-copy-2.png",
      width: 823,
      height: 36,
    },
    snippet: {
      html: `
<h4>Read-only</h4>
<div class="pf-c-clipboard-copy">
  <div class="pf-c-clipboard-copy__group">
    <button class="pf-c-button pf-m-control" type="button" id="expandable-not-expanded-readonly-toggle" aria-labelledby="expandable-not-expanded-readonly-toggle expandable-not-expanded-readonly-text-input" aria-controls="expandable-not-expanded-readonly-content">
      <div class="pf-c-clipboard-copy__toggle-icon">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </div>
    </button>
    <input class="pf-c-form-control" readonly type="text" value="This is an editable version of the Copy to Clipboard Component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion." id="expandable-not-expanded-readonly-text-input" aria-label="Copyable input" />
    <button class="pf-c-button pf-m-control" type="button" aria-label="Copy to clipboard" id="expandable-not-expanded-readonly-copy-button" aria-labelledby="expandable-not-expanded-readonly-copy-button expandable-not-expanded-readonly-text-input">
      <i class="fas fa-copy" aria-hidden="true"></i>
    </button>
  </div>
  <div class="pf-c-clipboard-copy__expandable-content" hidden id="expandable-not-expanded-readonly-content">This is an editable version of the Copy to Clipboard Component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.</div>
</div>
`,
    },
  },
  {
    displayName: "expandable clipboard-copy expanded  1",
    picture: {
      src: "./pictures/clipboardcopy/expandable-clipboard-copy-expanded-1.png",
      width: 823,
      height: 117,
    },
    snippet: {
      html: `
<div class="pf-c-clipboard-copy pf-m-expanded">
  <div class="pf-c-clipboard-copy__group">
    <button class="pf-c-button pf-m-control pf-m-expanded" type="button" id="expandable-expanded-readonly-toggle" aria-labelledby="expandable-expanded-readonly-toggle expandable-expanded-readonly-text-input" aria-controls="expandable-expanded-readonly-content">
      <div class="pf-c-clipboard-copy__toggle-icon">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </div>
    </button>
    <input class="pf-c-form-control" readonly type="text" value="This is an editable version of the Copy to Clipboard Component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion." id="expandable-expanded-readonly-text-input" aria-label="Copyable input" />
    <button class="pf-c-button pf-m-control" type="button" aria-label="Copy to clipboard" id="expandable-expanded-readonly-copy-button" aria-labelledby="expandable-expanded-readonly-copy-button expandable-expanded-readonly-text-input">
      <i class="fas fa-copy" aria-hidden="true"></i>
    </button>
  </div>
  <div class="pf-c-clipboard-copy__expandable-content" id="expandable-expanded-readonly-content">This is an editable version of the Copy to Clipboard Component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.</div>
</div>`,
    },
  },
];
