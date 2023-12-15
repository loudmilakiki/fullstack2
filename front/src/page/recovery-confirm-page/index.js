import "./index.css";
import Page from "../../component/page";
import Status from "../../component/status";
import Back from "../../component/back-button";

const RecoveryConfirmPage = () => {
  return (
    <Page>
      <Status />
      <Back />

      <div className="content-recon">
        <div className="recovery-confirm">
          <h1 className="title">Recover password</h1>
          <p className="descr">Write the code you received</p>
        </div>

        <div className="action-recon">
          <div className="input">
            <span>Code</span>
            <input
              className="input-recovery-confirm-code"
              placeholder="code"
              label="Code"
              type="code"
            />
          </div>

          <div className="pass">
            <span>New Password</span>
            <input
              className="input-recovery-confirm-password"
              placeholder="new password"
              label="Password"
              type="password"
            />
          </div>

          <div className="buttons-recon">
            <button className="button-recovery-confirm">
              Restore Password
            </button>
          </div>
        </div>
      </div>

      <div className="indicator-recon">
        <img src="/img/indicator.png" />
      </div>
    </Page>
  );
};

export default RecoveryConfirmPage;
