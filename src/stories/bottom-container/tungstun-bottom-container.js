import React from "react";

import "./tungstun-bottom-container.scss"

function TungstunBottomContainer({children}) {
  return (
    <div className="bottom-container__container">
      {children}
    </div>
  );
}

export default TungstunBottomContainer;