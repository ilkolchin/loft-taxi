import React from 'react';

import './styles/normalize.css';
import './styles/base.css';
import './App.css';
// import '../node_modules/mapbox-gl/src/css/mapbox-gl.css'

import LoginPage from './components/LoginPage';
import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { Map } from './components/Map';
import {PrivateRoute} from './components/PrivateRoute'
// import logo from './img/logo-taxi.png';

import { connect } from 'react-redux';
import { logOut } from './actions';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    // const header =
    //   <header>
    //     <img src={logo} alt="логотип такси" className="Header__logo" />
    //     <nav>
    //       <ul className="Nav">
    //         <li className="Nav_btn">
    //           <Link to="/map" >Карта</Link>
    //         </li>
    //         <li className="Nav_btn">
    //           <Link to="/profile">Профиль</Link>
    //         </li>
    //         <li className="Nav_btn">
    //           <Link to="/">Выйти</Link>
    //         </li>
    //       </ul>
    //     </nav>
    //   </header>;

    return <>
      <div className="App">
        {this.props.isLoggedIn && <Header/>}
        <main>
          <section>
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <PrivateRoute path="/map" component={Map} />
              <PrivateRoute path="/profile" component={Profile} />
            </Switch>
          </section>
        </main>
      </div>
    </>;
  }
}

export default connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { logOut }
)(App);

