import React from "react";

import "./tungstun-title.scss"

function TungstunTitle({text, level}) {
  return (
    <div className="title__container">
      {
        level === 1 ? (
          <h1 className="title title__h1">{text}</h1>
        ) : level === 2 ? (
          <h2 className="title title__h2">{text}</h2>
        ) : level === 3 ? (
          <h3 className="title title__h3">{text}</h3>
        ) : ""
      }
    </div>
  );
}

export default TungstunTitle;