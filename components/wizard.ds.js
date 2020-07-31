export default {
  displayName: "wizard",
  name: "wizard",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/wizard/",
};

export const variants = [
  {
    displayName: "basic",
    picture: {
      src: "./components/pictures/wizard/basic.png",
      width: 800,
      height: 500,
    },
    snippet: {
      html: `<div class="pf-c-wizard">
  <div class="pf-c-wizard__header">
    <button class="pf-c-button pf-m-plain pf-c-wizard__close" type="button" aria-label="Close">
      <i class="fas fa-times" aria-hidden="true"></i>
    </button>
    <h1 class="pf-c-title pf-m-3xl pf-c-wizard__title">Wizard title</h1>
    <p class="pf-c-wizard__description">Here is where the description goes</p>
  </div>
  <button aria-label="Wizard Header Toggle" class="pf-c-wizard__toggle" aria-expanded="false">
    <ol class="pf-c-wizard__toggle-list">
      <li class="pf-c-wizard__toggle-list-item">
        <span class="pf-c-wizard__toggle-num">2</span>Configuration
        <i class="fas fa-angle-right pf-c-wizard__toggle-separator" aria-hidden="true"></i>
      </li>
      <li class="pf-c-wizard__toggle-list-item">Substep B</li>
    </ol>
    <span class="pf-c-wizard__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-c-wizard__outer-wrap">
    <div class="pf-c-wizard__inner-wrap">
      <nav class="pf-c-wizard__nav" aria-label="Steps">
        <ol class="pf-c-wizard__nav-list">
          <li class="pf-c-wizard__nav-item">
            <button class="pf-c-wizard__nav-link">Information</button>
          </li>
          <li class="pf-c-wizard__nav-item">
            <button class="pf-c-wizard__nav-link pf-m-current">Configuration</button>
            <ol class="pf-c-wizard__nav-list">
              <li class="pf-c-wizard__nav-item">
                <button class="pf-c-wizard__nav-link">Substep A</button>
              </li>
              <li class="pf-c-wizard__nav-item">
                <button class="pf-c-wizard__nav-link pf-m-current" aria-current="page">Substep B</button>
              </li>
              <li class="pf-c-wizard__nav-item">
                <button class="pf-c-wizard__nav-link">Substep C</button>
              </li>
            </ol>
          </li>
          <li class="pf-c-wizard__nav-item">
            <button class="pf-c-wizard__nav-link">Additional</button>
          </li>
          <li class="pf-c-wizard__nav-item">
            <button class="pf-c-wizard__nav-link" disabled>Review</button>
          </li>
        </ol>
      </nav>
      <main class="pf-c-wizard__main">
        <div class="pf-c-wizard__main-body">
          <p>Wizard content goes here</p>
        </div>
      </main>
    </div>
    <footer class="pf-c-wizard__footer">
      <button class="pf-c-button pf-m-primary" type="submit">Next</button>
      <button class="pf-c-button pf-m-secondary" type="button">Back</button>
      <button class="pf-c-button pf-m-link" type="button">Cancel</button>
    </footer>
  </div>
</div>`,
    },
  },
  {
    displayName: "finished",
    picture: {
      src: "./components/pictures/wizard/finished.png",
      width: 800,
      height: 500,
    },
    snippet: {
      html: `<div class="pf-c-wizard pf-m-finished">
  <div class="pf-c-wizard__header">
    <button class="pf-c-button pf-m-plain pf-c-wizard__close" type="button" aria-label="Close">
      <i class="fas fa-times" aria-hidden="true"></i>
    </button>
    <h1 class="pf-c-title pf-m-3xl pf-c-wizard__title">Wizard title</h1>
    <p class="pf-c-wizard__description">Here is where the description goes</p>
  </div>
  <button aria-label="Wizard Header Toggle" class="pf-c-wizard__toggle" aria-expanded="false">
    <ol class="pf-c-wizard__toggle-list">
      <li class="pf-c-wizard__toggle-list-item">
        <span class="pf-c-wizard__toggle-num">2</span>Configuration
        <i class="fas fa-angle-right pf-c-wizard__toggle-separator" aria-hidden="true"></i>
      </li>
      <li class="pf-c-wizard__toggle-list-item">Substep B</li>
    </ol>
    <span class="pf-c-wizard__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-c-wizard__outer-wrap">
    <div class="pf-c-wizard__inner-wrap">
      <nav class="pf-c-wizard__nav" aria-label="Steps">
        <ol class="pf-c-wizard__nav-list">
          <li class="pf-c-wizard__nav-item">
            <button class="pf-c-wizard__nav-link">Information</button>
          </li>
          <li class="pf-c-wizard__nav-item">
            <button class="pf-c-wizard__nav-link">Configuration</button>
            <ol class="pf-c-wizard__nav-list">
              <li class="pf-c-wizard__nav-item">
                <button class="pf-c-wizard__nav-link">Substep A</button>
              </li>
              <li class="pf-c-wizard__nav-item">
                <button class="pf-c-wizard__nav-link">Substep B</button>
              </li>
              <li class="pf-c-wizard__nav-item">
                <button class="pf-c-wizard__nav-link">Substep C</button>
              </li>
            </ol>
          </li>
          <li class="pf-c-wizard__nav-item">
            <button class="pf-c-wizard__nav-link">Additional</button>
          </li>
          <li class="pf-c-wizard__nav-item">
            <button class="pf-c-wizard__nav-link">Review</button>
          </li>
        </ol>
      </nav>
      <main class="pf-c-wizard__main">
        <div class="pf-c-wizard__main-body">
          <div class="pf-l-bullseye">
            <div class="pf-c-empty-state pf-m-lg">
              <div class="pf-c-empty-state__content">
                <i class="fas fa- fa-cogs pf-c-empty-state__icon" aria-hidden="true"></i>
                <h1 class="pf-c-title pf-m-lg">Configuration in progress</h1>
                <div class="pf-c-empty-state__body">
                  <div class="pf-c-progress pf-m-singleline" id="progress-singleline-example">
                    <div class="pf-c-progress__description" id="progress-singleline-example-description"></div>
                    <div class="pf-c-progress__status" aria-hidden="true">
                      <span class="pf-c-progress__measure">33%</span>
                    </div>
                    <div class="pf-c-progress__bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="33" aria-describedby="progress-singleline-example-description">
                      <div class="pf-c-progress__indicator" style="width:33%;"></div>
                    </div>
                  </div>
                </div>
                <div class="pf-c-empty-state__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non pulvinar tortor. Maecenas sit amet pellentesque velit, eu eleifend mauris.</div>
                <div class="pf-c-empty-state__secondary">
                  <button class="pf-c-button pf-m-link" type="button">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <footer class="pf-c-wizard__footer">
      <button class="pf-c-button pf-m-primary" type="submit">Next</button>
      <button class="pf-c-button pf-m-secondary" type="button">Back</button>
      <button class="pf-c-button pf-m-link" type="button">Cancel</button>
    </footer>
  </div>
</div>`,
    },
  },
  {
    displayName: "nav-expanded-mobile",
    picture: {
      src: "./components/pictures/wizard/nav-expanded-mobile.png",
      width: 800,
      height: 500,
    },
    snippet: {
      html: `<div class="pf-c-wizard">
  <div class="pf-c-wizard__header">
    <button class="pf-c-button pf-m-plain pf-c-wizard__close" type="button" aria-label="Close">
      <i class="fas fa-times" aria-hidden="true"></i>
    </button>
    <h1 class="pf-c-title pf-m-3xl pf-c-wizard__title">Wizard title</h1>
    <p class="pf-c-wizard__description">Here is where the description goes</p>
  </div>
  <button aria-label="Wizard Header Toggle" class="pf-c-wizard__toggle pf-m-expanded" aria-expanded="true">
    <ol class="pf-c-wizard__toggle-list">
      <li class="pf-c-wizard__toggle-list-item">
        <span class="pf-c-wizard__toggle-num">2</span>Configuration
        <i class="fas fa-angle-right pf-c-wizard__toggle-separator" aria-hidden="true"></i>
      </li>
      <li class="pf-c-wizard__toggle-list-item">Substep B</li>
    </ol>
    <span class="pf-c-wizard__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-c-wizard__outer-wrap">
    <div class="pf-c-wizard__inner-wrap">
      <nav class="pf-c-wizard__nav pf-m-expanded" aria-label="Steps">
        <ol class="pf-c-wizard__nav-list">
          <li class="pf-c-wizard__nav-item">
            <button class="pf-c-wizard__nav-link">Information</button>
          </li>
          <li class="pf-c-wizard__nav-item">
            <button class="pf-c-wizard__nav-link pf-m-current">Configuration</button>
            <ol class="pf-c-wizard__nav-list">
              <li class="pf-c-wizard__nav-item">
                <button class="pf-c-wizard__nav-link">Substep A</button>
              </li>
              <li class="pf-c-wizard__nav-item">
                <button class="pf-c-wizard__nav-link pf-m-current" aria-current="page">Substep B</button>
              </li>
              <li class="pf-c-wizard__nav-item">
                <button class="pf-c-wizard__nav-link">Substep C</button>
              </li>
            </ol>
          </li>
          <li class="pf-c-wizard__nav-item">
            <button class="pf-c-wizard__nav-link">Additional</button>
          </li>
          <li class="pf-c-wizard__nav-item">
            <button class="pf-c-wizard__nav-link" disabled>Review</button>
          </li>
        </ol>
      </nav>
      <main class="pf-c-wizard__main">
        <div class="pf-c-wizard__main-body">
          <p>Wizard content goes here</p>
        </div>
      </main>
    </div>
    <footer class="pf-c-wizard__footer">
      <button class="pf-c-button pf-m-primary" type="submit">Next</button>
      <button class="pf-c-button pf-m-secondary" type="button">Back</button>
      <button class="pf-c-button pf-m-link" type="button">Cancel</button>
    </footer>
  </div>
</div>`,
    },
  },
];
