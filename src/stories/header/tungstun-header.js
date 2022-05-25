import React from "react";

import "./tungstun-header.scss";

function TungstunHeader({ className, setMenuOpen }) {
  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  return (
    <div className={`header__container ${className}`}>
      <div className="header__left">
        <button onClick={handleOpenMenu} className="menu__button">
          <img
            className="menu__image"
            src={require("../../assets/icons/menu.png")}
          />
        </button>
      </div>
      <div className="header__center">bartap</div>
      <div className="header__right">{}</div>
    </div>
  );
}

export default TungstunHeader;
