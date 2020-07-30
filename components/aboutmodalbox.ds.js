export default {
    displayName: "aboutmodalbox",
    name: "aboutmodalbox",
    homepage: "https://www.patternfly.org/v4//documentation/core/components/aboutmodalbox/"
}

export const variants = [
{
displayName:"Basic",
picture:{
src:"./pictures/aboutmodalbox/basic.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-about-modal-box" role="dialog" aria-modal="true" aria-labelledby="about-modal-title">
  <div class="pf-c-about-modal-box__brand">
    <img class="pf-c-about-modal-box__brand-image" src="/assets/images/pf_mini_logo_white.svg" alt="PatternFly brand logo" />
  </div>
  <div class="pf-c-about-modal-box__close">
    <button class="pf-c-button pf-m-plain" type="button" aria-label="Close dialog">
      <i class="fas fa-times" aria-hidden="true"></i>
    </button>
  </div>
  <div class="pf-c-about-modal-box__header">
    <h1 class="pf-c-title pf-m-4xl" id="about-modal-title">Product name</h1>
  </div>
  <div class="pf-c-about-modal-box__hero"></div>
  <div class="pf-c-about-modal-box__content">
    <div class="pf-c-about-modal-box__body">content</div>
    <p class="pf-c-about-modal-box__strapline">Trademark and copyright information here</p>
  </div>
</div>`}}
]