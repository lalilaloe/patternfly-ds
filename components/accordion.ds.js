export default {
  displayName: "accordion",
  name: "accordion",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/accordion/",
};

export const variants = [
  {
    displayName: "definition-list",
    picture: {
      src: "./pictures/accordion/definition-list.png",
      width: 855,
      height: 312,
    },
    snippet: {
      html: `<dl class="pf-c-accordion">
  <dt>
    <button class="pf-c-accordion__toggle" aria-expanded="false">
      <span class="pf-c-accordion__toggle-text">Item one</span>
      <span class="pf-c-accordion__toggle-icon">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
    </button>
  </dt>
  <dd class="pf-c-accordion__expanded-content" hidden>
    <div class="pf-c-accordion__expanded-content-body">This text is hidden</div>
  </dd>
  <dt>
    <button class="pf-c-accordion__toggle" aria-expanded="false">
      <span class="pf-c-accordion__toggle-text">Item two</span>
      <span class="pf-c-accordion__toggle-icon">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
    </button>
  </dt>
  <dd class="pf-c-accordion__expanded-content" hidden>
    <div class="pf-c-accordion__expanded-content-body">This text is hidden</div>
  </dd>
  <dt>
    <button class="pf-c-accordion__toggle" aria-expanded="false">
      <span class="pf-c-accordion__toggle-text">Item three</span>
      <span class="pf-c-accordion__toggle-icon">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
    </button>
  </dt>
  <dd class="pf-c-accordion__expanded-content" hidden>
    <div class="pf-c-accordion__expanded-content-body">This text is hidden</div>
  </dd>
  <dt>
    <button class="pf-c-accordion__toggle pf-m-expanded" aria-expanded="true">
      <span class="pf-c-accordion__toggle-text">Item four</span>
      <span class="pf-c-accordion__toggle-icon">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
    </button>
  </dt>
  <dd class="pf-c-accordion__expanded-content pf-m-expanded">
    <div class="pf-c-accordion__expanded-content-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
  </dd>
  <dt>
    <button class="pf-c-accordion__toggle" aria-expanded="false">
      <span class="pf-c-accordion__toggle-text">Item five</span>
      <span class="pf-c-accordion__toggle-icon">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
    </button>
  </dt>
  <dd class="pf-c-accordion__expanded-content" hidden>
    <div class="pf-c-accordion__expanded-content-body">This text is hidden</div>
  </dd>
</dl>`,
    },
  },
  {
    displayName: "fixed",
    picture: {
      src: "./pictures/accordion/fixed.png",
      width: 855,
      height: 383,
    },
    snippet: {
      html: `<div class="pf-c-accordion">
  <h3>
    <button class="pf-c-accordion__toggle" aria-expanded="false">
      <span class="pf-c-accordion__toggle-text">Item one</span>
      <span class="pf-c-accordion__toggle-icon">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
    </button>
  </h3>
  <div class="pf-c-accordion__expanded-content pf-m-fixed" hidden>
    <div class="pf-c-accordion__expanded-content-body">This text is hidden</div>
  </div>
  <h3>
    <button class="pf-c-accordion__toggle pf-m-expanded" aria-expanded="true">
      <span class="pf-c-accordion__toggle-text">Item two</span>
      <span class="pf-c-accordion__toggle-icon">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
    </button>
  </h3>
  <div class="pf-c-accordion__expanded-content pf-m-expanded pf-m-fixed">
    <div class="pf-c-accordion__expanded-content-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
  </div>
  <h3>
    <button class="pf-c-accordion__toggle" aria-expanded="false">
      <span class="pf-c-accordion__toggle-text">Item three</span>
      <span class="pf-c-accordion__toggle-icon">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
    </button>
  </h3>
  <div class="pf-c-accordion__expanded-content pf-m-fixed" hidden>
    <div class="pf-c-accordion__expanded-content-body">This text is hidden</div>
  </div>
  <h3>
    <button class="pf-c-accordion__toggle" aria-expanded="false">
      <span class="pf-c-accordion__toggle-text">Item four</span>
      <span class="pf-c-accordion__toggle-icon">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
    </button>
  </h3>
  <div class="pf-c-accordion__expanded-content pf-m-fixed" hidden>
    <div class="pf-c-accordion__expanded-content-body">This text is hidden</div>
  </div>
  <h3>
    <button class="pf-c-accordion__toggle" aria-expanded="false">
      <span class="pf-c-accordion__toggle-text">Item five</span>
      <span class="pf-c-accordion__toggle-icon">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
    </button>
  </h3>
  <div class="pf-c-accordion__expanded-content pf-m-fixed" hidden>
    <div class="pf-c-accordion__expanded-content-body">This text is hidden</div>
  </div>
</div>`,
    },
  },
  {
    displayName: "fluid",
    picture: {
      src: "./pictures/accordion/fluid.png",
      width: 855,
      height: 312,
    },
    snippet: {
      html: `<div class="pf-c-accordion">
  <h3>
    <button class="pf-c-accordion__toggle" aria-expanded="false">
      <span class="pf-c-accordion__toggle-text">Item one</span>
      <span class="pf-c-accordion__toggle-icon">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
    </button>
  </h3>
  <div class="pf-c-accordion__expanded-content" hidden>
    <div class="pf-c-accordion__expanded-content-body">This text is hidden</div>
  </div>
  <h3>
    <button class="pf-c-accordion__toggle" aria-expanded="false">
      <span class="pf-c-accordion__toggle-text">Item two</span>
      <span class="pf-c-accordion__toggle-icon">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
    </button>
  </h3>
  <div class="pf-c-accordion__expanded-content" hidden>
    <div class="pf-c-accordion__expanded-content-body">This text is hidden</div>
  </div>
  <h3>
    <button class="pf-c-accordion__toggle" aria-expanded="false">
      <span class="pf-c-accordion__toggle-text">Item three</span>
      <span class="pf-c-accordion__toggle-icon">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
    </button>
  </h3>
  <div class="pf-c-accordion__expanded-content" hidden>
    <div class="pf-c-accordion__expanded-content-body">This text is hidden</div>
  </div>
  <h3>
    <button class="pf-c-accordion__toggle pf-m-expanded" aria-expanded="true">
      <span class="pf-c-accordion__toggle-text">Item four</span>
      <span class="pf-c-accordion__toggle-icon">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
    </button>
  </h3>
  <div class="pf-c-accordion__expanded-content pf-m-expanded">
    <div class="pf-c-accordion__expanded-content-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
  </div>
  <h3>
    <button class="pf-c-accordion__toggle" aria-expanded="false">
      <span class="pf-c-accordion__toggle-text">Item five</span>
      <span class="pf-c-accordion__toggle-icon">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
    </button>
  </h3>
  <div class="pf-c-accordion__expanded-content" hidden>
    <div class="pf-c-accordion__expanded-content-body">This text is hidden</div>
  </div>
</div>`,
    },
  },
];
