import React, { useState, useEffect } from "react";
import styles from "./module_Conclusions.module.scss";
import commonStyles from "../common.module.scss";
import pic from "assets/pictures/nlp_conclusions.jpg";

const Module_Conclusions = () => {
  return (
    <div className={`${commonStyles.moduleGroup} ${styles.global}`}>
        <div className={commonStyles.picContainer}>
          <img src={pic} className={`${commonStyles.pic}`} useMap={"#nlpmap"} />
          <map name="nlpmap">
              <area shape="rect" coords="34,44,270,350" href="/"/>
          </map>
        </div>
        <div className={`${styles.heading1} ${commonStyles.title}`}>
          Concluzii despre Procesarea Limbajului Natural
        </div>
        <ul className={`${styles.description1} ${commonStyles.description}`}>
          Procesarea Limbajului Natural continuă să evolueze, deschizând noi posibilități în interacțiunea om-computer.
        </ul>
    </div>
  );
};

export default Module_Conclusions;
