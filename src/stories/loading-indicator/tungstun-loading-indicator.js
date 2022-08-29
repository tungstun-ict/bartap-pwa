import React from "react";
import BounceLoader from "react-spinners/BounceLoader"

import "./tungstun-loading-indicator.scss"

function TungstunLoadingIndicator({className, size, loading}) {
  return (
    <div style={{height: size, width: size}} className={`loading-indicator__container ${className} ${!loading && "loading-indicator--invisible"}`}>
      <BounceLoader color="orange" size={size - (size / 3)} />
    </div>
  );
}

export default TungstunLoadingIndicator;