import React, { FC } from "react";

import "./tungstun-statistic.scss"
import { Props } from "./tungstun-statistic.specs";

const TungstunStatistic: FC<Props> = ({value, description, className}: Props) => {
  return (
    <div className={`statistic__container ${className}`}>
      <p className="statistic__value">{typeof value === "number" ? value.toFixed(2) : value }</p>
      <p className="statistic__description">{description}</p>
    </div>
  );
}

export default TungstunStatistic;