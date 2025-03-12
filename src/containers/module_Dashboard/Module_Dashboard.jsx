import React, { useState, useEffect } from "react";
import styles from "./module_Dashboard.module.scss";
import commonStyles from "../common.module.scss";
import { ButtonSimple, InputBox } from "components";
import pic from "assets/pictures/nlp_applications.png";


const Module_Dashboard = () => {
  const username = localStorage.getItem("username").replace(/"/g, '');
  return (
    <div className={`${commonStyles.moduleGroup} ${styles.module_Dashboard} ${styles.global}`}>
      <p>Salut {username}</p>
    </div>
  );
};

export default Module_Dashboard;
