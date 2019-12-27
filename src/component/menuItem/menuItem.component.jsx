import React from "react";
import { withRouter } from "react-router-dom";

import "./menuItem.styles.scss";
const MenuItem = ({ id, title, size, imgUrl, history, linkUrl, match }) => (
  <div
    className={`${size} item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imgUrl})`
      }}
    />
    <div className="content">
      <div className="title">{title}</div>
      <span className="subtitle">Shop now</span>
    </div>
  </div>
);
export default withRouter(MenuItem);
