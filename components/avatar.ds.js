export default {
  displayName: "avatar",
  name: "avatar",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/avatar/",
};

export const variants = [
  {
    displayName: "basic",
    picture: {
      src: "./pictures/avatar/basic.png",
      width: 293,
      height: 75,
    },
    snippet: {
      html: `<img class="pf-c-avatar" src="node_modules/@patternfly/patternfly/assets/images/img_avatar.svg" alt="Avatar image" />`,
    },
  },
];
