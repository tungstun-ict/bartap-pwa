import React from "react";

import "./tungstun-statistics.scss"

const TungstunStatistics = ({children, className}) => {
  return (
    <div className={`statistics__container ${className && className}`}>
        {children}
    </div>
  );
}

export default TungstunStatistics;