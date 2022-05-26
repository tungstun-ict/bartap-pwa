import React from "react";

import "./tungstun-statistic.scss"

function TungstunStatistic({value, description, className}) {
  return (
    <div className={`statistic__container ${className}`}>
      <p className="statistic__value">{value}</p>
      <p className="statistic__description">{description}</p>
    </div>
  );
}

export default TungstunStatistic;