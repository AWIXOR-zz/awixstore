import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      confirm_password: ""
    };
  }
  handleSubmit = async event => {
    event.preventDefault();
    const { name, email, password, confirm_password } = this.state;
    if (password !== confirm_password) {
      alert("passwords dont match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { name });
      this.setState({
        name: "",
        email: "",
        password: "",
        confirm_password: ""
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, password, confirm_password } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">sign Up</h2>
        <h2>I do not have an account</h2>
        <p className="span"> Sign up with your email</p>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <div className="input-fields">
            <div className="row">
              <FormInput
                name="name"
                type="text"
                value={name}
                handleChange={this.handleChange}
                label="Name"
                required
              />
            </div>
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
            <div className="row">
              <FormInput
                name="confirm_password"
                type="password"
                value={confirm_password}
                handleChange={this.handleChange}
                label="Confirm Password"
                required
              />
            </div>
          </div>
          <div className="row">
            <CustomButton type="submit" value="Submit Form">
              sign Up
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
