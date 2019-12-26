import React from "react";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assits/logo.svg";

const Header = () => (
  <div className="header">
    <Logo className="logo" />
    <ul>
      <li>Products</li>
      <li>Collections</li>
      <li>Contact us</li>
    </ul>
    <ul>
      <li>
        <i class="fi-xtluhl-magnifying-glass-thin"></i>
      </li>
      <li>
        <i class="fi-xtluhl-shopping-cart-thin"></i>
      </li>
    </ul>
  </div>
);

export default Header;
