export default {
  displayName: "drawer",
  name: "drawer",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/drawer/",
};

export const variants = [
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/drawer/additional-section-above-main.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-drawer pf-m-expanded">
  <div class="pf-c-drawer__section">drawer-section</div>
  <div class="pf-c-drawer__main">
    <div class="pf-c-drawer__content">
      <div class="pf-c-drawer__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
    </div>
    <div class="pf-c-drawer__panel">
      <div class="pf-c-drawer__body">
        <div class="pf-c-drawer__head">
          <span>drawer-panel</span>
          <div class="pf-c-drawer__actions">
            <div class="pf-c-drawer__close">
              <button class="pf-c-button pf-m-plain" type="button" aria-label="Close drawer panel">
                <i class="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/drawer/closed-panel-on-left.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-drawer pf-m-panel-left">
  <div class="pf-c-drawer__main">
    <div class="pf-c-drawer__content">
      <div class="pf-c-drawer__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
    </div>
    <div class="pf-c-drawer__panel" hidden>
      <div class="pf-c-drawer__body">
        <div class="pf-c-drawer__head">
          <span>drawer-panel</span>
          <div class="pf-c-drawer__actions">
            <div class="pf-c-drawer__close">
              <button class="pf-c-button pf-m-plain" type="button" aria-label="Close drawer panel">
                <i class="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/drawer/closed-panel-on-right-default.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-drawer">
  <div class="pf-c-drawer__main">
    <div class="pf-c-drawer__content">
      <div class="pf-c-drawer__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
    </div>
    <div class="pf-c-drawer__panel" hidden>
      <div class="pf-c-drawer__body">
        <div class="pf-c-drawer__head">
          <span>drawer-panel</span>
          <div class="pf-c-drawer__actions">
            <div class="pf-c-drawer__close">
              <button class="pf-c-button pf-m-plain" type="button" aria-label="Close drawer panel">
                <i class="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/drawer/expanded-inline-panel.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-drawer pf-m-inline pf-m-expanded">
  <div class="pf-c-drawer__main">
    <div class="pf-c-drawer__content">
      <div class="pf-c-drawer__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
    </div>
    <div class="pf-c-drawer__panel">
      <div class="pf-c-drawer__body">
        <div class="pf-c-drawer__head">
          <span>drawer-panel</span>
          <div class="pf-c-drawer__actions">
            <div class="pf-c-drawer__close">
              <button class="pf-c-button pf-m-plain" type="button" aria-label="Close drawer panel">
                <i class="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/drawer/expanded-inline-panel-on-left.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-drawer pf-m-inline pf-m-panel-left pf-m-expanded">
  <div class="pf-c-drawer__main">
    <div class="pf-c-drawer__content">
      <div class="pf-c-drawer__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
    </div>
    <div class="pf-c-drawer__panel">
      <div class="pf-c-drawer__body">
        <div class="pf-c-drawer__head">
          <span>drawer-panel</span>
          <div class="pf-c-drawer__actions">
            <div class="pf-c-drawer__close">
              <button class="pf-c-button pf-m-plain" type="button" aria-label="Close drawer panel">
                <i class="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/drawer/expanded-panel-on-left.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-drawer pf-m-panel-left pf-m-expanded">
  <div class="pf-c-drawer__main">
    <div class="pf-c-drawer__content">
      <div class="pf-c-drawer__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
    </div>
    <div class="pf-c-drawer__panel">
      <div class="pf-c-drawer__body">
        <div class="pf-c-drawer__head">
          <span>drawer-panel</span>
          <div class="pf-c-drawer__actions">
            <div class="pf-c-drawer__close">
              <button class="pf-c-button pf-m-plain" type="button" aria-label="Close drawer panel">
                <i class="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/drawer/expanded-panel-on-right.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-drawer pf-m-expanded">
  <div class="pf-c-drawer__main">
    <div class="pf-c-drawer__content">
      <div class="pf-c-drawer__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
    </div>
    <div class="pf-c-drawer__panel">
      <div class="pf-c-drawer__body">
        <div class="pf-c-drawer__head">
          <span>drawer-panel</span>
          <div class="pf-c-drawer__actions">
            <div class="pf-c-drawer__close">
              <button class="pf-c-button pf-m-plain" type="button" aria-label="Close drawer panel">
                <i class="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/drawer/modified-content-padding.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-drawer pf-m-expanded">
  <div class="pf-c-drawer__main">
    <div class="pf-c-drawer__content">
      <div class="pf-c-drawer__body pf-m-padding">
        <b>Drawer content padding.</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
    </div>
    <div class="pf-c-drawer__panel">
      <div class="pf-c-drawer__body">
        <div class="pf-c-drawer__head">
          <span>drawer-panel</span>
          <div class="pf-c-drawer__actions">
            <div class="pf-c-drawer__close">
              <button class="pf-c-button pf-m-plain" type="button" aria-label="Close drawer panel">
                <i class="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/drawer/modified-panel-padding.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-drawer pf-m-expanded">
  <div class="pf-c-drawer__main">
    <div class="pf-c-drawer__content">
      <div class="pf-c-drawer__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
    </div>
    <div class="pf-c-drawer__panel">
      <div class="pf-c-drawer__body">
        <div class="pf-c-drawer__head">
          <span>drawer-panel</span>
          <div class="pf-c-drawer__actions">
            <div class="pf-c-drawer__close">
              <button class="pf-c-button pf-m-plain" type="button" aria-label="Close drawer panel">
                <i class="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/drawer/modified-panel-width.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-drawer pf-m-expanded">
  <div class="pf-c-drawer__main">
    <div class="pf-c-drawer__content">
      <div class="pf-c-drawer__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
    </div>
    <div class="pf-c-drawer__panel pf-m-width-75 pf-m-width-33-on-lg pf-m-width-25-on-2xl">
      <div class="pf-c-drawer__body">
        <div class="pf-c-drawer__head">
          <span>drawer-panel</span>
          <div class="pf-c-drawer__actions">
            <div class="pf-c-drawer__close">
              <button class="pf-c-button pf-m-plain" type="button" aria-label="Close drawer panel">
                <i class="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/drawer/stacked-content-body-elements.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-drawer pf-m-expanded">
  <div class="pf-c-drawer__main">
    <div class="pf-c-drawer__content">
      <div class="pf-c-drawer__body">content-body</div>
      <div class="pf-c-drawer__body pf-m-padding">content-body with padding</div>
      <div class="pf-c-drawer__body">content-body</div>
    </div>
    <div class="pf-c-drawer__panel">
      <div class="pf-c-drawer__body">
        <div class="pf-c-drawer__head">
          <div class="pf-c-drawer__actions">
            <div class="pf-c-drawer__close">
              <button class="pf-c-button pf-m-plain" type="button" aria-label="Close drawer panel">
                <i class="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>drawer-panel</div>
      </div>
      <div class="pf-c-drawer__body pf-m-no-padding">drawer-panel with no padding</div>
      <div class="pf-c-drawer__body">drawer-panel</div>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "Basic",
    picture: {
      src: "./pictures/drawer/static.png",
      width: 800,
      height: 600,
    },
    snippet: {
      html: `<div class="pf-c-drawer pf-m-expanded pf-m-static">
  <div class="pf-c-drawer__main">
    <div class="pf-c-drawer__content">
      <div class="pf-c-drawer__body">Static drawers don't have interactive elements. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
    </div>
    <div class="pf-c-drawer__panel">
      <div class="pf-c-drawer__body">
        <div class="pf-c-drawer__head">
          <span>drawer-panel</span>
          <div class="pf-c-drawer__actions">
            <div class="pf-c-drawer__close">
              <button class="pf-c-button pf-m-plain" type="button" aria-label="Close drawer panel">
                <i class="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    },
  },
];
