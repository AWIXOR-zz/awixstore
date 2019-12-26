import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assits/logo.svg";

const Header = () => (
  <div className="header">
    <Link to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/products">
        Products
      </Link>
      <Link className="option" to="/collection">
        Collections
      </Link>
      <Link className="option" to="/contact">
        Contact us
      </Link>
    </div>
    <ul>
      <li>
        <i class="fi-xnluhl-magnifying-glass"></i>
      </li>
      <li>
        <i class="fi-xtluhl-shopping-cart-thin"></i>
      </li>
    </ul>
  </div>
);

export default Header;
