import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assits/logo.svg";

const Header = () => (
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
      <Link to="/signIn" className="link">
        Sign In
      </Link>
    </div>
    <div className="links">
      <Link to="/search">
        <i className="fi-xtluhl-magnifying-glass-thin"></i>
      </Link>
      <Link to="/card">
        <i className="fi-xtluhl-shopping-cart-thin"></i>
      </Link>
    </div>
  </div>
);

export default Header;