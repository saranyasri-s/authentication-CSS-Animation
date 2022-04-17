import React, { useState } from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const changeToSignUpHandler = (e) => {
    e.preventDefault();
    props.changeToSignUp();
  };
  return (
    <div className={classes.Login}>
      <input
        type="email"
        onChange={emailHandler}
        value={email}
        placeholder="Email"
      ></input>
      <input
        type="password"
        onChange={passwordHandler}
        value={password}
        placeholder="Password"
      ></input>
      <button>Sign In</button>
      <p>
        Dont have an account? <a onClick={changeToSignUpHandler}>Sign Up</a>
      </p>
    </div>
  );
}

export default Login;
