import React from "react";

import SignIn from "../../component/sign-in/sign-in.component";
import "./signIn-signUp.styles.scss";

const SignInSignUp = () => (
  <div className="container">
    <div className="signIn item">
      <SignIn />
    </div>
    <div className="signUp item">
      <h2 className="title">sign Up</h2>
      <form action="">
        <div className="row">
          <label htmlFor="name">Name</label>
          <input type="text" />
        </div>
        <div className="row">
          <label htmlFor="email">Email</label>
          <input type="email" />
        </div>
        <div className="row">
          <input type="submit" />
        </div>
      </form>
    </div>
  </div>
);
export default SignInSignUp;
