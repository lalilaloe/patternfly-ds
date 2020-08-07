export default {
    displayName: "alert",
    name: "alert",
    homepage: "https://www.patternfly.org/v4//documentation/core/components/alert/"
}

export const variants = [
{
displayName:"Inline default alert",
picture:{
src:"./pictures/alert/inline-default-alert.png",
width:261,
height:55},
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
`}},
{
displayName:"Inline information alert",
picture:{
src:"./pictures/alert/inline-information-alert.png",
width:261,
height:55},
snippet:{
html:`
<div class="pf-c-alert pf-m-info pf-m-inline" aria-label="Inline information alert">
  <div class="pf-c-alert__icon">
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-c-alert__title">
    <strong>
      <span class="pf-screen-reader">Info alert:</span>Info inline alert title</strong>
  </p>
</div>
`}},
{
displayName:"Inline success alert",
picture:{
src:"./pictures/alert/inline-success-alert.png",
width:261,
height:55},
snippet:{
html:`
<div class="pf-c-alert pf-m-success pf-m-inline" aria-label="Inline success alert">
  <div class="pf-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-c-alert__title">
    <strong>
      <span class="pf-screen-reader">Success alert:</span>Success inline alert title</strong>
  </p>
</div>
`}},
{
displayName:"Inline warning alert",
picture:{
src:"./pictures/alert/inline-warning-alert.png",
width:261,
height:55},
snippet:{
html:`
<div class="pf-c-alert pf-m-warning pf-m-inline" aria-label="Inline warning alert">
  <div class="pf-c-alert__icon">
    <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
  </div>
  <p class="pf-c-alert__title">
    <strong>
      <span class="pf-screen-reader">Warning alert:</span>Warning inline alert title</strong>
  </p>
</div>
`}},
{
displayName:"Inline danger alert",
picture:{
src:"./pictures/alert/inline-danger-alert.png",
width:261,
height:55},
snippet:{
html:`
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
displayName:"Success alert",
picture:{
src:"./pictures/alert/success-alert.png",
width:261,
height:55},
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
`}},
{
displayName:"Default alert",
picture:{
src:"./pictures/alert/default-alert.png",
width:261,
height:55},
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
`}},
{
displayName:"Information alert",
picture:{
src:"./pictures/alert/information-alert.png",
width:261,
height:55},
snippet:{
html:`
<div class="pf-c-alert pf-m-info" aria-label="Information alert">
  <div class="pf-c-alert__icon">
    <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-c-alert__title">
    <strong>
      <span class="pf-screen-reader">Info alert:</span>Info alert title</strong>
  </p>
</div>
`}},
{
displayName:"Success alert",
picture:{
src:"./pictures/alert/success-alert.png",
width:261,
height:55},
snippet:{
html:`
<div class="pf-c-alert pf-m-success" aria-label="Success alert">
  <div class="pf-c-alert__icon">
    <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
  </div>
  <p class="pf-c-alert__title">
    <strong>
      <span class="pf-screen-reader">Success alert:</span>Success alert title</strong>
  </p>
</div>
`}},
{
displayName:"Warning alert",
picture:{
src:"./pictures/alert/warning-alert.png",
width:261,
height:55},
snippet:{
html:`
<div class="pf-c-alert pf-m-warning" aria-label="Warning alert">
  <div class="pf-c-alert__icon">
    <i class="fas fa-fw fa-exclamation-triangle" aria-hidden="true"></i>
  </div>
  <p class="pf-c-alert__title">
    <strong>
      <span class="pf-screen-reader">Warning alert:</span>Warning alert title</strong>
  </p>
</div>
`}},
{
displayName:"Danger alert",
picture:{
src:"./pictures/alert/danger-alert.png",
width:261,
height:55},
snippet:{
html:`
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
displayName:"Success alert",
picture:{
src:"./pictures/alert/success-alert.png",
width:261,
height:55},
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
`}}
]