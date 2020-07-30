export default {
    displayName: "tile",
    name: "tile",
    homepage: "https://www.patternfly.org/v4//documentation/core/components/tile/"
}

export const variants = [
{
displayName:"Basic",
picture:{
src:"./pictures/tile/basic-tiles.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-tile" tabindex="0">
  <div class="pf-c-tile__header">
    <div class="pf-c-tile__title">Default</div>
  </div>
</div>
<div class="pf-c-tile pf-m-selected" tabindex="0">
  <div class="pf-c-tile__header">
    <div class="pf-c-tile__title">Selected</div>
  </div>
</div>
<div class="pf-c-tile pf-m-disabled" tabindex="0">
  <div class="pf-c-tile__header">
    <div class="pf-c-tile__title">Disabled</div>
  </div>
</div>
<br/>
<br/>
<div class="pf-c-tile" tabindex="0">
  <div class="pf-c-tile__header">
    <div class="pf-c-tile__title">Default</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<div class="pf-c-tile pf-m-selected" tabindex="0">
  <div class="pf-c-tile__header">
    <div class="pf-c-tile__title">Selected</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<div class="pf-c-tile pf-m-disabled" tabindex="0">
  <div class="pf-c-tile__header">
    <div class="pf-c-tile__title">Disabled</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<br/>
<br/>
<div class="pf-c-tile" tabindex="0">
  <div class="pf-c-tile__header">
    <div class="pf-c-tile__icon">
      <i class="fas fa-plus" aria-hidden="true"></i>
    </div>
    <div class="pf-c-tile__title">Default</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<div class="pf-c-tile pf-m-selected" tabindex="0">
  <div class="pf-c-tile__header">
    <div class="pf-c-tile__icon">
      <i class="fas fa-plus" aria-hidden="true"></i>
    </div>
    <div class="pf-c-tile__title">Selected</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<div class="pf-c-tile pf-m-disabled" tabindex="0">
  <div class="pf-c-tile__header">
    <div class="pf-c-tile__icon">
      <i class="fas fa-plus" aria-hidden="true"></i>
    </div>
    <div class="pf-c-tile__title">Disabled</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/tile/extra-content.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-tile" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <i class="fas fa-bell" aria-hidden="true"></i>
    </div>
    <div class="pf-c-tile__title">Default</div>
  </div>
  <div class="pf-c-tile__body">This is really really long subtext that goes on for so long that it has to wrap to the next line. This is really really long subtext that goes on for so long that it has to wrap to the next line.</div>
</div>
<div class="pf-c-tile" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <i class="fas fa-bell" aria-hidden="true"></i>
    </div>
    <div class="pf-c-tile__title">Default</div>
  </div>
  <div class="pf-c-tile__body">This is really really long subtext that goes on for so long that it has to wrap to the next line.</div>
</div>
<div class="pf-c-tile" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <i class="fas fa-bell" aria-hidden="true"></i>
    </div>
    <div class="pf-c-tile__title">Default</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/tile/stacked-tiles.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-tile" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <i class="fas fa-bell" aria-hidden="true"></i>
    </div>
    <div class="pf-c-tile__title">Default</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<div class="pf-c-tile pf-m-selected" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <i class="fas fa-bell" aria-hidden="true"></i>
    </div>
    <div class="pf-c-tile__title">Selected</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<div class="pf-c-tile pf-m-disabled" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <i class="fas fa-bell" aria-hidden="true"></i>
    </div>
    <div class="pf-c-tile__title">Disabled</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<br/>
<br/>
<div class="pf-c-tile" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo" />
    </div>
    <div class="pf-c-tile__title">Default</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<div class="pf-c-tile pf-m-selected" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo" />
    </div>
    <div class="pf-c-tile__title">Selected</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<div class="pf-c-tile pf-m-disabled" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo" />
    </div>
    <div class="pf-c-tile__title">Disabled</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/tile/stacked-tiles-large.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-tile pf-m-display-lg" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <i class="fas fa-bell" aria-hidden="true"></i>
    </div>
    <div class="pf-c-tile__title">Default</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<div class="pf-c-tile pf-m-selected pf-m-display-lg" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <i class="fas fa-bell" aria-hidden="true"></i>
    </div>
    <div class="pf-c-tile__title">Selected</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<div class="pf-c-tile pf-m-display-lg pf-m-disabled" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <i class="fas fa-bell" aria-hidden="true"></i>
    </div>
    <div class="pf-c-tile__title">Disabled</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<br/>
<br/>
<div class="pf-c-tile pf-m-display-lg" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo" height="54px" width="54px" />
    </div>
    <div class="pf-c-tile__title">Default</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<div class="pf-c-tile pf-m-display-lg pf-m-selected" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo" height="54px" width="54px" />
    </div>
    <div class="pf-c-tile__title">Selected</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>
<div class="pf-c-tile pf-m-display-lg pf-m-disabled" tabindex="0">
  <div class="pf-c-tile__header pf-m-stacked">
    <div class="pf-c-tile__icon">
      <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo" height="54px" width="54px" />
    </div>
    <div class="pf-c-tile__title">Disabled</div>
  </div>
  <div class="pf-c-tile__body">Subtext goes here</div>
</div>`}}
]