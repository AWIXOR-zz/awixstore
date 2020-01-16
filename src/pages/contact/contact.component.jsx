import React from "react";

import FormInput from "../../component/form-input/form-input.component";
import CustomButton from "../../component/custom-button/custom-button.component";
import "./contact.styles.scss";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();

    this.setState({ name: "", email: "", message: "" });
  };
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="contact">
        <div className="title">Contact Us</div>
        <div className="contact-form">
          <form name="contact" netlify>
            <div className="row">
              <FormInput
                name="name"
                type="name"
                value={this.state.name}
                handleChange={this.handleChange}
                label="Name *"
                required
              />
            </div>
            <div className="row">
              <FormInput
                name="email"
                type="email"
                value={this.state.email}
                handleChange={this.handleChange}
                label="Email *"
                required
              />
            </div>
            <div className="row">
              <FormInput
                name="message"
                type="text"
                value={this.state.message}
                handleChange={this.handleChange}
                label="Message *"
                textArea
                required
              />
            </div>
            <div className="row">
              <CustomButton type="submit">Submit</CustomButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
