import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, textArea, ...otherProps }) => (
  <div className="form__group">
    {textArea ? (
      <textArea
        className="form__input"
        rows="5"
        onChange={handleChange}
        {...otherProps}
      />
    ) : (
      <input
        type="text"
        className="form__input"
        onChange={handleChange}
        {...otherProps}
      />
    )}
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form__input__label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);
export default FormInput;
