import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import "./tungstun-menu-link.scss";

const TungstunMenuLink = ({ to, emoji, text, handleClose, retracted }) => {
  const location = useLocation();

  const selected = location.pathname === to;
  return (
    <div className={`menu-link__container ${selected && "menu-link-active"} ${retracted && "menu-link-retracted"}`}>
      <Link
        className="menu-link"
        onClick={() => {
          if (location.pathname === to) {
            handleClose();
          }
        }}
        to={to}
      >
        <p className="menu-link__text">{emoji} {!retracted && text}</p>
      </Link>
    </div>
  );
};

export default TungstunMenuLink;
