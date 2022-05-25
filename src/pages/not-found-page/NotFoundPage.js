import React from "react";
import { useNavigate } from "react-router-dom";
import TungstunIconButton from "../../stories/icon-button/tungstun-icon-button";
import TungstunPage from "../../stories/page/tungstun-page";

import "./not-found-page.scss";

function NotFoundPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <TungstunPage className="nf-page__container">
      <div className="nf-page__content">
        <div className="nf-page__content__left">
          <img
            alt=""
            src={require("../../assets/images/logo.png")}
            className="nf-page__content__left__logo"
          />
          <h1>Whoops!</h1>
          <p>We could not find that page.</p>
        </div>
        <img
          alt=""
          src={require("../../assets/images/confusion.gif")}
          className="nf-page__content__right"
        />
      </div>
      <div className="nf-page__bottom">
        <h2>Let's go back home 🏠</h2>
        <TungstunIconButton
          src={require("../../assets/icons/next-icon-light.png")}
          onClick={handleClick}
        />
      </div>
    </TungstunPage>
  );
}

export default NotFoundPage;
