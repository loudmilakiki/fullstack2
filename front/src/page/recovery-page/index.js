import "./index.css";
import Page from "../../component/page";
import Status from "../../component/status";
import Back from "../../component/back-button";

const RecoveryPage = () => {
  return (
    <Page>
      <Status />
      <Back />
      <div className="content-rec">
        <div className="recovery">
          <h1 className="title">Recover password</h1>
          <p className="descr">Choose a registration method</p>
        </div>

        <div className="action">
          <div className="input">
            <span>Email</span>
            <input
              className="input-recovery-email"
              placeholder="email"
              label="Email"
              type="email"
            />
          </div>

          <div className="buttons-rec">
            <button className="button-recovery">Send code</button>
          </div>
        </div>
      </div>

      <div className="indicator-rec">
        <img src="/img/indicator.png" />
      </div>
    </Page>
  );
};

export default RecoveryPage;
