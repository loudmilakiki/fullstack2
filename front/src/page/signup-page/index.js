import "./index.css";
import Page from "../../component/page";
import Status from "../../component/status";
import Back from "../../component/back-button";
import { Link } from "react-router-dom";

const SignupPage = () => {
  class SignupPage {
    static value = {};

    static validate = (name, value) => {
      return true;
    };

    static submit = () => {
      console.log(this.value);
    };

    static change = (name, value) => {
      console.log(name, value);
      if (this.validate(name, value)) this.value[name] = value;
    };
  }

  window.signupForm = SignupPage;

  return (
    <Page>
      <Status />
      <Back />

      <div className="content-up">
        <div className="signup">
          <h1 className="title-up ">Sign up</h1>
          <p className="descr">Choose a registration method</p>
        </div>

        <div className="action">
          <div className="input">
            <span>Email</span>
            <input
              className="input-signup-email"
              placeholder="email"
              label="Email"
              type="email"
            />
          </div>

          <div className="pass">
            <span>Password</span>
            <input
              className="input-signup-password"
              placeholder="password"
              label="Password"
              type="password"
            />
          </div>

          <div className="pass">
            <span>Confirm Password</span>
            <input
              className="input-signup-password"
              placeholder="Confirm password"
              label="Password"
              type="password"
            />
          </div>

          <div className="mismatch">Password mismatch</div>

          <span>
            Already have an account?
            <Link className="account" to="/signin">
              Sign In
            </Link>
          </span>

          <div className="buttons-up">
            <button className="button-signup" type="submit">
              <Link className="account-link" to="signup-confirm">
                Continue
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="error">
        <span className="danger">
          <img src="./img/danger.png" /> A user with the same name is already
          exist
        </span>
      </div>

      <div className="indicator-up">
        <img src="/img/indicator.png" />
      </div>
    </Page>
  );
};
export default SignupPage;
