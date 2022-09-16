import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import TungstunTooltip from "../tooltip/tungstun-tooltip";

import "./tungstun-input.scss";

const TungstunInput = ({
  prefix,
  width,
  hint,
  name,
  type,
  error,
  value = "",
  onChange,
  autoComplete,
}) => {
  const [isShownTooltip, setShownTooltip] = useState(false);
  const [passwordVisible, setVisible] = useState(false);
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
      {prefix && (
        <p className="input__prefix">{prefix}</p>
      )}
      <input
        name={name}
        className="input"
        placeholder={hint}
        autoComplete={autoComplete}
        type={!passwordVisible ? type : "text"}
        value={value}
        
        onChange={onChange}
      />
      {type === "password" && (
        <img
          alt=""
          className="input__eye"
          src={
            passwordVisible ? 
            (require("../../assets/icons/eye-closed.png")) :
            (require("../../assets/icons/eye-open.png"))
          }
          onClick={() => {
            setVisible(!passwordVisible);
          }}
        />
      )}
    </div>
  );
};

export default TungstunInput;
