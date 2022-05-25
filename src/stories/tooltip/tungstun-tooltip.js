import React from "react";
import "./tungstun-tooltip.scss";

function TungstunTooltip({ text, offsetY, active, style }) {
  return (
    <div
      style={style}
      className={`tooltip ${active && "tooltip__background-active"}`}
    >
      <h3 className="tooltip__text">{text}</h3>
    </div>
  );
}

export default TungstunTooltip;
