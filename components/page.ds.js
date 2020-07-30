export default {
    displayName: "page",
    name: "page",
    homepage: "https://www.patternfly.org/v4//documentation/core/components/page/"
}

export const variants = [
{
displayName:"Basic",
picture:{
src:"./pictures/page/horizontal-nav.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-page">
  <header class="pf-c-page__header">
    <div class="pf-c-page__header-brand">
      <a class="pf-c-page__header-brand-link">Logo</a>
    </div>
    <div class="pf-c-page__header-nav">pf-c-nav</div>
    <div class="pf-c-page__header-tools">header-tools</div>
  </header>
  <main class="pf-c-page__main" tabindex="-1">
    <section class="pf-c-page__main-section pf-m-dark-100"></section>
    <section class="pf-c-page__main-section pf-m-dark-200"></section>
    <section class="pf-c-page__main-section pf-m-light"></section>
    <section class="pf-c-page__main-section"></section>
  </main>
</div>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/page/main-section-padding.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-page">
  <header class="pf-c-page__header">
    <div class="pf-c-page__header-brand">
      <div class="pf-c-page__header-brand-toggle">toggle</div>
      <a class="pf-c-page__header-brand-link">Logo</a>
    </div>
    <div class="pf-c-page__header-tools">header-tools</div>
  </header>
  <div class="pf-c-page__sidebar">
    <div class="pf-c-page__sidebar-body">pf-c-nav</div>
  </div>
  <main class="pf-c-page__main" tabindex="-1">
    <section class="pf-c-page__main-section">This `.pf-c-page__main-section` has default padding.</section>
    <section class="pf-c-page__main-section pf-m-no-padding pf-m-light">This `.pf-c-page__main-section` uses `.pf-m-no-padding` to remove all padding.</section>
    <section class="pf-c-page__main-section pf-m-no-padding pf-m-padding-on-md">This `.pf-c-page__main-section` uses `.pf-m-no-padding .pf-m-padding-on-md` to remove padding up to the `md` breakpoint.</section>
  </main>
</div>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/page/vertical-nav.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-page">
  <header class="pf-c-page__header">
    <div class="pf-c-page__header-brand">
      <div class="pf-c-page__header-brand-toggle">toggle</div>
      <a class="pf-c-page__header-brand-link">Logo</a>
    </div>
    <div class="pf-c-page__header-tools">header-tools</div>
  </header>
  <div class="pf-c-page__sidebar">
    <div class="pf-c-page__sidebar-body">pf-c-nav</div>
  </div>
  <main class="pf-c-page__main" tabindex="-1">
    <section class="pf-c-page__main-section pf-m-dark-100"></section>
    <section class="pf-c-page__main-section pf-m-dark-200"></section>
    <section class="pf-c-page__main-section pf-m-light"></section>
    <section class="pf-c-page__main-section"></section>
  </main>
</div>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/page/with-or-without-fill.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-page">
  <header class="pf-c-page__header">
    <div class="pf-c-page__header-brand">
      <a class="pf-c-page__header-brand-link">Logo</a>
    </div>
    <div class="pf-c-page__header-nav">pf-c-nav</div>
    <div class="pf-c-page__header-tools">header-tools</div>
  </header>
  <main class="pf-c-page__main" tabindex="-1">
    <section class="pf-c-page__main-section pf-m-light"></section>
    <section class="pf-c-page__main-section pf-m-fill">This section uses pf-m-fill to fill the available space.</section>
    <section class="pf-c-page__main-section pf-m-light pf-m-no-fill">This section uses pf-m-no-fill to not fill the available space.</section>
  </main>
</div>`}}
]