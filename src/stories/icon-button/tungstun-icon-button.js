import React from "react";
import TungstunButton from "../button/tungstun-button";
import "./tungstun-icon-button.scss";

const TungstunIconButton = ({ width, src, type, onClick }) => {
  return (
    <TungstunButton onClick={onClick} type={type} width={width}>
      <img className="icon" alt="" src={src} />
    </TungstunButton>
  );
};

export default TungstunIconButton;
