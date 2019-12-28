import React from "react";

import SignIn from "../../component/sign-in/sign-in.component";
import SignUp from "../../component/sign-up/sign-up.component";
import "./signIn-signUp.styles.scss";

const SignInSignUp = () => (
  <div className="container">
    <div className="signIn item">
      <SignIn />
    </div>
    <div className="signUp item">
      <SignUp />
    </div>
  </div>
);
export default SignInSignUp;
