import React from "react";
import { connect } from "react-redux";
import { register } from '../actions'
import { Link, Redirect } from "react-router-dom";

class RegisterForm extends React.Component {

  handleSubmit = event => {
    event.preventDefault();
    const { email, password, name, surname } = event.target;
    this.props.register(email.value, password.value, name.value, surname.value);
    console.log('click на кнопке регистрации');
  }

  render() {

    if(this.props.isLoggedIn) {
      return <Redirect to='/map' />
    }

    return (
      <div className="Login__form">
        <h1 className="Login__title">Регистрация</h1>
        <form className="Login__content" onSubmit={this.handleSubmit}>

          <label htmlFor="email" className="Login__label">Email*</label>
          <input id="email" type="email" name="email" placeholder="mail@mail.ru" className="Login__input" />

          <label htmlFor="password" className="Login__label">Придумайте пароль*</label>
          <input id="password" type="password" name="password" placeholder="пароль" className="Login__input" />

          <label htmlFor="name" className="Login__label">Имя*</label>
          <input id="name" type="text" name="name" placeholder="Иван" className="Login__input" />

          <label htmlFor="surname" className="Login__label">Фамилия*</label>
          <input id="surname" type="text" name="surname" placeholder="Петров" className="Login__input" />

          <input type="submit" value="Зарегистрироваться" className="Login__submit" />

        </form>
        <div className="Login__footer">
          <div className="Login__signUp">Уже зарегистрированы?</div>
          <Link to='/' className="Login__signUp-link" >Войти</Link>
        </div>
      </div>
    );
  }
}

export const RegisterFormWithAuth = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { register }
)(RegisterForm);