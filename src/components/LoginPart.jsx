import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const LoginPart = () => (
  <div className="Login__wrapper">
    <LoginForm />
    <RegisterForm />
  </div>
);

export default LoginPart;