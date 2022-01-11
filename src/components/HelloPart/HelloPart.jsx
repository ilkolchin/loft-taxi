import React from "react";

import styles from './HelloPart.module.css'
import logo from './img/big-logo.png';


const HelloPart = () => (
  <div className={styles.wrapper}>
    <img src={logo} alt="логотип такси" className={styles.logo} />
    <div className={styles.text}>ver. 1.3.2 (11/01)</div>
  </div>
);

export default HelloPart;