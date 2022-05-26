import React from "react";

import "./tungstun-waves.scss"

function TungstunWaves() {
  return (
    <div className="waves__container">
      <img className="waves__image" src={require("../../assets/images/waves.png")} />
    </div>
  );
}

export default TungstunWaves;