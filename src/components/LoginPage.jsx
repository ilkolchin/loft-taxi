import React from "react";
import HelloPart from "./HelloPart";
import LoginPart from "./LoginPart";

class LoginPage extends React.Component {

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };

  render() {

    console.log("loginpage", this.state);
  return <>
    <div className="Login__wrapper">
      <HelloPart />
      <LoginPart navigateTo={this.navigateTo} />
    </div>
  </>
  }
}

export default LoginPage;