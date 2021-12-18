import React from "react";
import HelloPart from "../HelloPart/HelloPart";
import LoginPart from "./LoginPart";

class LoginPage extends React.Component {

  render() {
    return <>
      <div className="Login__wrapper">
        <HelloPart />
        <LoginPart />
      </div>
    </>
  }
}

export default LoginPage;