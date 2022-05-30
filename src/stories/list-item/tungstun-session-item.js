import React from "react";
import { useNavigate } from "react-router-dom";
import TungstunListItem from "./tungstun-list-item";

function TungstunSessionItem({ session }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/session/${session.id}`);
  };

  return (
    <TungstunListItem
      borderColor={session.payed ? "#82C9C1" : "#F9525A"}
      onClick={handleClick}
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
