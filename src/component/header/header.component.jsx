import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assits/logo.svg";
import CartIcon from "../card-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/">
      <Logo className="logo" />
    </Link>
    <div className="links">
      <Link to="/Shop" className="link">
        Shop
      </Link>
      <Link to="/collections" className="link">
        Collections
      </Link>
      <Link to="/contact" className="link">
        Contact us
      </Link>
      {currentUser ? (
        <div className="link" onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link to="/signIn" className="link">
          Sign In
        </Link>
      )}
    </div>
    <div className="links">
      <Link to="/search">
        <i className="fi-xtluhl-magnifying-glass-thin"></i>
      </Link>
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
