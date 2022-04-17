import React, { useState } from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";
function SignUp(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };
  const changeToSignInHandler = (e) => {
    e.preventDefault();
    props.changeToSignIn();
  };
  return (
    <div className={classes.Login}>
      <input
        type="text"
        value={name}
        onChange={nameHandler}
        placeholder="Name"
      ></input>
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
      <input
        type="password"
        onChange={confirmPasswordHandler}
        value={confirmPassword}
        placeholder="Re enter Password"
      ></input>
      <button>Sign Up</button>
      <p>
        Already have an account? <a onClick={changeToSignInHandler}>Sign In</a>
      </p>
    </div>
  );
}

export default SignUp;
