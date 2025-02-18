import React, { useState, useEffect } from "react";
import styles from "./module_Techniques.module.scss";
import commonStyles from "../common.module.scss";
import pic from "assets/pictures/nlp_techniques.png";

const Module_Techniques = () => {
  return (
    <div className={`${commonStyles.moduleGroup} ${styles.global}`}>
        <div className={commonStyles.picContainer}><img src={pic} className={`${commonStyles.pic}`} /></div>
        <div className={`${styles.heading1} ${commonStyles.title}`}>
          Tehnici în Procesarea Limbajului Natural
        </div>
        <ul className={`${styles.description1} ${commonStyles.description}`}>
          <li>Tokenizare</li>
          <li>Analiză sintactică</li>
          <li>Învățare automată</li>
        </ul>
    </div>
  );
};

export default Module_Techniques;
