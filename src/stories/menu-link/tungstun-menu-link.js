import React from "react";
import { Link } from "react-router-dom";

import "./tungstun-menu-link.scss"

function TungstunMenuLink({to, text}) {
  return (
    <div className="menu-link__container">
      <Link className="menu-link" to={to}>{text}</Link>
    </div>
  );
}

export default TungstunMenuLink;