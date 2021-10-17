import React from "react";
import { LoginFormWithAuth } from "./LoginForm";
import RegisterForm from "./RegisterForm";

const PAGES = {
  login: LoginFormWithAuth,
  reg: RegisterForm
}

class LoginPart extends React.Component {

  state = { loginPage: "login" };

  loginNav = (page) => {
    this.setState({ loginPage: page });
  };


  render() {

    const Page = PAGES[this.state.loginPage];

    return (
      <div className="Login__inner">
        <Page loginNav={this.loginNav} />
      </div>
    )
  }
}

export default LoginPart;