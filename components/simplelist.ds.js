export default {
  displayName: "simplelist",
  name: "simplelist",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/simplelist/",
};

export const variants = [
  {
    displayName: "grouped-list",
    picture: {
      src: "./pictures/simplelist/grouped-list.png",
      width: 293,
      height: 347,
    },
    snippet: {
      html: `<div class="pf-c-simple-list">
  <section class="pf-c-simple-list__section">
    <h2 class="pf-c-simple-list__title">Title</h2>
    <ul class="pf-c-simple-list__list">
      <li class="pf-c-simple-list__item">
        <button class="pf-c-simple-list__item-link pf-m-current" type="button">List item 1</button>
      </li>
      <li class="pf-c-simple-list__item">
        <button class="pf-c-simple-list__item-link" type="button">List item 2</button>
      </li>
      <li class="pf-c-simple-list__item">
        <button class="pf-c-simple-list__item-link" type="button">List item 3</button>
      </li>
      <li class="pf-c-simple-list__item">
        <button class="pf-c-simple-list__item-link" type="button">List item 4</button>
      </li>
    </ul>
  </section>
  <section class="pf-c-simple-list__section">
    <h2 class="pf-c-simple-list__title">Title</h2>
    <ul class="pf-c-simple-list__list">
      <li class="pf-c-simple-list__item">
        <button class="pf-c-simple-list__item-link" type="button">List item 1</button>
      </li>
      <li class="pf-c-simple-list__item">
        <button class="pf-c-simple-list__item-link" type="button">List item 2</button>
      </li>
      <li class="pf-c-simple-list__item">
        <button class="pf-c-simple-list__item-link" type="button">List item 3</button>
      </li>
      <li class="pf-c-simple-list__item">
        <button class="pf-c-simple-list__item-link" type="button">List item 4</button>
      </li>
    </ul>
  </section>
</div>`,
    },
  },
  {
    displayName: "simple-list",
    picture: {
      src: "./pictures/simplelist/simple-list.png",
      width: 293,
      height: 120,
    },
    snippet: {
      html: `<div class="pf-c-simple-list">
  <ul class="pf-c-simple-list__list">
    <li class="pf-c-simple-list__item">
      <button class="pf-c-simple-list__item-link pf-m-current" type="button">List item 1</button>
    </li>
    <li class="pf-c-simple-list__item">
      <button class="pf-c-simple-list__item-link" type="button">List item 2</button>
    </li>
    <li class="pf-c-simple-list__item">
      <button class="pf-c-simple-list__item-link" type="button">List item 3</button>
    </li>
  </ul>
</div>`,
    },
  },
  {
    displayName: "simple-list-with-links",
    picture: {
      src: "./pictures/simplelist/simple-list-with-links.png",
      width: 293,
      height: 120,
    },
    snippet: {
      html: `<div class="pf-c-simple-list">
  <ul class="pf-c-simple-list__list">
    <li class="pf-c-simple-list__item">
      <a class="pf-c-simple-list__item-link pf-m-current" href="#" tabindex="0">List item 1</a>
    </li>
    <li class="pf-c-simple-list__item">
      <a class="pf-c-simple-list__item-link" href="#" tabindex="0">List item 2</a>
    </li>
    <li class="pf-c-simple-list__item">
      <a class="pf-c-simple-list__item-link" href="#" tabindex="0">List item 3</a>
    </li>
  </ul>
</div>`,
    },
  },
];
