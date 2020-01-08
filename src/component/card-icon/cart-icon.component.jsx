import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="card-icon" onClick={toggleCartHidden}>
    <i className="fi-xtluhl-shopping-cart-thin" />
    <span className="item-count">02</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
export default connect(null, mapDispatchToProps)(CartIcon);
