import React from "react";
import styles from "./buttonSimple.module.scss";
import {ArrowRightIcon} from "assets/svg";

const ButtonSimple = ({    
  containerStyle, 
  inlineContainerStyle = null,
  textStyle, 
  arrowStyle, 
  text, 
  arrow = false,
  onClick = () => {},
  externalRef = null,
  Icon = null,
  iconStyle = null,
  disabled = false,
}) => {
  const setRefs = (node) => {
        if (externalRef) {
          externalRef.current = node;
        }
    };
  return (
    <button 
      className={`${styles.container} ${styles.clickableElements} ${containerStyle}`}
      onClick={onClick} 
      ref={setRefs}
      style={inlineContainerStyle}
      disabled={disabled}
    >
      {Icon && <Icon className={`${styles.icon} ${iconStyle}`} />}
      {text && <p className={`${styles.textButton} ${styles.description2} ${textStyle}`}>{text}</p>}
      {arrow && <ArrowRightIcon className={`${styles.arrowRight} ${arrowStyle}`} />}
    </button>
  );
};

export default ButtonSimple;