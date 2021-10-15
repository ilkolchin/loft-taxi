import React from 'react';
import './styles/normalize.css';
import './styles/base.css';
import './App.css';
import LoginPage from './components/LoginPage';
import { Profile } from './components/Profile';
import { Map } from './components/Map';
import logo from './img/logo-taxi.png';

const PAGES = {
  map: Map,
  profile: Profile,
  login: LoginPage
}

class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentPage: "login",
  //   }
  // }

  state = { currentPage: "map" }

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const Page = PAGES[this.state.currentPage];
    let header;
    if (this.state.currentPage !== "login") { 
      header =
        <header>
          <img src={logo} alt="логотип такси" className="Header__logo" />
          <nav>
            <ul className="Nav">
              <li>
                <button className="Nav_btn" onClick={() => { this.navigateTo("map") }} >Карта</button>
              </li>
              <li>
                <button className="Nav_btn" onClick={() => { this.navigateTo("profile") }} >Профиль</button>
              </li>
              <li>
                <button className="Nav_btn" onClick={() => { this.navigateTo("login") }} >Выйти</button>
              </li>
            </ul>
          </nav>
        </header>
    }

    return <>
      <div className="App">
        {header}
        <main>
          <section>
            <Page navigateTo={this.navigateTo}/>
          </section>
        </main>
      </div>
    </>;
  }
}

export default App;

