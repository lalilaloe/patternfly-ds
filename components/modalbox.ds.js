export default {
  displayName: "modalbox",
  name: "modalbox",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/modalbox/",
};

export const variants = [
  {
    displayName: "basic",
    picture: {
      src: "./pictures/modalbox/basic.png",
      width: 968,
      height: 191,
    },
    snippet: {
      html: `<div class="pf-c-modal-box" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description">
  <button class="pf-c-button pf-m-plain" type="button" aria-label="Close">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
  <header class="pf-c-modal-box__header">
    <h1 class="pf-c-modal-box__title" id="modal-title">Modal title</h1>
  </header>
  <div class="pf-c-modal-box__body" id="modal-description">To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.</div>
  <footer class="pf-c-modal-box__footer">Modal footer</footer>
</div>`,
    },
  },
  {
    displayName: "custom-title",
    picture: {
      src: "./pictures/modalbox/custom-title.png",
      width: 968,
      height: 206,
    },
    snippet: {
      html: `<div class="pf-c-modal-box" role="dialog" aria-modal="true" aria-labelledby="modal-custom-title" aria-describedby="modal-custom-description">
  <button class="pf-c-button pf-m-plain" type="button" aria-label="Close">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
  <header class="pf-c-modal-box__header">
    <h1 class="pf-c-title pf-m-4xl" id="modal-custom-title">Custom title</h1>
  </header>
  <div class="pf-c-modal-box__body" id="modal-custom-description">To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.</div>
  <footer class="pf-c-modal-box__footer">Modal footer</footer>
</div>`,
    },
  },
  {
    displayName: "large",
    picture: {
      src: "./pictures/modalbox/large.png",
      width: 968,
      height: 215,
    },
    snippet: {
      html: `<div class="pf-c-modal-box pf-m-lg" role="dialog" aria-modal="true" aria-labelledby="modal-lg-title" aria-describedby="modal-lg-description">
  <button class="pf-c-button pf-m-plain" type="button" aria-label="Close">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
  <header class="pf-c-modal-box__header">
    <h1 class="pf-c-modal-box__title" id="modal-lg-title">Modal title</h1>
  </header>
  <div class="pf-c-modal-box__body" id="modal-lg-description">Static text describing modal purpose. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
  <footer class="pf-c-modal-box__footer">Modal footer</footer>
</div>`,
    },
  },
  {
    displayName: "medium",
    picture: {
      src: "./pictures/modalbox/medium.png",
      width: 840,
      height: 215,
    },
    snippet: {
      html: `<div class="pf-c-modal-box pf-m-md" role="dialog" aria-modal="true" aria-labelledby="modal-md-title" aria-describedby="modal-md-description">
  <button class="pf-c-button pf-m-plain" type="button" aria-label="Close dialog">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
  <header class="pf-c-modal-box__header">
    <h1 class="pf-c-modal-box__title" id="modal-md-title">Modal title</h1>
  </header>
  <div class="pf-c-modal-box__body" id="modal-md-description">Static text describing modal purpose. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
  <footer class="pf-c-modal-box__footer">Modal footer</footer>
</div>`,
    },
  },
  {
    displayName: "modal-box-as-generic-container",
    picture: {
      src: "./pictures/modalbox/modal-box-as-generic-container.png",
      width: 968,
      height: 48,
    },
    snippet: {
      html: `<div class="pf-c-modal-box" role="dialog" aria-modal="true" aria-labelledby="modal-generic-container-description">
  <p id="modal-generic-container-description">The modal box children elements can be removed, and the modal serves as a generic modal container. One use case of this is when creating a wizard in a modal.</p>
</div>`,
    },
  },
  {
    displayName: "small",
    picture: {
      src: "./pictures/modalbox/small.png",
      width: 560,
      height: 239,
    },
    snippet: {
      html: `<div class="pf-c-modal-box pf-m-sm" role="dialog" aria-modal="true" aria-labelledby="modal-sm-title" aria-describedby="modal-sm-description">
  <button class="pf-c-button pf-m-plain" type="button" aria-label="Close dialog">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
  <header class="pf-c-modal-box__header">
    <h1 class="pf-c-modal-box__title" id="modal-sm-title">Modal title</h1>
  </header>
  <div class="pf-c-modal-box__body" id="modal-sm-description">Static text describing modal purpose. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
  <footer class="pf-c-modal-box__footer">Modal footer</footer>
</div>`,
    },
  },
  {
    displayName: "with-description",
    picture: {
      src: "./pictures/modalbox/with-description.png",
      width: 968,
      height: 243,
    },
    snippet: {
      html: `<div class="pf-c-modal-box" role="dialog" aria-modal="true" aria-labelledby="modal-with-description-title" aria-describedby="modal-with-description-description">
  <button class="pf-c-button pf-m-plain" type="button" aria-label="Close">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
  <header class="pf-c-modal-box__header">
    <h1 class="pf-c-modal-box__title" id="modal-with-description-title">Modal title</h1>
    <div class="pf-c-modal-box__description" id="modal-with-description-description">A description is used when you want to provide more info about the modal than the title is able to describe. The content in the description is static and will not scroll with the rest of the modal body.</div>
  </header>
  <div class="pf-c-modal-box__body">To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.</div>
  <footer class="pf-c-modal-box__footer">Modal footer</footer>
</div>`,
    },
  },
  {
    displayName: "without-title",
    picture: {
      src: "./pictures/modalbox/without-title.png",
      width: 968,
      height: 216,
    },
    snippet: {
      html: `<div class="pf-c-modal-box" role="dialog" aria-modal="true" aria-label="Example of a modal without a title" aria-describedby="modal-no-title-description">
  <button class="pf-c-button pf-m-plain" type="button" aria-label="Close">
    <i class="fas fa-times" aria-hidden="true"></i>
  </button>
  <div class="pf-c-modal-box__body">
    <span id="modal-no-title-description">When static text describing the modal is available, it can be wrapped with an ID referring to the modal's aria-describedby value. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  <footer class="pf-c-modal-box__footer">Modal footer</footer>
</div>`,
    },
  },
];
