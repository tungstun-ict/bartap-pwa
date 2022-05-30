import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import "./tungstun-menu-link.scss";

const TungstunMenuLink = ({ to, text }) => {
  const location = useLocation();

  const selected = location.pathname === to;
  return (
    <div className={`menu-link__container ${selected && "menu-link-active"}`}>
      <Link className="menu-link" to={to}>
        {text}
      </Link>
    </div>
  );
};

export default TungstunMenuLink;
