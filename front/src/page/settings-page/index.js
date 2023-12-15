import Page from "../../component/page";
import Status from "../../component/status";
import Back from "../../component/back-button";
import { Link } from "react-router-dom";
import "./index.css";

const SettingsPage = () => {
  return (
    <Page>
      <Status />
      <Back />
      <h1 className="settings__title">Settings</h1>
      <div className="settings">
        <h2 className="settings-change">Change email</h2>
        <div className="settings-content">
          <h2>Email</h2>
          <input
            className="settings-email"
            placeholder="email"
            label="Email"
            type="email"
          />
        </div>

        <div className="settings-content">
          <h2>Old Password</h2>
          <input
            className="settings-oldpassword"
            placeholder="Old Password"
            label="Old Password"
            type="oldpassword"
          />
        </div>

        <button className="button-save">
          <Link className="save-email">Save Email</Link>
        </button>
      </div>

      <div className="settings">
        <h2 className="settings-pass">Change Password</h2>
        <div className="settings-content">
          <h2>Old Password</h2>
          <input
            className="settings-password"
            placeholder="Old Password"
            label="oldpassword"
            type="oldpassword"
          />
        </div>

        <div className="settings-content">
          <h2>New Password</h2>
          <input
            className="settings-oldpassword"
            placeholder="New Password"
            label="Old Password"
            type="oldpassword"
          />
        </div>

        <button className="button-save">
          <Link className="save-email">Save Password</Link>
        </button>
      </div>

      <div className="button-logout">
        <button>
          <Link className="break" to="/wellcome">
            Log Out
          </Link>
        </button>
      </div>

      <div className="indicator-setting">
        <img src="/img/indicator.png" />
      </div>
    </Page>
  );
};

export default SettingsPage;
