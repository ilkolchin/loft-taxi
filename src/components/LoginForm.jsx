import React from "react";
import { connect } from "react-redux";
import { authenticate } from '../actions'
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {

  authenticate = event => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.authenticate(email.value, password.value);
    console.log('clock');
  }

  onClickHandler = () => {
    this.props.loginNav("reg");
  }

  // componentDidUpdate() {
  //   const { isLoggedIn, navigate } = this.props;
  //   isLoggedIn && navigate('map')
  // }

  render() {
    return (
      <div className="Login__form">
        <h1 className="Login__title">Войти</h1>
        <form className="Login__content" onSubmit={this.authenticate}>
          <label htmlFor="email" className="Login__label">Email</label>
          <input id="email" type="email" name="email" placeholder="test@test.com" className="Login__input" />
          <label htmlFor="password" className="Login__label">Пароль</label>
          <input id="password" type="password" name="password" placeholder="test" className="Login__input" />
          <div className="Login__info">Забыли пароль?</div>
          {/* <Link to="/map" > */}
            <input type="submit" value="Войти" className="Login__submit" />
          {/* </Link> */}
        </form>
        <div className="Login__footer">
          <div className="Login__signUp">Новый пользователь?</div>
          <button className="Login__signUp-link" onClick={this.onClickHandler}>Регистрация</button>
        </div>
      </div>
    );
  }
}

export const LoginFormWithAuth = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { authenticate }
)(LoginForm);