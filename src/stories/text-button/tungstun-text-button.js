import React from "react";
import TungstunButton from "../button/tungstun-button";
import "./tungstun-text-button.scss"

const TungstunTextButton = ({ text, width, onClick, color, className, ariaLabel }) => {
  return <TungstunButton ariaLabel={ariaLabel} className={className} color={color} onClick={onClick} width={width}><p className="text">{text}</p></TungstunButton>;
};

export default TungstunTextButton;
