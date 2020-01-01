import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2 className="title">sign In</h2>
        <h2>I already have an account</h2>
        <p> Sign in with your email</p>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <FormInput
              name="email"
              type="email"
              value={email}
              handleChange={this.handleChange}
              label="Email"
              required
            />
          </div>
          <div className="row">
            <FormInput
              name="password"
              type="password"
              value={password}
              handleChange={this.handleChange}
              label="Password"
              required
            />
          </div>
          <div className="row btn">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle}>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
