import React from "react";

import "./tungstun-search-bar.scss"
import TungstunInput from './../input/tungstun-input';

const TungstunSearchBar = ({value, className, onChange}) => {
  return (
    <div className={`search-bar__container ${className}`}>
      <TungstunInput value={value} onChange={onChange} hint={"🔎 Search"} />
    </div>
  );
}

export default TungstunSearchBar;