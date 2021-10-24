import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import { LoginFormWithAuth } from "./LoginForm";
import { RegisterFormWithAuth } from "./RegisterForm";

class LoginPart extends React.Component {
  render() {
    return (
      <div className="Login__inner">
        <Switch>
          <Route exact path="/" component={LoginFormWithAuth} />
          <Route exact path="/signup" component={RegisterFormWithAuth} />
        </Switch>
      </div>
    )
  }
}

export default LoginPart;