import React, { useState, useEffect, useRef } from "react";
import { IconText } from "components";
import styles from "./header.module.scss";
import logo from "assets/pictures/logo.png";

const Header = () => {

  return (
    <div className={`${styles.header} ${styles.headerZIndex}`}>
      <a href={"/"}><img src={logo} className={`${styles.logoTitle}`} /></a>
      <div className={`${styles.mainNavigation}`} >
        <a href="/techniques" className={`${styles.item} ${styles.clickableElements}`}>Tehnici</a>
        <a href="/applications" className={`${styles.item} ${styles.clickableElements}`}>Aplicații</a>
        <a href="/challenges" className={`${styles.item} ${styles.clickableElements}`}>Provocări</a>
        <a href="/conclusions" className={`${styles.item} ${styles.clickableElements}`}>Concluzii</a>
      </div>
    </div>
  );
};

export default Header;
