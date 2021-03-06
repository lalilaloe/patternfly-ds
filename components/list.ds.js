export default {
  displayName: "list",
  name: "list",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/list/",
};

export const variants = [
  {
    displayName: "inline",
    picture: {
      src: "./pictures/list/inline.png",
      width: 406,
      height: 57,
    },
    snippet: {
      html: `<ul class="pf-c-list pf-m-inline">
  <li>Inline list item 1</li>
  <li>Inline list item 2</li>
  <li>Inline list item 3</li>
</ul>`,
    },
  },
  {
    displayName: "ordered",
    picture: {
      src: "./pictures/list/ordered.png",
      width: 510,
      height: 441,
    },
    snippet: {
      html: `<ol class="pf-c-list">
  <li>Donec blandit a lorem id convallis.</li>
  <li>Cras gravida arcu at diam gravida gravida.</li>
  <li>Integer in volutpat libero.</li>
  <li>Donec a diam tellus.</li>
  <li>Etiam auctor nisl et.
    <ul class="pf-c-list">
      <li>Donec blandit a lorem id convallis.</li>
      <li>Cras gravida arcu at diam gravida gravida.</li>
      <li>Integer in volutpat libero.
        <ol class="pf-c-list">
          <li>Donec blandit a lorem id convallis.</li>
          <li>Cras gravida arcu at diam gravida gravida.</li>
        </ol>
      </li>
    </ul>
    <li>Aenean nec tortor orci.</li>
    <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
    <li>Vivamus maximus ultricies pulvinar.</li>
  </ol>`,
    },
  },
  {
    displayName: "unordered",
    picture: {
      src: "./pictures/list/unordered.png",
      width: 528,
      height: 345,
    },
    snippet: {
      html: `<ul class="pf-c-list">
  <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
  <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
  <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
    <ul class="pf-c-list">
      <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
      <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
      <li>Ut venenatis, nisl scelerisque.
        <ol class="pf-c-list">
          <li>Donec blandit a lorem id convallis.</li>
          <li>Cras gravida arcu at diam gravida gravida.</li>
          <li>Integer in volutpat libero.</li>
        </ol>
      </li>
    </ul>
  </li>
  <li>Ut non enim metus.</li>
</ul>`,
    },
  },
];
