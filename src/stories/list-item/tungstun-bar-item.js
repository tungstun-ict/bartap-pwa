import React from "react";
import TungstunListItem from "./tungstun-list-item";

function TungstunBarItem({ bar, link }) {
  return (
    <TungstunListItem
      link={link}
      left={
        <>
          <p className="list-item__text list-item__name">{bar.name}</p>
        </>
      }
      right={
        <>
          <p className="list-item__text list-item__price">€{bar.debt}</p>
        </>
      }
    />
  );
}

export default TungstunBarItem;
