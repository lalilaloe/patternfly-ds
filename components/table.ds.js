export default {
  displayName: "table",
  name: "table",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/table/",
};

export const variants = [
  {
    displayName: "basic-table",
    picture: {
      src: "./pictures/table/basic-table.png",
      width: 500,
      height: 432,
    },
    snippet: {
      html: `<table class="pf-c-table pf-m-grid-md" role="grid" aria-label="This is a simple table example" id="table-basic">
  <caption>This is the table caption</caption>
  <thead>
    <tr role="row">
      <th role="columnheader" scope="col">Repositories</th>
      <th role="columnheader" scope="col">Branches</th>
      <th role="columnheader" scope="col">Pull requests</th>
      <th role="columnheader" scope="col">Workspaces</th>
      <th role="columnheader" scope="col">Last commit</th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row">
      <td role="cell" data-label="Repository name">Repository 1</td>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td role="cell" data-label="Last commit">2 days ago</td>
    </tr>
    <tr role="row">
      <td role="cell" data-label="Repository name">Repository 2</td>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td role="cell" data-label="Last commit">2 days ago</td>
    </tr>
    <tr role="row">
      <td role="cell" data-label="Repository name">Repository 3</td>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td role="cell" data-label="Last commit">2 days ago</td>
    </tr>
    <tr role="row">
      <td role="cell" data-label="Repository name">Repository 4</td>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td role="cell" data-label="Last commit">2 days ago</td>
    </tr>
  </tbody>
</table>`,
    },
  },
  {
    displayName: "compact",
    picture: {
      src: "./pictures/table/compact.png",
      width: 751,
      height: 239,
    },
    snippet: {
      html: `<table class="pf-c-table pf-m-compact pf-m-grid-md" role="grid" aria-label="This is a compact table example" id="table-compact">
  <thead>
    <tr role="row">
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-compact-check-all" aria-label="Select all rows" />
      </td>
      <th role="columnheader" scope="col">Contributor</th>
      <th role="columnheader" scope="col">Position</th>
      <th role="columnheader" scope="col">Location</th>
      <th role="columnheader" scope="col">Last seen</th>
      <th role="columnheader" scope="col">Numbers</th>
      <th class="pf-c-table__icon " role="columnheader" scope="col">Icons</th>
      <td></td>
      <td></td>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row">
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-compact-checkrow1" aria-labelledby="table-compact-name1" />
      </td>
      <th role="columnheader" data-label="Contributor">
        <span id="table-compact-name1">Sam Jones</span>
      </th>
      <td role="cell" data-label="Position">CSS guru</td>
      <td role="cell" data-label="Location">Not too sure</td>
      <td role="cell" data-label="Last seen">May 9, 2018</td>
      <td role="cell" data-label="Numbers">0556</td>
      <td class="pf-c-table__icon" role="cell" data-label="Icon">
        <i class="fas fa-check"></i>
      </td>
      <td role="cell" data-label="Action">
        <a href="#">Action link</a>
      </td>
      <td class="pf-c-table__action" role="cell">
        <div class="pf-c-dropdown">
          <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compact-dropdown-kebab-right-aligned-1-button" aria-expanded="false" aria-label="Actions">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
          <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compact-dropdown-kebab-right-aligned-1-button" hidden>
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
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-compact-checkrow2" aria-labelledby="table-compact-name2" />
      </td>
      <th role="columnheader" data-label="Contributor">
        <span id="table-compact-name2">Amy Miller</span>
      </th>
      <td role="cell" data-label="Position">Visual design</td>
      <td role="cell" data-label="Location">Raleigh</td>
      <td role="cell" data-label="Last seen">May 9, 2018</td>
      <td role="cell" data-label="Numbers">9492</td>
      <td class="pf-c-table__icon" role="cell" data-label="Icon">
        <i class="fas fa-check"></i>
      </td>
      <td role="cell" data-label="Action">
        <a href="#">Action link</a>
      </td>
      <td class="pf-c-table__action" role="cell">
        <div class="pf-c-dropdown">
          <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compact-dropdown-kebab-right-aligned-2-button" aria-expanded="false" aria-label="Actions">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
          <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compact-dropdown-kebab-right-aligned-2-button" hidden>
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
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-compact-checkrow3" aria-labelledby="table-compact-name3" />
      </td>
      <th role="columnheader" data-label="Contributor">
        <span id="table-compact-name3">Steve Wilson</span>
      </th>
      <td role="cell" data-label="Position">Visual design lead</td>
      <td role="cell" data-label="Location">Westford</td>
      <td role="cell" data-label="Last seen">May 9, 2018</td>
      <td role="cell" data-label="Numbers">9929</td>
      <td class="pf-c-table__icon" role="cell" data-label="Icon">
        <i class="fas fa-check"></i>
      </td>
      <td role="cell" data-label="Action">
        <a href="#">Action link</a>
      </td>
      <td class="pf-c-table__action" role="cell">
        <div class="pf-c-dropdown">
          <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compact-dropdown-kebab-right-aligned-3-button" aria-expanded="false" aria-label="Actions">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
          <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compact-dropdown-kebab-right-aligned-3-button" hidden>
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
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-compact-checkrow4" aria-labelledby="table-compact-name4" />
      </td>
      <th role="columnheader" data-label="Contributor name">
        <span id="table-compact-name4">Emma Jackson</span>
      </th>
      <td role="cell" data-label="Position">Interaction design</td>
      <td role="cell" data-label="Location">Westford</td>
      <td role="cell" data-label="Workspaces">May 9, 2018</td>
      <td role="cell" data-label="Last commit">2217</td>
      <td class="pf-c-table__icon" role="cell" data-label="Icon">
        <i class="fas fa-check"></i>
      </td>
      <td role="cell" data-label="Action">
        <a href="#">Action link</a>
      </td>
      <td class="pf-c-table__action" role="cell">
        <div class="pf-c-dropdown">
          <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compact-dropdown-kebab-right-aligned-4-button" aria-expanded="false" aria-label="Actions">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
          <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compact-dropdown-kebab-right-aligned-4-button" hidden>
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
</table>`,
    },
  },
  {
    displayName: "compact-expandable",
    picture: {
      src: "./pictures/table/compact-expandable.png",
      width: 855,
      height: 589,
    },
    snippet: {
      html: `<table class="pf-c-table pf-m-expandable pf-m-compact pf-m-grid-md" role="grid" aria-label="Compact expandable table example" id="table-compact-expandable">
  <thead>
    <tr role="row">
      <td></td>
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-compact-expandable-check-all" aria-label="Select all rows" />
      </td>
      <th class="pf-m-width-30 " role="columnheader" scope="col">Repositories</th>
      <th role="columnheader" scope="col">Branches</th>
      <th role="columnheader" scope="col">Pull requests</th>
      <td></td>
      <td></td>
    </tr>
  </thead>
  <tbody class="pf-m-expanded" role="rowgroup">
    <tr role="row">
      <td class="pf-c-table__toggle" role="cell">
        <button class="pf-c-button pf-m-plain pf-m-expanded" aria-labelledby="table-compact-expandable-node1 table-compact-expandable-expandable-toggle1" id="table-compact-expandable-expandable-toggle1" aria-label="Details" aria-controls="table-compact-expandable-content1" aria-expanded="true">
          <div class="pf-c-table__toggle-icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </div>
        </button>
      </td>
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-compact-expandable-checkrow1" aria-labelledby="table-compact-expandable-node1" />
      </td>
      <th role="columnheader" data-label="Repository name">
        <p id="table-compact-expandable-node1">Node 1</p>
      </th>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Action">
        <a href="#">Link</a>
      </td>
      <td class="pf-c-table__action" role="cell">
        <div class="pf-c-dropdown">
          <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compact-expandable-dropdown-kebab-right-aligned-1-button" aria-expanded="false" aria-label="Actions">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
          <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compact-expandable-dropdown-kebab-right-aligned-1-button" hidden>
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
    <tr class="pf-c-table__expandable-row pf-m-expanded" role="row">
      <td></td>
      <td></td>
      <td role="cell" colspan="4" id="table-compact-expandable-content1">
        <div class="pf-c-table__expandable-row-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody role="rowgroup">
    <tr role="row">
      <td class="pf-c-table__toggle" role="cell">
        <button class="pf-c-button pf-m-plain" aria-labelledby="table-compact-expandable-node2 table-compact-expandable-expandable-toggle2" id="table-compact-expandable-expandable-toggle2" aria-label="Details" aria-controls="table-compact-expandable-content2">
          <div class="pf-c-table__toggle-icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </div>
        </button>
      </td>
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-compact-expandable-checkrow2" aria-labelledby="table-compact-expandable-node2" />
      </td>
      <th role="columnheader" data-label="Repository name">
        <p id="table-compact-expandable-node2">Node 2</p>
      </th>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Action">
        <a href="#">Link</a>
      </td>
      <td class="pf-c-table__action" role="cell">
        <div class="pf-c-dropdown">
          <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compact-expandable-dropdown-kebab-right-aligned-2-button" aria-expanded="false" aria-label="Actions">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
          <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compact-expandable-dropdown-kebab-right-aligned-2-button" hidden>
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
    <tr class="pf-c-table__expandable-row" role="row">
      <td class="pf-m-no-padding" role="cell" colspan="7" id="table-compact-expandable-content2">
        <div class="pf-c-table__expandable-row-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>
    </tr>
  </tbody>
  <tbody class="pf-m-expanded" role="rowgroup">
    <tr role="row">
      <td class="pf-c-table__toggle" role="cell">
        <button class="pf-c-button pf-m-plain pf-m-expanded" aria-labelledby="table-compact-expandable-node3 table-compact-expandable-expandable-toggle3" id="table-compact-expandable-expandable-toggle3" aria-label="Details" aria-controls="table-compact-expandable-content3" aria-expanded="true">
          <div class="pf-c-table__toggle-icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </div>
        </button>
      </td>
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-compact-expandable-checkrow3" aria-labelledby="table-compact-expandable-node3" />
      </td>
      <th role="columnheader" data-label="Repository name">
        <p id="table-compact-expandable-node3">Node 3</p>
      </th>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Action">
        <a href="#">Link</a>
      </td>
      <td class="pf-c-table__action" role="cell">
        <div class="pf-c-dropdown">
          <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compact-expandable-dropdown-kebab-right-aligned-3-button" aria-expanded="false" aria-label="Actions">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
          <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compact-expandable-dropdown-kebab-right-aligned-3-button" hidden>
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
    <tr class="pf-c-table__expandable-row pf-m-expanded" role="row">
      <td role="cell" colspan="7" id="table-compact-expandable-content3">
        <div class="pf-c-table__expandable-row-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>
    </tr>
  </tbody>
  <tbody class="pf-m-expanded" role="rowgroup">
    <tr role="row">
      <td class="pf-c-table__toggle" role="cell">
        <button class="pf-c-button pf-m-plain pf-m-expanded" aria-labelledby="table-compact-expandable-node4 table-compact-expandable-expandable-toggle4" id="table-compact-expandable-expandable-toggle4" aria-label="Details" aria-controls="table-compact-expandable-content4" aria-expanded="true">
          <div class="pf-c-table__toggle-icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </div>
        </button>
      </td>
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-compact-expandable-checkrow4" aria-labelledby="table-compact-expandable-node4" />
      </td>
      <th role="columnheader" data-label="Repository name">
        <p id="table-compact-expandable-node4">Node 4</p>
      </th>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Action">
        <a href="#">Link</a>
      </td>
      <td class="pf-c-table__action" role="cell">
        <div class="pf-c-dropdown">
          <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compact-expandable-dropdown-kebab-right-aligned-4-button" aria-expanded="false" aria-label="Actions">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
          <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compact-expandable-dropdown-kebab-right-aligned-4-button" hidden>
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
    <tr class="pf-c-table__expandable-row pf-m-expanded" role="row">
      <td class="pf-m-no-padding" role="cell" colspan="7" id="table-compact-expandable-content4">
        <div class="pf-c-table__expandable-row-content">This content has no padding.</div>
      </td>
    </tr>
  </tbody>
  <tbody role="rowgroup">
    <tr role="row">
      <td class="pf-c-table__toggle" role="cell">
        <button class="pf-c-button pf-m-plain" aria-labelledby="table-compact-expandable-node5 table-compact-expandable-expandable-toggle5" id="table-compact-expandable-expandable-toggle5" aria-label="Details" aria-controls="table-compact-expandable-content5">
          <div class="pf-c-table__toggle-icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </div>
        </button>
      </td>
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-compact-expandable-checkrow5" aria-labelledby="table-compact-expandable-node5" />
      </td>
      <th role="columnheader" data-label="Repository name">
        <p id="table-compact-expandable-node5">Node 5</p>
      </th>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Action">
        <a href="#">Link</a>
      </td>
      <td class="pf-c-table__action" role="cell">
        <div class="pf-c-dropdown">
          <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compact-expandable-dropdown-kebab-right-aligned-5-button" aria-expanded="false" aria-label="Actions">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
          <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compact-expandable-dropdown-kebab-right-aligned-5-button" hidden>
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
    <tr class="pf-c-table__expandable-row" role="row">
      <td role="cell" colspan="7" id="table-compact-expandable-content5">
        <div class="pf-c-table__expandable-row-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>
    </tr>
  </tbody>
</table>`,
    },
  },
  {
    displayName: "compact-with-no-borders",
    picture: {
      src: "./pictures/table/compact-with-no-borders.png",
      width: 751,
      height: 235,
    },
    snippet: {
      html: `<table class="pf-c-table pf-m-compact pf-m-grid-md pf-m-no-border-rows" role="grid" aria-label="This is a compact table with border rows example" id="table-compact-no-borders">
  <thead>
    <tr role="row">
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-compact-no-borders-check-all" aria-label="Select all rows" />
      </td>
      <th role="columnheader" scope="col">Contributor</th>
      <th role="columnheader" scope="col">Position</th>
      <th role="columnheader" scope="col">Location</th>
      <th role="columnheader" scope="col">Last seen</th>
      <th role="columnheader" scope="col">Numbers</th>
      <th class="pf-c-table__icon " role="columnheader" scope="col">Icons</th>
      <td></td>
      <td></td>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row">
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-compact-no-borders-checkrow1" aria-labelledby="table-compact-no-borders-name1" />
      </td>
      <th role="columnheader" data-label="Contributor">
        <span id="table-compact-no-borders-name1">Sam Jones</span>
      </th>
      <td role="cell" data-label="Position">CSS guru</td>
      <td role="cell" data-label="Location">Not too sure</td>
      <td role="cell" data-label="Last seen">May 9, 2018</td>
      <td role="cell" data-label="Numbers">0556</td>
      <td class="pf-c-table__icon" role="cell" data-label="Icon">
        <i class="fas fa-check"></i>
      </td>
      <td role="cell" data-label="Action">
        <a href="#">Action link</a>
      </td>
      <td class="pf-c-table__action" role="cell">
        <div class="pf-c-dropdown">
          <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compact-no-borders-dropdown-kebab-right-aligned-1-button" aria-expanded="false" aria-label="Actions">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
          <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compact-no-borders-dropdown-kebab-right-aligned-1-button" hidden>
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
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-compact-no-borders-checkrow2" aria-labelledby="table-compact-no-borders-name2" />
      </td>
      <th role="columnheader" data-label="Contributor">
        <span id="table-compact-no-borders-name2">Amy Miller</span>
      </th>
      <td role="cell" data-label="Position">Visual design</td>
      <td role="cell" data-label="Location">Raleigh</td>
      <td role="cell" data-label="Last seen">May 9, 2018</td>
      <td role="cell" data-label="Numbers">9492</td>
      <td class="pf-c-table__icon" role="cell" data-label="Icon">
        <i class="fas fa-check"></i>
      </td>
      <td role="cell" data-label="Action">
        <a href="#">Action link</a>
      </td>
      <td class="pf-c-table__action" role="cell">
        <div class="pf-c-dropdown">
          <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compact-no-borders-dropdown-kebab-right-aligned-2-button" aria-expanded="false" aria-label="Actions">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
          <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compact-no-borders-dropdown-kebab-right-aligned-2-button" hidden>
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
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-compact-no-borders-checkrow3" aria-labelledby="table-compact-no-borders-name3" />
      </td>
      <th role="columnheader" data-label="Contributor">
        <span id="table-compact-no-borders-name3">Steve Wilson</span>
      </th>
      <td role="cell" data-label="Position">Visual design lead</td>
      <td role="cell" data-label="Location">Westford</td>
      <td role="cell" data-label="Last seen">May 9, 2018</td>
      <td role="cell" data-label="Numbers">9929</td>
      <td class="pf-c-table__icon" role="cell" data-label="Icon">
        <i class="fas fa-check"></i>
      </td>
      <td role="cell" data-label="Action">
        <a href="#">Action link</a>
      </td>
      <td class="pf-c-table__action" role="cell">
        <div class="pf-c-dropdown">
          <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compact-no-borders-dropdown-kebab-right-aligned-3-button" aria-expanded="false" aria-label="Actions">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
          <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compact-no-borders-dropdown-kebab-right-aligned-3-button" hidden>
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
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-compact-no-borders-checkrow4" aria-labelledby="table-compact-no-borders-name4" />
      </td>
      <th role="columnheader" data-label="Contributor name">
        <span id="table-compact-no-borders-name4">Emma Jackson</span>
      </th>
      <td role="cell" data-label="Position">Interaction design</td>
      <td role="cell" data-label="Location">Westford</td>
      <td role="cell" data-label="Workspaces">May 9, 2018</td>
      <td role="cell" data-label="Last commit">2217</td>
      <td class="pf-c-table__icon" role="cell" data-label="Icon">
        <i class="fas fa-check"></i>
      </td>
      <td role="cell" data-label="Action">
        <a href="#">Action link</a>
      </td>
      <td class="pf-c-table__action" role="cell">
        <div class="pf-c-dropdown">
          <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compact-no-borders-dropdown-kebab-right-aligned-4-button" aria-expanded="false" aria-label="Actions">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
          <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compact-no-borders-dropdown-kebab-right-aligned-4-button" hidden>
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
</table>`,
    },
  },
  {
    displayName: "expandable",
    picture: {
      src: "./pictures/table/expandable.png",
      width: 855,
      height: 841,
    },
    snippet: {
      html: `<table class="pf-c-table pf-m-expandable pf-m-grid-lg" role="grid" aria-label="Expandable table example" id="table-expandable">
  <thead>
    <tr role="row">
      <td></td>
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-expandable-check-all" aria-label="Select all rows" />
      </td>
      <th class="pf-m-width-30 pf-c-table__sort pf-m-selected" role="columnheader" aria-sort="ascending" scope="col">
        <button class="pf-c-table__button">
          <div class="pf-c-table__button-content">
            <span class="pf-c-table__text">Repositories</span>
            <span class="pf-c-table__sort-indicator">
              <i class="fas fa-long-arrow-alt-up"></i>
            </span>
          </div>
        </button>
      </th>
      <th class="pf-c-table__sort " role="columnheader" aria-sort="none" scope="col">
        <button class="pf-c-table__button">
          <div class="pf-c-table__button-content">
            <span class="pf-c-table__text">Branches</span>
            <span class="pf-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </div>
        </button>
      </th>
      <th class="pf-c-table__sort " role="columnheader" aria-sort="none" scope="col">
        <button class="pf-c-table__button">
          <div class="pf-c-table__button-content">
            <span class="pf-c-table__text">Pull requests</span>
            <span class="pf-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </div>
        </button>
      </th>
      <td></td>
      <td></td>
    </tr>
  </thead>
  <tbody class="pf-m-expanded" role="rowgroup">
    <tr role="row">
      <td class="pf-c-table__toggle" role="cell">
        <button class="pf-c-button pf-m-plain pf-m-expanded" aria-labelledby="table-expandable-node1 table-expandable-expandable-toggle1" id="table-expandable-expandable-toggle1" aria-label="Details" aria-controls="table-expandable-content1" aria-expanded="true">
          <div class="pf-c-table__toggle-icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </div>
        </button>
      </td>
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-expandable-checkrow1" aria-labelledby="table-expandable-node1" />
      </td>
      <th role="columnheader" data-label="Repository name">
        <div>
          <div id="table-expandable-node1">Node 1</div>
          <a href="#">siemur/test-space</a>
        </div>
      </th>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Action">
        <a href="#">Link 1</a>
      </td>
      <td class="pf-c-table__action" role="cell">
        <div class="pf-c-dropdown">
          <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-expandable-dropdown-kebab-right-aligned-1-button" aria-expanded="false" aria-label="Actions">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
          <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-expandable-dropdown-kebab-right-aligned-1-button" hidden>
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
    <tr class="pf-c-table__expandable-row pf-m-expanded" role="row">
      <td></td>
      <td></td>
      <td role="cell" colspan="4" id="table-expandable-content1">
        <div class="pf-c-table__expandable-row-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody role="rowgroup">
    <tr role="row">
      <td class="pf-c-table__toggle" role="cell">
        <button class="pf-c-button pf-m-plain" aria-labelledby="table-expandable-node2 table-expandable-expandable-toggle2" id="table-expandable-expandable-toggle2" aria-label="Details" aria-controls="table-expandable-content2">
          <div class="pf-c-table__toggle-icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </div>
        </button>
      </td>
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-expandable-checkrow2" aria-labelledby="table-expandable-node2" />
      </td>
      <th role="columnheader" data-label="Repository name">
        <div>
          <div id="table-expandable-node2">Node 2</div>
          <a href="#">siemur/test-space</a>
        </div>
      </th>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Action">
        <a href="#">Link 2</a>
      </td>
      <td class="pf-c-table__action" role="cell">
        <div class="pf-c-dropdown">
          <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-expandable-dropdown-kebab-right-aligned-2-button" aria-expanded="false" aria-label="Actions">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
          <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-expandable-dropdown-kebab-right-aligned-2-button" hidden>
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
    <tr class="pf-c-table__expandable-row" role="row">
      <td role="cell" colspan="7" id="table-expandable-content2">
        <div class="pf-c-table__expandable-row-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>
    </tr>
  </tbody>
  <tbody class="pf-m-expanded" role="rowgroup">
    <tr role="row">
      <td class="pf-c-table__toggle" role="cell">
        <button class="pf-c-button pf-m-plain pf-m-expanded" aria-labelledby="table-expandable-node3 expandable-toggle3" id="expandable-toggle3" aria-label="Details" aria-controls="table-expandable-content3" aria-expanded="true">
          <div class="pf-c-table__toggle-icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </div>
        </button>
      </td>
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-expandable-checkrow3" aria-labelledby="table-expandable-node3" />
      </td>
      <th role="columnheader" data-label="Repository name">
        <div>
          <div id="table-expandable-node3">Node 3</div>
          <a href="#">siemur/test-space</a>
        </div>
      </th>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Action">
        <a href="#">Link 3</a>
      </td>
      <td class="pf-c-table__action" role="cell">
        <div class="pf-c-dropdown">
          <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-expandable-dropdown-kebab-right-aligned-3-button" aria-expanded="false" aria-label="Actions">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
          <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-expandable-dropdown-kebab-right-aligned-3-button" hidden>
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
    <tr class="pf-c-table__expandable-row pf-m-expanded" role="row">
      <td role="cell" colspan="7" id="table-expandable-content3">
        <div class="pf-c-table__expandable-row-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </td>
    </tr>
  </tbody>
  <tbody class="pf-m-expanded" role="rowgroup">
    <tr role="row">
      <td class="pf-c-table__toggle" role="cell">
        <button class="pf-c-button pf-m-plain pf-m-expanded" aria-labelledby="table-expandable-node4 expandable-toggle4" id="expandable-toggle4" aria-label="Details" aria-controls="table-expandable-content4" aria-expanded="true">
          <div class="pf-c-table__toggle-icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </div>
        </button>
      </td>
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-expandable-checkrow4" aria-labelledby="table-expandable-node4" />
      </td>
      <th role="columnheader" data-label="Repository name">
        <div>
          <div id="table-expandable-node4">Node 4</div>
          <a href="#">siemur/test-space</a>
        </div>
      </th>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Action">
        <a href="#">Link 4</a>
      </td>
      <td class="pf-c-table__action" role="cell">
        <div class="pf-c-dropdown">
          <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-expandable-dropdown-kebab-right-aligned-4-button" aria-expanded="false" aria-label="Actions">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
          <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-expandable-dropdown-kebab-right-aligned-4-button" hidden>
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
    <tr class="pf-c-table__expandable-row pf-m-expanded" role="row">
      <td class="pf-m-no-padding" role="cell" colspan="7" id="table-expandable-content4">
        <div class="pf-c-table__expandable-row-content">Expandable row content has no padding.</div>
      </td>
    </tr>
  </tbody>
</table>`,
    },
  },
  {
    displayName: "modifiers-without-text-wrapper",
    picture: {
      src: "./pictures/table/modifiers-without-text-wrapper.png",
      width: 855,
      height: 470,
    },
    snippet: {
      html: `<table class="pf-c-table pf-m-grid-lg" role="grid" aria-label="This is a simple table example" id="modifiers-without-text-wrapper-example">
  <thead>
    <tr role="row">
      <th class="pf-m-width-20 " role="columnheader" scope="col">Truncate (width 20%)</th>
      <th role="columnheader" scope="col">Break word</th>
      <th class="pf-m-wrap " role="columnheader" scope="col">Wrapping table header text. This
        <code>th</code>text will wrap instead of truncate.</th>
      <th class="pf-m-fit-content " role="columnheader" scope="col">Fit content</th>
      <td></td>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row">
      <td class="pf-m-truncate" role="cell" data-label="Truncating text">This text will truncate instead of wrap in table layout and wrap gracefully in grid layout.</td>
      <td class="pf-m-break-word" role="cell" data-label="Break word">
        <a href="#">http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org</a>
      </td>
      <td role="cell" data-label="Wrapping">
        <p>By default,
          <code>thead</code>cells will truncate and
          <code>tbody</code>cells will wrap. Use
          <code>.pf-m-wrap</code>on a
          <code>th</code>to change its behavior.</p>
      </td>
      <td role="cell" data-label="Fit content">This cell's content will adjust itself to the parent th width. This modifier only affects table layouts.</td>
      <td class="pf-m-nowrap" role="cell" data-label="No wrap">
        <a href="#">No wrap</a>
      </td>
    </tr>
  </tbody>
</table>`,
    },
  },
  {
    displayName: "sortable",
    picture: {
      src: "./pictures/table/sortable.png",
      width: 551,
      height: 379,
    },
    snippet: {
      html: `<table class="pf-c-table pf-m-grid-lg" role="grid" aria-label="This is a sortable table example" id="table-sortable">
  <thead>
    <tr role="row">
      <th class="pf-c-table__sort pf-m-selected" role="columnheader" aria-sort="ascending" scope="col">
        <button class="pf-c-table__button">
          <div class="pf-c-table__button-content">
            <span class="pf-c-table__text">Repositories</span>
            <span class="pf-c-table__sort-indicator">
              <i class="fas fa-long-arrow-alt-up"></i>
            </span>
          </div>
        </button>
      </th>
      <th class="pf-c-table__sort " role="columnheader" aria-sort="none" scope="col">
        <div class="pf-c-table__column-help">
          <button class="pf-c-table__button">
            <div class="pf-c-table__button-content">
              <span class="pf-c-table__text">Branches</span>
              <span class="pf-c-table__sort-indicator">
                <i class="fas fa-arrows-alt-v"></i>
              </span>
            </div>
          </button>
          <span class="pf-c-table__column-help-action">
            <button class="pf-c-button pf-m-plain" type="button" aria-label="More info">
              <i class="pficon pf-icon-help" aria-hidden="true"></i>
            </button>
          </span>
        </div>
      </th>
      <th class="pf-c-table__sort " role="columnheader" aria-sort="none" scope="col">
        <button class="pf-c-table__button">
          <div class="pf-c-table__button-content">
            <span class="pf-c-table__text">Pull requests</span>
            <span class="pf-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </div>
        </button>
      </th>
      <th role="columnheader" scope="col">Workspaces</th>
      <th role="columnheader" scope="col">
        <div class="pf-c-table__column-help">Last commit
          <span class="pf-c-table__column-help-action">
            <button class="pf-c-button pf-m-plain" type="button" aria-label="More info">
              <i class="pficon pf-icon-help" aria-hidden="true"></i>
            </button>
          </span>
        </div>
      </th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row">
      <td role="cell" data-label="Repository name">Repository 1</td>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td role="cell" data-label="Last commit">2 days ago</td>
    </tr>
    <tr role="row">
      <td role="cell" data-label="Repository name">Repository 2</td>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td role="cell" data-label="Last commit">2 days ago</td>
    </tr>
    <tr role="row">
      <td role="cell" data-label="Repository name">Repository 3</td>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td role="cell" data-label="Last commit">2 days ago</td>
    </tr>
    <tr role="row">
      <td role="cell" data-label="Repository name">Repository 4</td>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td role="cell" data-label="Last commit">2 days ago</td>
    </tr>
  </tbody>
</table>`,
    },
  },
  {
    displayName: "sticky-header",
    picture: {
      src: "./pictures/table/sticky-header.png",
      width: 500,
      height: 378,
    },
    snippet: {
      html: `<table class="pf-c-table pf-m-grid-md pf-m-sticky-header" role="grid" aria-label="This is a table with sticky header cells" id="table-sticky-header">
  <thead>
    <tr role="row">
      <th role="columnheader" scope="col">Repositories</th>
      <th role="columnheader" scope="col">Branches</th>
      <th role="columnheader" scope="col">Pull requests</th>
      <th role="columnheader" scope="col">Workspaces</th>
      <th role="columnheader" scope="col">Last commit</th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row">
      <td role="cell" data-label="Repository name">Repository 1</td>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td role="cell" data-label="Last commit">2 days ago</td>
    </tr>
    <tr role="row">
      <td role="cell" data-label="Repository name">Repository 2</td>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td role="cell" data-label="Last commit">2 days ago</td>
    </tr>
    <tr role="row">
      <td role="cell" data-label="Repository name">Repository 3</td>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td role="cell" data-label="Last commit">2 days ago</td>
    </tr>
    <tr role="row">
      <td role="cell" data-label="Repository name">Repository 4</td>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td role="cell" data-label="Last commit">2 days ago</td>
    </tr>
  </tbody>
</table>`,
    },
  },
  {
    displayName: "table-text-element",
    picture: {
      src: "./pictures/table/table-text-element.png",
      width: 855,
      height: 1096,
    },
    snippet: {
      html:
        `<table class="pf-c-table pf-m-grid-md" role="grid" aria-label="This is a simple table example" id="table-text-element-example">
  <caption>This table contains
    <code>.pf-c-table__text</code>  examples. The
    <code>.pf-c-table__text</code>  element can be using alone or in a nested configuration.</caption>
  <thead>
    <tr role="row">
      <th role="columnheader" scope="col">Selector/element</th>
      <th role="columnheader" scope="col">Result</th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row">
      <th class="pf-m-fit-content " role="rowheader" data-label="Element" scope="row">
        <div class="pf-c-table__text">
          <b>
            <code>th.pf-m-truncate</code>
          </b>
        </div>
      </th>
      <td class="pf-m-truncate" role="cell" data-label="Truncating text">
        <span class="pf-c-table__text">This table cell contains a single
          <code>`.pf -
        c -
        table__text`</code>  wrapper with the parent table cell applying
          <code>`.pf -
        m -
        truncate`</code>. The child
          <code>`.pf -
        c -
        table__text`</code>  element will inherit the modifier settings and apply to the grid layout.</span>
      </td>
    </tr>
    <tr role="row">
      <th class="pf-m-fit-content " role="rowheader" data-label="Element" scope="row">
        <div class="pf-c-table__text">
          <b>
            <code>.pf-l-stack</code>
          </b>
        </div>
      </th>
      <td role="cell" data-label="Truncating text">
        <div class="pf-l-stack pf-m-gutter">
          <div class="pf-l-stack__item">
            <div class="pf-c-table__text">Because
              <code>.pf-m-grid</code>  applies a grid layout to
              <code>.pf-c-table</code>, child elements will stack in the grid layout. To prevent this, wrap multiple elements with a div or use a PatternFly layout.</div>
          </div>
          <div class="pf-l-stack__item">
            <p class="pf-c-table__text">The
              <b>
                <code>.pf-c-table__text</code> element</b>  can additionally be nested, like in this example. The next
              <code>.pf-c-table__text</code>element has a very long url whose width needs be constrained.</p>
          </div>
          <div class="pf-l-stack__item">
            <a class="pf-c-table__text pf-m-truncate" href="#">http://truncatemodifierappliedtoaverylongurlthatwillforcethetabletobreakluckilywehavethepfctabletextelement.com</a>
          </div>
          <div class="pf-l-stack__item">
            <p class="pf-c-table__text">This
              <b>
                <code>.pf-c-table__text</code> element</b>  applies its own built in grid layout
              <b>
                <code>.pf-m-stack</code>
              </b> as well as a gutter
              <b>
                <code>.pf-m-gutter</code>
              </b>.</p>
          </div>
        </div>
      </td>
    </tr>
    <tr role="row">
      <th class="pf-m-fit-content " role="rowheader" data-label="Element" scope="row">
        <div class="pf-c-table__text">
          <b>
            <code>.pf-l-flex</code>
          </b>
        </div>
      </th>
      <td role="cell" data-label="Truncating text">
        <div class="pf-l-flex pf-m-column pf-m-row-on-xl">
          <div class="pf-l-flex__item pf-m-flex-1">
            <p class="pf-c-table__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
          <div class="pf-l-flex__item pf-m-flex-1">
            <a class="pf-c-table__text pf-m-break-word" href="#">http://breakwordmodifierappliedtoaverylongurlthatwillforcethetabletobreakluckilywehavethepfctabletextelement.com</a>
          </div>
        </div>
      </td>
    </tr>
    <tr role="row">
      <th class="pf-m-fit-content " role="rowheader" data-label="Element" scope="row">
        <div class="pf-c-table__text">
          <b>
            <code>.pf-l-flex</code>
          </b>
        </div>
      </th>
      <td role="cell" data-label="Truncating text">
        <div class="pf-l-flex pf-m-column">
          <div class="pf-l-flex">
            <div class="pf-l-flex__item">
              <i class="fas fa-code-branch" aria-hidden="true"></i>
 5
            </div>
            <div class="pf-l-flex__item">
              <i class="fas fa-code" aria-hidden="true"></i>
 9
            </div>
            <div class="pf-l-flex__item">
              <i class="fas fa-cube" aria-hidden="true"></i>
 2
            </div>
            <div class="pf-l-flex__item">
              <i class="fas fa-check-circle" aria-hidden="true"></i>
 11
            </div>
          </div>
          <div class="pf-l-flex__item">
            <p class="pf-c-table__text">This is paragraph that we want to wrap. It doesn't need a modifier and has no extra long strings. Any modifier available for the flex layout can be used here.</p>
          </div>
          <div class="pf-l-flex__item">
            <a class="pf-c-table__text pf-m-break-word" href="#">http://breakwordmodifierappliedtoaverylongurlthatwillforcethetabletobreakluckilywehavethepfctabletextelement.com</a>
          </div>
        </div>
      </td>
    </tr>
    <tr role="row">
      <th class="pf-m-fit-content " role="rowheader" data-label="Element" scope="row">
        <div class="pf-c-table__text">
          <b>
            <code>.pf-l-grid</code>
          </b>
        </div>
      </th>
      <td role="cell" data-label="Truncating text">
        <div class="pf-l-grid pf-m-gutter">
          <div class="pf-l-grid__item pf-m-6-col pf-m-3-col-on-md">Item 1</div>
          <div class="pf-l-grid__item pf-m-6-col pf-m-3-col-on-md">Item 2</div>
          <div class="pf-l-grid__item pf-m-6-col pf-m-3-col-on-md">Item 3</div>
          <div class="pf-l-grid__item pf-m-6-col pf-m-3-col-on-md">Item 4</div>
          <div class="pf-l-grid__item">
            <p class="pf-c-table__text">This is paragraph that we want to wrap. It doesn't need a modifier and has no extra long strings. Any modifier available for the flex layout can be used here.</p>
          </div>
          <div class="pf-l-grid__item">
            <a class="pf-c-table__text pf-m-truncate" href="#">http://breakwordmodifierappliedtoaverylongurlthatwillforcethetabletobreakluckilywehavethepfctabletextelement.com</a>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>`,
    },
  },
  {
    displayName: "th-truncation",
    picture: {
      src: "./pictures/table/th-truncation.png",
      width: 800,
      height: 357,
    },
    snippet: {
      html: `<div class="pf-c-tooltip pf-m-top" role="tooltip">
  <div class="pf-c-tooltip__arrow"></div>
  <div class="pf-c-tooltip__content" id="tooltip-top-content">Pull Requests</div>
</div>
<table class="pf-c-table" aria-label="This is a simple table example" id="th-truncation-example">
  <thead>
    <tr>
      <th scope="col">Repositories</th>
      <th scope="col">Branches</th>
      <th scope="col">Pull requests</th>
      <th scope="col">Workspaces</th>
      <th scope="col">Last commit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td role="cell" data-label="Repository name">Long lines of text will shrink adjacent column widths.</td>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td role="cell" data-label="Last commit">2 days ago</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td role="cell" data-label="Repository name">This example is not responsive. Adjacent
        <code>tbody</code>cells will shrink as a result of this text being a longer string and adjacent text being shorter in length. Truncation can be overridden in
        <code>th</code>cells with the addition of
        <code>.pf-m-wrap</code>,
        <code>.pf-m-nowrap</code>or
        <code>.pf-m-fit-content</code>.</td>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td role="cell" data-label="Last commit">2 days ago</td>
    </tr>
  </tbody>
</table>`,
    },
  },
  {
    displayName: "width-constrained",
    picture: {
      src: "./pictures/table/width-constrained.png",
      width: 855,
      height: 329,
    },
    snippet: {
      html: `<table class="pf-c-table pf-m-grid-md" role="grid" aria-label="This is a simple table example" id="width-constrained-example">
  <thead>
    <tr role="row">
      <th class="pf-m-width-40 " role="columnheader" scope="col">Width 40</th>
      <th role="columnheader" scope="col">Branches</th>
      <th role="columnheader" scope="col">Pull requests</th>
      <th class="pf-m-fit-content " role="columnheader" scope="col">Fit content th</th>
      <th role="columnheader" scope="col">Last commit</th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row">
      <td role="cell" data-label="Repository name">Since this is a long string of text and the other cells contain short strings (narrower than their table header), we'll need to control width this table header's width. Let's set width to 40%.</td>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td role="cell" data-label="Last commit">2 days ago</td>
    </tr>
  </tbody>
  <tbody role="rowgroup">
    <tr role="row">
      <td class="pf-m-truncate" role="cell" data-label="Repository name">This string will truncate in table mode only. Since this is a long string of text and the other cells contain short strings (narrower than their table header), we'll need to control width this table header's width. Let's set width to 40%.</td>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td role="cell" data-label="Last commit">2 days ago</td>
    </tr>
  </tbody>
</table>`,
    },
  },
  {
    displayName: "with-checkboxes-and-actions",
    picture: {
      src: "./pictures/table/with-checkboxes-and-actions.png",
      width: 642,
      height: 454,
    },
    snippet: {
      html: `<table class="pf-c-table pf-m-grid-lg" role="grid" aria-label="This is a table with checkboxes" id="table-checkboxes-and-actions">
  <thead>
    <tr role="row">
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-checkboxes-and-actions-check-all" aria-label="Select all rows" />
      </td>
      <th role="columnheader" scope="col">Repositories</th>
      <th role="columnheader" scope="col">Branches</th>
      <th role="columnheader" scope="col">Pull requests</th>
      <th role="columnheader" scope="col">Workspaces</th>
      <th role="columnheader" scope="col">Last commit</th>
      <td></td>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row">
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-checkboxes-and-actions-checkrow1" aria-labelledby="table-checkboxes-and-actions-node1" />
      </td>
      <th role="columnheader" data-label="Repository name">
        <div id="table-checkboxes-and-actions-node1">Node 1</div>
      </th>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td role="cell" data-label="Last commit">2 days ago</td>
      <td class="pf-c-table__action" role="cell">
        <div class="pf-c-dropdown">
          <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-checkboxes-and-actions-dropdown-kebab-right-aligned-1-button" aria-expanded="false" aria-label="Actions">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
          <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-checkboxes-and-actions-dropdown-kebab-right-aligned-1-button" hidden>
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
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-checkboxes-and-actions-checkrow2" aria-labelledby="table-checkboxes-and-actions-node2" />
      </td>
      <th role="columnheader" data-label="Repository name">
        <div>
          <div id="table-checkboxes-and-actions-node2">Node 2</div>
          <a href="#">siemur/test-space</a>
        </div>
      </th>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td role="cell" data-label="Last commit">2 days ago</td>
      <td class="pf-c-table__action" role="cell">
        <div class="pf-c-dropdown">
          <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-checkboxes-and-actions-dropdown-kebab-right-aligned-2-button" aria-expanded="false" aria-label="Actions">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
          <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-checkboxes-and-actions-dropdown-kebab-right-aligned-2-button" hidden>
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
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-checkboxes-and-actions-checkrow3" aria-labelledby="table-checkboxes-and-actions-node3" />
      </td>
      <th role="columnheader" data-label="Repository name">
        <div>
          <div id="table-checkboxes-and-actions-node3">Node 3</div>
          <a href="#">siemur/test-space</a>
        </div>
      </th>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td role="cell" data-label="Last commit">2 days ago</td>
      <td class="pf-c-table__action" role="cell">
        <div class="pf-c-dropdown">
          <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-checkboxes-and-actions-dropdown-kebab-right-aligned-3-button" aria-expanded="false" aria-label="Actions">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
          <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-checkboxes-and-actions-dropdown-kebab-right-aligned-3-button" hidden>
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
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-checkboxes-and-actions-checkrow4" aria-labelledby="table-checkboxes-and-actions-node4" />
      </td>
      <th role="columnheader" data-label="Repository name">
        <div>
          <div id="table-checkboxes-and-actions-node4">Node 4</div>
          <a href="#">siemur/test-space</a>
        </div>
      </th>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td role="cell" data-label="Last commit">2 days ago</td>
      <td class="pf-c-table__action" role="cell">
        <div class="pf-c-dropdown">
          <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-checkboxes-and-actions-dropdown-kebab-right-aligned-4-button" aria-expanded="false" aria-label="Actions">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
          <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-checkboxes-and-actions-dropdown-kebab-right-aligned-4-button" hidden>
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
</table>`,
    },
  },
  {
    displayName: "with-compound-expansion",
    picture: {
      src: "./pictures/table/with-compound-expansion.png",
      width: 820,
      height: 536,
    },
    snippet: {
      html: `<table class="pf-c-table pf-m-expandable pf-m-grid-md" role="grid" aria-label="Compound expandable table example" id="table-compound-expansion">
  <thead>
    <tr role="row">
      <th class="pf-c-table__sort pf-m-selected" role="columnheader" aria-sort="ascending" scope="col">
        <button class="pf-c-table__button">
          <div class="pf-c-table__button-content">
            <span class="pf-c-table__text">Repositories</span>
            <span class="pf-c-table__sort-indicator">
              <i class="fas fa-long-arrow-alt-up"></i>
            </span>
          </div>
        </button>
      </th>
      <th class="pf-c-table__sort " role="columnheader" aria-sort="none" scope="col">
        <button class="pf-c-table__button">
          <div class="pf-c-table__button-content">
            <span class="pf-c-table__text">Branches</span>
            <span class="pf-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </div>
        </button>
      </th>
      <th class="pf-c-table__sort " role="columnheader" aria-sort="none" scope="col">
        <button class="pf-c-table__button">
          <div class="pf-c-table__button-content">
            <span class="pf-c-table__text">Pull requests</span>
            <span class="pf-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </div>
        </button>
      </th>
      <th role="columnheader" scope="col">Workspaces</th>
      <th role="columnheader" scope="col">Last commit</th>
      <td></td>
      <td></td>
    </tr>
  </thead>
  <tbody class="pf-m-expanded" role="rowgroup">
    <tr role="row">
      <td class="pf-c-table__compound-expansion-toggle pf-m-expanded" role="cell" data-label="Repositories">
        <button class="pf-c-table__button">
          <span class="pf-c-table__text">
            <i class="fas fa-code-branch" aria-hidden="true"></i>
 10
          </span>
        </button>
      </td>
      <td class="pf-c-table__compound-expansion-toggle " role="cell" data-label="Branches">
        <button class="pf-c-table__button">
          <span class="pf-c-table__text">
            <i class="fas fa-code" aria-hidden="true"></i>
  234
          </span>
        </button>
      </td>
      <td class="pf-c-table__compound-expansion-toggle " role="cell" data-label="Pull requests">
        <button class="pf-c-table__button">
          <span class="pf-c-table__text">
            <i class="fas fa-cube" aria-hidden="true"></i>
  4
          </span>
        </button>
      </td>
      <th role="columnheader" data-label="Workspaces">
        <a href="#">siemur/test-space</a>
      </th>
      <td role="cell" data-label="Last commit">
        <span>20 minutes</span>
      </td>
      <td role="cell" data-label="Action">
        <a href="#">Open in Github</a>
      </td>
      <td class="pf-c-table__action" role="cell">
        <div class="pf-c-dropdown">
          <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-dropdown-kebab-right-aligned-1-button" aria-expanded="false" aria-label="Actions">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
          <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-dropdown-kebab-right-aligned-1-button" hidden>
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
    <tr class="pf-c-table__expandable-row pf-m-expanded" role="row">
      <td class="pf-m-no-padding" role="cell" colspan="7">
        <table class="pf-c-table pf-m-compact pf-m-no-border-rows" role="grid" id="table-compound-expansion-nested-table-1" aria-label="Nested table" id="table-compound-expansion-nested-table-1">
          <thead>
            <tr role="row">
              <th class="pf-c-table__sort " role="columnheader" aria-sort="none" scope="col">
                <button class="pf-c-table__button">
                  <div class="pf-c-table__button-content">
                    <span class="pf-c-table__text">Description</span>
                    <span class="pf-c-table__sort-indicator">
                      <i class="fas fa-arrows-alt-v"></i>
                    </span>
                  </div>
                </button>
              </th>
              <th role="columnheader" scope="col">Date</th>
              <th role="columnheader" scope="col">Status</th>
              <td role="cell"></td>
            </tr>
          </thead>
          <tbody role="rowgroup">
            <tr role="row">
              <th role="columnheader" data-label="Description">Item one</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-1-dropdown-kebab-nested-tr1-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-1-dropdown-kebab-nested-tr1-button" hidden>
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
              <th role="columnheader" data-label="Description">Item two</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Warning</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-1-dropdown-kebab-nested-tr2-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-1-dropdown-kebab-nested-tr2-button" hidden>
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
              <th role="columnheader" data-label="Description">Item three</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-1-dropdown-kebab-nested-tr3-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-1-dropdown-kebab-nested-tr3-button" hidden>
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
              <th role="columnheader" data-label="Description">Item four</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-1-dropdown-kebab-nested-tr4-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-1-dropdown-kebab-nested-tr4-button" hidden>
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
              <th role="columnheader" data-label="Description">Item five</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-1-dropdown-kebab-nested-tr5-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-1-dropdown-kebab-nested-tr5-button" hidden>
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
      </td>
    </tr>
    <tr class="pf-c-table__expandable-row" role="row">
      <td class="pf-m-no-padding" role="cell" colspan="7">
        <table class="pf-c-table pf-m-compact pf-m-no-border-rows" role="grid" id="table-compound-expansion-nested-table-2" aria-label="Nested table" id="table-compound-expansion-nested-table-2">
          <thead>
            <tr role="row">
              <th class="pf-c-table__sort " role="columnheader" aria-sort="none" scope="col">
                <button class="pf-c-table__button">
                  <div class="pf-c-table__button-content">
                    <span class="pf-c-table__text">Description</span>
                    <span class="pf-c-table__sort-indicator">
                      <i class="fas fa-arrows-alt-v"></i>
                    </span>
                  </div>
                </button>
              </th>
              <th role="columnheader" scope="col">Date</th>
              <th role="columnheader" scope="col">Status</th>
              <td role="cell"></td>
            </tr>
          </thead>
          <tbody role="rowgroup">
            <tr role="row">
              <th role="columnheader" data-label="Description">Item one</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-2-dropdown-kebab-nested-tr1-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-2-dropdown-kebab-nested-tr1-button" hidden>
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
              <th role="columnheader" data-label="Description">Item two</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Warning</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-2-dropdown-kebab-nested-tr2-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-2-dropdown-kebab-nested-tr2-button" hidden>
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
              <th role="columnheader" data-label="Description">Item three</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-2-dropdown-kebab-nested-tr3-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-2-dropdown-kebab-nested-tr3-button" hidden>
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
              <th role="columnheader" data-label="Description">Item four</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-2-dropdown-kebab-nested-tr4-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-2-dropdown-kebab-nested-tr4-button" hidden>
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
              <th role="columnheader" data-label="Description">Item five</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-2-dropdown-kebab-nested-tr5-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-2-dropdown-kebab-nested-tr5-button" hidden>
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
      </td>
    </tr>
    <tr class="pf-c-table__expandable-row" role="row">
      <td class="pf-m-no-padding" role="cell" colspan="7">
        <table class="pf-c-table pf-m-compact pf-m-no-border-rows" role="grid" id="table-compound-expansion-nested-table-3" aria-label="Nested table" id="table-compound-expansion-nested-table-3">
          <thead>
            <tr role="row">
              <th class="pf-c-table__sort " role="columnheader" aria-sort="none" scope="col">
                <button class="pf-c-table__button">
                  <div class="pf-c-table__button-content">
                    <span class="pf-c-table__text">Description</span>
                    <span class="pf-c-table__sort-indicator">
                      <i class="fas fa-arrows-alt-v"></i>
                    </span>
                  </div>
                </button>
              </th>
              <th role="columnheader" scope="col">Date</th>
              <th role="columnheader" scope="col">Status</th>
              <td role="cell"></td>
            </tr>
          </thead>
          <tbody role="rowgroup">
            <tr role="row">
              <th role="columnheader" data-label="Description">Item one</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-3-dropdown-kebab-nested-tr1-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-3-dropdown-kebab-nested-tr1-button" hidden>
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
              <th role="columnheader" data-label="Description">Item two</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Warning</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-3-dropdown-kebab-nested-tr2-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-3-dropdown-kebab-nested-tr2-button" hidden>
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
              <th role="columnheader" data-label="Description">Item three</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-3-dropdown-kebab-nested-tr3-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-3-dropdown-kebab-nested-tr3-button" hidden>
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
              <th role="columnheader" data-label="Description">Item four</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-3-dropdown-kebab-nested-tr4-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-3-dropdown-kebab-nested-tr4-button" hidden>
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
              <th role="columnheader" data-label="Description">Item five</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-3-dropdown-kebab-nested-tr5-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-3-dropdown-kebab-nested-tr5-button" hidden>
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
      </td>
    </tr>
  </tbody>
  <tbody role="rowgroup">
    <tr role="row">
      <td class="pf-c-table__compound-expansion-toggle " role="cell" data-label="Repositories">
        <button class="pf-c-table__button">
          <span class="pf-c-table__text">
            <i class="fas fa-code-branch" aria-hidden="true"></i>
  2
          </span>
        </button>
      </td>
      <td class="pf-c-table__compound-expansion-toggle " role="cell" data-label="Branches">
        <button class="pf-c-table__button">
          <span class="pf-c-table__text">
            <i class="fas fa-code" aria-hidden="true"></i>
  82
          </span>
        </button>
      </td>
      <td class="pf-c-table__compound-expansion-toggle " role="cell" data-label="Pull requests">
        <button class="pf-c-table__button">
          <span class="pf-c-table__text">
            <i class="fas fa-cube" aria-hidden="true"></i>
  1
          </span>
        </button>
      </td>
      <th role="columnheader" data-label="Workspaces">
        <a href="#">siemur/test-space</a>
      </th>
      <td role="cell" data-label="Last commit">
        <span>1 day ago</span>
      </td>
      <td role="cell" data-label="Action">
        <a href="#">Open in Github</a>
      </td>
      <td class="pf-c-table__action" role="cell">
        <div class="pf-c-dropdown">
          <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-dropdown-kebab-right-aligned-2-button" aria-expanded="false" aria-label="Actions">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
          <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-dropdown-kebab-right-aligned-2-button" hidden>
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
    <tr class="pf-c-table__expandable-row" role="row">
      <td class="pf-m-no-padding" role="cell" colspan="7">
        <table class="pf-c-table pf-m-compact pf-m-no-border-rows" role="grid" id="table-compound-expansion-nested-table-4" aria-label="Nested table" id="table-compound-expansion-nested-table-4">
          <thead>
            <tr role="row">
              <th class="pf-c-table__sort " role="columnheader" aria-sort="none" scope="col">
                <button class="pf-c-table__button">
                  <div class="pf-c-table__button-content">
                    <span class="pf-c-table__text">Description</span>
                    <span class="pf-c-table__sort-indicator">
                      <i class="fas fa-arrows-alt-v"></i>
                    </span>
                  </div>
                </button>
              </th>
              <th role="columnheader" scope="col">Date</th>
              <th role="columnheader" scope="col">Status</th>
              <td role="cell"></td>
            </tr>
          </thead>
          <tbody role="rowgroup">
            <tr role="row">
              <th role="columnheader" data-label="Description">Item one</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-4-dropdown-kebab-nested-tr1-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-4-dropdown-kebab-nested-tr1-button" hidden>
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
              <th role="columnheader" data-label="Description">Item two</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Warning</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-4-dropdown-kebab-nested-tr2-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-4-dropdown-kebab-nested-tr2-button" hidden>
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
              <th role="columnheader" data-label="Description">Item three</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-4-dropdown-kebab-nested-tr3-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-4-dropdown-kebab-nested-tr3-button" hidden>
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
              <th role="columnheader" data-label="Description">Item four</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-4-dropdown-kebab-nested-tr4-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-4-dropdown-kebab-nested-tr4-button" hidden>
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
              <th role="columnheader" data-label="Description">Item five</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-4-dropdown-kebab-nested-tr5-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-4-dropdown-kebab-nested-tr5-button" hidden>
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
      </td>
    </tr>
    <tr class="pf-c-table__expandable-row" role="row">
      <td class="pf-m-no-padding" role="cell" colspan="7">
        <table class="pf-c-table pf-m-compact pf-m-no-border-rows" role="grid" id="table-compound-expansion-nested-table-5" aria-label="Nested table" id="table-compound-expansion-nested-table-5">
          <thead>
            <tr role="row">
              <th class="pf-c-table__sort " role="columnheader" aria-sort="none" scope="col">
                <button class="pf-c-table__button">
                  <div class="pf-c-table__button-content">
                    <span class="pf-c-table__text">Description</span>
                    <span class="pf-c-table__sort-indicator">
                      <i class="fas fa-arrows-alt-v"></i>
                    </span>
                  </div>
                </button>
              </th>
              <th role="columnheader" scope="col">Date</th>
              <th role="columnheader" scope="col">Status</th>
              <td role="cell"></td>
            </tr>
          </thead>
          <tbody role="rowgroup">
            <tr role="row">
              <th role="columnheader" data-label="Description">Item one</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-5-dropdown-kebab-nested-tr1-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-5-dropdown-kebab-nested-tr1-button" hidden>
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
              <th role="columnheader" data-label="Description">Item two</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Warning</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-5-dropdown-kebab-nested-tr2-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-5-dropdown-kebab-nested-tr2-button" hidden>
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
              <th role="columnheader" data-label="Description">Item three</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-5-dropdown-kebab-nested-tr3-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-5-dropdown-kebab-nested-tr3-button" hidden>
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
              <th role="columnheader" data-label="Description">Item four</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-5-dropdown-kebab-nested-tr4-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-5-dropdown-kebab-nested-tr4-button" hidden>
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
              <th role="columnheader" data-label="Description">Item five</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-5-dropdown-kebab-nested-tr5-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-5-dropdown-kebab-nested-tr5-button" hidden>
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
      </td>
    </tr>
    <tr class="pf-c-table__expandable-row" role="row">
      <td class="pf-m-no-padding" role="cell" colspan="7">
        <table class="pf-c-table pf-m-compact pf-m-no-border-rows" role="grid" id="table-compound-expansion-nested-table-6" aria-label="Nested table" id="table-compound-expansion-nested-table-6">
          <thead>
            <tr role="row">
              <th class="pf-c-table__sort " role="columnheader" aria-sort="none" scope="col">
                <button class="pf-c-table__button">
                  <div class="pf-c-table__button-content">
                    <span class="pf-c-table__text">Description</span>
                    <span class="pf-c-table__sort-indicator">
                      <i class="fas fa-arrows-alt-v"></i>
                    </span>
                  </div>
                </button>
              </th>
              <th role="columnheader" scope="col">Date</th>
              <th role="columnheader" scope="col">Status</th>
              <td role="cell"></td>
            </tr>
          </thead>
          <tbody role="rowgroup">
            <tr role="row">
              <th role="columnheader" data-label="Description">Item one</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-6-dropdown-kebab-nested-tr1-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-6-dropdown-kebab-nested-tr1-button" hidden>
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
              <th role="columnheader" data-label="Description">Item two</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Warning</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-6-dropdown-kebab-nested-tr2-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-6-dropdown-kebab-nested-tr2-button" hidden>
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
              <th role="columnheader" data-label="Description">Item three</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-6-dropdown-kebab-nested-tr3-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-6-dropdown-kebab-nested-tr3-button" hidden>
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
              <th role="columnheader" data-label="Description">Item four</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-6-dropdown-kebab-nested-tr4-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-6-dropdown-kebab-nested-tr4-button" hidden>
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
              <th role="columnheader" data-label="Description">Item five</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-6-dropdown-kebab-nested-tr5-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-6-dropdown-kebab-nested-tr5-button" hidden>
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
      </td>
    </tr>
  </tbody>
  <tbody role="rowgroup">
    <tr role="row">
      <td class="pf-c-table__compound-expansion-toggle " role="cell" data-label="Repositories">
        <button class="pf-c-table__button">
          <span class="pf-c-table__text">
            <i class="fas fa-code-branch" aria-hidden="true"></i>
  4
          </span>
        </button>
      </td>
      <td class="pf-c-table__compound-expansion-toggle " role="cell" data-label="Branches">
        <button class="pf-c-table__button">
          <span class="pf-c-table__text">
            <i class="fas fa-code" aria-hidden="true"></i>
  4
          </span>
        </button>
      </td>
      <td class="pf-c-table__compound-expansion-toggle " role="cell" data-label="Pull requests">
        <button class="pf-c-table__button">
          <span class="pf-c-table__text">
            <i class="fas fa-cube" aria-hidden="true"></i>
  1
          </span>
        </button>
      </td>
      <th role="columnheader" data-label="Workspaces">
        <a href="#">siemur/test-space</a>
      </th>
      <td role="cell" data-label="Last commit">
        <span>2 days ago</span>
      </td>
      <td role="cell" data-label="Action">
        <a href="#">Open in Github</a>
      </td>
      <td class="pf-c-table__action" role="cell">
        <div class="pf-c-dropdown">
          <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-dropdown-kebab-right-aligned-3-button" aria-expanded="false" aria-label="Actions">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
          <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-dropdown-kebab-right-aligned-3-button" hidden>
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
    <tr class="pf-c-table__expandable-row" role="row">
      <td class="pf-m-no-padding" role="cell" colspan="7">
        <table class="pf-c-table pf-m-compact pf-m-no-border-rows" role="grid" id="table-compound-expansion-nested-table-7" aria-label="Nested table" id="table-compound-expansion-nested-table-7">
          <thead>
            <tr role="row">
              <th class="pf-c-table__sort " role="columnheader" aria-sort="none" scope="col">
                <button class="pf-c-table__button">
                  <div class="pf-c-table__button-content">
                    <span class="pf-c-table__text">Description</span>
                    <span class="pf-c-table__sort-indicator">
                      <i class="fas fa-arrows-alt-v"></i>
                    </span>
                  </div>
                </button>
              </th>
              <th role="columnheader" scope="col">Date</th>
              <th role="columnheader" scope="col">Status</th>
              <td role="cell"></td>
            </tr>
          </thead>
          <tbody role="rowgroup">
            <tr role="row">
              <th role="columnheader" data-label="Description">Item one</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-7-dropdown-kebab-nested-tr1-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-7-dropdown-kebab-nested-tr1-button" hidden>
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
              <th role="columnheader" data-label="Description">Item two</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Warning</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-7-dropdown-kebab-nested-tr2-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-7-dropdown-kebab-nested-tr2-button" hidden>
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
              <th role="columnheader" data-label="Description">Item three</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-7-dropdown-kebab-nested-tr3-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-7-dropdown-kebab-nested-tr3-button" hidden>
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
              <th role="columnheader" data-label="Description">Item four</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-7-dropdown-kebab-nested-tr4-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-7-dropdown-kebab-nested-tr4-button" hidden>
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
              <th role="columnheader" data-label="Description">Item five</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-7-dropdown-kebab-nested-tr5-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-7-dropdown-kebab-nested-tr5-button" hidden>
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
      </td>
    </tr>
    <tr class="pf-c-table__expandable-row" role="row">
      <td class="pf-m-no-padding" role="cell" colspan="7">
        <table class="pf-c-table pf-m-compact pf-m-no-border-rows" role="grid" id="table-compound-expansion-nested-table-8" aria-label="Nested table" id="table-compound-expansion-nested-table-8">
          <thead>
            <tr role="row">
              <th class="pf-c-table__sort " role="columnheader" aria-sort="none" scope="col">
                <button class="pf-c-table__button">
                  <div class="pf-c-table__button-content">
                    <span class="pf-c-table__text">Description</span>
                    <span class="pf-c-table__sort-indicator">
                      <i class="fas fa-arrows-alt-v"></i>
                    </span>
                  </div>
                </button>
              </th>
              <th role="columnheader" scope="col">Date</th>
              <th role="columnheader" scope="col">Status</th>
              <td role="cell"></td>
            </tr>
          </thead>
          <tbody role="rowgroup">
            <tr role="row">
              <th role="columnheader" data-label="Description">Item one</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-8-dropdown-kebab-nested-tr1-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-8-dropdown-kebab-nested-tr1-button" hidden>
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
              <th role="columnheader" data-label="Description">Item two</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Warning</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-8-dropdown-kebab-nested-tr2-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-8-dropdown-kebab-nested-tr2-button" hidden>
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
              <th role="columnheader" data-label="Description">Item three</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-8-dropdown-kebab-nested-tr3-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-8-dropdown-kebab-nested-tr3-button" hidden>
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
              <th role="columnheader" data-label="Description">Item four</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-8-dropdown-kebab-nested-tr4-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-8-dropdown-kebab-nested-tr4-button" hidden>
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
              <th role="columnheader" data-label="Description">Item five</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-8-dropdown-kebab-nested-tr5-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-8-dropdown-kebab-nested-tr5-button" hidden>
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
      </td>
    </tr>
    <tr class="pf-c-table__expandable-row" role="row">
      <td class="pf-m-no-padding" role="cell" colspan="7">
        <table class="pf-c-table pf-m-compact pf-m-no-border-rows" role="grid" id="table-compound-expansion-nested-table-9" aria-label="Nested table" id="table-compound-expansion-nested-table-9">
          <thead>
            <tr role="row">
              <th class="pf-c-table__sort " role="columnheader" aria-sort="none" scope="col">
                <button class="pf-c-table__button">
                  <div class="pf-c-table__button-content">
                    <span class="pf-c-table__text">Description</span>
                    <span class="pf-c-table__sort-indicator">
                      <i class="fas fa-arrows-alt-v"></i>
                    </span>
                  </div>
                </button>
              </th>
              <th role="columnheader" scope="col">Date</th>
              <th role="columnheader" scope="col">Status</th>
              <td role="cell"></td>
            </tr>
          </thead>
          <tbody role="rowgroup">
            <tr role="row">
              <th role="columnheader" data-label="Description">Item one</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-9-dropdown-kebab-nested-tr1-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-9-dropdown-kebab-nested-tr1-button" hidden>
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
              <th role="columnheader" data-label="Description">Item two</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Warning</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-9-dropdown-kebab-nested-tr2-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-9-dropdown-kebab-nested-tr2-button" hidden>
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
              <th role="columnheader" data-label="Description">Item three</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-9-dropdown-kebab-nested-tr3-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-9-dropdown-kebab-nested-tr3-button" hidden>
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
              <th role="columnheader" data-label="Description">Item four</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-9-dropdown-kebab-nested-tr4-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-9-dropdown-kebab-nested-tr4-button" hidden>
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
              <th role="columnheader" data-label="Description">Item five</th>
              <td role="cell" data-label="Date">May 9, 2018</td>
              <td role="cell" data-label="Status">Active</td>
              <td class="pf-c-table__action" role="cell">
                <div class="pf-c-dropdown">
                  <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="table-compound-expansion-nested-table-9-dropdown-kebab-nested-tr5-button" aria-expanded="false" aria-label="Actions">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  </button>
                  <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="table-compound-expansion-nested-table-9-dropdown-kebab-nested-tr5-button" hidden>
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
      </td>
    </tr>
  </tbody>
</table>`,
    },
  },
  {
    displayName: "with-hiddenvisible-breakpoint-modifiers",
    picture: {
      src: "./pictures/table/with-hiddenvisible-breakpoint-modifiers.png",
      width: 640,
      height: 379,
    },
    snippet: {
      html: `<table class="pf-c-table pf-m-grid-lg" role="grid" aria-label="Table with hidden and visible modifiers example" id="table-hidden-visible">
  <thead>
    <tr role="row">
      <th class="pf-m-hidden pf-m-visible-on-md pf-m-hidden-on-lg " role="columnheader" scope="col">Repositories</th>
      <th role="columnheader" scope="col">Branches</th>
      <th class="pf-m-hidden-on-md pf-m-visible-on-lg " role="columnheader" scope="col">Pull requests</th>
      <th role="columnheader" scope="col">Workspaces</th>
      <th class="pf-m-hidden pf-m-visible-on-sm " role="columnheader" scope="col">Last commit</th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row">
      <td class="pf-m-hidden pf-m-visible-on-md pf-m-hidden-on-lg" role="cell" data-label="Repository name">Visible only on md breakpoint</td>
      <td role="cell" data-label="Branches">10</td>
      <td class="pf-m-hidden-on-md pf-m-visible-on-lg" role="cell" data-label="Pull requests">Hidden only on md breakpoint</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td class="pf-m-hidden pf-m-visible-on-sm" role="cell" data-label="Last commit">Hidden on xs breakpoint</td>
    </tr>
    <tr role="row">
      <td class="pf-m-hidden pf-m-visible-on-md pf-m-hidden-on-lg" role="cell" data-label="Repository name">Repository 2</td>
      <td role="cell" data-label="Branches">10</td>
      <td class="pf-m-hidden-on-md pf-m-visible-on-lg" role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td class="pf-m-hidden pf-m-visible-on-sm" role="cell" data-label="Last commit">2 days ago</td>
    </tr>
    <tr role="row">
      <td class="pf-m-hidden pf-m-visible-on-md pf-m-hidden-on-lg" role="cell" data-label="Repository name">Repository 3</td>
      <td role="cell" data-label="Branches">10</td>
      <td class="pf-m-hidden-on-md pf-m-visible-on-lg" role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td class="pf-m-hidden pf-m-visible-on-sm" role="cell" data-label="Last commit">2 days ago</td>
    </tr>
    <tr role="row">
      <td class="pf-m-hidden pf-m-visible-on-md pf-m-hidden-on-lg" role="cell" data-label="Repository name">Repository 4</td>
      <td role="cell" data-label="Branches">10</td>
      <td class="pf-m-hidden-on-md pf-m-visible-on-lg" role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td class="pf-m-hidden pf-m-visible-on-sm" role="cell" data-label="Last commit">2 days ago</td>
    </tr>
  </tbody>
</table>`,
    },
  },
  {
    displayName: "with-width-modifiers",
    picture: {
      src: "./pictures/table/with-width-modifiers.png",
      width: 670,
      height: 454,
    },
    snippet: {
      html: `<table class="pf-c-table pf-m-grid-md" role="grid" aria-label="This is a width modifier expandable" id="table-width-modifiers">
  <thead>
    <tr role="row">
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-width-modifiers-check-all" aria-label="Check all rows" />
      </td>
      <th class="pf-m-width-30 pf-c-table__sort pf-m-selected" role="columnheader" aria-sort="ascending" scope="col">
        <button class="pf-c-table__button">
          <div class="pf-c-table__button-content">
            <span class="pf-c-table__text">Repositories</span>
            <span class="pf-c-table__sort-indicator">
              <i class="fas fa-long-arrow-alt-up"></i>
            </span>
          </div>
        </button>
      </th>
      <th class="pf-c-table__sort " role="columnheader" aria-sort="none" scope="col">
        <button class="pf-c-table__button">
          <div class="pf-c-table__button-content">
            <span class="pf-c-table__text">Branches</span>
            <span class="pf-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </div>
        </button>
      </th>
      <th class="pf-c-table__sort " role="columnheader" aria-sort="none" scope="col">
        <button class="pf-c-table__button">
          <div class="pf-c-table__button-content">
            <span class="pf-c-table__text">Pull requests</span>
            <span class="pf-c-table__sort-indicator">
              <i class="fas fa-arrows-alt-v"></i>
            </span>
          </div>
        </button>
      </th>
      <th class="pf-m-fit-content " role="columnheader" scope="col">Workspaces</th>
      <th class="pf-m-fit-content " role="columnheader" scope="col">Last commit</th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row">
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-width-modifiers-checkrow1" aria-labelledby="table-width-modifiers-node1" />
      </td>
      <th role="columnheader" data-label="Repository name">
        <div id="table-width-modifiers-node1">Node 1</div>
      </th>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td role="cell" data-label="Last commit">2 days ago</td>
    </tr>
    <tr role="row">
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-width-modifiers-checkrow2" aria-labelledby="table-width-modifiers-node2" />
      </td>
      <th role="columnheader" data-label="Repository name">
        <div>
          <div id="table-width-modifiers-node2">Node 2</div>
          <a href="#">siemur/test-space</a>
        </div>
      </th>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td role="cell" data-label="Last commit">2 days ago</td>
    </tr>
    <tr role="row">
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-width-modifiers-checkrow3" aria-labelledby="table-width-modifiers-node3" />
      </td>
      <th role="columnheader" data-label="Repository name">
        <div>
          <div id="table-width-modifiers-node3">Node 3</div>
          <a href="#">siemur/test-space</a>
        </div>
      </th>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td role="cell" data-label="Last commit">2 days ago</td>
    </tr>
    <tr role="row">
      <td class="pf-c-table__check" role="cell">
        <input type="checkbox" name="table-width-modifiers-checkrow4" aria-labelledby="table-width-modifiers-node4" />
      </td>
      <th role="columnheader" data-label="Repository name">
        <div>
          <div id="table-width-modifiers-node4">Node 4</div>
          <a href="#">siemur/test-space</a>
        </div>
      </th>
      <td role="cell" data-label="Branches">10</td>
      <td role="cell" data-label="Pull requests">25</td>
      <td role="cell" data-label="Workspaces">5</td>
      <td role="cell" data-label="Last commit">2 days ago</td>
    </tr>
  </tbody>
</table>`,
    },
  },
];
