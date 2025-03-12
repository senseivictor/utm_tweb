import React, { useState, useEffect } from "react";
import styles from "./module_Login.module.scss";
import commonStyles from "../common.module.scss";
import { ButtonSimple, InputBox } from "components";
import pic from "assets/pictures/nlp_applications.png";


const Module_Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  useEffect(() => {
    console.log(username, password);
  }, [username, password])
  async function handleRegistration() {
    try {
      const response = await fetch("http://localhost:8000/register.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
      alert(data.message || data.error);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  async function handleLogin() {
    try {
      const response = await fetch("http://localhost:8000/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
      alert(data.message || data.error);
      if (data.message) {
        window.location.href = "/dashboard";
        localStorage.setItem("username", JSON.stringify(username));
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <div className={`${commonStyles.moduleGroup} ${styles.module_Login} ${styles.global}`}>
      <InputBox 
        placeholderText={"Numele"}
        onInputChange={(text) => setUsername(text)}
      />
      <InputBox 
        placeholderText={"Parola"}
        onInputChange={(text) => setPassword(text)}
      />
      <ButtonSimple 
        text={"Inregistrare"}
        onClick={handleRegistration}
      />
      <ButtonSimple 
        text={"Logare"}
        onClick={handleLogin}
      />
    </div>
  );
};

export default Module_Login;
