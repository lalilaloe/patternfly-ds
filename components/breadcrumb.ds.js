export default {
  displayName: "breadcrumb",
  name: "breadcrumb",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/breadcrumb/",
};

export const variants = [
  {
    displayName: "basic",
    picture: {
      src: "./components/pictures/breadcrumb/basic.png",
      width: 455,
      height: 57,
    },
    snippet: {
      html: `<nav class="pf-c-breadcrumb" aria-label="breadcrumb">
  <ol class="pf-c-breadcrumb__list">
    <li class="pf-c-breadcrumb__item">
      <span class="pf-c-breadcrumb__item-divider">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
      <a href="#" class="pf-c-breadcrumb__link">Section home</a>
    </li>
    <li class="pf-c-breadcrumb__item">
      <span class="pf-c-breadcrumb__item-divider">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
      <a href="#" class="pf-c-breadcrumb__link">Section title</a>
    </li>
    <li class="pf-c-breadcrumb__item">
      <span class="pf-c-breadcrumb__item-divider">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
      <a href="#" class="pf-c-breadcrumb__link">Section title</a>
    </li>
    <li class="pf-c-breadcrumb__item">
      <span class="pf-c-breadcrumb__item-divider">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
      <a href="#" class="pf-c-breadcrumb__link pf-m-current" aria-current="page">Section landing</a>
    </li>
  </ol>
</nav>`,
    },
  },
  {
    displayName: "with-heading",
    picture: {
      src: "./components/pictures/breadcrumb/with-heading.png",
      width: 515,
      height: 57,
    },
    snippet: {
      html: `<nav class="pf-c-breadcrumb" aria-label="breadcrumb">
  <ol class="pf-c-breadcrumb__list">
    <li class="pf-c-breadcrumb__item">
      <span class="pf-c-breadcrumb__item-divider">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
      <a href="#" class="pf-c-breadcrumb__link">Section home</a>
    </li>
    <li class="pf-c-breadcrumb__item">
      <span class="pf-c-breadcrumb__item-divider">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
      <a href="#" class="pf-c-breadcrumb__link">Section title</a>
    </li>
    <li class="pf-c-breadcrumb__item">
      <span class="pf-c-breadcrumb__item-divider">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
      <a href="#" class="pf-c-breadcrumb__link">Section title</a>
    </li>
    <li class="pf-c-breadcrumb__item">
      <span class="pf-c-breadcrumb__item-divider">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
      <a href="#" class="pf-c-breadcrumb__link">Section title</a>
    </li>
    <li class="pf-c-breadcrumb__item">
      <span class="pf-c-breadcrumb__item-divider">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
      <h1 class="pf-c-breadcrumb__heading">
        <a href="#" class="pf-c-breadcrumb__link pf-m-current" aria-current="page">Section title</a>
      </h1>
    </li>
  </ol>
</nav>`,
    },
  },
  {
    displayName: "without-home-link",
    picture: {
      src: "./components/pictures/breadcrumb/without-home-link.png",
      width: 635,
      height: 57,
    },
    snippet: {
      html: `<nav class="pf-c-breadcrumb" aria-label="breadcrumb">
  <ol class="pf-c-breadcrumb__list">
    <li class="pf-c-breadcrumb__item">
      <span class="pf-c-breadcrumb__item-divider">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>Section home</li>
    <li class="pf-c-breadcrumb__item">
      <span class="pf-c-breadcrumb__item-divider">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
      <a href="#" class="pf-c-breadcrumb__link">Section title</a>
    </li>
    <li class="pf-c-breadcrumb__item">
      <span class="pf-c-breadcrumb__item-divider">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
      <a href="#" class="pf-c-breadcrumb__link">Section title</a>
    </li>
    <li class="pf-c-breadcrumb__item">
      <span class="pf-c-breadcrumb__item-divider">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
      <a href="#" class="pf-c-breadcrumb__link">Section title</a>
    </li>
    <li class="pf-c-breadcrumb__item">
      <span class="pf-c-breadcrumb__item-divider">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
      <a href="#" class="pf-c-breadcrumb__link">Section title</a>
    </li>
    <li class="pf-c-breadcrumb__item">
      <span class="pf-c-breadcrumb__item-divider">
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      </span>
      <a href="#" class="pf-c-breadcrumb__link pf-m-current" aria-current="page">Section landing</a>
    </li>
  </ol>
</nav>`,
    },
  },
];
