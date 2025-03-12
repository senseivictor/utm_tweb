import React, { useState, useEffect, useRef } from "react";
import { IconText } from "components";
import styles from "./header.module.scss";
import logo from "assets/pictures/logo.png";

const Header = () => {

  return (
    <div className={`${styles.header} ${styles.headerZIndex}`}>
      <a href={"/"}><img src={logo} className={`${styles.logoTitle}`} /></a>
      <ul className={`${styles.mainNavigation}`} >
        <li><a href="/techniques" className={`${styles.item} ${styles.clickableElements}`}>Tehnici</a></li>
        <li><a href="/applications" className={`${styles.item} ${styles.clickableElements}`}>Aplicații</a></li>
        <li><a href="/challenges" className={`${styles.item} ${styles.clickableElements}`}>Provocări</a></li>
        <li><a href="/conclusions" className={`${styles.item} ${styles.clickableElements}`}>Concluzii</a></li>
        <li><a href="/login" className={`${styles.item} ${styles.clickableElements}`}>Logare</a></li>
      </ul>
    </div>
  );
};

export default Header;
