import React, { useEffect, useRef, useState } from "react";
import styles from "./inputBox.module.scss";

const InputBox = ({
  placeholderText = null,
  inputStyle = null,
  Icon = null,
  iconStyle = null,
  containerStyle = null,
  inlineContainer = null,
  onOutsideClick = null,
  iconRef = null,
  searchBoxVisible = true,
  externalRef = null,
  inputText = "",
  autoResizeHeight = false,
  onInputChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
}) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(inputText); // Track the value of the textarea

  const setRefs = (node) => {
    if (externalRef) {
      externalRef.current = node;
    }
  };

  useEffect(() => {
    const initializeMainRefs = () => {
      if (inputRef.current) {
        setInputValue(inputRef.current.value); // Ensure the ref is synchronized
      }
    };
    initializeMainRefs();
    window.addEventListener("resize", initializeMainRefs);
    return () => window.removeEventListener("resize", initializeMainRefs);
  }, [searchBoxVisible]);

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      if (typeof onOutsideClick === "function") {
        onOutsideClick();
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchBoxVisible]);

  useEffect(() => { //when text changes from the script or server
    setInputValue(inputText);
    if (!inputRef.current) return;
    if (!autoResizeHeight) return;
    inputRef.current.style.height = "auto"; //if i don't put this, it remains same height after removing text
    inputRef.current.style.height = inputRef.current.scrollHeight + "px";
  }, [inputText, autoResizeHeight]);

  const handleChange = (event) => { //when text changes from user
    setInputValue(event.target.value);
    onInputChange(event.target.value);
    if (!inputRef.current) return;
    if (!autoResizeHeight) return;
    inputRef.current.style.height = "auto"; //if i don't put this, it remains same height after removing text
    inputRef.current.style.height = inputRef.current.scrollHeight + "px";
  };

  return (
    <div
      className={`${styles.container} ${containerStyle} ${styles.inputElements}`}
      style={inlineContainer}
      ref={setRefs}
    >
      <input
        className={`${styles.inputText} ${styles.input} ${inputStyle}`}
        placeholder={placeholderText}
        ref={inputRef}
        value={inputValue} // Controlled input
        onChange={handleChange} // Update state on user input
        onFocus={onFocus}
        onBlur={onBlur}
        spellCheck={false}
      />
      {Icon && <Icon className={`${styles.icon} ${iconStyle}`} />}
    </div>
  );
};

export default InputBox;
