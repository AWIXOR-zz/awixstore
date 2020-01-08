import React from "react";

import "./costum-button.styles.scss";

const CustomButton = ({ children, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? "inverted" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);
export default CustomButton;
