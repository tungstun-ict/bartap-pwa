import React from "react";
import { useNavigate } from "react-router-dom";

import "./tungstun-title.scss";

const TungstunTitle = ({ text, level, back, action }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className={`title__container ${level === 1 && "title__fixed"}`}>
      <div>
        {back && (
          <img
            id="button"
            alt="Go back"
            onClick={handleClick}
            src={require("../../assets/icons/arrow.png")}
            className="title__back"
          />
        )}
        {level === 1 && <h1 className="title title__h1">{text}</h1>}
        {action && <div className="title__action">{action}</div>}
      </div>
      {level === 2 && <h2 className="title title__h2">{text}</h2>}
      {level === 3 && <h3 className="title title__h3">{text}</h3>}
    </div>
  );
};

export default TungstunTitle;
