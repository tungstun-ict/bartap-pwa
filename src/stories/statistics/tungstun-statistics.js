import React from "react";

import "./tungstun-statistics.scss"

const TungstunStatistics = ({children}) => {
  return (
    <div className="statistics__container">
        {children}
    </div>
  );
}

export default TungstunStatistics;