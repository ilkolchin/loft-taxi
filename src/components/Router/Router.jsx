import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginPage from "../Login/LoginPage";
import Profile from "../Profile/Profile";
import Map from "../Map/Map";
import { PrivateRoute } from "./PrivateRoute";

const Router = () => (
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route exact path="/signup" component={LoginPage} />
    <PrivateRoute path="/profile" component={Profile} />
    <PrivateRoute path="/map" component={Map} />
  </Switch>
)

export default Router