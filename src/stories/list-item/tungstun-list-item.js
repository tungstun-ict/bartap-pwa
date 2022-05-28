import React from "react";

import "./tungstun-list-item.scss";

function TungstunListItem({left, right, borderColor}) {
  return (
    <div className="list-item__container">
      <div className="list-item__content">
        <div className="list-item__content__left">{left}</div>
        <div className="list-item__content__right">{right}</div>
      </div>
      <div className="list-item__border" style={{backgroundColor: borderColor}}></div>
    </div>
  );
}

export default TungstunListItem;
