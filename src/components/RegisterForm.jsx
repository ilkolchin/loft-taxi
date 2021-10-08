import React from "react";

class RegisterForm extends React.Component {
  render() {
    return (
      <form>
        <label>
          Email
          <input type="email" name="email"/>
        </label>
        <label>
          Как Вас зовут?
          <input type="text" name="username" />
        </label>
        <label>
          Придумайте пароль
          <input type="password" name="password" />
        </label>
        <input type="submit" value="Войти" />
      </form>
    );
  }
}

export default RegisterForm;