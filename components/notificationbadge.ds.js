export default {
  displayName: "notificationbadge",
  name: "notificationbadge",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/notificationbadge/",
};

export const variants = [
  {
    displayName: "basic",
    picture: {
      src: "./components/pictures/notificationbadge/basic.png",
      width: 293,
      height: 69,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-plain" type="button" aria-label="Unread notifications">
  <span class="pf-c-notification-badge pf-m-unread">
    <i class="fas fa-bell" aria-hidden="true"></i>
  </span>
</button>
<button class="pf-c-button pf-m-plain" type="button" aria-label="Notifications">
  <span class="pf-c-notification-badge pf-m-read">
    <i class="fas fa-bell" aria-hidden="true"></i>
  </span>
</button>`,
    },
  },
];
