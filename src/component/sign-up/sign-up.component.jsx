import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";

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
  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-up">
        <h2 className="title">sign Up</h2>
        <h2>I do not have an account</h2>
        <p className="span"> Sign up with your email</p>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <div className="row">
            <FormInput
              name="name"
              type="text"
              value={this.state.name}
              handleChange={this.handleChange}
              label="Name"
              required
            />
          </div>
          <div className="row">
            <FormInput
              name="email"
              type="email"
              value={this.state.email}
              handleChange={this.handleChange}
              label="Email"
              required
            />
          </div>
          <div className="row">
            <FormInput
              name="password"
              type="password"
              value={this.state.password}
              handleChange={this.handleChange}
              label="Password"
              required
            />
          </div>
          <div className="row">
            <FormInput
              name="confirm_password"
              type="confirm_password"
              value={this.state.confirm_password}
              handleChange={this.handleChange}
              label="Confirm Password"
              required
            />
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
