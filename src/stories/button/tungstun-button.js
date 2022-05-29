import React from "react";

import "./tungstun-button.scss";

const TungstunButton = ({ onClick, children, type, width }) => {
  const clicked = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button
      className="button__container"
      style={{ width: width }}
      type={type}
      onClick={clicked}
    >
      <div className="button">
        <div className="button__overlay"></div>
        {children}
      </div>
    </button>
  );
};

export default TungstunButton;
