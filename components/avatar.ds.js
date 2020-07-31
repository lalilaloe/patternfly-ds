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
      src: "./components/pictures/avatar/basic.png",
      width: 293,
      height: 75,
    },
    snippet: {
      html: `<img class="pf-c-avatar" src="/assets/images/img_avatar.svg" alt="Avatar image" />`,
    },
  },
];
