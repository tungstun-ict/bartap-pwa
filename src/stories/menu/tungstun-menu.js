import React, { useEffect, useState } from "react";
import TungstunInstallButton from "../install-button/tungstun-install-button";
import TungstunMenuLink from "../menu-link/tungstun-menu-link";
import TungstunTitle from "../title/tungstun-title";
import "./tungstun-menu.scss";
import { getAccountById, getMyAccount, getOwnedBars } from "../../services/BarApiService";
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
      var response = await getMyAccount();
      setAccount(response);
      console.log(response);
    }

    if (loading) fetchData().finally(() => setLoading(false));
  }, [loading]);

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
          <div className="menu__header__account">
            <div className="menu__header__account__image"></div>
            <div className="menu__header__account__info">
              <p className="menu__header__account__info__name">{`${account.firstName} ${account.lastName}`}</p>
              <p className="menu__header__account__info__userName">{account.username}</p>
            </div>
          </div>
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
            text="🏠 Home"
          />
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
          {loading && (
            <TungstunLoadingIndicator
              className={"menu__loadingIndicator"}
              loading={loading}
              size={30}
            />
          )}
          {bars.length > 0 && <TungstunTitle text={"My bars"} level={2} />}
          {showBars(bars)}
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
