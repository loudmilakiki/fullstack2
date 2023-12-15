import Page from "../../component/page";
import Status from "../../component/status";
import Back from "../../component/back-button";
import "./index.css";

const NotificationsPage = () => {
  return (
    <Page>
      <Status />
      <Back />
      <h1 className="notifications-title">Notifications</h1>
      <div className="notification-content">
        <div className="notification">
          <div className="notification-pic">
            <img src="/img/bell-ringing.png" />
          </div>
          <div className="notification-info">
            <div className="notification-system">New reward system</div>
            <div className="notification-detail">
              10 min. ago - Announcement
            </div>
          </div>
        </div>

        <div className="notification">
          <div className="notification-pic">
            <img src="/img/danger.png" />
          </div>
          <div className="notification-info">
            <div className="notification-system">New login</div>
            <div className="notification-detail">
              10 min. ago - Announcement
            </div>
          </div>
        </div>

        <div className="notification">
          <div className="notification-pic">
            <img src="/img/bell-ringing.png" />
          </div>
          <div className="notification-info">
            <div className="notification-system">New reward system</div>
            <div className="notification-detail">
              10 min. ago - Announcement
            </div>
          </div>
        </div>

        <div className="notification">
          <div className="notification-pic">
            <img src="/img/danger.png" />
          </div>
          <div className="notification-info">
            <div className="notification-system">New login</div>
            <div className="notification-detail">
              10 min. ago - Announcement
            </div>
          </div>
        </div>
      </div>

      <div className="indicator-notification">
        <img src="/img/indicator.png" />
      </div>
    </Page>
  );
};

export default NotificationsPage;
