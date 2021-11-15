import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from 'react-router-dom'
import { LoginFormTemp } from "./LoginFormTemp";

class LoginForm extends React.Component {

  render() {
    return (
      this.props.isLoggedIn ? (<Redirect to='/map' />) :
        (
          <div className="Login__form">
            <h1 className="Login__title">Войти</h1>
            <LoginFormTemp />
            <div className="Login__footer">
              <div className="Login__signUp">Новый пользователь?</div>
              <Link to="/signup" className="Login__signUp-link" >Регистрация</Link>
            </div>
          </div>
        )
    )
  }
}

export const LoginFormWithAuth = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  null
)(LoginForm);