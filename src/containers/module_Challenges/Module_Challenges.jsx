import React, { useState, useEffect } from "react";
import styles from "./module_Challenges.module.scss";
import commonStyles from "../common.module.scss";
import pic from "assets/pictures/nlp_challenges.jpg";

const Module_Challenges = () => {
  return (
    <div className={`${commonStyles.moduleGroup} ${styles.global}`}>
        <div className={commonStyles.picContainer}><img src={pic} className={`${commonStyles.pic}`} /></div>
        <div className={`${styles.heading1} ${commonStyles.title}`}>
          Provocări în Procesarea Limbajului Natural
        </div>
        <ul className={`${styles.description1} ${commonStyles.description}`}>
          <li>Ambiguitatea limbajului</li>
          <li>Contextul cultural</li>
          <li>Ironia și sarcasmul</li>
        </ul>
    </div>
  );
};

export default Module_Challenges;
