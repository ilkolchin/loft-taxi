import React from "react";
import { connect } from "react-redux";
import { register } from '../actions'
import { Link, Redirect } from "react-router-dom";
import { RegisterFormTemp } from "./RegisterFormTemp";

class RegisterForm extends React.Component {

  registrate = data => {
    console.log('click на кнопке регистрации');
    this.props.register(data.email, data.password, data.name, data.surname);
  }

  render() {
    return (
      this.props.isLoggedIn ? (<Redirect to='/map' />) :
        (
          <div className="Login__form">
            <h1 className="Login__title">Регистрация</h1>
            <RegisterFormTemp registrate={this.registrate} />
            <div className="Login__footer">
              <div className="Login__signUp">Уже зарегистрированы?</div>
              <Link to='/' className="Login__signUp-link" >Войти</Link>
            </div>
          </div>
        )
    )
  }
}

export const RegisterFormWithAuth = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { register }
)(RegisterForm);