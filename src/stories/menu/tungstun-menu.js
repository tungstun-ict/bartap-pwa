import React from "react";
import TungstunMenuLink from "../menu-link/tungstun-menu-link";
import TungstunTitle from "../title/tungstun-title";

import "./tungstun-menu.scss";

function TungstunMenu({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={`menu__container ${!open && "menu-closed"}`}>
      <div className="menu__header">
        <button onClick={handleClose} className="menu__header__close">
          <img src={require("../../assets/icons/cross.png")} />
        </button>
      </div>
      <nav className="menu__links">
        <TungstunTitle text={"Menu"} level={2} />
        <TungstunMenuLink to="/" text="🏠 Home" />
        <TungstunMenuLink to="/account" text="🧑 Account" />
        <TungstunMenuLink to="/debug" text="🪲 Debug options" />
      </nav>
    </div>
  );
}

export default TungstunMenu;
