export default {
  displayName: "tabs",
  name: "tabs",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/tabs/",
};

export const variants = [
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/tabs/box.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-tabs pf-m-box" id="box-example">
  <button class="pf-c-tabs__scroll-button" disabled aria-hidden="true" aria-label="Scroll left">
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="box-example-users-link">
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button class="pf-c-tabs__link" id="box-example-containers-link">
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="box-example-database-link">
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="box-example-server-link">
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="box-example-system-link">
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="box-example-network-wired-link">
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>
  <button class="pf-c-tabs__scroll-button" disabled aria-hidden="true" aria-label="Scroll right">
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/tabs/box-overflow.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-tabs pf-m-box pf-m-scrollable" id="box-overflow-example">
  <button class="pf-c-tabs__scroll-button" disabled aria-label="Scroll left">
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="box-overflow-example-users-link">
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button class="pf-c-tabs__link" id="box-overflow-example-containers-link">
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="box-overflow-example-database-link">
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="box-overflow-example-server-link">
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="box-overflow-example-system-link">
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="box-overflow-example-network-wired-link">
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>
  <button class="pf-c-tabs__scroll-button" aria-label="Scroll right">
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/tabs/box-tabs-with-sub-tabs.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-tabs pf-m-box pf-m-scrollable" id="box-parent-example">
  <button class="pf-c-tabs__scroll-button" aria-label="Scroll left">
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="box-parent-example-users-link">
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button class="pf-c-tabs__link" id="box-parent-example-containers-link">
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="box-parent-example-database-link">
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="box-parent-example-server-link">
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="box-parent-example-system-link">
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="box-parent-example-network-wired-link">
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>
  <button class="pf-c-tabs__scroll-button" aria-label="Scroll right">
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>
<div class="pf-c-tabs pf-m-secondary pf-m-scrollable" id="box-child-example">
  <button class="pf-c-tabs__scroll-button" aria-label="Scroll left">
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="box-child-example-sub-1-link">
        <span class="pf-c-tabs__item-text">Item 1</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="box-child-example-sub-2-link">
        <span class="pf-c-tabs__item-text">Item 2</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button class="pf-c-tabs__link" id="box-child-example-sub-3-link">
        <span class="pf-c-tabs__item-text">Item 3</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="box-child-example-sub-4-link">
        <span class="pf-c-tabs__item-text">Item 4</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="box-child-example-sub-5-link">
        <span class="pf-c-tabs__item-text">Item 5</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="box-child-example-sub-6-link">
        <span class="pf-c-tabs__item-text">Item 6</span>
      </button>
    </li>
  </ul>
  <button class="pf-c-tabs__scroll-button" aria-label="Scroll right">
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/tabs/box-vertical.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-tabs pf-m-box pf-m-vertical" id="box-vertical-example">
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="box-vertical-example-users-link">
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button class="pf-c-tabs__link" id="box-vertical-example-containers-link">
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="box-vertical-example-database-link">
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="box-vertical-example-server-link">
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="box-vertical-example-system-link">
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="box-vertical-example-network-wired-link">
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/tabs/default.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-tabs" id="default-example">
  <button class="pf-c-tabs__scroll-button" disabled aria-hidden="true" aria-label="Scroll left">
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="default-example-users-link">
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button class="pf-c-tabs__link" id="default-example-containers-link">
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="default-example-database-link">
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="default-example-server-link">
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="default-example-system-link">
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="default-example-network-wired-link">
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>
  <button class="pf-c-tabs__scroll-button" disabled aria-hidden="true" aria-label="Scroll right">
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/tabs/default-overflow-beginning-of-list.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-tabs pf-m-scrollable" id="default-overflow-beginning-of-list-example">
  <button class="pf-c-tabs__scroll-button" disabled aria-label="Scroll left">
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="default-overflow-beginning-of-list-example-users-link">
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button class="pf-c-tabs__link" id="default-overflow-beginning-of-list-example-containers-link">
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="default-overflow-beginning-of-list-example-database-link">
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="default-overflow-beginning-of-list-example-server-link">
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="default-overflow-beginning-of-list-example-system-link">
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="default-overflow-beginning-of-list-example-network-wired-link">
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>
  <button class="pf-c-tabs__scroll-button" aria-label="Scroll right">
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/tabs/filled.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-tabs pf-m-fill" id="filled-example">
  <button class="pf-c-tabs__scroll-button" disabled aria-hidden="true" aria-label="Scroll left">
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="filled-example-users-link">
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button class="pf-c-tabs__link" id="filled-example-containers-link">
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="filled-example-database-link">
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>
  </ul>
  <button class="pf-c-tabs__scroll-button" disabled aria-hidden="true" aria-label="Scroll right">
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/tabs/filled-box.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-tabs pf-m-fill pf-m-box" id="filled-box-example">
  <button class="pf-c-tabs__scroll-button" disabled aria-hidden="true" aria-label="Scroll left">
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="filled-box-example-users-link">
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button class="pf-c-tabs__link" id="filled-box-example-containers-link">
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="filled-box-example-database-link">
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>
  </ul>
  <button class="pf-c-tabs__scroll-button" disabled aria-hidden="true" aria-label="Scroll right">
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/tabs/filled-box-with-icons.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-tabs pf-m-fill pf-m-box" id="filled-box-with-icons-example">
  <button class="pf-c-tabs__scroll-button" disabled aria-hidden="true" aria-label="Scroll left">
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="filled-box-with-icons-example-users-link">
        <span class="pf-c-tabs__item-icon" aria-hidden="true">
          <i class="fas fa-fas fa-users"></i>
        </span>
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button class="pf-c-tabs__link" id="filled-box-with-icons-example-containers-link">
        <span class="pf-c-tabs__item-icon" aria-hidden="true">
          <i class="fas fa-fas fa-box"></i>
        </span>
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="filled-box-with-icons-example-database-link">
        <span class="pf-c-tabs__item-icon" aria-hidden="true">
          <i class="fas fa-database"></i>
        </span>
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>
  </ul>
  <button class="pf-c-tabs__scroll-button" disabled aria-hidden="true" aria-label="Scroll right">
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/tabs/filled-with-icons.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-tabs pf-m-fill" id="filled-with-icons-example">
  <button class="pf-c-tabs__scroll-button" disabled aria-hidden="true" aria-label="Scroll left">
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="filled-with-icons-example-users-link">
        <span class="pf-c-tabs__item-icon" aria-hidden="true">
          <i class="fas fa-fas fa-users"></i>
        </span>
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button class="pf-c-tabs__link" id="filled-with-icons-example-containers-link">
        <span class="pf-c-tabs__item-icon" aria-hidden="true">
          <i class="fas fa-fas fa-box"></i>
        </span>
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="filled-with-icons-example-database-link">
        <span class="pf-c-tabs__item-icon" aria-hidden="true">
          <i class="fas fa-database"></i>
        </span>
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>
  </ul>
  <button class="pf-c-tabs__scroll-button" disabled aria-hidden="true" aria-label="Scroll right">
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/tabs/icons-and-text.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-tabs" id="icons-example">
  <button class="pf-c-tabs__scroll-button" disabled aria-hidden="true" aria-label="Scroll left">
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="icons-example-users-link">
        <span class="pf-c-tabs__item-icon" aria-hidden="true">
          <i class="fas fa-fas fa-users"></i>
        </span>
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button class="pf-c-tabs__link" id="icons-example-containers-link">
        <span class="pf-c-tabs__item-icon" aria-hidden="true">
          <i class="fas fa-fas fa-box"></i>
        </span>
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="icons-example-database-link">
        <span class="pf-c-tabs__item-icon" aria-hidden="true">
          <i class="fas fa-database"></i>
        </span>
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="icons-example-server-link">
        <span class="pf-c-tabs__item-icon" aria-hidden="true">
          <i class="fas fa-server"></i>
        </span>
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="icons-example-system-link">
        <span class="pf-c-tabs__item-icon" aria-hidden="true">
          <i class="fas fa-laptop"></i>
        </span>
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="icons-example-network-wired-link">
        <span class="pf-c-tabs__item-icon" aria-hidden="true">
          <i class="fas fa-project-diagram"></i>
        </span>
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>
  <button class="pf-c-tabs__scroll-button" disabled aria-hidden="true" aria-label="Scroll right">
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/tabs/inset.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-tabs pf-m-inset-sm-on-md pf-m-inset-lg-on-lg pf-m-inset-2xl-on-xl" id="inset-example">
  <button class="pf-c-tabs__scroll-button" disabled aria-hidden="true" aria-label="Scroll left">
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="inset-example-users-link">
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button class="pf-c-tabs__link" id="inset-example-containers-link">
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="inset-example-database-link">
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="inset-example-server-link">
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="inset-example-system-link">
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="inset-example-network-wired-link">
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>
  <button class="pf-c-tabs__scroll-button" disabled aria-hidden="true" aria-label="Scroll right">
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/tabs/inset-box.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-tabs pf-m-box pf-m-inset-sm-on-md pf-m-inset-lg-on-lg pf-m-inset-2xl-on-xl" id="inset-box-example">
  <button class="pf-c-tabs__scroll-button" disabled aria-hidden="true" aria-label="Scroll left">
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="inset-box-example-users-link">
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button class="pf-c-tabs__link" id="inset-box-example-containers-link">
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="inset-box-example-database-link">
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="inset-box-example-server-link">
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="inset-box-example-system-link">
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="inset-box-example-network-wired-link">
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>
  <button class="pf-c-tabs__scroll-button" disabled aria-hidden="true" aria-label="Scroll right">
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/tabs/sub-nav-using-the-nav-element.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<nav class="pf-c-tabs" aria-label="Local" id="primary-nav-example">
  <button class="pf-c-tabs__scroll-button" disabled aria-hidden="true" aria-label="Scroll left">
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <a class="pf-c-tabs__link" href="#" id="primary-nav-example-users-link">
        <span class="pf-c-tabs__item-text">Users</span>
      </a>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <a class="pf-c-tabs__link" href="#" id="primary-nav-example-containers-link">
        <span class="pf-c-tabs__item-text">Containers</span>
      </a>
    </li>
    <li class="pf-c-tabs__item">
      <a class="pf-c-tabs__link" href="#" id="primary-nav-example-database-link">
        <span class="pf-c-tabs__item-text">Database</span>
      </a>
    </li>
    <li class="pf-c-tabs__item">
      <a class="pf-c-tabs__link" href="#" id="primary-nav-example-server-link">
        <span class="pf-c-tabs__item-text">Server</span>
      </a>
    </li>
    <li class="pf-c-tabs__item">
      <a class="pf-c-tabs__link" href="#" id="primary-nav-example-system-link">
        <span class="pf-c-tabs__item-text">System</span>
      </a>
    </li>
    <li class="pf-c-tabs__item">
      <a class="pf-c-tabs__link" href="#" id="primary-nav-example-network-wired-link">
        <span class="pf-c-tabs__item-text">Network</span>
      </a>
    </li>
  </ul>
  <button class="pf-c-tabs__scroll-button" disabled aria-hidden="true" aria-label="Scroll right">
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</nav>
<nav class="pf-c-tabs pf-m-secondary" aria-label="Local secondary" id="secondary-nav-example">
  <button class="pf-c-tabs__scroll-button" disabled aria-hidden="true" aria-label="Scroll left">
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <a class="pf-c-tabs__link" href="#" id="secondary-nav-example-sub-1-link">
        <span class="pf-c-tabs__item-text">Item 1</span>
      </a>
    </li>
    <li class="pf-c-tabs__item">
      <a class="pf-c-tabs__link" href="#" id="secondary-nav-example-sub-2-link">
        <span class="pf-c-tabs__item-text">Item 2</span>
      </a>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <a class="pf-c-tabs__link" href="#" id="secondary-nav-example-sub-3-link">
        <span class="pf-c-tabs__item-text">Item 3</span>
      </a>
    </li>
    <li class="pf-c-tabs__item">
      <a class="pf-c-tabs__link" href="#" id="secondary-nav-example-sub-4-link">
        <span class="pf-c-tabs__item-text">Item 4</span>
      </a>
    </li>
    <li class="pf-c-tabs__item">
      <a class="pf-c-tabs__link" href="#" id="secondary-nav-example-sub-5-link">
        <span class="pf-c-tabs__item-text">Item 5</span>
      </a>
    </li>
    <li class="pf-c-tabs__item">
      <a class="pf-c-tabs__link" href="#" id="secondary-nav-example-sub-6-link">
        <span class="pf-c-tabs__item-text">Item 6</span>
      </a>
    </li>
  </ul>
  <button class="pf-c-tabs__scroll-button" disabled aria-hidden="true" aria-label="Scroll right">
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</nav>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/tabs/tabs-with-sub-tabs.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-tabs pf-m-scrollable" id="default-parent-example">
  <button class="pf-c-tabs__scroll-button" aria-label="Scroll left">
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="default-parent-example-users-link">
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button class="pf-c-tabs__link" id="default-parent-example-containers-link">
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="default-parent-example-database-link">
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="default-parent-example-server-link">
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="default-parent-example-system-link">
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="default-parent-example-network-wired-link">
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>
  <button class="pf-c-tabs__scroll-button" aria-label="Scroll right">
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>
<div class="pf-c-tabs pf-m-secondary pf-m-scrollable" id="default-child-example">
  <button class="pf-c-tabs__scroll-button" aria-label="Scroll left">
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="default-child-example-sub-1-link">
        <span class="pf-c-tabs__item-text">Item 1</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="default-child-example-sub-2-link">
        <span class="pf-c-tabs__item-text">Item 2</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button class="pf-c-tabs__link" id="default-child-example-sub-3-link">
        <span class="pf-c-tabs__item-text">Item 3</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="default-child-example-sub-4-link">
        <span class="pf-c-tabs__item-text">Item 4</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="default-child-example-sub-5-link">
        <span class="pf-c-tabs__item-text">Item 5</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="default-child-example-sub-6-link">
        <span class="pf-c-tabs__item-text">Item 6</span>
      </button>
    </li>
  </ul>
  <button class="pf-c-tabs__scroll-button" aria-label="Scroll right">
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/tabs/using-the-nav-element.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<nav class="pf-c-tabs pf-m-scrollable" aria-label="Local" id="default-scroll-nav-example">
  <button class="pf-c-tabs__scroll-button" aria-label="Scroll left">
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  </button>
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <a class="pf-c-tabs__link" href="#" id="default-scroll-nav-example-users-link">
        <span class="pf-c-tabs__item-text">Users</span>
      </a>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <a class="pf-c-tabs__link" href="#" id="default-scroll-nav-example-containers-link">
        <span class="pf-c-tabs__item-text">Containers</span>
      </a>
    </li>
    <li class="pf-c-tabs__item">
      <a class="pf-c-tabs__link" href="#" id="default-scroll-nav-example-database-link">
        <span class="pf-c-tabs__item-text">Database</span>
      </a>
    </li>
    <li class="pf-c-tabs__item">
      <a class="pf-c-tabs__link" href="#" id="default-scroll-nav-example-server-link">
        <span class="pf-c-tabs__item-text">Server</span>
      </a>
    </li>
    <li class="pf-c-tabs__item">
      <a class="pf-c-tabs__link" href="#" id="default-scroll-nav-example-system-link">
        <span class="pf-c-tabs__item-text">System</span>
      </a>
    </li>
    <li class="pf-c-tabs__item">
      <a class="pf-c-tabs__link" href="#" id="default-scroll-nav-example-network-wired-link">
        <span class="pf-c-tabs__item-text">Network</span>
      </a>
    </li>
  </ul>
  <button class="pf-c-tabs__scroll-button" aria-label="Scroll right">
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  </button>
</nav>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/tabs/vertical.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-tabs pf-m-vertical" id="vertical-example">
  <ul class="pf-c-tabs__list">
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="vertical-example-users-link">
        <span class="pf-c-tabs__item-text">Users</span>
      </button>
    </li>
    <li class="pf-c-tabs__item pf-m-current">
      <button class="pf-c-tabs__link" id="vertical-example-containers-link">
        <span class="pf-c-tabs__item-text">Containers</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="vertical-example-database-link">
        <span class="pf-c-tabs__item-text">Database</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="vertical-example-server-link">
        <span class="pf-c-tabs__item-text">Server</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="vertical-example-system-link">
        <span class="pf-c-tabs__item-text">System</span>
      </button>
    </li>
    <li class="pf-c-tabs__item">
      <button class="pf-c-tabs__link" id="vertical-example-network-wired-link">
        <span class="pf-c-tabs__item-text">Network</span>
      </button>
    </li>
  </ul>
</div>`,
    },
  },
];
