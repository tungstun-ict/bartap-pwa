import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TungstunButton from "../../stories/button/tungstun-button";
import TungstunIconButton from "../../stories/icon-button/tungstun-icon-button";
import TungstunPage from "../../stories/page/tungstun-page";
import TungstunTextButton from "../../stories/text-button/tungstun-text-button";
import TungstunTitle from "../../stories/title/tungstun-title";

import "./not-found-page.scss";

function NotFoundPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <TungstunPage className="nf-page__container">
      <TungstunTitle text="✋ Not found" level={1} />
      <div className="nf-page__content">
        <img
          alt=""
          className="nf-page__gif"
          src={require("../../assets/images/confusion.gif")}
        />
        <TungstunTextButton text={"🏠"} onClick={handleClick}/>
      </div>
    </TungstunPage>
  );
}

export default NotFoundPage;
