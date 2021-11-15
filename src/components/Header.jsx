import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../actions";

import logo from '../img/logo-taxi.png';

class Header extends React.Component {
  render() {
    return (
      <header>
      <Link to="/">
        <img src={logo} alt="логотип такси" className="Header__logo slide-in-blurred-left" />
      </Link>
      <nav>
        <ul className="Nav">
          <li className="Nav_btn">
            <Link to="/map">Карта</Link>
          </li>
          <li className="Nav_btn">
            <Link to="/profile">Профиль</Link>
          </li>
          <li className="Nav_btn">
              <Link to="/" onClick={() => {
                this.props.logOut();
                // localStorage.removeItem('token')
              }}>Выйти</Link>
          </li>
        </ul>
      </nav>
    </header>
    )
  }
}

export default connect(null, { logOut })(Header)