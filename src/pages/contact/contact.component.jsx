import React from "react";

import "./contact.styles.scss";

const Contact = () => (
  <div className="contact">
    <div className="title">Contact Us</div>
    <div className="contact-form">
      <form action="">
        <div className="row">
          <label htmlFor="name">
            Name <span>*</span>
          </label>
          <input type="text" required />
        </div>
        <div className="row">
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <input type="email" required />
        </div>
        <div className="row">
          <label htmlFor="message">
            Message <span>*</span>
          </label>
          <textarea name="message" cols="30" rows="10" required />
        </div>
        <div className="row">
          <input type="submit" className="submit" />
        </div>
      </form>
    </div>
  </div>
);
export default Contact;
