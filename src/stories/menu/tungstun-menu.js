import React, { useState } from "react";

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
    </div>
  );
}

export default TungstunMenu;
