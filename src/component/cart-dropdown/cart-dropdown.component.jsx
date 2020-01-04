import React from "react";

import "./cart-dropdown.syles.scss";

import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
        exercitationem sed quidem doloremque harum voluptatem pariatur optio at
        ipsam? Eveniet atque sed omnis aut explicabo quos reiciendis placeat
        commodi culpa.
      </p>
      <CustomButton>GO to Checkout</CustomButton>
    </div>
  </div>
);
export default CartDropdown;
