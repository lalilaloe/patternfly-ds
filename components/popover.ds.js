export default {
    displayName: "popover",
    name: "popover",
    homepage: "https://www.patternfly.org/v4//documentation/core/components/popover/"
}

export const variants = [
{
displayName:"Basic",
picture:{
src:"./pictures/popover/bottom.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-popover pf-m-bottom" role="dialog" aria-modal="true" aria-labelledby="popover-bottom-header" aria-describedby="popover-bottom-body">
  <div class="pf-c-popover__arrow"></div>
  <div class="pf-c-popover__content">
    <button class="pf-c-button pf-m-plain" type="button" aria-label="Close">
      <i class="fas fa-times" aria-hidden="true"></i>
    </button>
    <h1 class="pf-c-title pf-m-md" id="popover-bottom-header">Popover header</h1>
    <div class="pf-c-popover__body" id="popover-bottom-body">Popovers are triggered by click rather than hover. Click again to close.</div>
    <footer class="pf-c-popover__footer">Popover footer</footer>
  </div>
</div>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/popover/left.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-popover pf-m-left" role="dialog" aria-modal="true" aria-labelledby="popover-left-header" aria-describedby="popover-left-body">
  <div class="pf-c-popover__arrow"></div>
  <div class="pf-c-popover__content">
    <button class="pf-c-button pf-m-plain" type="button" aria-label="Close">
      <i class="fas fa-times" aria-hidden="true"></i>
    </button>
    <h1 class="pf-c-title pf-m-md" id="popover-left-header">Popover header</h1>
    <div class="pf-c-popover__body" id="popover-left-body">Popovers are triggered by click rather than hover. Click again to close.</div>
    <footer class="pf-c-popover__footer">Popover footer</footer>
  </div>
</div>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/popover/right.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-popover pf-m-right" role="dialog" aria-modal="true" aria-labelledby="popover-right-header" aria-describedby="popover-right-body">
  <div class="pf-c-popover__arrow"></div>
  <div class="pf-c-popover__content">
    <button class="pf-c-button pf-m-plain" type="button" aria-label="Close">
      <i class="fas fa-times" aria-hidden="true"></i>
    </button>
    <h1 class="pf-c-title pf-m-md" id="popover-right-header">Popover header</h1>
    <div class="pf-c-popover__body" id="popover-right-body">Popovers are triggered by click rather than hover. Click again to close.</div>
    <footer class="pf-c-popover__footer">Popover footer</footer>
  </div>
</div>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/popover/top.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-popover pf-m-top" role="dialog" aria-modal="true" aria-labelledby="popover-top-header" aria-describedby="popover-top-body">
  <div class="pf-c-popover__arrow"></div>
  <div class="pf-c-popover__content">
    <button class="pf-c-button pf-m-plain" type="button" aria-label="Close">
      <i class="fas fa-times" aria-hidden="true"></i>
    </button>
    <h1 class="pf-c-title pf-m-md" id="popover-top-header">Popover header</h1>
    <div class="pf-c-popover__body" id="popover-top-body">Popovers are triggered by click rather than hover. Click again to close.</div>
    <footer class="pf-c-popover__footer">Popover footer</footer>
  </div>
</div>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/popover/without-headerfooter.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-popover pf-m-right" role="dialog" aria-modal="true" aria-label="Popover with no header example" aria-describedby="popover-no-header-body">
  <div class="pf-c-popover__arrow"></div>
  <div class="pf-c-popover__content">
    <button class="pf-c-button pf-m-plain" type="button" aria-label="Close">
      <i class="fas fa-times" aria-hidden="true"></i>
    </button>
    <div class="pf-c-popover__body" id="popover-no-header-body">Popovers are triggered by click rather than hover. Click again to close.</div>
  </div>
</div>`}}
]