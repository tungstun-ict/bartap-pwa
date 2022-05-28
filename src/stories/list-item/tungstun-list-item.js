import React from "react";
import { Link } from "react-router-dom";

import "./tungstun-list-item.scss";

function TungstunListItem({ left, right, borderColor, link }) {
  return (
    link ? (
      <Link to={link} className="list-item__container list-item__container-link">
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
      {link && <img className="arrow"src={require("../../assets/icons/arrow.png")}/>}
    </Link>
    ) :
    <div className="list-item__container">
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
      {link && <img className="arrow"src={require("../../assets/icons/arrow.png")}/>}
    </div>
  );
}

export default TungstunListItem;
