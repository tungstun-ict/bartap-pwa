import React from "react";
import TungstunButton from "../button/tungstun-button";
import "./tungstun-text-button.scss"

const TungstunTextButton = ({ text, width, onClick }) => {
  return <TungstunButton onClick={onClick} width={width}><p className="text">{text}</p></TungstunButton>;
};

export default TungstunTextButton;
