import React, { useRef, useEffect, useState, use } from 'react';
import { Header, Footer } from 'containers';
import { BgCircles } from 'components';
import styles from './globalWrapper.module.scss';

const GlobalWrapper = ({ children }) => {

    const defaultColors = [
      "#A7C7E7", // Soft blue
      "#91A8D0", // Periwinkle
      "#D4B2D8", // Soft lavender
      "#EAD1DC", // Light pink
      "#C5A3C8", // Pastel purple
      "#B1C4D6", // Sky blue
      "#C3B1E1", // Lilac
      "#F3D9FA", // Soft pinkish purple
      "#D1E7F3", // Pale blue
      "#FADADD", // Blush pink
    ];
      
  return (
    <div className={styles.globalWrapper}>
        <BgCircles
            size={600}
            numCircles={20}
            minDistance={600}
            seed={4}
            useRadialGradient={true}
            circleOpacity={0.7}
            maxAttempts={100}
            containerSizeMultiplier={1.5}
            colors={defaultColors}
        />
        <Header />
        {children}
        <Footer />
    </div>
  );
};

export default GlobalWrapper;
