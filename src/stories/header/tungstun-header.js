import React from "react";

import "./tungstun-header.scss";

function TungstunHeader({ className }) {
  return (
    <div
      className={`header__container ${className}`}
    >
      <div className="header__left">{}</div>
      <div className="header__center">bartap</div>
      <div className="header__right">{}</div>
    </div>
  );
}

export default TungstunHeader;
