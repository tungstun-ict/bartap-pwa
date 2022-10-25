import React from "react";

import "./tungstun-header.scss";

function TungstunHeader({ className, setMenuOpen }) {
  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  return (
    <div className={`header__container ${className}`}>
      <div className="header__left">
        <button
          aria-label="Open menu"
          onClick={handleOpenMenu}
          className="menu__button"
        >
          <img
            alt="menu"
            className="menu__image"
            src={require("../../assets/icons/menu.png")}
          />
        </button>
      </div>
      <div className="header__center">bartap</div>
      <div className="header__right">
        <a
          className="header__bmcLink" 
          href="https://www.buymeacoffee.com/tungstun">
          <img src="https://img.buymeacoffee.com/button-api/?text=Buy us a cocktail&emoji=🍸&slug=tungstun&button_colour=BD5FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" />
        </a>
      </div>
    </div>
  );
}

export default TungstunHeader;
