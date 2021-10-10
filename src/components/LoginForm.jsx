import React from "react";

class LoginForm extends React.Component {

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.props);
    this.props.navigateTo("map");
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
          <input id="email" type="email" name="email" placeholder="mail@mail.ru" className="Login__input" />
          <label htmlFor="password" className="Login__label">Пароль</label>
          <input id="password" type="password" name="password" placeholder="•••••••••" className="Login__input" />
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

export default LoginForm;