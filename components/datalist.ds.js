export default {
  displayName: "datalist",
  name: "datalist",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/datalist/",
};

export const variants = [
  {
    displayName: "basic",
    picture: {
      src: "./pictures/datalist/basic.png",
      width: 690,
      height: 300,
    },
    snippet: {
      html: `<ul class="pf-c-data-list" role="list" aria-label="Basic data list example" id="data-list-basic">
  <li class="pf-c-data-list__item" aria-labelledby="data-list-basic-item1">
    <div class="pf-c-data-list__item-row">
      <div class="pf-c-data-list__item-content">
        <div class="pf-c-data-list__cell">
          <span id="data-list-basic-item1">Primary content</span>
        </div>
        <div class="pf-c-data-list__cell">Secondary content</div>
      </div>
    </div>
  </li>
  <li class="pf-c-data-list__item" aria-labelledby="data-list-basic-item2">
    <div class="pf-c-data-list__item-row">
      <div class="pf-c-data-list__item-content">
        <div class="pf-c-data-list__cell pf-m-no-fill">
          <span id="data-list-basic-item2">Secondary content (pf-m-no-fill)</span>
        </div>
        <div class="pf-c-data-list__cell pf-m-no-fill pf-m-align-right">Secondary content (pf-m-align-right pf-m-no-fill)</div>
      </div>
    </div>
  </li>
</ul>`,
    },
  },
  {
    displayName: "checkboxes-actions-and-additional-cells",
    picture: {
      src: "./pictures/datalist/checkboxes-actions-and-additional-cells.png",
      width: 855,
      height: 469,
    },
    snippet: {
      html: `<ul class="pf-c-data-list" role="list" aria-label="Checkbox and action data list example" id="data-list-checkboxes-actions-addl-cells">
  <li class="pf-c-data-list__item" aria-labelledby="data-list-checkboxes-actions-addl-cells-item1">
    <div class="pf-c-data-list__item-row">
      <div class="pf-c-data-list__item-control">
        <div class="pf-c-data-list__check">
          <input type="checkbox" name="data-list-checkboxes-actions-addl-cells-check-action-check1" aria-labelledby="data-list-checkboxes-actions-addl-cells-item1" />
        </div>
      </div>
      <div class="pf-c-data-list__item-content">
        <div class="pf-c-data-list__cell">
          <span id="data-list-checkboxes-actions-addl-cells-item1">Primary content</span>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
        <div class="pf-c-data-list__cell">Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
        <div class="pf-c-data-list__cell">
          <span>Tertiary Content</span>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
        <div class="pf-c-data-list__cell">
          <span>More Content</span>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
        <div class="pf-c-data-list__cell">
          <span>More Content</span>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
      </div>
      <div class="pf-c-data-list__item-action">
        <div class="pf-c-data-list__action">
          <div class="pf-c-dropdown">
            <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="data-list-checkboxes-actions-addl-cells-action1-button" aria-expanded="false" aria-label="Actions">
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="data-list-checkboxes-actions-addl-cells-action1-button" hidden>
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
        </div>
      </div>
    </div>
  </li>
  <li class="pf-c-data-list__item" aria-labelledby="data-list-checkboxes-actions-addl-cells-item2">
    <div class="pf-c-data-list__item-row">
      <div class="pf-c-data-list__item-control">
        <div class="pf-c-data-list__check">
          <input type="checkbox" name="data-list-checkboxes-actions-addl-cells-check-action-check2" aria-labelledby="data-list-checkboxes-actions-addl-cells-item2" />
        </div>
      </div>
      <div class="pf-c-data-list__item-content">
        <div class="pf-c-data-list__cell">
          <span id="data-list-checkboxes-actions-addl-cells-item2">Primary content - lorem ipsum</span>dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
        <div class="pf-c-data-list__cell">Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
      </div>
      <div class="pf-c-data-list__item-action pf-m-hidden-on-lg">
        <div class="pf-c-data-list__action">
          <div class="pf-c-dropdown">
            <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="data-list-checkboxes-actions-addl-cells-action2-button" aria-expanded="false" aria-label="Actions">
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="data-list-checkboxes-actions-addl-cells-action2-button" hidden>
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
        </div>
      </div>
      <div class="pf-c-data-list__item-action pf-m-hidden pf-m-visible-on-lg">
        <button class="pf-c-button pf-m-primary" type="button">Primary</button>
        <button class="pf-c-button pf-m-secondary" type="button">Secondary</button>
      </div>
    </div>
  </li>
  <li class="pf-c-data-list__item" aria-labelledby="data-list-checkboxes-actions-addl-cells-item3">
    <div class="pf-c-data-list__item-row">
      <div class="pf-c-data-list__item-control">
        <div class="pf-c-data-list__check">
          <input type="checkbox" name="data-list-checkboxes-actions-addl-cells-check-action-check3" aria-labelledby="data-list-checkboxes-actions-addl-cells-item3" />
        </div>
      </div>
      <div class="pf-c-data-list__item-content">
        <div class="pf-c-data-list__cell">
          <span id="data-list-checkboxes-actions-addl-cells-item3">Primary content - lorem ipsum</span>dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
        <div class="pf-c-data-list__cell">Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
      </div>
      <div class="pf-c-data-list__item-action pf-m-hidden-on-xl">
        <div class="pf-c-data-list__action">
          <div class="pf-c-dropdown">
            <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="data-list-checkboxes-actions-addl-cells-action3-button" aria-expanded="false" aria-label="Actions">
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="data-list-checkboxes-actions-addl-cells-action3-button" hidden>
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
        </div>
      </div>
      <div class="pf-c-data-list__item-action pf-m-hidden pf-m-visible-on-xl">
        <button class="pf-c-button pf-m-primary" type="button">Primary</button>
        <button class="pf-c-button pf-m-secondary" type="button">Secondary</button>
        <button class="pf-c-button pf-m-secondary" type="button">Secondary</button>
        <button class="pf-c-button pf-m-secondary" type="button">Secondary</button>
      </div>
    </div>
  </li>
</ul>`,
    },
  },
  {
    displayName: "compact",
    picture: {
      src: "./pictures/datalist/compact.png",
      width: 855,
      height: 295,
    },
    snippet: {
      html: `<ul class="pf-c-data-list pf-m-compact" role="list" aria-label="Compact data list example" id="data-list-compact">
  <li class="pf-c-data-list__item" aria-labelledby="data-list-compact-item1">
    <div class="pf-c-data-list__item-row">
      <div class="pf-c-data-list__item-control">
        <div class="pf-c-data-list__check">
          <input type="checkbox" name="data-list-compact-check-action-check1" aria-labelledby="data-list-compact-item1" />
        </div>
      </div>
      <div class="pf-c-data-list__item-content">
        <div class="pf-c-data-list__cell">
          <span id="data-list-compact-item1">Primary content</span>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
        <div class="pf-c-data-list__cell">Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
        <div class="pf-c-data-list__cell">
          <span>Tertiary Content</span>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
        <div class="pf-c-data-list__cell">
          <span>More Content</span>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
        <div class="pf-c-data-list__cell">
          <span>More Content</span>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
      </div>
      <div class="pf-c-data-list__item-action">
        <div class="pf-c-data-list__action">
          <div class="pf-c-dropdown">
            <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="data-list-compact-action1-button" aria-expanded="false" aria-label="Actions">
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="data-list-compact-action1-button" hidden>
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
        </div>
      </div>
    </div>
  </li>
  <li class="pf-c-data-list__item" aria-labelledby="data-list-compact-item2">
    <div class="pf-c-data-list__item-row">
      <div class="pf-c-data-list__item-control">
        <div class="pf-c-data-list__check">
          <input type="checkbox" name="data-list-compact-check-action-check2" aria-labelledby="data-list-compact-item2" />
        </div>
      </div>
      <div class="pf-c-data-list__item-content">
        <div class="pf-c-data-list__cell">
          <span id="data-list-compact-item2">Primary content - lorem ipsum</span>dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
        <div class="pf-c-data-list__cell">Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
      </div>
      <div class="pf-c-data-list__item-action pf-m-hidden-on-lg">
        <div class="pf-c-data-list__action">
          <div class="pf-c-dropdown">
            <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="data-list-compact-action2-button" aria-expanded="false" aria-label="Actions">
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="data-list-compact-action2-button" hidden>
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
        </div>
      </div>
      <div class="pf-c-data-list__item-action pf-m-hidden pf-m-visible-on-lg">
        <button class="pf-c-button pf-m-primary" type="button">Primary</button>
        <button class="pf-c-button pf-m-secondary" type="button">Secondary</button>
      </div>
    </div>
  </li>
  <li class="pf-c-data-list__item" aria-labelledby="data-list-compact-item3">
    <div class="pf-c-data-list__item-row">
      <div class="pf-c-data-list__item-control">
        <div class="pf-c-data-list__check">
          <input type="checkbox" name="data-list-compact-check-action-check3" aria-labelledby="data-list-compact-item3" />
        </div>
      </div>
      <div class="pf-c-data-list__item-content">
        <div class="pf-c-data-list__cell">
          <span id="data-list-compact-item3">Primary content - lorem ipsum</span>dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
        <div class="pf-c-data-list__cell">Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
      </div>
      <div class="pf-c-data-list__item-action pf-m-hidden-on-xl">
        <div class="pf-c-data-list__action">
          <div class="pf-c-dropdown">
            <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="data-list-compact-action3-button" aria-expanded="false" aria-label="Actions">
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="data-list-compact-action3-button" hidden>
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
        </div>
      </div>
      <div class="pf-c-data-list__item-action pf-m-hidden pf-m-visible-on-xl">
        <button class="pf-c-button pf-m-primary" type="button">Primary</button>
        <button class="pf-c-button pf-m-secondary" type="button">Secondary</button>
        <button class="pf-c-button pf-m-secondary" type="button">Secondary</button>
        <button class="pf-c-button pf-m-secondary" type="button">Secondary</button>
      </div>
    </div>
  </li>
</ul>`,
    },
  },
  {
    displayName: "expandable",
    picture: {
      src: "./pictures/datalist/expandable.png",
      width: 855,
      height: 591,
    },
    snippet: {
      html: `<ul class="pf-c-data-list" role="list" aria-label="Expandable data list example" id="data-list-expandable">
  <li class="pf-c-data-list__item pf-m-expanded" aria-labelledby="data-list-expandable-item1">
    <div class="pf-c-data-list__item-row">
      <div class="pf-c-data-list__item-control">
        <div class="pf-c-data-list__toggle">
          <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="data-list-expandable-toggle1 data-list-expandable-item1" id="data-list-expandable-toggle1" aria-label="Toggle details for" aria-expanded="true" aria-controls="data-list-expandable-content1">
            <div class="pf-c-data-list__toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
      <div class="pf-c-data-list__item-content">
        <div class="pf-c-data-list__cell pf-m-icon">
          <i class="fas fa-code-branch" aria-hidden="true"></i>
        </div>
        <div class="pf-c-data-list__cell">
          <div id="data-list-expandable-item1">Primary content</div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <a href="#">link</a>
        </div>
        <div class="pf-c-data-list__cell">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
        <div class="pf-c-data-list__cell">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
      </div>
      <div class="pf-c-data-list__item-action">
        <div class="pf-c-data-list__action">
          <div class="pf-c-dropdown">
            <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="data-list-expandable-action1-button" aria-expanded="false" aria-label="Actions">
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="data-list-expandable-action1-button" hidden>
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
        </div>
      </div>
    </div>
    <section class="pf-c-data-list__expandable-content" id="data-list-expandable-content1" aria-label="Primary content details">
      <div class="pf-c-data-list__expandable-content-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </section>
  </li>
  <li class="pf-c-data-list__item" aria-labelledby="data-list-expandable-item2">
    <div class="pf-c-data-list__item-row">
      <div class="pf-c-data-list__item-control">
        <div class="pf-c-data-list__toggle">
          <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="data-list-expandable-toggle2 data-list-expandable-item2" id="data-list-expandable-toggle2" aria-label="Toggle details for" aria-expanded="false" aria-controls="data-list-expandable-content2">
            <div class="pf-c-data-list__toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
      <div class="pf-c-data-list__item-content">
        <div class="pf-c-data-list__cell pf-m-icon">
          <i class="fas fa-code-branch" aria-hidden="true"></i>
        </div>
        <div class="pf-c-data-list__cell">
          <div id="data-list-expandable-item2">Secondary content</div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
        <div class="pf-c-data-list__cell">
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
        <div class="pf-c-data-list__cell">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
      </div>
      <div class="pf-c-data-list__item-action">
        <div class="pf-c-data-list__action">
          <div class="pf-c-dropdown">
            <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="data-list-expandable-action2-button" aria-expanded="false" aria-label="Actions">
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="data-list-expandable-action2-button" hidden>
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
        </div>
      </div>
    </div>
    <section class="pf-c-data-list__expandable-content" id="data-list-expandable-content2" aria-label="Secondary content details" hidden>
      <div class="pf-c-data-list__expandable-content-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </section>
  </li>
  <li class="pf-c-data-list__item pf-m-expanded" aria-labelledby="data-list-expandable-item3">
    <div class="pf-c-data-list__item-row">
      <div class="pf-c-data-list__item-control">
        <div class="pf-c-data-list__toggle">
          <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="data-list-expandable-toggle3 data-list-expandable-item3" id="data-list-expandable-toggle3" aria-label="Toggle details for" aria-expanded="true" aria-controls="data-list-expandable-content3">
            <div class="pf-c-data-list__toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
      <div class="pf-c-data-list__item-content">
        <div class="pf-c-data-list__cell pf-m-icon">
          <i class="fas fa-code-branch" aria-hidden="true"></i>
        </div>
        <div class="pf-c-data-list__cell">
          <div id="data-list-expandable-item3">Tertiary content</div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
        <div class="pf-c-data-list__cell">
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
        <div class="pf-c-data-list__cell">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
      </div>
      <div class="pf-c-data-list__item-action">
        <div class="pf-c-data-list__action">
          <div class="pf-c-dropdown">
            <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="data-list-expandable-action3-button" aria-expanded="false" aria-label="Actions">
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="data-list-expandable-action3-button" hidden>
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
        </div>
      </div>
    </div>
    <section class="pf-c-data-list__expandable-content" id="data-list-expandable-content3" aria-label="Tertiary content details">
      <div class="pf-c-data-list__expandable-content-body pf-m-no-padding">This expanded section has no padding.</div>
    </section>
  </li>
</ul>`,
    },
  },
  {
    displayName: "modifiers",
    picture: {
      src: "./pictures/datalist/modifiers.png",
      width: 855,
      height: 784,
    },
    snippet: {
      html: `<h2 class="Preview__section-title">Default fitting - example 1</h2>
<ul class="pf-c-data-list" role="list" aria-label="Width modifier data list example 1" id="data-list-default-fitting">
  <li class="pf-c-data-list__item" aria-labelledby="data-list-default-fitting-item1">
    <div class="pf-c-data-list__item-row">
      <div class="pf-c-data-list__item-control">
        <div class="pf-c-data-list__check">
          <input type="checkbox" name="data-list-default-fittingcheck-action-check1" aria-labelledby="data-list-default-fitting-item1" />
        </div>
      </div>
      <div class="pf-c-data-list__item-content">
        <div class="pf-c-data-list__cell">
          <div class="Preview__placeholder">
            <b id="data-list-default-fitting-item1">default</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="pf-c-data-list__cell">
          <div class="Preview__placeholder">
            <b>default</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  </li>
</ul>
<h2 class="Preview__section-title">Flex modifiers - example 2</h2>
<ul class="pf-c-data-list" role="list" aria-label="Width modifier data list example 2" id="data-list-flex-modifiers">
  <li class="pf-c-data-list__item" aria-labelledby="data-list-flex-modifiers-item1">
    <div class="pf-c-data-list__item-row">
      <div class="pf-c-data-list__item-control">
        <div class="pf-c-data-list__check">
          <input type="checkbox" name="data-list-flex-modifierscheck-action-check1" aria-labelledby="data-list-flex-modifiers-item1" />
        </div>
      </div>
      <div class="pf-c-data-list__item-content">
        <div class="pf-c-data-list__cell pf-m-flex-2">
          <div class="Preview__placeholder">
            <b id="data-list-flex-modifiers-item1">.pf-m-flex-2</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
        <div class="pf-c-data-list__cell pf-m-flex-4">
          <div class="Preview__placeholder">
            <b>.pf-m-flex-4</b>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div class="pf-c-data-list__cell pf-m-flex-6">
          <div class="Preview__placeholder">
            <b>.pf-m-flex-6</b>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div class="pf-c-data-list__item-action">
        <div class="pf-c-data-list__action">
          <div class="pf-c-dropdown">
            <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="data-list-flex-modifiers-action1-button" aria-expanded="false" aria-label="Actions">
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="data-list-flex-modifiers-action1-button" hidden>
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
        </div>
      </div>
    </div>
  </li>
</ul>
<h2 class="Preview__section-title">Flex modifiers - example 3</h2>
<ul class="pf-c-data-list" role="list" aria-label="Width modifier data list example 3" id="data-list-flex-modifiers-2">
  <li class="pf-c-data-list__item pf-m-expanded" aria-labelledby="data-list-flex-modifiers-2-item1">
    <div class="pf-c-data-list__item-row">
      <div class="pf-c-data-list__item-control">
        <div class="pf-c-data-list__toggle">
          <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="data-list-flex-modifiers-2-toggle1 data-list-flex-modifiers-2-item1" id="data-list-flex-modifiers-2-toggle1" aria-label="Toggle details for" aria-expanded="true" aria-controls="data-list-flex-modifiers-2-content1">
            <div class="pf-c-data-list__toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </div>
          </button>
        </div>
        <div class="pf-c-data-list__check">
          <input type="checkbox" name="data-list-flex-modifiers-2check-action-check1" aria-labelledby="data-list-flex-modifiers-2-item1" />
        </div>
      </div>
      <div class="pf-c-data-list__item-content">
        <div class="pf-c-data-list__cell pf-m-flex-5">
          <div class="Preview__placeholder">
            <b id="data-list-flex-modifiers-2-item1">.pf-m-flex-5</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="pf-c-data-list__cell pf-m-flex-2">
          <div class="Preview__placeholder">
            <b>.pf-m-flex-2</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="pf-c-data-list__cell pf-m-flex-3">
          <div class="Preview__placeholder">
            <b>.pf-m-flex-3</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="pf-c-data-list__cell pf-m-flex-3">
          <div class="Preview__placeholder">
            <b>.pf-m-flex-3</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="pf-c-data-list__item-action">
        <div class="pf-c-data-list__action">
          <div class="pf-c-dropdown">
            <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="data-list-flex-modifiers-2-action1-button" aria-expanded="false" aria-label="Actions">
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="data-list-flex-modifiers-2-action1-button" hidden>
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
        </div>
      </div>
    </div>
    <section class="pf-c-data-list__expandable-content" id="data-list-flex-modifiers-2-content1" aria-label="Primary content details">
      <div class="pf-c-data-list__expandable-content-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </section>
  </li>
</ul>`,
    },
  },
  {
    displayName: "selectable-expandable-rows",
    picture: {
      src: "./pictures/datalist/selectable-expandable-rows.png",
      width: 855,
      height: 472,
    },
    snippet: {
      html: `<ul class="pf-c-data-list" role="list" aria-label="Selectable, expandable data list example" id="data-list-selectable-expandable-rows">
  <li class="pf-c-data-list__item pf-m-selectable pf-m-selected pf-m-expanded" aria-labelledby="data-list-selectable-expandable-rows-item1" tabindex="0">
    <div class="pf-c-data-list__item-row">
      <div class="pf-c-data-list__item-control">
        <div class="pf-c-data-list__toggle">
          <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="data-list-selectable-expandable-rows-toggle1 data-list-selectable-expandable-rows-item1" id="data-list-selectable-expandable-rows-toggle1" aria-label="Toggle details for" aria-expanded="true" aria-controls="data-list-selectable-expandable-rows-content1">
            <div class="pf-c-data-list__toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
      <div class="pf-c-data-list__item-content">
        <div class="pf-c-data-list__cell">
          <span id="data-list-selectable-expandable-rows-item1">Primary content (selected, expanded)</span>
        </div>
      </div>
    </div>
    <section class="pf-c-data-list__expandable-content" id="data-list-selectable-expandable-rows-content1" aria-label="Primary content details">
      <div class="pf-c-data-list__expandable-content-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </section>
  </li>
  <li class="pf-c-data-list__item pf-m-selectable" aria-labelledby="data-list-selectable-expandable-rows-item2" tabindex="0">
    <div class="pf-c-data-list__item-row">
      <div class="pf-c-data-list__item-control">
        <div class="pf-c-data-list__toggle">
          <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="data-list-selectable-expandable-rows-toggle2 data-list-selectable-expandable-rows-item2" id="data-list-selectable-expandable-rows-toggle2" aria-label="Toggle details for" aria-expanded="false" aria-controls="data-list-selectable-expandable-rows-content2">
            <div class="pf-c-data-list__toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
      <div class="pf-c-data-list__item-content">
        <div class="pf-c-data-list__cell">
          <span id="data-list-selectable-expandable-rows-item2">Secondary content</span>
        </div>
      </div>
    </div>
    <section class="pf-c-data-list__expandable-content" id="data-list-selectable-expandable-rows-content2" aria-label="Secondary content details" hidden>
      <div class="pf-c-data-list__expandable-content-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </section>
  </li>
  <li class="pf-c-data-list__item pf-m-selectable pf-m-expanded" aria-labelledby="data-list-selectable-expandable-rows-item3" tabindex="0">
    <div class="pf-c-data-list__item-row">
      <div class="pf-c-data-list__item-control">
        <div class="pf-c-data-list__toggle">
          <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="data-list-selectable-expandable-rows-toggle3 data-list-selectable-expandable-rows-item3" id="data-list-selectable-expandable-rows-toggle3" aria-label="Toggle details for" aria-expanded="true" aria-controls="data-list-selectable-expandable-rows-content3">
            <div class="pf-c-data-list__toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
      <div class="pf-c-data-list__item-content">
        <div class="pf-c-data-list__cell">
          <span id="data-list-selectable-expandable-rows-item3">Tertiary content (not selected, expanded)</span>
        </div>
      </div>
    </div>
    <section class="pf-c-data-list__expandable-content" id="data-list-selectable-expandable-rows-content3" aria-label="Tertiary content details">
      <div class="pf-c-data-list__expandable-content-body pf-m-no-padding">This expanded section has no padding.</div>
    </section>
  </li>
  <li class="pf-c-data-list__item pf-m-selectable" aria-labelledby="data-list-selectable-expandable-rows-item4" tabindex="0">
    <div class="pf-c-data-list__item-row">
      <div class="pf-c-data-list__item-control">
        <div class="pf-c-data-list__toggle">
          <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="data-list-selectable-expandable-rows-toggle4 data-list-selectable-expandable-rows-item4" id="data-list-selectable-expandable-rows-toggle4" aria-label="Toggle details for" aria-expanded="false" aria-controls="data-list-selectable-expandable-rows-content4">
            <div class="pf-c-data-list__toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
      <div class="pf-c-data-list__item-content">
        <div class="pf-c-data-list__cell">
          <span id="data-list-selectable-expandable-rows-item4">Quaternary content (selected)</span>
        </div>
      </div>
    </div>
    <section class="pf-c-data-list__expandable-content" id="data-list-selectable-expandable-rows-content4" aria-label="Quaternary content details" hidden>
      <div class="pf-c-data-list__expandable-content-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </section>
  </li>
</ul>`,
    },
  },
  {
    displayName: "selectable-rows",
    picture: {
      src: "./pictures/datalist/selectable-rows.png",
      width: 293,
      height: 253,
    },
    snippet: {
      html: `<ul class="pf-c-data-list" role="list" aria-label="Selectable rows data list example" id="data-list-selectable-rows">
  <li class="pf-c-data-list__item pf-m-selectable" aria-labelledby="data-list-selectable-rows-item1" tabindex="0">
    <div class="pf-c-data-list__item-row">
      <div class="pf-c-data-list__item-content">
        <div class="pf-c-data-list__cell">
          <span id="data-list-selectable-rows-item1">Primary content</span>
        </div>
      </div>
    </div>
  </li>
  <li class="pf-c-data-list__item pf-m-selectable pf-m-selected" aria-labelledby="data-list-selectable-rows-item2" tabindex="0">
    <div class="pf-c-data-list__item-row">
      <div class="pf-c-data-list__item-content">
        <div class="pf-c-data-list__cell">
          <span id="data-list-selectable-rows-item2">Secondary content (selected)</span>
        </div>
      </div>
    </div>
  </li>
  <li class="pf-c-data-list__item pf-m-selectable" aria-labelledby="data-list-selectable-rows-item3" tabindex="0">
    <div class="pf-c-data-list__item-row">
      <div class="pf-c-data-list__item-content">
        <div class="pf-c-data-list__cell">
          <span id="data-list-selectable-rows-item3">Tertiary content</span>
        </div>
      </div>
    </div>
  </li>
</ul>`,
    },
  },
  {
    displayName: "with-headings",
    picture: {
      src: "./pictures/datalist/with-headings.png",
      width: 690,
      height: 300,
    },
    snippet: {
      html: `<ul class="pf-c-data-list" role="list" aria-label="With headings data list example" id="data-list-with-headings">
  <li class="pf-c-data-list__item" aria-labelledby="data-list-with-headings-item1">
    <div class="pf-c-data-list__item-row">
      <div class="pf-c-data-list__item-content">
        <div class="pf-c-data-list__cell">
          <h2 id="data-list-with-headings-item1">Primary content</h2>
        </div>
        <div class="pf-c-data-list__cell">Secondary content</div>
      </div>
    </div>
  </li>
  <li class="pf-c-data-list__item" aria-labelledby="data-list-with-headings-item2">
    <div class="pf-c-data-list__item-row">
      <div class="pf-c-data-list__item-content">
        <div class="pf-c-data-list__cell pf-m-no-fill">
          <h2 id="data-list-with-headings-item2">Secondary content (pf-m-no-fill)</h2>
        </div>
        <div class="pf-c-data-list__cell pf-m-no-fill pf-m-align-right">Secondary content (pf-m-align-right pf-m-no-fill)</div>
      </div>
    </div>
  </li>
</ul>`,
    },
  },
];
