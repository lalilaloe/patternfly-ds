export default {
    displayName: "descriptionlist",
    name: "descriptionlist",
    homepage: "https://www.patternfly.org/v4//documentation/core/components/descriptionlist/"
}

export const variants = [
{
displayName:"Basic",
picture:{
src:"./pictures/descriptionlist/default.png",
width:800,
height:600},
snippet:{
html:`<dl class="pf-c-description-list">
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Name</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Namespace</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Labels</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Pod selector</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">
        <button class="pf-c-button pf-m-link pf-m-inline" type="button">
          <span class="pf-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>app=MyApp</button>
      </div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Annotation</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/descriptionlist/default-2-col.png",
width:800,
height:600},
snippet:{
html:`<dl class="pf-c-description-list pf-m-2-col">
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Name</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Namespace</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Labels</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Pod selector</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">
        <button class="pf-c-button pf-m-link pf-m-inline" type="button">
          <span class="pf-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>app=MyApp</button>
      </div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Annotation</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/descriptionlist/default-3-col-on-lg.png",
width:800,
height:600},
snippet:{
html:`<dl class="pf-c-description-list pf-m-3-col-on-lg">
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Name</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Namespace</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Labels</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Pod selector</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">
        <button class="pf-c-button pf-m-link pf-m-inline" type="button">
          <span class="pf-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>app=MyApp</button>
      </div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Annotation</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/descriptionlist/default-auto-columns-width.png",
width:800,
height:600},
snippet:{
html:`<dl class="pf-c-description-list pf-m-auto-column-widths pf-m-3-col">
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Name</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Namespace</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Labels</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Pod selector</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">
        <button class="pf-c-button pf-m-link pf-m-inline" type="button">
          <span class="pf-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>app=MyApp</button>
      </div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Annotation</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/descriptionlist/default-inline-grid.png",
width:800,
height:600},
snippet:{
html:`<dl class="pf-c-description-list pf-m-3-col pf-m-inline-grid">
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Name</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Namespace</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Labels</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Pod selector</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">
        <button class="pf-c-button pf-m-link pf-m-inline" type="button">
          <span class="pf-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>app=MyApp</button>
      </div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Annotation</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/descriptionlist/default-responsive-columns.png",
width:800,
height:600},
snippet:{
html:`<dl class="pf-c-description-list pf-m-2-col-on-lg pf-m-3-col-on-xl">
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Name</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Namespace</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Labels</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Pod selector</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">
        <button class="pf-c-button pf-m-link pf-m-inline" type="button">
          <span class="pf-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>app=MyApp</button>
      </div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Annotation</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/descriptionlist/horizontal.png",
width:800,
height:600},
snippet:{
html:`<dl class="pf-c-description-list pf-m-horizontal">
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Name</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Namespace</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Labels</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Pod selector</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">
        <button class="pf-c-button pf-m-link pf-m-inline" type="button">
          <span class="pf-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>app=MyApp</button>
      </div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Annotation</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/descriptionlist/horizontal-2-col.png",
width:800,
height:600},
snippet:{
html:`<dl class="pf-c-description-list pf-m-horizontal pf-m-2-col">
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Name</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Namespace</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Labels</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Pod selector</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">
        <button class="pf-c-button pf-m-link pf-m-inline" type="button">
          <span class="pf-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>app=MyApp</button>
      </div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Annotation</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/descriptionlist/horizontal-3-col-on-lg.png",
width:800,
height:600},
snippet:{
html:`<dl class="pf-c-description-list pf-m-horizontal pf-m-3-col-on-lg">
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Name</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Namespace</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Labels</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Pod selector</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">
        <button class="pf-c-button pf-m-link pf-m-inline" type="button">
          <span class="pf-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>app=MyApp</button>
      </div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Annotation</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/descriptionlist/horizontal-auto-column-width.png",
width:800,
height:600},
snippet:{
html:`<dl class="pf-c-description-list pf-m-horizontal pf-m-auto-column-widths pf-m-2-col-on-lg">
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Name</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Namespace</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Labels</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Pod selector</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">
        <button class="pf-c-button pf-m-link pf-m-inline" type="button">
          <span class="pf-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>app=MyApp</button>
      </div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Annotation</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/descriptionlist/horizontal-responsive-columns.png",
width:800,
height:600},
snippet:{
html:`<dl class="pf-c-description-list pf-m-horizontal pf-m-2-col-on-lg pf-m-3-col-on-xl">
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Name</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Namespace</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Labels</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Pod selector</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">
        <button class="pf-c-button pf-m-link pf-m-inline" type="button">
          <span class="pf-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>app=MyApp</button>
      </div>
    </dd>
  </div>
  <div class="pf-c-description-list__group">
    <dt class="pf-c-description-list__term">
      <div class="pf-c-description-list__text">Annotation</div>
    </dt>
    <dd class="pf-c-description-list__description">
      <div class="pf-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>`}}
]