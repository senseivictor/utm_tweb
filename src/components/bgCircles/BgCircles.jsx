import React, { useEffect, useState, useRef } from 'react';
import styles from './bgCircles.module.scss';

const seedRandom = (seed) => {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280; // Linear Congruential Generator
    return value / 233280;
  };
};

function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}

const circleColors = [
  "#D9825E",
  "#E66A2E",
  "#C3543A",
  "#E7A243",
  "#D9932A",
  "#FF8C6A",
  "#D66B22",
  "#E04D2C",
  "#A64525",
  "#DA8E52",
];

const BgCircles = ({
  containerStyle = null,
  minDistance = 0,
  maxDistance = Infinity, //doesn't work as expected
  numCircles = 30,
  size = 100,
  sizeRandomness = 0, //0-1
  maxAttempts = 1000,
  containerSizeMultiplier = 1.5,
  seed = null,
  circleOpacity = 1,
  fadeStart = 0,
  fadeStop = 70,
  useRadialGradient = false,
  colors = circleColors,
}) => {
  const [circlePositions, setCirclePositions] = useState([]);
  const containerRef = useRef();
  const containerWidth = containerRef.current ? containerRef.current.offsetWidth : 0;
  const containerHeight = containerRef.current ? containerRef.current.offsetHeight : 0;

  const random = seed !== null ? seedRandom(seed) : Math.random;

  const getRandomColor = () => {
    const index = Math.floor(random() * colors.length);
    return colors[index];
  };

  const getRandomSize = () => {
    const randomness = size * sizeRandomness;
    return size + (random() * 2 - 1) * randomness; // Random size within the range
  };

  const generateRandomPosition = (width, height) => {
    return {
      x: random() * (width - size), // Ensure circles stay within bounds
      y: random() * (height - size), // Ensure circles stay within bounds
      size: getRandomSize(), // Assign a random size
      color: getRandomColor(), // Assign a random color
    };
  };

  const isTooClose = (newCircle, circles) => {
    for (let circle of circles) {
      const distance = Math.sqrt(
        Math.pow(newCircle.x - circle.x, 2) + Math.pow(newCircle.y - circle.y, 2)
      );
      if (distance < minDistance) {
        return true;
      }
    }
    return false;
  };

  const isTooFar = (newCircle, circles) => {
    for (let circle of circles) {
      const distance = Math.sqrt(
        Math.pow(newCircle.x - circle.x, 2) + Math.pow(newCircle.y - circle.y, 2)
      );
      if (distance > maxDistance) {
        return true;
      }
    }
    return false;
  };

  const generateCircles = (width, height) => {
    let circles = [];
    let attempts = 0;

    while (circles.length < numCircles && attempts < maxAttempts) {
      const newCircle = generateRandomPosition(width, height);
      if (!isTooClose(newCircle, circles) && !isTooFar(newCircle, circles)) {
        circles.push(newCircle);
      }
      attempts++;
    }

    if (circles.length < numCircles) {
      console.warn(
        `Could only place ${circles.length} circles out of ${numCircles} after ${maxAttempts} attempts.`
      );
    }

    setCirclePositions(circles);
  };

  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth: width, offsetHeight: height } = containerRef.current;
      generateCircles(width * containerSizeMultiplier, height * containerSizeMultiplier);
    }
  }, [minDistance, maxDistance, numCircles, size, sizeRandomness, maxAttempts, seed, containerSizeMultiplier]);

  return (
    <div
      className={`${styles.bgCircles} ${styles.bgCirclesZIndex} ${containerStyle}`}
      style={{
        '--left-offset': `-${containerWidth * (containerSizeMultiplier - 1) / 2}px`,
        '--top-offset': `-${containerHeight * (containerSizeMultiplier - 1) / 2}px`,
      }}
      ref={containerRef}
    >
      {circlePositions.map((position, index) => (
        <div
          key={index}
          className={styles.circle}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: `${position.size}px`,
            height: `${position.size}px`,
            background: useRadialGradient
            ? `radial-gradient(circle, rgba(${hexToRgb(position.color)}, ${circleOpacity}) ${fadeStart}%, rgba(0, 0, 0, 0) ${fadeStop}%)`
            : `rgba(${hexToRgb(position.color)}, ${circleOpacity})`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default BgCircles;
