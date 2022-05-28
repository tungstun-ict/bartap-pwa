import React from "react";

import "./tungstun-list-view.scss"

function TungstunListView({ children }) {
  return (
    <div className="list-view__container">
      {children}
    </div>
  );
}

export default TungstunListView;