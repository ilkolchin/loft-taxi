import React from 'react';

import '../node_modules/mapbox-gl/src/css/mapbox-gl.css'
import './styles/normalize.css';
import './styles/base.css';
import './styles/animista.css';
import './App.css';

import LoginPage from './components/Login/LoginPage';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Map from './components/Map/Map';
import { PrivateRoute } from './components/PrivateRoute'

import { connect } from 'react-redux';
import { logIn } from './actions';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return <>
      <div className="App">
        {this.props.isLoggedIn && <Header />}
        <main>
          <section>
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/signup" component={LoginPage} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/map" component={Map} />
            </Switch>
          </section>
        </main>
      </div>
    </>;
  }
}

export default connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { logIn }
)(App);

