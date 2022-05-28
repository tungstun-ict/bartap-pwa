import React from "react";
import TungstunListItem from "./tungstun-list-item";

function TungstunAddBarItem({ link }) {
  return (
    <TungstunListItem
      link={link}
      left={<p className="list-item__text list-item__name">Add new bar</p>}
    />
  );
}

export default TungstunAddBarItem;
