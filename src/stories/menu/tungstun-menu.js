import React, { useState } from "react";
import TungstunMenuLink from "../menu-link/tungstun-menu-link";

import "./tungstun-menu.scss";

function TungstunMenu({open, setOpen}) {

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className={`menu__container ${!open && "menu-closed"}`}>
      <div className="menu__header">
        <button onClick={handleClose} className="menu__header__close">
          <img src={require("../../assets/icons/cross.png")} />
        </button>
      </div>
      <nav className="menu__links">
        <TungstunMenuLink to="/" text="🏠 Home"/>
        <TungstunMenuLink to="/another-one" text="Another one"/>
      </nav>
    </div>
  );
}

export default TungstunMenu;
