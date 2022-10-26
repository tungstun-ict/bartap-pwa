import React from "react";

import "./tungstun-header.scss";
import TungstunTextButton from './../text-button/tungstun-text-button';
import { useNavigate } from 'react-router-dom';

function TungstunHeader({ className, setMenuOpen }) {
  const navigate = useNavigate();

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleDonateClick = () => {
    navigate("/donate")
  }

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
        <TungstunTextButton className={"header__bmcLink"} onClick={handleDonateClick} text={"💸"}/>
      </div>
    </div>
  );
}

export default TungstunHeader;
