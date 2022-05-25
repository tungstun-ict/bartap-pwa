import React from "react";

import "./tungstun-header.scss";

function TungstunHeader({ logo, left, right, height, className }) {
  return (
    <div
      className={`header__container ${className}`}
      style={{ height: height && height }}
    >
      <img className="header__logo" alt="" src={logo} />
      <div className="header__left">{left}</div>
      <div className="header__right">{right}</div>
    </div>
  );
}

export default TungstunHeader;
