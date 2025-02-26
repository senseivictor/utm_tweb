import React, { useState } from "react";
import styles from "./module_Applications.module.scss";
import commonStyles from "../common.module.scss";
import pic from "assets/pictures/nlp_applications.png";

const applications = [
  { title: "Chatbot-uri", description: "Sisteme automate care pot interacționa cu utilizatorii prin limbaj natural." },
  { title: "Asistenți virtuali", description: "Tehnologii precum Siri, Alexa sau Google Assistant care înțeleg și răspund la comenzi vocale." },
  { title: "Analiza sentimentelor", description: "Procesul de determinare a tonului sau emoției dintr-un text, utilizat frecvent în analiza recenziilor sau a rețelelor sociale." }
];

const Module_Applications = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleDescription = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className={`${commonStyles.moduleGroup} ${styles.global}`}>
      <div className={`${commonStyles.picContainer} ${styles.picContainer}`}>
        <img src={pic} className={`${commonStyles.pic}`} alt="NLP Applications" />
      </div>
      <div className={`${styles.heading1} ${commonStyles.title}`}>
        Aplicații ale Procesării Limbajului Natural
      </div>
      <ul className={`${styles.description1} ${commonStyles.description}`}>
        {applications.map((application, index) => (
          <li
            key={index}
            onClick={() => toggleDescription(index)}
            className={`${commonStyles.listItem}`}
          >
            {application.title}
            <p
              className={`${styles.description2} ${commonStyles.itemDescription}`}
              style={{
                maxHeight: visibleIndex === index ? "100px" : "0px",
                opacity: visibleIndex === index ? 1 : 0,
                overflow: "hidden",
                transition: "opacity 1s ease, max-height 1s ease"
              }}
            >
              {application.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Module_Applications;
