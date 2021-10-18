import React from "react";
import HelloPart from "./HelloPart";
import LoginPart from "./LoginPart";

class LoginPage extends React.Component {

  render() {
    return <>
      <div className="Login__wrapper">
        <HelloPart />
        <LoginPart navigate={this.props.navigate} />
      </div>
    </>
  }
}

export default LoginPage;