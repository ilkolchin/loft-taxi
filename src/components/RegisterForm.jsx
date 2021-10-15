import React from "react";

class RegisterForm extends React.Component {

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.props);
  }

  onClickHandler = () => {
    this.props.loginNav("login");
  }

  render() {
    return (
      <div className="Login__form">
        <h1 className="Login__title">Регистрация</h1>
        <form className="Login__content" onSubmit={this.handleSubmit}>
          <label htmlFor="username" className="Login__label">Как вас зовут?</label>
          <input id="username" type="text" name="username" placeholder="Петров Иван Иванович" className="Login__input" />
          <label htmlFor="email" className="Login__label">Email</label>
          <input id="email" type="email" name="email" placeholder="mail@mail.ru" className="Login__input" />
          <label htmlFor="password" className="Login__label">Пароль</label>
          <input id="password" type="password" name="password" placeholder="•••••••••" className="Login__input" />
          <input type="submit" value="Зарегистрироваться" className="Login__submit" />
        </form>
        <div className="Login__footer">
          <div className="Login__signUp">Уже зарегистрированы?</div>
          <button className="Login__signUp-link" onClick={this.onClickHandler}>Войти</button>
        </div>
      </div>
    );
  }
}

export default RegisterForm;