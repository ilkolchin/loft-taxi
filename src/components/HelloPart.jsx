import React from "react";
import logo from '../img/big-logo.png';


const HelloPart = () => (
  <div className="App__logo slide-in-blurred-left">
    <img src={logo} alt="логотип такси" className="App__logo-img" />
  </div>
);

export default HelloPart;