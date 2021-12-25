import React from 'react';
import { connect } from 'react-redux';

import './styles/normalize.css';
import './styles/animista.css';
import app from './App.module.css';

import Header from './components/Header/Header';
import Router from './components/Router/Router';


class App extends React.Component {
  render() {
    return <>
      <div className={app.inner}>
        {this.props.isLoggedIn && <Header />}
        <main>
          <section>
            <Router />
          </section>
        </main>
      </div>
    </>;
  }
}

export default connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  null
)(App);

