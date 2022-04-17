import React from "react";
import classes from "./Auth.module.css";
import Login from "./Login";
export default function Auth() {
  return (
    <div className={classes.Auth}>
      <form className={classes.form}>
        <div className={classes.halfCurve}></div>
        <div className={classes.heading}>
          <h3 className={classes.welcome}>Welcome</h3>
          <h3 className={classes.welcome}>Back</h3>
          <p>Sign in to continue</p>
        </div>
        <Login></Login>
      </form>
    </div>
  );
}
