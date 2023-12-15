import Page from "../../component/page";
import Status from "../../component/status";
import Back from "../../component/back-button";
import "./index.css";

const ReceivePage = () => {
  return (
    <Page>
      <Status />
      <Back />
      <h1 className="receive__title">Receive</h1>
      <div className="receive__content">
        <h2 className="receive__subtitle">Receive amount</h2>
        <input
          className="receive-amount"
          placeholder="Amount"
          label="amount"
          type="amount"
        />
      </div>

      <div className="payment__content">
        <h2 className="payment__subtitle">Payment System</h2>

        <div className="payment-form">
          <div className="payment-pic">
            <img src="/img/Frame 17.png" />
          </div>
          <div className="payment-info">Stripe</div>
          <div className="payment-logo">
            <img src="/img/frame 539.png" />
          </div>
        </div>

        <div className="payment-form">
          <div className="payment-pic">
            <img src="/img/Frame 19.png" />
          </div>
          <div className="payment-info">Coinbase</div>
          <div className="payment-logo">
            <img src="/img/frame 537.png" />
          </div>
        </div>
      </div>

      <div className="indicator-receive">
        <img src="/img/indicator.png" />
      </div>
    </Page>
  );
};

export default ReceivePage;
