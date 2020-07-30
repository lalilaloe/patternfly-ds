export default {
    displayName: "alertgroup",
    name: "alertgroup",
    homepage: "https://www.patternfly.org/v4//documentation/core/components/alertgroup/"
}

export const variants = [
{
displayName:"Basic",
picture:{
src:"./pictures/alertgroup/static-alert-group.png",
width:800,
height:600},
snippet:{
html:`<ul class="pf-c-alert-group">
  <li class="pf-c-alert-group__item">
    <div class="pf-c-alert pf-m-inline pf-m-success" aria-label="Success alert">
      <div class="pf-c-alert__icon">
        <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
      </div>
      <p class="pf-c-alert__title">
        <strong>
          <span class="pf-screen-reader">Success alert:</span>Success alert title</strong>
      </p>
    </div>
  </li>
  <li class="pf-c-alert-group__item">
    <div class="pf-c-alert pf-m-inline pf-m-danger" aria-label="Danger alert">
      <div class="pf-c-alert__icon">
        <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
      </div>
      <p class="pf-c-alert__title">
        <strong>
          <span class="pf-screen-reader">Danger alert:</span>Danger alert title</strong>
      </p>
    </div>
  </li>
  <li class="pf-c-alert-group__item">
    <div class="pf-c-alert pf-m-inline pf-m-info" aria-label="Information alert">
      <div class="pf-c-alert__icon">
        <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
      </div>
      <p class="pf-c-alert__title">
        <strong>
          <span class="pf-screen-reader">Info alert:</span>Info alert title</strong>
      </p>
      <div class="pf-c-alert__description">
        <p>Info alert description.
          <a href="#">This is a link.</a>
        </p>
      </div>
    </div>
  </li>
</ul>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/alertgroup/toast-alert-group.png",
width:800,
height:600},
snippet:{
html:`<ul class="pf-c-alert-group pf-m-toast">
  <li class="pf-c-alert-group__item">
    <div class="pf-c-alert pf-m-success" aria-label="Success toast alert">
      <div class="pf-c-alert__icon">
        <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
      </div>
      <p class="pf-c-alert__title" id="alert_one_title">
        <strong>
          <span class="pf-screen-reader">Success alert:</span>Success toast alert title</strong>
      </p>
      <div class="pf-c-alert__action">
        <button class="pf-c-button pf-m-plain" type="button" aria-label="Close success alert: Success alert title">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </li>
  <li class="pf-c-alert-group__item">
    <div class="pf-c-alert pf-m-danger" aria-label="Danger toast alert">
      <div class="pf-c-alert__icon">
        <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
      </div>
      <p class="pf-c-alert__title" id="alert_two_title">
        <strong>
          <span class="pf-screen-reader">Danger alert:</span>Danger toast alert title</strong>
      </p>
      <div class="pf-c-alert__action">
        <button class="pf-c-button pf-m-plain" type="button" aria-label="Close success alert: Success alert title">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </li>
  <li class="pf-c-alert-group__item">
    <div class="pf-c-alert pf-m-info" aria-label="Information toast alert">
      <div class="pf-c-alert__icon">
        <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
      </div>
      <p class="pf-c-alert__title" id="alert_three_title">
        <strong>
          <span class="pf-screen-reader">Info alert:</span>Info toast alert title</strong>
      </p>
      <div class="pf-c-alert__description">
        <p>Info toast alert description.
          <a href="#">This is a link.</a>
        </p>
      </div>
      <div class="pf-c-alert__action">
        <button class="pf-c-button pf-m-plain" type="button" aria-label="Close success alert: Success alert title">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </li>
</ul>`}}
]