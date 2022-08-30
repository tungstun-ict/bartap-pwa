import React from "react";

import "./tungstun-button.scss";

const TungstunButton = ({
  onClick,
  children,
  type,
  width = 50,
  color,
  className,
  ariaLabel,
}) => {
  const clicked = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button
      aria-label={ariaLabel}
      color={color}
      className={`button__container ${className}`}
      style={{ width: width }}
      type={type}
      onClick={clicked}
    >
      <div className="button" style={{ background: color }}>
        <div
          className="button__overlay"
          style={{ background: color && "rgba(0,0,0,0.4)" }}
        ></div>
        {children}
      </div>
    </button>
  );
};

export default TungstunButton;
