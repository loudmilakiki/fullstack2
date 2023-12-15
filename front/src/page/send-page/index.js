import Page from "../../component/page";
import Status from "../../component/status";
import Back from "../../component/back-button";
import { Link } from "react-router-dom";
import "./index.css";

const SendPage = () => {
  return (
    <Page>
      <Status />
      <Back />
      <div className="content-send">
        <div className="sending">
          <h1 className="title">Send</h1>
        </div>

        <div className="action-send">
          <div className="input">
            <span>Email</span>
            <input
              className="input-recovery-email"
              placeholder="email"
              label="Email"
              type="email"
            />
          </div>

          <div className="sum">
            <span>Sum</span>
            <input
              className="input-send-sum"
              placeholder="sum"
              label="sum"
              type="sum"
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

      <div className="indicator-send">
        <img src="/img/indicator.png" />
      </div>
    </Page>
  );
};
export default SendPage;
