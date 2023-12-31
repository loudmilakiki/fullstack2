import "./index.css";
import Page from "../../component/page";
import Status from "../../component/status";
import Back from "../../component/back-button";
import { Link } from "react-router-dom";

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
            <button className="button-recovery">
              <Link className="click-rec" to="../recovery/recovery-confirm">
                Send code
              </Link>
            </button>
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
