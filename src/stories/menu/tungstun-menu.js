import React from "react";
import TungstunInstallButton from "../install-button/tungstun-install-button";
import TungstunMenuLink from "../menu-link/tungstun-menu-link";
import TungstunTitle from "../title/tungstun-title";

import "./tungstun-menu.scss";

function TungstunMenu({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={`menu__container ${!open && "menu-closed"}`}>
        <div className="menu__header">
          <button aria-label="Close menu" onClick={handleClose} className="menu__header__close">
            <img alt="" src={require("../../assets/icons/cross.png")} />
          </button>
        </div>
        <nav className="menu__links">
          <TungstunTitle text={"Menu"} level={2} />
          <TungstunMenuLink handleClose={handleClose} to="/" text="🏠 Home" />
          <TungstunMenuLink handleClose={handleClose} to="/my-bar" text="🍻 My bar" />
          <TungstunMenuLink handleClose={handleClose} to="/account" text="🧑 Account" />
          <TungstunMenuLink handleClose={handleClose} to="/debug" text="🪲 Debug options" />
        </nav>  
        <TungstunInstallButton />
      </div>
      <div className="menu__draggable"></div>
      <div className={`menu__negative ${open && "menu__negative--open"}`} onClick={handleClose}/>
    </div>
  );
}

export default TungstunMenu;
