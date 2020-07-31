export default {
  displayName: "progress",
  name: "progress",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/progress/",
};

export const variants = [
  {
    displayName: "failure",
    picture: {
      src: "./pictures/progress/failure.png",
      width: 293,
      height: 89,
    },
    snippet: {
      html: `<div class="pf-c-progress pf-m-danger" id="progress-failure-example">
  <div class="pf-c-progress__description" id="progress-failure-example-description">Title</div>
  <div class="pf-c-progress__status" aria-hidden="true">
    <span class="pf-c-progress__measure">33%</span>
    <span class="pf-c-progress__status-icon">
      <i class="fas fa-times-circle" aria-hidden="true"></i>
    </span>
  </div>
  <div class="pf-c-progress__bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="33" aria-describedby="progress-failure-example-description">
    <div class="pf-c-progress__indicator" style="width:33%;"></div>
  </div>
</div>`,
    },
  },
  {
    displayName: "failure-without-measure",
    picture: {
      src: "./pictures/progress/failure-without-measure.png",
      width: 293,
      height: 89,
    },
    snippet: {
      html: `<div class="pf-c-progress pf-m-danger" id="progress-no-measure-failure-example">
  <div class="pf-c-progress__description" id="progress-no-measure-failure-example-description">Title</div>
  <div class="pf-c-progress__status" aria-hidden="true">
    <span class="pf-c-progress__status-icon">
      <i class="fas fa-times-circle" aria-hidden="true"></i>
    </span>
  </div>
  <div class="pf-c-progress__bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="33" aria-describedby="progress-no-measure-failure-example-description">
    <div class="pf-c-progress__indicator" style="width:33%;"></div>
  </div>
</div>`,
    },
  },
  {
    displayName: "finite-step",
    picture: {
      src: "./pictures/progress/finite-step.png",
      width: 293,
      height: 89,
    },
    snippet: {
      html: `<div class="pf-c-progress" id="progress-finite-step-example">
  <div class="pf-c-progress__description" id="progress-finite-step-example-description">Title</div>
  <div class="pf-c-progress__status" aria-hidden="true">
    <span class="pf-c-progress__measure">2 of 5 units</span>
  </div>
  <div class="pf-c-progress__bar" role="progressbar" aria-valuemin="0" aria-valuemax="5" aria-valuenow="2" aria-valuetext="2 of 5 units" aria-describedby="progress-finite-step-example-description">
    <div class="pf-c-progress__indicator" style="width:40%;"></div>
  </div>
</div>`,
    },
  },
  {
    displayName: "inside",
    picture: {
      src: "./pictures/progress/inside.png",
      width: 293,
      height: 97,
    },
    snippet: {
      html: `<div class="pf-c-progress pf-m-lg pf-m-inside" id="progress-inside-example">
  <div class="pf-c-progress__description" id="progress-inside-example-description">Title</div>
  <div class="pf-c-progress__status" aria-hidden="true"></div>
  <div class="pf-c-progress__bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="33" aria-describedby="progress-inside-example-description">
    <div class="pf-c-progress__indicator" style="width:33%;">
      <span class="pf-c-progress__measure">33%</span>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "inside-success",
    picture: {
      src: "./pictures/progress/inside-success.png",
      width: 293,
      height: 97,
    },
    snippet: {
      html: `<div class="pf-c-progress pf-m-lg pf-m-inside pf-m-success" id="progress-inside-success-example">
  <div class="pf-c-progress__description" id="progress-inside-success-example-description">Title</div>
  <div class="pf-c-progress__status" aria-hidden="true">
    <span class="pf-c-progress__status-icon">
      <i class="fas fa-check-circle" aria-hidden="true"></i>
    </span>
  </div>
  <div class="pf-c-progress__bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" aria-describedby="progress-inside-success-example-description">
    <div class="pf-c-progress__indicator" style="width:100%;">
      <span class="pf-c-progress__measure">100%</span>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "large",
    picture: {
      src: "./pictures/progress/large.png",
      width: 293,
      height: 97,
    },
    snippet: {
      html: `<div class="pf-c-progress pf-m-lg" id="progress-lg-example">
  <div class="pf-c-progress__description" id="progress-lg-example-description">Title</div>
  <div class="pf-c-progress__status" aria-hidden="true">
    <span class="pf-c-progress__measure">33%</span>
  </div>
  <div class="pf-c-progress__bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="33" aria-describedby="progress-lg-example-description">
    <div class="pf-c-progress__indicator" style="width:33%;"></div>
  </div>
</div>`,
    },
  },
  {
    displayName: "on-single-line",
    picture: {
      src: "./pictures/progress/on-single-line.png",
      width: 293,
      height: 57,
    },
    snippet: {
      html: `<div class="pf-c-progress pf-m-singleline" id="progress-singleline-example">
  <div class="pf-c-progress__description" id="progress-singleline-example-description"></div>
  <div class="pf-c-progress__status" aria-hidden="true">
    <span class="pf-c-progress__measure">33%</span>
  </div>
  <div class="pf-c-progress__bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="33" aria-describedby="progress-singleline-example-description">
    <div class="pf-c-progress__indicator" style="width:33%;"></div>
  </div>
</div>`,
    },
  },
  {
    displayName: "outside",
    picture: {
      src: "./pictures/progress/outside.png",
      width: 293,
      height: 97,
    },
    snippet: {
      html: `<div class="pf-c-progress pf-m-outside pf-m-lg" id="progress-outside-example">
  <div class="pf-c-progress__description" id="progress-outside-example-description">Title</div>
  <div class="pf-c-progress__status" aria-hidden="true">
    <span class="pf-c-progress__measure">33%</span>
  </div>
  <div class="pf-c-progress__bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="33" aria-describedby="progress-outside-example-description">
    <div class="pf-c-progress__indicator" style="width:33%;"></div>
  </div>
</div>`,
    },
  },
  {
    displayName: "outside-failure",
    picture: {
      src: "./pictures/progress/outside-failure.png",
      width: 293,
      height: 97,
    },
    snippet: {
      html: `<div class="pf-c-progress pf-m-outside pf-m-lg pf-m-danger" id="progress-outside-failure-example">
  <div class="pf-c-progress__description" id="progress-outside-failure-example-description">Title</div>
  <div class="pf-c-progress__status" aria-hidden="true">
    <span class="pf-c-progress__measure">33%</span>
    <span class="pf-c-progress__status-icon">
      <i class="fas fa-times-circle" aria-hidden="true"></i>
    </span>
  </div>
  <div class="pf-c-progress__bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="33" aria-describedby="progress-outside-failure-example-description">
    <div class="pf-c-progress__indicator" style="width:33%;"></div>
  </div>
</div>`,
    },
  },
  {
    displayName: "progress-step-instruction",
    picture: {
      src: "./pictures/progress/progress-step-instruction.png",
      width: 293,
      height: 89,
    },
    snippet: {
      html: `<div class="pf-c-progress" id="progress-step-instruction-example">
  <div class="pf-c-progress__description" id="progress-step-instruction-example-description">Title</div>
  <div class="pf-c-progress__status" aria-hidden="true">
    <span class="pf-c-progress__measure">Step 2: Copying files</span>
  </div>
  <div class="pf-c-progress__bar" role="progressbar" aria-valuemin="0" aria-valuemax="5" aria-valuenow="2" aria-valuetext="Step 2: Copying files" aria-describedby="progress-step-instruction-example-description">
    <div class="pf-c-progress__indicator" style="width:40%;"></div>
  </div>
</div>`,
    },
  },
  {
    displayName: "simple",
    picture: {
      src: "./pictures/progress/simple.png",
      width: 293,
      height: 89,
    },
    snippet: {
      html: `<div class="pf-c-progress" id="progress-simple-example">
  <div class="pf-c-progress__description" id="progress-simple-example-description">Title</div>
  <div class="pf-c-progress__status" aria-hidden="true">
    <span class="pf-c-progress__measure">33%</span>
  </div>
  <div class="pf-c-progress__bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="33" aria-describedby="progress-simple-example-description">
    <div class="pf-c-progress__indicator" style="width:33%;"></div>
  </div>
</div>`,
    },
  },
  {
    displayName: "small",
    picture: {
      src: "./pictures/progress/small.png",
      width: 293,
      height: 81,
    },
    snippet: {
      html: `<div class="pf-c-progress pf-m-sm" id="progress-sm-example">
  <div class="pf-c-progress__description" id="progress-sm-example-description">Title</div>
  <div class="pf-c-progress__status" aria-hidden="true">
    <span class="pf-c-progress__measure">33%</span>
  </div>
  <div class="pf-c-progress__bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="33" aria-describedby="progress-sm-example-description">
    <div class="pf-c-progress__indicator" style="width:33%;"></div>
  </div>
</div>`,
    },
  },
  {
    displayName: "success",
    picture: {
      src: "./pictures/progress/success.png",
      width: 293,
      height: 89,
    },
    snippet: {
      html: `<div class="pf-c-progress pf-m-success" id="progress-success-example">
  <div class="pf-c-progress__description" id="progress-success-example-description">Title</div>
  <div class="pf-c-progress__status" aria-hidden="true">
    <span class="pf-c-progress__measure">100%</span>
    <span class="pf-c-progress__status-icon">
      <i class="fas fa-check-circle" aria-hidden="true"></i>
    </span>
  </div>
  <div class="pf-c-progress__bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" aria-describedby="progress-success-example-description">
    <div class="pf-c-progress__indicator" style="width:100%;"></div>
  </div>
</div>`,
    },
  },
  {
    displayName: "without-measure",
    picture: {
      src: "./pictures/progress/without-measure.png",
      width: 293,
      height: 89,
    },
    snippet: {
      html: `<div class="pf-c-progress" id="progress-no-measure-example">
  <div class="pf-c-progress__description" id="progress-no-measure-example-description">Title</div>
  <div class="pf-c-progress__status" aria-hidden="true"></div>
  <div class="pf-c-progress__bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="33" aria-describedby="progress-no-measure-example-description">
    <div class="pf-c-progress__indicator" style="width:33%;"></div>
  </div>
</div>`,
    },
  },
];
