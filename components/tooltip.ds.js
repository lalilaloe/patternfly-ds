export default {
  displayName: "tooltip",
  name: "tooltip",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/tooltip/",
};

export const variants = [
  {
    displayName: "bottom",
    picture: {
      src: "./pictures/tooltip/bottom.png",
      width: 332,
      height: 112,
    },
    snippet: {
      html: `<div class="pf-c-tooltip pf-m-bottom" role="tooltip">
  <div class="pf-c-tooltip__arrow"></div>
  <div class="pf-c-tooltip__content" id="tooltip-bottom-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
</div>`,
    },
  },
  {
    displayName: "left",
    picture: {
      src: "./pictures/tooltip/left.png",
      width: 332,
      height: 112,
    },
    snippet: {
      html: `<div class="pf-c-tooltip pf-m-left" role="tooltip">
  <div class="pf-c-tooltip__arrow"></div>
  <div class="pf-c-tooltip__content" id="tooltip-left-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
</div>`,
    },
  },
  {
    displayName: "left-aligned-text",
    picture: {
      src: "./pictures/tooltip/left-aligned-text.png",
      width: 332,
      height: 112,
    },
    snippet: {
      html: `<div class="pf-c-tooltip pf-m-top" role="tooltip">
  <div class="pf-c-tooltip__arrow"></div>
  <div class="pf-c-tooltip__content pf-m-text-align-left" id="tooltip-text-align-left-example">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
</div>`,
    },
  },
  {
    displayName: "right",
    picture: {
      src: "./pictures/tooltip/right.png",
      width: 332,
      height: 112,
    },
    snippet: {
      html: `<div class="pf-c-tooltip pf-m-right" role="tooltip">
  <div class="pf-c-tooltip__arrow"></div>
  <div class="pf-c-tooltip__content" id="tooltip-right-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
</div>`,
    },
  },
  {
    displayName: "top",
    picture: {
      src: "./pictures/tooltip/top.png",
      width: 332,
      height: 112,
    },
    snippet: {
      html: `<div class="pf-c-tooltip pf-m-top" role="tooltip">
  <div class="pf-c-tooltip__arrow"></div>
  <div class="pf-c-tooltip__content" id="tooltip-top-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
</div>`,
    },
  },
];
