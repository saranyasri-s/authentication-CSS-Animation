import React, { useState } from "react";
import classes from "./Auth.module.css";
import Login from "./Login";
import SignUp from "./SignUp";
export default function Auth() {
  const [signIn, setSignIn] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const changeToSignUpHandler = () => {
    setSignIn(false);
  };
  const changeToSignInHandler = () => {
    setSignIn(true);
  };
  return (
    <div className={classes.Auth}>
      <form className={classes.form}>
        <div className={signIn ? classes.Logincurve : classes.halfCurve}></div>
        <div className={classes.heading}>
          <h3 className={classes.welcome}>Welcome</h3>
          {signIn ? (
            <h3 className={classes.welcome}>Back</h3>
          ) : (
            <h3 className={classes.welcome}>to ReactAuth</h3>
          )}

          {signIn ? <p>Sign in to continue</p> : <p>Sign up to continue</p>}
        </div>
        {signIn ? (
          <Login changeToSignUp={changeToSignUpHandler}></Login>
        ) : (
          <SignUp changeToSignIn={changeToSignInHandler}></SignUp>
        )}
      </form>
    </div>
  );
}
