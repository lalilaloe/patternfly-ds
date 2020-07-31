export default {
  displayName: "descriptionlist",
  name: "descriptionlist",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/descriptionlist/",
};

export const variants = [
  {
    displayName: "default",
    picture: {
      src: "./pictures/descriptionlist/default.png",
      width: 293,
      height: 394,
    },
    snippet: {
      html: `<dl class="pf-c-description-list">
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
</dl>`,
    },
  },
  {
    displayName: "default-2-col",
    picture: {
      src: "./pictures/descriptionlist/default-2-col.png",
      width: 293,
      height: 240,
    },
    snippet: {
      html: `<dl class="pf-c-description-list pf-m-2-col">
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
</dl>`,
    },
  },
  {
    displayName: "default-3-col-on-lg",
    picture: {
      src: "./pictures/descriptionlist/default-3-col-on-lg.png",
      width: 411,
      height: 163,
    },
    snippet: {
      html: `<dl class="pf-c-description-list pf-m-3-col-on-lg">
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
</dl>`,
    },
  },
  {
    displayName: "default-auto-columns-width",
    picture: {
      src: "./pictures/descriptionlist/default-auto-columns-width.png",
      width: 373,
      height: 163,
    },
    snippet: {
      html: `<dl class="pf-c-description-list pf-m-auto-column-widths pf-m-3-col">
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
</dl>`,
    },
  },
  {
    displayName: "default-inline-grid",
    picture: {
      src: "./pictures/descriptionlist/default-inline-grid.png",
      width: 411,
      height: 165,
    },
    snippet: {
      html: `<dl class="pf-c-description-list pf-m-3-col pf-m-inline-grid">
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
</dl>`,
    },
  },
  {
    displayName: "default-responsive-columns",
    picture: {
      src: "./pictures/descriptionlist/default-responsive-columns.png",
      width: 293,
      height: 240,
    },
    snippet: {
      html: `<dl class="pf-c-description-list pf-m-2-col-on-lg pf-m-3-col-on-xl">
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
</dl>`,
    },
  },
  {
    displayName: "horizontal",
    picture: {
      src: "./pictures/descriptionlist/horizontal.png",
      width: 306,
      height: 249,
    },
    snippet: {
      html: `<dl class="pf-c-description-list pf-m-horizontal">
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
</dl>`,
    },
  },
  {
    displayName: "horizontal-2-col",
    picture: {
      src: "./pictures/descriptionlist/horizontal-2-col.png",
      width: 604,
      height: 153,
    },
    snippet: {
      html: `<dl class="pf-c-description-list pf-m-horizontal pf-m-2-col">
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
</dl>`,
    },
  },
  {
    displayName: "horizontal-3-col-on-lg",
    picture: {
      src: "./pictures/descriptionlist/horizontal-3-col-on-lg.png",
      width: 888,
      height: 105,
    },
    snippet: {
      html: `<dl class="pf-c-description-list pf-m-horizontal pf-m-3-col-on-lg">
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
</dl>`,
    },
  },
  {
    displayName: "horizontal-auto-column-width",
    picture: {
      src: "./pictures/descriptionlist/horizontal-auto-column-width.png",
      width: 599,
      height: 153,
    },
    snippet: {
      html: `<dl class="pf-c-description-list pf-m-horizontal pf-m-auto-column-widths pf-m-2-col-on-lg">
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
</dl>`,
    },
  },
  {
    displayName: "horizontal-responsive-columns",
    picture: {
      src: "./pictures/descriptionlist/horizontal-responsive-columns.png",
      width: 604,
      height: 153,
    },
    snippet: {
      html: `<dl class="pf-c-description-list pf-m-horizontal pf-m-2-col-on-lg pf-m-3-col-on-xl">
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
</dl>`,
    },
  },
];
