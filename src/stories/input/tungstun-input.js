import React, { useState } from "react";
import TungstunTooltip from "../tooltip/tungstun-tooltip";

import "./tungstun-input.scss";

const TungstunInput = ({ width, hint, name, type, error, value = "", onChange }) => {
  const [isShownTooltip, setShownTooltip] = useState(false);

  return (
    <div className="background" style={{ width: width }}>
      {error && (
        <div
          onMouseLeave={() => setShownTooltip(false)}
          onMouseEnter={() => setShownTooltip(true)}
          className="error"
        />
      )}
      <TungstunTooltip
        text={error}
        style={{ zIndex: 5, top: -20 }}
        active={isShownTooltip}
      />
      <input
        name={name}
        className="input"
        placeholder={hint}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TungstunInput;
