import React from "react";
import { Link } from "react-router-dom";

import "./tungstun-link.scss";

const TungstunLink = ({ href, text, header, selected }) => {
  return (
    <div className="link__background">
      <Link
        to={href}
        className={
          "link" +
          (header ? " link--header" : "") +
          (selected ? " link--selected" : "")
        }
      >
        {text}
      </Link>
    </div>
  );
}

export default TungstunLink;
