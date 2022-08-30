import React from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import TungstunListItem from "../list-item/tungstun-list-item";
import "./tungstun-list-view.scss";

function TungstunListView({ children }) {
  return (
    <div className="list-view__container">
      {children}
    </div>
  );
}

export default TungstunListView;