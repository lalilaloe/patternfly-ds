export default {
    displayName: "alert",
    name: "alert",
    homepage: "https://www.patternfly.org/v4//documentation/core/components/alert/"
}

export const variants = [
{
displayName:"Basic",
picture:{
src:"./pictures/alert/inline-types.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-alert pf-m-inline" aria-label="Inline default alert">
  <div class="pf-c-alert__icon">
    <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
  </div>
  <p class="pf-c-alert__title">
    <strong>
      <span class="pf-screen-reader">Default inline alert:</span>Default inline alert title</strong>
  </p>
</div>
<br />
<div class="pf-c-alert pf-m-info pf-m-inline" aria-label="Inline information alert">
  <div class="pf-c-alert__icon">
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-c-alert__title">
    <strong>
      <span class="pf-screen-reader">Info alert:</span>Info inline alert title</strong>
  </p>
</div>
<br />
<div class="pf-c-alert pf-m-success pf-m-inline" aria-label="Inline success alert">
  <div class="pf-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-c-alert__title">
    <strong>
      <span class="pf-screen-reader">Success alert:</span>Success inline alert title</strong>
  </p>
</div>
<br />
<div class="pf-c-alert pf-m-warning pf-m-inline" aria-label="Inline warning alert">
  <div class="pf-c-alert__icon">
    <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
  </div>
  <p class="pf-c-alert__title">
    <strong>
      <span class="pf-screen-reader">Warning alert:</span>Warning inline alert title</strong>
  </p>
</div>
<br />
<div class="pf-c-alert pf-m-danger pf-m-inline" aria-label="Inline danger alert">
  <div class="pf-c-alert__icon">
    <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-c-alert__title">
    <strong>
      <span class="pf-screen-reader">Danger alert:</span>Danger inline alert title</strong>
  </p>
</div>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/alert/inline-variations.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-alert pf-m-success pf-m-inline" aria-label="Success alert">
  <div class="pf-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-c-alert__title">
    <strong>
      <span class="pf-screen-reader">Success alert:</span>Success alert title</strong>
  </p>
  <div class="pf-c-alert__action">
    <button class="pf-c-button pf-m-plain" type="button" aria-label="Close success alert: Success alert title">
      <i class="fas fa-times" aria-hidden="true"></i>
    </button>
  </div>
  <div class="pf-c-alert__description">
    <p>Success alert description. This should tell the user more information about the alert.</p>
  </div>
  <div class="pf-c-alert__action-group">
    <button class="pf-c-button pf-m-link pf-m-inline" type="button">View details</button>
    <button class="pf-c-button pf-m-link pf-m-inline" type="button">Ignore</button>
  </div>
</div>
<br />
<div class="pf-c-alert pf-m-success pf-m-inline" aria-label="Success alert">
  <div class="pf-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-c-alert__title">
    <strong>
      <span class="pf-screen-reader">Success alert:</span>Success alert title</strong>
  </p>
  <div class="pf-c-alert__action">
    <button class="pf-c-button pf-m-plain" type="button" aria-label="Close success alert: Success alert title">
      <i class="fas fa-times" aria-hidden="true"></i>
    </button>
  </div>
  <div class="pf-c-alert__description">
    <p>Success alert description. This should tell the user more information about the alert.
      <a href="#">This is a link.</a>
    </p>
  </div>
</div>
<br />
<div class="pf-c-alert pf-m-success pf-m-inline" aria-label="Success alert">
  <div class="pf-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-c-alert__title">
    <strong>
      <span class="pf-screen-reader">Success alert:</span>Success alert title</strong>
  </p>
  <div class="pf-c-alert__action">
    <button class="pf-c-button pf-m-plain" type="button" aria-label="Close success alert: Success alert title">
      <i class="fas fa-times" aria-hidden="true"></i>
    </button>
  </div>
  <div class="pf-c-alert__action-group">
    <button class="pf-c-button pf-m-link pf-m-inline" type="button">View details</button>
    <button class="pf-c-button pf-m-link pf-m-inline" type="button">Ignore</button>
  </div>
</div>
<br />
<div class="pf-c-alert pf-m-success pf-m-inline" aria-label="Success alert">
  <div class="pf-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-c-alert__title">
    <strong>
      <span class="pf-screen-reader">Success alert:</span>Success alert title</strong>
  </p>
</div>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/alert/types.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-alert" aria-label="Default alert">
  <div class="pf-c-alert__icon">
    <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
  </div>
  <p class="pf-c-alert__title">
    <strong>
      <span class="pf-screen-reader">Default alert:</span>Default alert title</strong>
  </p>
</div>
<br />
<div class="pf-c-alert pf-m-info" aria-label="Information alert">
  <div class="pf-c-alert__icon">
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-c-alert__title">
    <strong>
      <span class="pf-screen-reader">Info alert:</span>Info alert title</strong>
  </p>
</div>
<br />
<div class="pf-c-alert pf-m-success" aria-label="Success alert">
  <div class="pf-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-c-alert__title">
    <strong>
      <span class="pf-screen-reader">Success alert:</span>Success alert title</strong>
  </p>
</div>
<br />
<div class="pf-c-alert pf-m-warning" aria-label="Warning alert">
  <div class="pf-c-alert__icon">
    <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
  </div>
  <p class="pf-c-alert__title">
    <strong>
      <span class="pf-screen-reader">Warning alert:</span>Warning alert title</strong>
  </p>
</div>
<br />
<div class="pf-c-alert pf-m-danger" aria-label="Danger alert">
  <div class="pf-c-alert__icon">
    <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-c-alert__title">
    <strong>
      <span class="pf-screen-reader">Danger alert:</span>Danger alert title</strong>
  </p>
</div>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/alert/variations.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-alert pf-m-success" aria-label="Success alert">
  <div class="pf-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-c-alert__title">
    <strong>
      <span class="pf-screen-reader">Success alert:</span>Success alert title</strong>
  </p>
  <div class="pf-c-alert__action">
    <button class="pf-c-button pf-m-plain" type="button" aria-label="Close success alert: Success alert title">
      <i class="fas fa-times" aria-hidden="true"></i>
    </button>
  </div>
  <div class="pf-c-alert__description">
    <p>Success alert description. This should tell the user more information about the alert.</p>
  </div>
  <div class="pf-c-alert__action-group">
    <button class="pf-c-button pf-m-link pf-m-inline" type="button">View details</button>
    <button class="pf-c-button pf-m-link pf-m-inline" type="button">Ignore</button>
  </div>
</div>
<br />
<div class="pf-c-alert pf-m-success" aria-label="Success alert">
  <div class="pf-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-c-alert__title">
    <strong>
      <span class="pf-screen-reader">Success alert:</span>Success alert title</strong>
  </p>
  <div class="pf-c-alert__action">
    <button class="pf-c-button pf-m-plain" type="button" aria-label="Close success alert: Success alert title">
      <i class="fas fa-times" aria-hidden="true"></i>
    </button>
  </div>
  <div class="pf-c-alert__description">
    <p>Success alert description. This should tell the user more information about the alert.
      <a href="#">This is a link.</a>
    </p>
  </div>
</div>
<br />
<div class="pf-c-alert pf-m-success" aria-label="Success alert">
  <div class="pf-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-c-alert__title">
    <strong>
      <span class="pf-screen-reader">Success alert:</span>Success alert title</strong>
  </p>
  <div class="pf-c-alert__action">
    <button class="pf-c-button pf-m-plain" type="button" aria-label="Close success alert: Success alert title">
      <i class="fas fa-times" aria-hidden="true"></i>
    </button>
  </div>
  <div class="pf-c-alert__action-group">
    <button class="pf-c-button pf-m-link pf-m-inline" type="button">View details</button>
    <button class="pf-c-button pf-m-link pf-m-inline" type="button">Ignore</button>
  </div>
</div>
<br />
<div class="pf-c-alert pf-m-success" aria-label="Success alert">
  <div class="pf-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-c-alert__title">
    <strong>
      <span class="pf-screen-reader">Success alert:</span>Success alert title</strong>
  </p>
  <div class="pf-c-alert__action">
    <button class="pf-c-button pf-m-plain" type="button" aria-label="Close success alert: Success alert title">
      <i class="fas fa-times" aria-hidden="true"></i>
    </button>
  </div>
</div>
<br />
<div class="pf-c-alert pf-m-success" aria-label="Success alert">
  <div class="pf-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-c-alert__title">
    <strong>
      <span class="pf-screen-reader">Success alert:</span>Success alert title</strong>
  </p>
</div>
<br />
<div class="pf-c-alert pf-m-success" aria-label="Success alert with title truncation">
  <div class="pf-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-c-alert__title pf-m-truncate">
    <strong>
      <span class="pf-screen-reader">Success alert:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque cursus enim fringilla tincidunt. Proin lobortis aliquam dictum. Nam vel ullamcorper nulla, nec blandit dolor. Vivamus pellentesque neque justo, nec accumsan nulla rhoncus id. Suspendisse mollis, tortor quis faucibus volutpat, sem leo fringilla turpis, ac lacinia augue metus in nulla. Cras vestibulum lacinia orci. Pellentesque sodales consequat interdum. Sed porttitor tincidunt metus nec iaculis. Pellentesque non commodo justo. Morbi feugiat rhoncus neque, vitae facilisis diam aliquam nec. Sed dapibus vitae quam at tristique. Nunc vel commodo mi. Mauris et rhoncus leo.</strong>
  </p>
  <div class="pf-c-alert__description">
    <p>This example uses ".pf-m-truncate" to limit the title to a single line and truncate any overflow text with ellipses.</p>
  </div>
</div>
<br />
<div class="pf-c-alert pf-m-success" aria-label="Success alert with title truncation at 2 lines">
  <div class="pf-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-c-alert__title pf-m-truncate" style="--pf-c-alert__title--max-lines: 2">
    <strong>
      <span class="pf-screen-reader">Success alert:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque cursus enim fringilla tincidunt. Proin lobortis aliquam dictum. Nam vel ullamcorper nulla, nec blandit dolor. Vivamus pellentesque neque justo, nec accumsan nulla rhoncus id. Suspendisse mollis, tortor quis faucibus volutpat, sem leo fringilla turpis, ac lacinia augue metus in nulla. Cras vestibulum lacinia orci. Pellentesque sodales consequat interdum. Sed porttitor tincidunt metus nec iaculis. Pellentesque non commodo justo. Morbi feugiat rhoncus neque, vitae facilisis diam aliquam nec. Sed dapibus vitae quam at tristique. Nunc vel commodo mi. Mauris et rhoncus leo.</strong>
  </p>
  <div class="pf-c-alert__description">
    <p>This example uses ".pf-m-truncate" and sets "--pf-c-alert__title--max-lines: 2" to limit title to two lines and truncate any overflow text with ellipses.</p>
  </div>
</div>`}}
]