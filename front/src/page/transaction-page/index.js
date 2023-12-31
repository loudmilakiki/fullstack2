import Page from "../../component/page";
import Status from "../../component/status";
import Back from "../../component/back-button";
import "./index.css";

const TransactionPage = () => {
  return (
    <Page>
      <Status />
      <Back />
      <h1 className="title">Transaction</h1>
      <div className="transaction-form">
        <div className="transaction-amount">-$30.00</div>

        <div className="transaction-content">
          <div className="transaction-block">
            <div className="transaction-box">
              <div>Date</div>
              <div>25 May, 15.20</div>
            </div>

            <div className="transaction-box">
              <div>Address</div>
              <div>user123@mail.com</div>
            </div>

            <div className="transaction-box">
              <div>Type</div>
              <div>Receive</div>
            </div>
          </div>
        </div>
      </div>

      <div className="indicator-transaction">
        <img src="/img/indicator.png" />
      </div>
    </Page>
  );
};

export default TransactionPage;
