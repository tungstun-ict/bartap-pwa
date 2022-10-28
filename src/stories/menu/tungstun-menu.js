import React, { useEffect, useState } from "react";
import TungstunInstallButton from "../install-button/tungstun-install-button";
import TungstunMenuLink from "../menu-link/tungstun-menu-link";
import TungstunTitle from "../title/tungstun-title";
import "./tungstun-menu.scss";
import { getMyAccount, getOwnedBars } from "../../services/BarApiService";
import TungstunLoadingIndicator from "../loading-indicator/tungstun-loading-indicator";

function TungstunMenu({ open, setOpen }) {
  const [loading, setLoading] = useState(true);
  const [bars, setBars] = useState([]);
  const [account, setAccount] = useState({
    name: "Loading...",
    userName: "Loading...",
  });

  useEffect(() => {
    async function fetchData() {
      setBars(await getOwnedBars());
      setAccount(await getMyAccount());
    }

    if (loading) fetchData().finally(() => setLoading(false));
  }, [loading]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleKeyDown = (e) => {
    switch (e.code) {
      case "Escape":
        setOpen((state) => !state);
    }
  };

  const showBars = (bars) => {
    if (bars.length < 1 || bars === undefined) return;

    return bars.map((b) => {
      return (
        <TungstunMenuLink
          retracted={!open}
          key={b.name}
          handleClose={handleClose}
          to={`/my-bar/${b.id}`}
          emoji="🍻"
          text={`${b.name}`}
        />
      );
    });
  };

  return (
    <div>
      <div className={`menu__container ${!open && "menu-closed"}`}>
        <div className="menu__header">
          {open && account && (
            <div className="menu__header__account">
              <div className="menu__header__account__image"></div>
              <div className="menu__header__account__info">
                <p className="menu__header__account__info__name">{`${
                  account.firstName ? `${account.firstName} ${account.lastName}`: account.username
                }`}</p>
                {account.firstName && (
                  <p className="menu__header__account__info__userName">
                    {account.username ?? "..."}
                  </p>
                )}
              </div>
            </div>
          )}
          {open && (
            <button
              aria-label="Close menu"
              onClick={handleClose}
              className="menu__header__close"
            >
              <img alt="" src={require("../../assets/icons/cross.png")} />
            </button>
          )}
          {!open && (
            <button
              aria-label="Open menu"
              onClick={setOpen}
              className="menu__header__open"
            >
              <img alt="" src={require("../../assets/icons/menu.png")} />
            </button>
          )}
        </div>
        <nav className="menu__links">
          {open && <TungstunTitle text={"Menu"} level={2} />}
          {!open && <hr className="menu__divider" />}
          <TungstunMenuLink
            retracted={!open}
            key={"home"}
            handleClose={handleClose}
            to="/"
            emoji="🏠"
            text="Home"
          />
          <TungstunMenuLink
            retracted={!open}
            key={"account"}
            handleClose={handleClose}
            to="/account"
            emoji="🧑"
            text="Account"
          />
          <TungstunMenuLink
            retracted={!open}
            key={"donate"}
            handleClose={handleClose}
            to="/donate"
            emoji="💸"
            text="Donate"
          />
          {/* <TungstunMenuLink
            retracted={!open}
            key={"debug"}
            handleClose={handleClose}
            to="/debug"
            emoji="🪲"
            text="Debug options"
          /> */}
          {!open && <hr className="menu__divider" />}

          {loading && (
            <TungstunLoadingIndicator
              className={"menu__loadingIndicator"}
              loading={loading}
              size={30}
            />
          )}
          {bars.length > 0 && open && !loading && (
            <TungstunTitle text={"My bars"} level={2} />
          )}

          {!loading && showBars(bars)}
        </nav>
        <TungstunInstallButton />
      </div>
      <div
        className={`menu__negative ${open && "menu__negative--open"}`}
        onClick={handleClose}
      />
    </div>
  );
}

export default TungstunMenu;
