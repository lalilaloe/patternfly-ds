export default {
    displayName: "notificationdrawer",
    name: "notificationdrawer",
    homepage: "https://www.patternfly.org/v4//documentation/core/components/notificationdrawer/"
}

export const variants = [
{
displayName:"Basic",
picture:{
src:"./pictures/notificationdrawer/basic.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-notification-drawer">
  <div class="pf-c-notification-drawer__header">
    <h1 class="pf-c-notification-drawer__header-title">Notifications</h1>
    <span class="pf-c-notification-drawer__header-status">2 unread</span>
    <div class="pf-c-notification-drawer__header-action">
      <div class="pf-c-dropdown">
        <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-basic-header-action-button" aria-expanded="false" aria-label="Actions">
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </button>
        <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-basic-header-action-button" hidden>
          <li>
            <a class="pf-c-dropdown__menu-item" href="#">Link</a>
          </li>
          <li>
            <button class="pf-c-dropdown__menu-item" type="button">Action</button>
          </li>
          <li>
            <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
          </li>
          <li>
            <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
          </li>
          <li class="pf-c-divider" role="separator"></li>
          <li>
            <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="pf-c-notification-drawer__body">
    <ul class="pf-c-notification-drawer__list">
      <li class="pf-c-notification-drawer__list-item pf-m-hoverable pf-m-info " tabindex="0">
        <div class="pf-c-notification-drawer__list-item-header">
          <span class="pf-c-notification-drawer__list-item-header-icon">
            <i class="fas fa-info-circle" aria-hidden="true"></i>
          </span>
          <h2 class="pf-c-notification-drawer__list-item-header-title">
            <span class="pf-screen-reader">Info notification:</span>Unread info notification title</h2>
        </div>
        <div class="pf-c-notification-drawer__list-item-action">
          <div class="pf-c-dropdown">
            <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-basic-action1-button" aria-expanded="false" aria-label="Actions">
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-basic-action1-button" hidden>
              <li>
                <a class="pf-c-dropdown__menu-item" href="#">Link</a>
              </li>
              <li>
                <button class="pf-c-dropdown__menu-item" type="button">Action</button>
              </li>
              <li>
                <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
              </li>
              <li>
                <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
              </li>
              <li class="pf-c-divider" role="separator"></li>
              <li>
                <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pf-c-notification-drawer__list-item-description">This is an info notification description.</div>
        <div class="pf-c-notification-drawer__list-item-timestamp">5 minutes ago</div>
      </li>
      <li class="pf-c-notification-drawer__list-item pf-m-hoverable pf-m-danger " tabindex="0">
        <div class="pf-c-notification-drawer__list-item-header">
          <span class="pf-c-notification-drawer__list-item-header-icon">
            <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
          </span>
          <h2 class="pf-c-notification-drawer__list-item-header-title">
            <span class="pf-screen-reader">Danger notification:</span>Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.</h2>
        </div>
        <div class="pf-c-notification-drawer__list-item-action">
          <div class="pf-c-dropdown">
            <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-basic-action2-button" aria-expanded="false" aria-label="Actions">
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-basic-action2-button" hidden>
              <li>
                <a class="pf-c-dropdown__menu-item" href="#">Link</a>
              </li>
              <li>
                <button class="pf-c-dropdown__menu-item" type="button">Action</button>
              </li>
              <li>
                <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
              </li>
              <li>
                <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
              </li>
              <li class="pf-c-divider" role="separator"></li>
              <li>
                <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pf-c-notification-drawer__list-item-description">This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>
        <div class="pf-c-notification-drawer__list-item-timestamp">10 minutes ago</div>
      </li>
      <li class="pf-c-notification-drawer__list-item pf-m-read pf-m-warning pf-m-hoverable">
        <div class="pf-c-notification-drawer__list-item-header">
          <span class="pf-c-notification-drawer__list-item-header-icon">
            <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
          </span>
          <h2 class="pf-c-notification-drawer__list-item-header-title">
            <span class="pf-screen-reader">Warning notification:</span>Read warning notification title</h2>
        </div>
        <div class="pf-c-notification-drawer__list-item-action">
          <div class="pf-c-dropdown pf-m-top">
            <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-basic-action3-button" aria-expanded="false" aria-label="Actions">
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-basic-action3-button" hidden>
              <li>
                <a class="pf-c-dropdown__menu-item" href="#">Link</a>
              </li>
              <li>
                <button class="pf-c-dropdown__menu-item" type="button">Action</button>
              </li>
              <li>
                <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
              </li>
              <li>
                <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
              </li>
              <li class="pf-c-divider" role="separator"></li>
              <li>
                <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pf-c-notification-drawer__list-item-description">This is a warning notification description.</div>
        <div class="pf-c-notification-drawer__list-item-timestamp">20 minutes ago</div>
      </li>
      <li class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable">
        <div class="pf-c-notification-drawer__list-item-header">
          <span class="pf-c-notification-drawer__list-item-header-icon">
            <i class="fas fa-check-circle" aria-hidden="true"></i>
          </span>
          <h2 class="pf-c-notification-drawer__list-item-header-title">
            <span class="pf-screen-reader">Success notification:</span>Read success notification title</h2>
        </div>
        <div class="pf-c-notification-drawer__list-item-action">
          <div class="pf-c-dropdown pf-m-top">
            <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-basic-action4-button" aria-expanded="false" aria-label="Actions">
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-basic-action4-button" hidden>
              <li>
                <a class="pf-c-dropdown__menu-item" href="#">Link</a>
              </li>
              <li>
                <button class="pf-c-dropdown__menu-item" type="button">Action</button>
              </li>
              <li>
                <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
              </li>
              <li>
                <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
              </li>
              <li class="pf-c-divider" role="separator"></li>
              <li>
                <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pf-c-notification-drawer__list-item-description">This is a success notification description.</div>
        <div class="pf-c-notification-drawer__list-item-timestamp">30 minutes ago</div>
      </li>
      <li class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable">
        <div class="pf-c-notification-drawer__list-item-header">
          <span class="pf-c-notification-drawer__list-item-header-icon">
            <i class="fas fa-check-circle" aria-hidden="true"></i>
          </span>
          <h2 class="pf-c-notification-drawer__list-item-header-title pf-m-truncate">
            <span class="pf-screen-reader">Success notification:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.</h2>
        </div>
        <div class="pf-c-notification-drawer__list-item-action">
          <div class="pf-c-dropdown pf-m-top">
            <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-basic-action5-button" aria-expanded="false" aria-label="Actions">
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-basic-action5-button" hidden>
              <li>
                <a class="pf-c-dropdown__menu-item" href="#">Link</a>
              </li>
              <li>
                <button class="pf-c-dropdown__menu-item" type="button">Action</button>
              </li>
              <li>
                <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
              </li>
              <li>
                <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
              </li>
              <li class="pf-c-divider" role="separator"></li>
              <li>
                <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pf-c-notification-drawer__list-item-description">This example uses ".pf-m-truncate" to limit the title to a single line and truncate any overflow text with ellipses.</div>
        <div class="pf-c-notification-drawer__list-item-timestamp">40 minutes ago</div>
      </li>
      <li class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable">
        <div class="pf-c-notification-drawer__list-item-header">
          <span class="pf-c-notification-drawer__list-item-header-icon">
            <i class="fas fa-check-circle" aria-hidden="true"></i>
          </span>
          <h2 class="pf-c-notification-drawer__list-item-header-title pf-m-truncate" style="--pf-c-notification-drawer__list-item-header-title--max-lines: 2">
            <span class="pf-screen-reader">Success notification:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.</h2>
        </div>
        <div class="pf-c-notification-drawer__list-item-action">
          <div class="pf-c-dropdown pf-m-top">
            <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-basic-action6-button" aria-expanded="false" aria-label="Actions">
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-basic-action6-button" hidden>
              <li>
                <a class="pf-c-dropdown__menu-item" href="#">Link</a>
              </li>
              <li>
                <button class="pf-c-dropdown__menu-item" type="button">Action</button>
              </li>
              <li>
                <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
              </li>
              <li>
                <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
              </li>
              <li class="pf-c-divider" role="separator"></li>
              <li>
                <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pf-c-notification-drawer__list-item-description">This example uses ".pf-m-truncate" and sets "--pf-c-notification-drawer__list-item-header-title--max-lines: 2" to limit title to two lines and truncate any overflow text with ellipses.</div>
        <div class="pf-c-notification-drawer__list-item-timestamp">50 minutes ago</div>
      </li>
    </ul>
  </div>
</div>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/notificationdrawer/groups.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-notification-drawer">
  <div class="pf-c-notification-drawer__header">
    <h1 class="pf-c-notification-drawer__header-title">Notifications</h1>
    <span class="pf-c-notification-drawer__header-status">2 unread</span>
    <div class="pf-c-notification-drawer__header-action">
      <div class="pf-c-dropdown">
        <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-groups-header-action-button" aria-expanded="false" aria-label="Actions">
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </button>
        <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-groups-header-action-button" hidden>
          <li>
            <a class="pf-c-dropdown__menu-item" href="#">Link</a>
          </li>
          <li>
            <button class="pf-c-dropdown__menu-item" type="button">Action</button>
          </li>
          <li>
            <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
          </li>
          <li>
            <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
          </li>
          <li class="pf-c-divider" role="separator"></li>
          <li>
            <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="pf-c-notification-drawer__body">
    <div class="pf-c-notification-drawer__group-list">
      <section class="pf-c-notification-drawer__group">
        <h1>
          <button class="pf-c-notification-drawer__group-toggle" aria-expanded="false">
            <div class="pf-c-notification-drawer__group-toggle-title">First notification group</div>
            <div class="pf-c-notification-drawer__group-toggle-count">
              <span class="pf-c-badge pf-m-unread">2</span>
            </div>
            <span class="pf-c-notification-drawer__group-toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </button>
        </h1>
        <ul class="pf-c-notification-drawer__list" hidden>
          <li class="pf-c-notification-drawer__list-item pf-m-hoverable pf-m-info " tabindex="0">
            <div class="pf-c-notification-drawer__list-item-header">
              <span class="pf-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-info-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-c-notification-drawer__list-item-header-title">
                <span class="pf-screen-reader">Info notification:</span>Unread info notification title</h2>
            </div>
            <div class="pf-c-notification-drawer__list-item-action">
              <div class="pf-c-dropdown">
                <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-groups-group1-action1-button" aria-expanded="false" aria-label="Actions">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-groups-group1-action1-button" hidden>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button">Action</button>
                  </li>
                  <li>
                    <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
                  </li>
                  <li class="pf-c-divider" role="separator"></li>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pf-c-notification-drawer__list-item-description">This is an info notification description.</div>
            <div class="pf-c-notification-drawer__list-item-timestamp">5 minutes ago</div>
          </li>
          <li class="pf-c-notification-drawer__list-item pf-m-hoverable pf-m-danger " tabindex="0">
            <div class="pf-c-notification-drawer__list-item-header">
              <span class="pf-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-c-notification-drawer__list-item-header-title">
                <span class="pf-screen-reader">Danger notification:</span>Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.</h2>
            </div>
            <div class="pf-c-notification-drawer__list-item-action">
              <div class="pf-c-dropdown">
                <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-groups-group1-action2-button" aria-expanded="false" aria-label="Actions">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-groups-group1-action2-button" hidden>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button">Action</button>
                  </li>
                  <li>
                    <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
                  </li>
                  <li class="pf-c-divider" role="separator"></li>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pf-c-notification-drawer__list-item-description">This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>
            <div class="pf-c-notification-drawer__list-item-timestamp">10 minutes ago</div>
          </li>
          <li class="pf-c-notification-drawer__list-item pf-m-read pf-m-warning pf-m-hoverable">
            <div class="pf-c-notification-drawer__list-item-header">
              <span class="pf-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-c-notification-drawer__list-item-header-title">
                <span class="pf-screen-reader">Warning notification:</span>Read warning notification title</h2>
            </div>
            <div class="pf-c-notification-drawer__list-item-action">
              <div class="pf-c-dropdown pf-m-top">
                <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-groups-group1-action3-button" aria-expanded="false" aria-label="Actions">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-groups-group1-action3-button" hidden>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button">Action</button>
                  </li>
                  <li>
                    <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
                  </li>
                  <li class="pf-c-divider" role="separator"></li>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pf-c-notification-drawer__list-item-description">This is a warning notification description.</div>
            <div class="pf-c-notification-drawer__list-item-timestamp">20 minutes ago</div>
          </li>
          <li class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable">
            <div class="pf-c-notification-drawer__list-item-header">
              <span class="pf-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-c-notification-drawer__list-item-header-title">
                <span class="pf-screen-reader">Success notification:</span>Read success notification title</h2>
            </div>
            <div class="pf-c-notification-drawer__list-item-action">
              <div class="pf-c-dropdown pf-m-top">
                <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-groups-group1-action4-button" aria-expanded="false" aria-label="Actions">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-groups-group1-action4-button" hidden>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button">Action</button>
                  </li>
                  <li>
                    <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
                  </li>
                  <li class="pf-c-divider" role="separator"></li>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pf-c-notification-drawer__list-item-description">This is a success notification description.</div>
            <div class="pf-c-notification-drawer__list-item-timestamp">30 minutes ago</div>
          </li>
          <li class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable">
            <div class="pf-c-notification-drawer__list-item-header">
              <span class="pf-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-c-notification-drawer__list-item-header-title pf-m-truncate">
                <span class="pf-screen-reader">Success notification:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.</h2>
            </div>
            <div class="pf-c-notification-drawer__list-item-action">
              <div class="pf-c-dropdown pf-m-top">
                <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-groups-group1-action5-button" aria-expanded="false" aria-label="Actions">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-groups-group1-action5-button" hidden>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button">Action</button>
                  </li>
                  <li>
                    <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
                  </li>
                  <li class="pf-c-divider" role="separator"></li>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pf-c-notification-drawer__list-item-description">This example uses ".pf-m-truncate" to limit the title to a single line and truncate any overflow text with ellipses.</div>
            <div class="pf-c-notification-drawer__list-item-timestamp">40 minutes ago</div>
          </li>
          <li class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable">
            <div class="pf-c-notification-drawer__list-item-header">
              <span class="pf-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-c-notification-drawer__list-item-header-title pf-m-truncate" style="--pf-c-notification-drawer__list-item-header-title--max-lines: 2">
                <span class="pf-screen-reader">Success notification:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.</h2>
            </div>
            <div class="pf-c-notification-drawer__list-item-action">
              <div class="pf-c-dropdown pf-m-top">
                <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-groups-group1-action6-button" aria-expanded="false" aria-label="Actions">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-groups-group1-action6-button" hidden>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button">Action</button>
                  </li>
                  <li>
                    <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
                  </li>
                  <li class="pf-c-divider" role="separator"></li>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pf-c-notification-drawer__list-item-description">This example uses ".pf-m-truncate" and sets "--pf-c-notification-drawer__list-item-header-title--max-lines: 2" to limit title to two lines and truncate any overflow text with ellipses.</div>
            <div class="pf-c-notification-drawer__list-item-timestamp">50 minutes ago</div>
          </li>
        </ul>
      </section>
      <section class="pf-c-notification-drawer__group pf-m-expanded">
        <h1>
          <button class="pf-c-notification-drawer__group-toggle" aria-expanded="true">
            <div class="pf-c-notification-drawer__group-toggle-title">Second notification group</div>
            <div class="pf-c-notification-drawer__group-toggle-count">
              <span class="pf-c-badge pf-m-unread">2</span>
            </div>
            <span class="pf-c-notification-drawer__group-toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </button>
        </h1>
        <ul class="pf-c-notification-drawer__list">
          <li class="pf-c-notification-drawer__list-item pf-m-hoverable pf-m-info " tabindex="0">
            <div class="pf-c-notification-drawer__list-item-header">
              <span class="pf-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-info-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-c-notification-drawer__list-item-header-title">
                <span class="pf-screen-reader">Info notification:</span>Unread info notification title</h2>
            </div>
            <div class="pf-c-notification-drawer__list-item-action">
              <div class="pf-c-dropdown">
                <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-groups-group2-action1-button" aria-expanded="false" aria-label="Actions">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-groups-group2-action1-button" hidden>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button">Action</button>
                  </li>
                  <li>
                    <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
                  </li>
                  <li class="pf-c-divider" role="separator"></li>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pf-c-notification-drawer__list-item-description">This is an info notification description.</div>
            <div class="pf-c-notification-drawer__list-item-timestamp">5 minutes ago</div>
          </li>
          <li class="pf-c-notification-drawer__list-item pf-m-hoverable pf-m-danger " tabindex="0">
            <div class="pf-c-notification-drawer__list-item-header">
              <span class="pf-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-c-notification-drawer__list-item-header-title">
                <span class="pf-screen-reader">Danger notification:</span>Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.</h2>
            </div>
            <div class="pf-c-notification-drawer__list-item-action">
              <div class="pf-c-dropdown">
                <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-groups-group2-action2-button" aria-expanded="false" aria-label="Actions">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-groups-group2-action2-button" hidden>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button">Action</button>
                  </li>
                  <li>
                    <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
                  </li>
                  <li class="pf-c-divider" role="separator"></li>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pf-c-notification-drawer__list-item-description">This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>
            <div class="pf-c-notification-drawer__list-item-timestamp">10 minutes ago</div>
          </li>
          <li class="pf-c-notification-drawer__list-item pf-m-read pf-m-warning pf-m-hoverable">
            <div class="pf-c-notification-drawer__list-item-header">
              <span class="pf-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-c-notification-drawer__list-item-header-title">
                <span class="pf-screen-reader">Warning notification:</span>Read warning notification title</h2>
            </div>
            <div class="pf-c-notification-drawer__list-item-action">
              <div class="pf-c-dropdown pf-m-top">
                <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-groups-group2-action3-button" aria-expanded="false" aria-label="Actions">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-groups-group2-action3-button" hidden>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button">Action</button>
                  </li>
                  <li>
                    <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
                  </li>
                  <li class="pf-c-divider" role="separator"></li>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pf-c-notification-drawer__list-item-description">This is a warning notification description.</div>
            <div class="pf-c-notification-drawer__list-item-timestamp">20 minutes ago</div>
          </li>
          <li class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable">
            <div class="pf-c-notification-drawer__list-item-header">
              <span class="pf-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-c-notification-drawer__list-item-header-title">
                <span class="pf-screen-reader">Success notification:</span>Read success notification title</h2>
            </div>
            <div class="pf-c-notification-drawer__list-item-action">
              <div class="pf-c-dropdown pf-m-top">
                <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-groups-group2-action4-button" aria-expanded="false" aria-label="Actions">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-groups-group2-action4-button" hidden>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button">Action</button>
                  </li>
                  <li>
                    <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
                  </li>
                  <li class="pf-c-divider" role="separator"></li>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pf-c-notification-drawer__list-item-description">This is a success notification description.</div>
            <div class="pf-c-notification-drawer__list-item-timestamp">30 minutes ago</div>
          </li>
          <li class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable">
            <div class="pf-c-notification-drawer__list-item-header">
              <span class="pf-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-c-notification-drawer__list-item-header-title pf-m-truncate">
                <span class="pf-screen-reader">Success notification:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.</h2>
            </div>
            <div class="pf-c-notification-drawer__list-item-action">
              <div class="pf-c-dropdown pf-m-top">
                <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-groups-group2-action5-button" aria-expanded="false" aria-label="Actions">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-groups-group2-action5-button" hidden>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button">Action</button>
                  </li>
                  <li>
                    <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
                  </li>
                  <li class="pf-c-divider" role="separator"></li>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pf-c-notification-drawer__list-item-description">This example uses ".pf-m-truncate" to limit the title to a single line and truncate any overflow text with ellipses.</div>
            <div class="pf-c-notification-drawer__list-item-timestamp">40 minutes ago</div>
          </li>
          <li class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable">
            <div class="pf-c-notification-drawer__list-item-header">
              <span class="pf-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-c-notification-drawer__list-item-header-title pf-m-truncate" style="--pf-c-notification-drawer__list-item-header-title--max-lines: 2">
                <span class="pf-screen-reader">Success notification:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.</h2>
            </div>
            <div class="pf-c-notification-drawer__list-item-action">
              <div class="pf-c-dropdown pf-m-top">
                <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-groups-group2-action6-button" aria-expanded="false" aria-label="Actions">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-groups-group2-action6-button" hidden>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button">Action</button>
                  </li>
                  <li>
                    <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
                  </li>
                  <li class="pf-c-divider" role="separator"></li>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pf-c-notification-drawer__list-item-description">This example uses ".pf-m-truncate" and sets "--pf-c-notification-drawer__list-item-header-title--max-lines: 2" to limit title to two lines and truncate any overflow text with ellipses.</div>
            <div class="pf-c-notification-drawer__list-item-timestamp">50 minutes ago</div>
          </li>
        </ul>
      </section>
      <section class="pf-c-notification-drawer__group">
        <h1>
          <button class="pf-c-notification-drawer__group-toggle" aria-expanded="false">
            <div class="pf-c-notification-drawer__group-toggle-title">Third notification group</div>
            <div class="pf-c-notification-drawer__group-toggle-count">
              <span class="pf-c-badge pf-m-unread">2</span>
            </div>
            <span class="pf-c-notification-drawer__group-toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </button>
        </h1>
        <ul class="pf-c-notification-drawer__list" hidden>
          <li class="pf-c-notification-drawer__list-item pf-m-hoverable pf-m-info " tabindex="0">
            <div class="pf-c-notification-drawer__list-item-header">
              <span class="pf-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-info-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-c-notification-drawer__list-item-header-title">
                <span class="pf-screen-reader">Info notification:</span>Unread info notification title</h2>
            </div>
            <div class="pf-c-notification-drawer__list-item-action">
              <div class="pf-c-dropdown">
                <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-groups-group3-action1-button" aria-expanded="false" aria-label="Actions">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-groups-group3-action1-button" hidden>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button">Action</button>
                  </li>
                  <li>
                    <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
                  </li>
                  <li class="pf-c-divider" role="separator"></li>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pf-c-notification-drawer__list-item-description">This is an info notification description.</div>
            <div class="pf-c-notification-drawer__list-item-timestamp">5 minutes ago</div>
          </li>
          <li class="pf-c-notification-drawer__list-item pf-m-hoverable pf-m-danger " tabindex="0">
            <div class="pf-c-notification-drawer__list-item-header">
              <span class="pf-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-c-notification-drawer__list-item-header-title">
                <span class="pf-screen-reader">Danger notification:</span>Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.</h2>
            </div>
            <div class="pf-c-notification-drawer__list-item-action">
              <div class="pf-c-dropdown">
                <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-groups-group3-action2-button" aria-expanded="false" aria-label="Actions">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-groups-group3-action2-button" hidden>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button">Action</button>
                  </li>
                  <li>
                    <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
                  </li>
                  <li class="pf-c-divider" role="separator"></li>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pf-c-notification-drawer__list-item-description">This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>
            <div class="pf-c-notification-drawer__list-item-timestamp">10 minutes ago</div>
          </li>
          <li class="pf-c-notification-drawer__list-item pf-m-read pf-m-warning pf-m-hoverable">
            <div class="pf-c-notification-drawer__list-item-header">
              <span class="pf-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-c-notification-drawer__list-item-header-title">
                <span class="pf-screen-reader">Warning notification:</span>Read warning notification title</h2>
            </div>
            <div class="pf-c-notification-drawer__list-item-action">
              <div class="pf-c-dropdown pf-m-top">
                <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-groups-group3-action3-button" aria-expanded="false" aria-label="Actions">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-groups-group3-action3-button" hidden>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button">Action</button>
                  </li>
                  <li>
                    <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
                  </li>
                  <li class="pf-c-divider" role="separator"></li>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pf-c-notification-drawer__list-item-description">This is a warning notification description.</div>
            <div class="pf-c-notification-drawer__list-item-timestamp">20 minutes ago</div>
          </li>
          <li class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable">
            <div class="pf-c-notification-drawer__list-item-header">
              <span class="pf-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-c-notification-drawer__list-item-header-title">
                <span class="pf-screen-reader">Success notification:</span>Read success notification title</h2>
            </div>
            <div class="pf-c-notification-drawer__list-item-action">
              <div class="pf-c-dropdown pf-m-top">
                <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-groups-group3-action4-button" aria-expanded="false" aria-label="Actions">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-groups-group3-action4-button" hidden>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button">Action</button>
                  </li>
                  <li>
                    <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
                  </li>
                  <li class="pf-c-divider" role="separator"></li>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pf-c-notification-drawer__list-item-description">This is a success notification description.</div>
            <div class="pf-c-notification-drawer__list-item-timestamp">30 minutes ago</div>
          </li>
          <li class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable">
            <div class="pf-c-notification-drawer__list-item-header">
              <span class="pf-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-c-notification-drawer__list-item-header-title pf-m-truncate">
                <span class="pf-screen-reader">Success notification:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.</h2>
            </div>
            <div class="pf-c-notification-drawer__list-item-action">
              <div class="pf-c-dropdown pf-m-top">
                <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-groups-group3-action5-button" aria-expanded="false" aria-label="Actions">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-groups-group3-action5-button" hidden>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button">Action</button>
                  </li>
                  <li>
                    <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
                  </li>
                  <li class="pf-c-divider" role="separator"></li>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pf-c-notification-drawer__list-item-description">This example uses ".pf-m-truncate" to limit the title to a single line and truncate any overflow text with ellipses.</div>
            <div class="pf-c-notification-drawer__list-item-timestamp">40 minutes ago</div>
          </li>
          <li class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable">
            <div class="pf-c-notification-drawer__list-item-header">
              <span class="pf-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-c-notification-drawer__list-item-header-title pf-m-truncate" style="--pf-c-notification-drawer__list-item-header-title--max-lines: 2">
                <span class="pf-screen-reader">Success notification:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.</h2>
            </div>
            <div class="pf-c-notification-drawer__list-item-action">
              <div class="pf-c-dropdown pf-m-top">
                <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-groups-group3-action6-button" aria-expanded="false" aria-label="Actions">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-groups-group3-action6-button" hidden>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button">Action</button>
                  </li>
                  <li>
                    <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
                  </li>
                  <li class="pf-c-divider" role="separator"></li>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pf-c-notification-drawer__list-item-description">This example uses ".pf-m-truncate" and sets "--pf-c-notification-drawer__list-item-header-title--max-lines: 2" to limit title to two lines and truncate any overflow text with ellipses.</div>
            <div class="pf-c-notification-drawer__list-item-timestamp">50 minutes ago</div>
          </li>
        </ul>
      </section>
      <section class="pf-c-notification-drawer__group">
        <h1>
          <button class="pf-c-notification-drawer__group-toggle" aria-expanded="false">
            <div class="pf-c-notification-drawer__group-toggle-title">Fourth notification group</div>
            <div class="pf-c-notification-drawer__group-toggle-count">
              <span class="pf-c-badge pf-m-unread">2</span>
            </div>
            <span class="pf-c-notification-drawer__group-toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </button>
        </h1>
        <ul class="pf-c-notification-drawer__list" hidden>
          <li class="pf-c-notification-drawer__list-item pf-m-hoverable pf-m-info " tabindex="0">
            <div class="pf-c-notification-drawer__list-item-header">
              <span class="pf-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-info-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-c-notification-drawer__list-item-header-title">
                <span class="pf-screen-reader">Info notification:</span>Unread info notification title</h2>
            </div>
            <div class="pf-c-notification-drawer__list-item-action">
              <div class="pf-c-dropdown">
                <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-groups-group4-action1-button" aria-expanded="false" aria-label="Actions">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-groups-group4-action1-button" hidden>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button">Action</button>
                  </li>
                  <li>
                    <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
                  </li>
                  <li class="pf-c-divider" role="separator"></li>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pf-c-notification-drawer__list-item-description">This is an info notification description.</div>
            <div class="pf-c-notification-drawer__list-item-timestamp">5 minutes ago</div>
          </li>
          <li class="pf-c-notification-drawer__list-item pf-m-hoverable pf-m-danger " tabindex="0">
            <div class="pf-c-notification-drawer__list-item-header">
              <span class="pf-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-c-notification-drawer__list-item-header-title">
                <span class="pf-screen-reader">Danger notification:</span>Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.</h2>
            </div>
            <div class="pf-c-notification-drawer__list-item-action">
              <div class="pf-c-dropdown">
                <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-groups-group4-action2-button" aria-expanded="false" aria-label="Actions">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-groups-group4-action2-button" hidden>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button">Action</button>
                  </li>
                  <li>
                    <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
                  </li>
                  <li class="pf-c-divider" role="separator"></li>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pf-c-notification-drawer__list-item-description">This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.</div>
            <div class="pf-c-notification-drawer__list-item-timestamp">10 minutes ago</div>
          </li>
          <li class="pf-c-notification-drawer__list-item pf-m-read pf-m-warning pf-m-hoverable">
            <div class="pf-c-notification-drawer__list-item-header">
              <span class="pf-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-c-notification-drawer__list-item-header-title">
                <span class="pf-screen-reader">Warning notification:</span>Read warning notification title</h2>
            </div>
            <div class="pf-c-notification-drawer__list-item-action">
              <div class="pf-c-dropdown pf-m-top">
                <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-groups-group4-action3-button" aria-expanded="false" aria-label="Actions">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-groups-group4-action3-button" hidden>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button">Action</button>
                  </li>
                  <li>
                    <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
                  </li>
                  <li class="pf-c-divider" role="separator"></li>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pf-c-notification-drawer__list-item-description">This is a warning notification description.</div>
            <div class="pf-c-notification-drawer__list-item-timestamp">20 minutes ago</div>
          </li>
          <li class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable">
            <div class="pf-c-notification-drawer__list-item-header">
              <span class="pf-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-c-notification-drawer__list-item-header-title">
                <span class="pf-screen-reader">Success notification:</span>Read success notification title</h2>
            </div>
            <div class="pf-c-notification-drawer__list-item-action">
              <div class="pf-c-dropdown pf-m-top">
                <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-groups-group4-action4-button" aria-expanded="false" aria-label="Actions">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-groups-group4-action4-button" hidden>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button">Action</button>
                  </li>
                  <li>
                    <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
                  </li>
                  <li class="pf-c-divider" role="separator"></li>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pf-c-notification-drawer__list-item-description">This is a success notification description.</div>
            <div class="pf-c-notification-drawer__list-item-timestamp">30 minutes ago</div>
          </li>
          <li class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable">
            <div class="pf-c-notification-drawer__list-item-header">
              <span class="pf-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-c-notification-drawer__list-item-header-title pf-m-truncate">
                <span class="pf-screen-reader">Success notification:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.</h2>
            </div>
            <div class="pf-c-notification-drawer__list-item-action">
              <div class="pf-c-dropdown pf-m-top">
                <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-groups-group4-action5-button" aria-expanded="false" aria-label="Actions">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-groups-group4-action5-button" hidden>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button">Action</button>
                  </li>
                  <li>
                    <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
                  </li>
                  <li class="pf-c-divider" role="separator"></li>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pf-c-notification-drawer__list-item-description">This example uses ".pf-m-truncate" to limit the title to a single line and truncate any overflow text with ellipses.</div>
            <div class="pf-c-notification-drawer__list-item-timestamp">40 minutes ago</div>
          </li>
          <li class="pf-c-notification-drawer__list-item pf-m-read pf-m-success pf-m-hoverable">
            <div class="pf-c-notification-drawer__list-item-header">
              <span class="pf-c-notification-drawer__list-item-header-icon">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
              </span>
              <h2 class="pf-c-notification-drawer__list-item-header-title pf-m-truncate" style="--pf-c-notification-drawer__list-item-header-title--max-lines: 2">
                <span class="pf-screen-reader">Success notification:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis odio risus. Ut dictum vitae sapien at posuere. Nullam suscipit massa quis lacus pellentesque scelerisque. Donec non maximus neque, quis ornare nunc. Vivamus in nibh sed libero feugiat feugiat. Nulla lacinia rutrum est, a commodo odio vestibulum suscipit. Nullam id quam et quam porttitor interdum quis nec tellus. Vestibulum arcu dui, pulvinar eu tellus in, semper mattis diam. Sed commodo tincidunt lacus non pulvinar. Curabitur tempor molestie vestibulum. Vivamus vel mi dignissim, efficitur neque eget, efficitur massa. Mauris vitae nunc augue. Donec augue lorem, malesuada et quam vitae, volutpat mattis nisi. Nullam nec venenatis ex, quis lobortis purus. Sed nisl dolor, mattis sit amet tincidunt quis, mollis sed massa.</h2>
            </div>
            <div class="pf-c-notification-drawer__list-item-action">
              <div class="pf-c-dropdown pf-m-top">
                <button class="pf-c-dropdown__toggle pf-m-plain" type="button" id="notification-drawer-groups-group4-action6-button" aria-expanded="false" aria-label="Actions">
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul class="pf-c-dropdown__menu pf-m-align-right" aria-labelledby="notification-drawer-groups-group4-action6-button" hidden>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button">Action</button>
                  </li>
                  <li>
                    <a class="pf-c-dropdown__menu-item pf-m-disabled" href="#" aria-disabled="true" tabindex="-1">Disabled link</a>
                  </li>
                  <li>
                    <button class="pf-c-dropdown__menu-item" type="button" disabled>Disabled action</button>
                  </li>
                  <li class="pf-c-divider" role="separator"></li>
                  <li>
                    <a class="pf-c-dropdown__menu-item" href="#">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pf-c-notification-drawer__list-item-description">This example uses ".pf-m-truncate" and sets "--pf-c-notification-drawer__list-item-header-title--max-lines: 2" to limit title to two lines and truncate any overflow text with ellipses.</div>
            <div class="pf-c-notification-drawer__list-item-timestamp">50 minutes ago</div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</div>`}}
]