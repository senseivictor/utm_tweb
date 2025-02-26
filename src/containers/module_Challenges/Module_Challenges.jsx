import React, { useState } from "react";
import styles from "./module_Challenges.module.scss";
import commonStyles from "../common.module.scss";
import pic from "assets/pictures/nlp_challenges.jpg";

const challenges = [
  { title: "Ambiguitatea limbajului", description: "Cuvintele sau frazele pot avea mai multe sensuri în funcție de context." },
  { title: "Contextul cultural", description: "Modul în care oamenii interpretează limbajul poate varia în funcție de cultura lor." },
  { title: "Ironia și sarcasmul", description: "Dificultatea algoritmilor NLP în a înțelege exprimările non-literală." }
];

const Module_Challenges = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleDescription = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className={`${commonStyles.moduleGroup} ${styles.global}`}>
      <div className={commonStyles.picContainer}>
        <img src={pic} className={`${commonStyles.pic}`} alt="NLP Challenges" />
      </div>
      <div className={`${styles.heading1} ${commonStyles.title}`}>
        Provocări în Procesarea Limbajului Natural
      </div>
      <ul className={`${styles.description1} ${commonStyles.description}`}>
        {challenges.map((challenge, index) => (
          <li
            key={index}
            onClick={() => toggleDescription(index)}
            className={`${commonStyles.listItem}`}
          >
            {challenge.title}
            <p
              className={`${styles.description2} ${commonStyles.itemDescription}`}
              style={{
                maxHeight: visibleIndex === index ? "100px" : "0px",
                opacity: visibleIndex === index ? 1 : 0,
                overflow: "hidden",
                transition: "opacity 1s ease, max-height 1s ease"
              }}
            >
              {challenge.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Module_Challenges;
