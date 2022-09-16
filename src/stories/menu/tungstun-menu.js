import React, { useEffect, useState } from "react";
import TungstunInstallButton from "../install-button/tungstun-install-button";
import TungstunMenuLink from "../menu-link/tungstun-menu-link";
import TungstunTitle from "../title/tungstun-title";
import "./tungstun-menu.scss";
import { getOwnedBars } from "../../services/BarApiService";

function TungstunMenu({ open, setOpen }) {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setBars(await getOwnedBars());
    }

    fetchData();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const showBars = (bars) => {
    if (bars.length < 1 || bars === undefined) return;

    return bars.map((b) => {
      return (
        <TungstunMenuLink
          key={b.name}
          handleClose={handleClose}
          to={`/my-bar/${b.id}`}
          text={`🍻 ${b.name}`}
        />
      );
    });
  };

  return (
    <div>
      <div className={`menu__container ${!open && "menu-closed"}`}>
        <div className="menu__header">
          <button
            aria-label="Close menu"
            onClick={handleClose}
            className="menu__header__close"
          >
            <img alt="" src={require("../../assets/icons/cross.png")} />
          </button>
        </div>
        <nav className="menu__links">
          <TungstunTitle text={"Menu"} level={2} />
          <TungstunMenuLink 
            key={"home"}
            handleClose={handleClose} 
            to="/" 
            text="🏠 Home" />
          <TungstunMenuLink
            key={"account"}
            handleClose={handleClose}
            to="/account"
            text="🧑 Account"
          />
          <TungstunMenuLink
            key={"debug"}
            handleClose={handleClose}
            to="/debug"
            text="🪲 Debug options"
          />
          <TungstunTitle text={"My bars"} level={2} />
          {showBars(bars)}
        </nav>
        <TungstunInstallButton />
      </div>
      <div className="menu__draggable"></div>
      <div
        className={`menu__negative ${open && "menu__negative--open"}`}
        onClick={handleClose}
      />
    </div>
  );
}

export default TungstunMenu;
