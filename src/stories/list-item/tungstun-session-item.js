import React from "react";
import TungstunListItem from "./tungstun-list-item";

function TungstunSessionItem({ session }) {
  return (
    <TungstunListItem
      borderColor={session.payed ? "#82C9C1" : "#F9525A"}
      left={
        <>
          <p className="list-item__text list-item__date">{session.date}</p>
          <p className="list-item__text list-item__name">{session.name}</p>
        </>
      }
      right={
        <>
          <p className="list-item__text list-item__price">€{session.total}</p>
        </>
      }
    />
  );
}

export default TungstunSessionItem;
