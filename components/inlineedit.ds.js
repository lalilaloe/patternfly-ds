export default {
  displayName: "inlineedit",
  name: "inlineedit",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/inlineedit/",
};

export const variants = [
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/inlineedit/inline-edit-action-group.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-inline-edit pf-m-inline-editable" id="inline-edit-action-group-example">
  <div class="pf-c-inline-edit__group pf-m-action-group">
    <div class="pf-c-inline-edit__action">
      <button class="pf-c-button pf-m-primary" type="button">Save</button>
    </div>
    <div class="pf-c-inline-edit__action">
      <button class="pf-c-button pf-m-secondary" type="button">Cancel</button>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/inlineedit/inline-edit-action-group-icon-buttons.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-inline-edit pf-m-inline-editable" id="inline-edit-action-group-icon-buttons-example">
  <div class="pf-c-inline-edit__group pf-m-action-group pf-m-icon-group">
    <div class="pf-c-inline-edit__action pf-m-valid">
      <button class="pf-c-button pf-m-plain" type="button" aria-label="Save edits">
        <i class="fas fa-check" aria-hidden="true"></i>
      </button>
    </div>
    <div class="pf-c-inline-edit__action">
      <button class="pf-c-button pf-m-plain" type="button" aria-label="Cancel edits">
        <i class="fas fa-times" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/inlineedit/inline-edit-table-row.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<form class="pf-c-inline-edit" id="bulk-edit-table-example">
  <table class="pf-c-table pf-m-grid-lg" role="grid" aria-label="Inline edit table row example">
    <caption>This is the table caption</caption>
    <thead>
      <tr role="row">
        <th role="columnheader">Text input</th>
        <th role="columnheader">Disabled text input</th>
        <th role="columnheader">Checkboxes</th>
        <th role="columnheader">Radios</th>
        <th role="columnheader">Number</th>
        <td></td>
        <td></td>
      </tr>
    </thead>
    <tbody role="rowgroup">
      <tr class="pf-m-inline-editable" role="row">
        <th role="columnheader" data-label="Text input">
          <div class="pf-c-inline-edit__value">Text input description content</div>
          <div class="pf-c-inline-edit__input">
            <input class="pf-c-form-control" type="text" value="Text input description content" id="bulk-edit-table-example-row-1-text-input" aria-label="Text input" />
          </div>
        </th>
        <td role="cell" data-label="Disabled text input">
          <div class="pf-c-inline-edit__value">Text input disabled, description content</div>
          <div class="pf-c-inline-edit__input">
            <input class="pf-c-form-control" type="text" value="Text input disabled, description content" id="bulk-edit-table-example-row-1-text-input-disabled" aria-label="Disabled text input" disabled />
          </div>
        </td>
        <td role="cell" data-label="Checkboxes">
          <div class="pf-c-inline-edit__value">Check 1, Check 2</div>
          <div class="pf-c-inline-edit__group pf-m-column">
            <div class="pf-c-inline-edit__input">
              <div class="pf-c-check">
                <input class="pf-c-check__input" type="checkbox" id="bulk-edit-table-example-row-1-check-1" name="bulk-edit-table-example-row-1-example-check" />
                <label class="pf-c-check__label" for="bulk-edit-table-example-row-1-check-1">Check 1</label>
              </div>
            </div>
            <div class="pf-c-inline-edit__input">
              <div class="pf-c-check">
                <input class="pf-c-check__input" type="checkbox" id="bulk-edit-table-example-row-1-check-2" name="bulk-edit-table-example-row-1-example-check-2" />
                <label class="pf-c-check__label" for="bulk-edit-table-example-row-1-check-2">Check 2</label>
              </div>
            </div>
          </div>
        </td>
        <td role="cell" data-label="Radios">
          <div class="pf-c-inline-edit__value">Radio 1, Radio 2</div>
          <div class="pf-c-inline-edit__group pf-m-column" role="radiogroup" aria-label="Radio group example">
            <div class="pf-c-inline-edit__input">
              <div class="pf-c-radio">
                <input class="pf-c-radio__input" type="radio" id="bulk-edit-table-example-row-1-radio-1" name="bulk-edit-table-example-row-1-example-radio" />
                <label class="pf-c-radio__label" for="bulk-edit-table-example-row-1-radio-1">Radio 1</label>
              </div>
            </div>
            <div class="pf-c-inline-edit__input">
              <div class="pf-c-radio">
                <input class="pf-c-radio__input" type="radio" id="bulk-edit-table-example-row-1-radio-2" name="bulk-edit-table-example-row-1-example-radio" />
                <label class="pf-c-radio__label" for="bulk-edit-table-example-row-1-radio-2">Radio 2</label>
              </div>
            </div>
          </div>
        </td>
        <td role="cell" data-label="Number">
          <div class="pf-c-inline-edit__value">2</div>
          <div class="pf-c-inline-edit__input">
            <input class="pf-c-form-control" type="number" value="2" id="bulk-edit-table-example-row-1-number-input" aria-label="Number input" />
          </div>
        </td>
        <td class="pf-c-table__inline-edit-action" role="cell">
          <div class="pf-c-inline-edit__group pf-m-action-group pf-m-icon-group">
            <div class="pf-c-inline-edit__action pf-m-valid">
              <button class="pf-c-button pf-m-plain" type="button" aria-label="Save edits">
                <i class="fas fa-check" aria-hidden="true"></i>
              </button>
            </div>
            <div class="pf-c-inline-edit__action">
              <button class="pf-c-button pf-m-plain" type="button" aria-label="Cancel edits">
                <i class="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div class="pf-c-inline-edit__action pf-m-enable-editable">
            <button class="pf-c-button pf-m-plain" type="button" id="bulk-edit-table-example-row-1-edit-button" aria-label="Edit" aria-labelledby="bulk-edit-table-example-label bulk-edit-table-example-row-1-edit-button">
              <i class="fas fa-pencil-alt" aria-hidden="true"></i>
            </button>
          </div>
        </td>
        <td class="pf-c-table__action" role="cell">
          <div class="pf-c-dropdown">
            <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="-row-1--dropdown-kebab-button" aria-expanded="false" aria-label="Actions">
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="-row-1--dropdown-kebab-button" hidden>
              <li>
                <a class="pf-c-dropdown__menu-item" href="#">Link</a>
              </li>
              <li>
                <button class="pf-c-dropdown__menu-item" type="button">Action</button>
              </li>
              <li>
                <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
              </li>
              <li>
                <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
              </li>
              <li class="pf-c-divider" role="separator"></li>
              <li>
                <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
              </li>
            </ul>
          </div>
        </td>
      </tr>
      <tr role="row">
        <th role="columnheader" data-label="Text input">
          <div class="pf-c-inline-edit__value">Text input description content</div>
          <div class="pf-c-inline-edit__input">
            <input class="pf-c-form-control" type="text" value="Text input description content" id="bulk-edit-table-example-row-2-text-input" aria-label="Text input" />
          </div>
        </th>
        <td role="cell" data-label="Disabled text input">
          <div class="pf-c-inline-edit__value">Text input disabled, description content</div>
          <div class="pf-c-inline-edit__input">
            <input class="pf-c-form-control" type="text" value="Text input disabled, description content" id="bulk-edit-table-example-row-2-text-input-disabled" aria-label="Disabled text input" disabled />
          </div>
        </td>
        <td role="cell" data-label="Checkboxes">
          <div class="pf-c-inline-edit__value">Check 1, Check 2</div>
          <div class="pf-c-inline-edit__group pf-m-column">
            <div class="pf-c-inline-edit__input">
              <div class="pf-c-check">
                <input class="pf-c-check__input" type="checkbox" id="bulk-edit-table-example-row-2-check-1" name="bulk-edit-table-example-row-2-example-check" />
                <label class="pf-c-check__label" for="bulk-edit-table-example-row-2-check-1">Check 1</label>
              </div>
            </div>
            <div class="pf-c-inline-edit__input">
              <div class="pf-c-check">
                <input class="pf-c-check__input" type="checkbox" id="bulk-edit-table-example-row-2-check-2" name="bulk-edit-table-example-row-2-example-check-2" />
                <label class="pf-c-check__label" for="bulk-edit-table-example-row-2-check-2">Check 2</label>
              </div>
            </div>
          </div>
        </td>
        <td role="cell" data-label="Radios">
          <div class="pf-c-inline-edit__value">Radio 1, Radio 2</div>
          <div class="pf-c-inline-edit__group pf-m-column" role="radiogroup" aria-label="Radio group example">
            <div class="pf-c-inline-edit__input">
              <div class="pf-c-radio">
                <input class="pf-c-radio__input" type="radio" id="bulk-edit-table-example-row-2-radio-1" name="bulk-edit-table-example-row-2-example-radio-1" />
                <label class="pf-c-radio__label" for="bulk-edit-table-example-row-2-radio-1">Radio 1</label>
              </div>
            </div>
            <div class="pf-c-inline-edit__input">
              <div class="pf-c-radio">
                <input class="pf-c-radio__input" type="radio" id="bulk-edit-table-example-row-2-radio-2" name="bulk-edit-table-example-row-2-example-radio-2" />
                <label class="pf-c-radio__label" for="bulk-edit-table-example-row-2-radio-2">Radio 2</label>
              </div>
            </div>
          </div>
        </td>
        <td role="cell" data-label="Number">
          <div class="pf-c-inline-edit__value">2</div>
          <div class="pf-c-inline-edit__input">
            <input class="pf-c-form-control" type="number" value="2" id="bulk-edit-table-example-row-2-number-input" aria-label="Number input" />
          </div>
        </td>
        <td class="pf-c-table__inline-edit-action" role="cell">
          <div class="pf-c-inline-edit__group pf-m-action-group pf-m-icon-group">
            <div class="pf-c-inline-edit__action pf-m-valid">
              <button class="pf-c-button pf-m-plain" type="button" aria-label="Save edits">
                <i class="fas fa-check" aria-hidden="true"></i>
              </button>
            </div>
            <div class="pf-c-inline-edit__action">
              <button class="pf-c-button pf-m-plain" type="button" aria-label="Cancel edits">
                <i class="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div class="pf-c-inline-edit__action pf-m-enable-editable">
            <button class="pf-c-button pf-m-plain" type="button" id="bulk-edit-table-example-row-2-edit-button" aria-label="Edit" aria-labelledby="bulk-edit-table-example-label bulk-edit-table-example-row-2-edit-button">
              <i class="fas fa-pencil-alt" aria-hidden="true"></i>
            </button>
          </div>
        </td>
        <td class="pf-c-table__action" role="cell">
          <div class="pf-c-dropdown">
            <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="-row-2--dropdown-kebab-button" aria-expanded="false" aria-label="Actions">
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="-row-2--dropdown-kebab-button" hidden>
              <li>
                <a class="pf-c-dropdown__menu-item" href="#">Link</a>
              </li>
              <li>
                <button class="pf-c-dropdown__menu-item" type="button">Action</button>
              </li>
              <li>
                <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
              </li>
              <li>
                <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
              </li>
              <li class="pf-c-divider" role="separator"></li>
              <li>
                <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
              </li>
            </ul>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</form>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/inlineedit/inline-edit-toggle.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-inline-edit" id="inline-edit-toggle-example">
  <div class="pf-c-inline-edit__action pf-m-enable-editable ">
    <button class="pf-c-button pf-m-plain" type="button" id="inline-edit-toggle-example-edit-button" aria-label="Edit" aria-labelledby="inline-edit-toggle-example-edit-button inline-edit-toggle-example-label">
      <i class="fas fa-pencil-alt" aria-hidden="true"></i>
    </button>
  </div>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/inlineedit/inline-edit-value.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-inline-edit" id="inline-edit-value-example">
  <div class="pf-c-inline-edit__value">Static value</div>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/inlineedit/single-inline-edit-active.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<form class="pf-c-inline-edit pf-m-inline-editable" id="single-editable-example">
  <div class="pf-c-inline-edit__group">
    <div class="pf-c-inline-edit__value" id="single-editable-example-label">Static value</div>
    <div class="pf-c-inline-edit__action pf-m-enable-editable ">
      <button class="pf-c-button pf-m-plain" type="button" id="single-editable-example-edit-button" aria-label="Edit" aria-labelledby="single-editable-example-edit-button single-editable-example-label">
        <i class="fas fa-pencil-alt" aria-hidden="true"></i>
      </button>
    </div>
  </div>
  <div class="pf-c-inline-edit__group">
    <div class="pf-c-inline-edit__input">
      <input class="pf-c-form-control" type="text" value="Static value" aria-label="Editable text input" />
    </div>
    <div class="pf-c-inline-edit__group pf-m-action-group pf-m-icon-group">
      <div class="pf-c-inline-edit__action pf-m-valid">
        <button class="pf-c-button pf-m-plain" type="button" aria-label="Save edits">
          <i class="fas fa-check" aria-hidden="true"></i>
        </button>
      </div>
      <div class="pf-c-inline-edit__action">
        <button class="pf-c-button pf-m-plain" type="button" aria-label="Cancel edits">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</form>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/inlineedit/single-inline-edit-default.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<form class="pf-c-inline-edit" id="single-inline-edit-example">
  <div class="pf-c-inline-edit__group">
    <div class="pf-c-inline-edit__value" id="single-inline-edit-example-label">Static value</div>
    <div class="pf-c-inline-edit__action pf-m-enable-editable ">
      <button class="pf-c-button pf-m-plain" type="button" id="single-inline-edit-example-edit-button" aria-label="Edit" aria-labelledby="single-inline-edit-example-edit-button single-inline-edit-example-label">
        <i class="fas fa-pencil-alt" aria-hidden="true"></i>
      </button>
    </div>
  </div>
  <div class="pf-c-inline-edit__group">
    <div class="pf-c-inline-edit__input">
      <input class="pf-c-form-control" type="text" value="Static value" aria-label="Editable text input" />
    </div>
    <div class="pf-c-inline-edit__group pf-m-action-group pf-m-icon-group">
      <div class="pf-c-inline-edit__action pf-m-valid">
        <button class="pf-c-button pf-m-plain" type="button" aria-label="Save edits">
          <i class="fas fa-check" aria-hidden="true"></i>
        </button>
      </div>
      <div class="pf-c-inline-edit__action">
        <button class="pf-c-button pf-m-plain" type="button" aria-label="Cancel edits">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</form>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/inlineedit/single-inline-edit-with-label-default.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<form class="pf-c-inline-edit" id="single-inline-edit-with-label-example">
  <div class="pf-c-inline-edit__group">
    <label class="pf-c-inline-edit__label" id="single-inline-edit-with-label-example-label" for="single-inline-edit-with-label-example-input">Single inline edit group</label>
    <div class="pf-c-inline-edit__action pf-m-enable-editable ">
      <button class="pf-c-button pf-m-plain" type="button" id="single-inline-edit-with-label-example-edit-button" aria-label="Edit" aria-labelledby="single-inline-edit-with-label-example-label single-inline-edit-with-label-example-edit-button">
        <i class="fas fa-pencil-alt" aria-hidden="true"></i>
      </button>
    </div>
  </div>
  <div class="pf-c-inline-edit__value">Static value</div>
  <div class="pf-c-inline-edit__group">
    <div class="pf-c-inline-edit__input">
      <input class="pf-c-form-control" type="text" id="single-inline-edit-with-label-example-input" value="Static value" aria-label="Editable text input" />
    </div>
    <div class="pf-c-inline-edit__group pf-m-action-group pf-m-icon-group">
      <div class="pf-c-inline-edit__action pf-m-valid">
        <button class="pf-c-button pf-m-plain" type="button" aria-label="Save edits">
          <i class="fas fa-check" aria-hidden="true"></i>
        </button>
      </div>
      <div class="pf-c-inline-edit__action">
        <button class="pf-c-button pf-m-plain" type="button" aria-label="Cancel edits">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</form>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/inlineedit/state-invalid.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-inline-edit pf-m-inline-editable" id="inline-edit-state-invalid">
  <div class="pf-c-inline-edit__group">
    <label class="pf-c-inline-edit__label" id="inline-edit-state-invalid-label" for="inline-edit-state-invalid-input">Invalid example</label>
    <div class="pf-c-inline-edit__action pf-m-enable-editable ">
      <button class="pf-c-button pf-m-plain" type="button" id="inline-edit-state-invalid-edit-button" aria-label="Edit" aria-labelledby="inline-edit-state-invalid-label inline-edit-state-invalid-edit-button">
        <i class="fas fa-pencil-alt" aria-hidden="true"></i>
      </button>
    </div>
  </div>
  <div class="pf-c-inline-edit__value">Static value</div>
  <div class="pf-c-inline-edit__group">
    <div class="pf-c-inline-edit__input">
      <input class="pf-c-form-control" required value="Invalid state" aria-invalid="true" aria-label="Error state input example" />
    </div>
    <div class="pf-c-inline-edit__group pf-m-action-group pf-m-icon-group">
      <div class="pf-c-inline-edit__action">
        <button class="pf-c-button pf-m-plain" type="button" disabled aria-label="Save edits">
          <i class="fas fa-check" aria-hidden="true"></i>
        </button>
      </div>
      <div class="pf-c-inline-edit__action">
        <button class="pf-c-button pf-m-plain" type="button" aria-label="Cancel edits">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/inlineedit/state-valid.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-inline-edit pf-m-inline-editable" id="inline-edit-state-valid">
  <div class="pf-c-inline-edit__group">
    <label class="pf-c-inline-edit__label" id="inline-edit-state-valid-label" for="inline-edit-state-valid-input">Valid example</label>
    <div class="pf-c-inline-edit__action pf-m-enable-editable ">
      <button class="pf-c-button pf-m-plain" type="button" id="inline-edit-state-valid-edit-button" aria-label="Edit" aria-labelledby="inline-edit-state-valid-label inline-edit-state-valid-edit-button">
        <i class="fas fa-pencil-alt" aria-hidden="true"></i>
      </button>
    </div>
  </div>
  <div class="pf-c-inline-edit__value">Static value</div>
  <div class="pf-c-inline-edit__group">
    <div class="pf-c-inline-edit__input">
      <input class="pf-c-form-control" type="text" value="Static value" aria-label="Editable text input" />
    </div>
    <div class="pf-c-inline-edit__group pf-m-action-group pf-m-icon-group">
      <div class="pf-c-inline-edit__action pf-m-valid">
        <button class="pf-c-button pf-m-plain" type="button" aria-label="Save edits">
          <i class="fas fa-check" aria-hidden="true"></i>
        </button>
      </div>
      <div class="pf-c-inline-edit__action">
        <button class="pf-c-button pf-m-plain" type="button" aria-label="Cancel edits">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</div>`,
    },
  },
];
