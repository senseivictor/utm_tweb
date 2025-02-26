import React, { useState } from "react";
import styles from "./module_Techniques.module.scss";
import commonStyles from "../common.module.scss";
import pic from "assets/pictures/nlp_techniques.png";

const techniques = [
  { title: "Tokenizare", description: "Procesul de împărțire a textului în unități mai mici, cum ar fi cuvinte sau fraze." },
  { title: "Analiză sintactică", description: "Examinarea structurii propozițiilor pentru a înțelege relațiile gramaticale dintre cuvinte." },
  { title: "Învățare automată", description: "Utilizarea algoritmilor pentru a antrena modelele de procesare a limbajului natural." }
];

const Module_Techniques = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleDescription = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className={`${commonStyles.moduleGroup} ${styles.global}`}>
      <div className={commonStyles.picContainer}>
        <img src={pic} className={commonStyles.pic} alt="NLP Techniques" />
      </div>
      <div className={`${styles.heading1} ${commonStyles.title}`}>
        Tehnici în Procesarea Limbajului Natural
      </div>
      <ul className={`${styles.description1} ${commonStyles.description}`}>
      {techniques.map((technique, index) => (
        <li
          key={index}
          onClick={() => toggleDescription(index)}
          className={`${commonStyles.listItem}`}
        >
          {technique.title}
          <p
            className={`${styles.description2} ${commonStyles.itemDescription}`}
            style={{
              maxHeight: visibleIndex === index ? "100px" : "0px",
              opacity: visibleIndex === index ? 1 : 0,
              overflow: "hidden",
              transition: "opacity 1s ease, max-height 1s ease"
            }}
          >
            {technique.description}
          </p>
        </li>
      ))}

      </ul>
    </div>
  );
};

export default Module_Techniques;
