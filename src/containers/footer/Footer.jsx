import React, { useState, useEffect, useRef } from "react";
import { InputBox, ButtonSimple, BgCircles } from "components";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={`${styles.footer} ${styles.global}`}>
      <BgCircles
        size={30}
        numCircles={10}
        minDistance={70}
        seed={2}
        useRadialGradient={false}
        circleOpacity={0.7}
        maxAttempts={100}
        containerSizeMultiplier={1}
        colors={['#82c1ff']}
        sizeRandomness={0.5}
        containerStyle={styles.bgCirclesContainer}
      />
      <div className={`${styles.heading3} ${styles.heading}`}>Abonează-te pentru a afla noutăți</div>
      <InputBox 
        placeholderText="Poșta Electronică"
        containerStyle={styles.input}
      />
      <ButtonSimple 
        containerStyle={styles.button}
        text={"Abonează-te"}
        arrow
      />
      <div className={`${styles.description2} ${styles.copyright}`}>
        Copyright © 2025 <span>Victor Pavalache</span>. Toate drepturile rezervate. 
      </div>
    </div>
  );
};

export default Footer;
