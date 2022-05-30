import React from "react";
import { Link } from "react-router-dom";

import "./tungstun-list-item.scss";

const TungstunListItem = ({ left, right, borderColor, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className="list-item__container" onClick={handleClick}>
      <div className="list-item">
        <div className="list-item__content">
          <div className="list-item__content__left">{left}</div>
          <div className="list-item__content__right">{right}</div>
        </div>
        {borderColor && (
          <div
            className="list-item__border"
            style={{ backgroundColor: borderColor }}
          ></div>
        )}
      </div>
      {onClick && (
        <img className="arrow" src={require("../../assets/icons/arrow.png")} />
      )}
    </div>
  );
};

export default TungstunListItem;
