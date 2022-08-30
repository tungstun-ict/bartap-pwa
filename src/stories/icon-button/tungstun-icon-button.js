import React from "react";
import TungstunButton from "../button/tungstun-button";
import "./tungstun-icon-button.scss";

const TungstunIconButton = ({ width, src, type, onClick, ariaLabel }) => {
  return (
    <TungstunButton ariaLabel={ariaLabel} onClick={onClick} type={type} width={width}>
      <img alt="icon" className="icon" src={src} />
    </TungstunButton>
  );
};

export default TungstunIconButton;
