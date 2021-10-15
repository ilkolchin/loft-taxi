import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const PAGES = {
  login: LoginForm,
  reg: RegisterForm
}

class LoginPart extends React.Component {

  state = { loginPage: "login" };

  loginNav = (page) => {
    this.setState({ loginPage: page });
  };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };


  render() {

    console.log("loginpart", this.state);

    const Page = PAGES[this.state.loginPage];

    return (
      <div className="Login__inner">
        <Page loginNav={this.loginNav} navigateTo={this.navigateTo} />
      </div>
    )
  }
}

export default LoginPart;