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
        Not Found
      </div>
    </TungstunPage>
  );
}

export default NotFoundPage;
