export default {
  displayName: "tabcontent",
  name: "tabcontent",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/tabcontent/",
};

export const variants = [
  {
    displayName: "basic",
    picture: {
      src: "./components/pictures/tabcontent/basic.png",
      width: 293,
      height: 57,
    },
    snippet: {
      html: `<section class="pf-c-tab-content" id="tab1-panel" role="tabpanel" tabindex="0">Panel 1</section>
<section class="pf-c-tab-content" id="tab2-panel" role="tabpanel" tabindex="0" hidden>Panel 2</section>
<section class="pf-c-tab-content" id="tab3-panel" role="tabpanel" tabindex="0" hidden>Panel 3</section>
<section class="pf-c-tab-content" id="tab4-panel" role="tabpanel" tabindex="0" hidden>Panel 4</section>`,
    },
  },
];
