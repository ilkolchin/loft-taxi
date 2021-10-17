import React from "react";
import { withAuth } from "./AuthContext";

class LoginForm extends React.Component {

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.logIn(email.value, password.value);
  }

  onClickHandler = () => {
    this.props.loginNav("reg");
  }

  render() {
    return (
      <div className="Login__form">
        <h1 className="Login__title">Войти</h1>
        <form className="Login__content" onSubmit={this.handleSubmit}>
          <label htmlFor="email" className="Login__label">Email</label>
          <input id="email" type="email" name="email" placeholder="test@test.com" className="Login__input" />
          <label htmlFor="password" className="Login__label">Пароль</label>
          <input id="password" type="password" name="password" placeholder="test" className="Login__input" />
          <div className="Login__info">Забыли пароль?</div>
          <input type="submit" value="Войти" className="Login__submit" />
        </form>
        <div className="Login__footer">
          <div className="Login__signUp">Новый пользователь?</div>
          <button className="Login__signUp-link" onClick={this.onClickHandler}>Регистрация</button>
        </div>
      </div>
    );
  }
}

export const LoginFormWithAuth = withAuth(LoginForm);