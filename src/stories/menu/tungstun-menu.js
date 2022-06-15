import React, { useContext, useState } from "react";
import TungstunMenuLink from "../menu-link/tungstun-menu-link";
import TungstunNotificationContext from "../notification/tungstun-notification-provider";
import TungstunTextButton from "../text-button/tungstun-text-button";
import TungstunTitle from "../title/tungstun-title";

import "./tungstun-menu.scss";

function TungstunMenu({ open, setOpen }) {
  const notificationDispatch = useContext(TungstunNotificationContext);
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
        <TungstunMenuLink to="/another-one" text="Another one" />
        <TungstunTextButton
          width={"100%"}
          text={"Push new notification"}
          onClick={() =>
            notificationDispatch({
              type: "ADD_NOTIFICATION",
              payload: { text: "This is a friendly notification." },
            })
          }
        />
        <TungstunTextButton
          width={"100%"}
          text={"Push new error"}
          onClick={() =>
            notificationDispatch({
              type: "ADD_NOTIFICATION",
              payload: { text: "This is a critical error.", error: "error" },
            })
          }
        />
      </nav>
    </div>
  );
}

export default TungstunMenu;
