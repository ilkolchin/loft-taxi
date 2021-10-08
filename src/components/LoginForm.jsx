import React from "react";

class LoginForm extends React.Component {
  render() {
    return (
      <form>
        <label>
          Email
          <input type="email" name="email"/>
        </label>
        <label>
          Пароль
          <input type="password" name="password" />
        </label>
        <input type="submit" value="Войти" />
      </form>
    );
  }
}

export default LoginForm;