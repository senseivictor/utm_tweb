import React, { useState, useEffect } from "react";
import styles from "./module_Applications.module.scss";
import commonStyles from "../common.module.scss";
import pic from "assets/pictures/nlp_applications.png";

const Module_Applications = () => {
  return (
    <div className={`${commonStyles.moduleGroup} ${styles.global}`}>
        <div className={`${commonStyles.picContainer} ${styles.picContainer}`}><img src={pic} className={`${commonStyles.pic}`} /></div>
        <div className={`${styles.heading1} ${commonStyles.title}`}>
          Aplicații ale Procesării Limbajului Natural
        </div>
        <ul className={`${styles.description1} ${commonStyles.description}`}>
        <li>Chatbot-uri</li>
        <li>Asistenți virtuali</li>
        <li>Analiza sentimentelor</li>
        </ul>
    </div>
  );
};

export default Module_Applications;
