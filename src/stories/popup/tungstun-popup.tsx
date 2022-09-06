import React, { Children, FC, useState } from "react";

import "./tungstun-popup.scss";
import { Props } from "./tungstun-popup.specs";

const TungstunPopup: FC<Props> = ({ isOpen, setClose, children }: Props) => {
  console.log(isOpen);

  return (
    <>
      <div
        className={`popup__container popup__container__${
          isOpen ? "open" : "closed"
        }`}
      >{isOpen && children}</div>
      <div onClick={setClose} className={`popup__background ${isOpen && "popup__background--open"}`} />
    </>
  );
};

export default TungstunPopup;
