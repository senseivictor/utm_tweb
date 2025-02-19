import React, { useState, useEffect } from "react";
import styles from "./module_Intro.module.scss";
import commonStyles from "../common.module.scss";
import pic from "assets/pictures/nlp_intro.jpg";

const Module_Intro = () => {
  return (
    <table className={`${styles.module_Intro} ${styles.global}`}>
      <tr>
        <td rowspan={2} className={styles.picContainer}><img src={pic} className={`${styles.pic}`} /></td>
        <td className={`${styles.heading1} ${styles.title}`}> Procesarea Limbajului Natural</td>
      </tr>
      <tr>
        <td className={`${styles.description1} ${styles.description}`}>
          Procesarea Limbajului Natural (NLP) este un domeniu al inteligenței artificiale care se ocupă cu interacțiunea dintre computere și limbajul uman. <br/>
          Scopul este de a permite computerelor să înțeleagă, să interpreteze și să genereze limbaj natural.
        </td>
      </tr>
    </table>
  );
};

export default Module_Intro;
