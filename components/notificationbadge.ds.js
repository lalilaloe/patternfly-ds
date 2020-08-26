export default {
  displayName: "notificationbadge",
  name: "notificationbadge",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/notificationbadge/",
};

export const variants = [
  {
    displayName: "Unread notifications",
    picture: {
      src: "./pictures/notificationbadge/unread-notifications.png",
      width: 48,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-plain" type="button" aria-label="Unread notifications">
  <span class="pf-c-notification-badge pf-m-unread">
    <i class="fas fa-bell" aria-hidden="true"></i>
  </span>
</button>`,
    },
  },
  {
    displayName: "Notifications basic 1",
    picture: {
      src: "./pictures/notificationbadge/notifications-basic-1.png",
      width: 48,
      height: 36,
    },
    snippet: {
      html: `<button class="pf-c-button pf-m-plain" type="button" aria-label="Notifications">
  <span class="pf-c-notification-badge pf-m-read">
    <i class="fas fa-bell" aria-hidden="true"></i>
  </span>
</button>`,
    },
  },
];
