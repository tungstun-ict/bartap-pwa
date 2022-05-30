import React from "react";
import { useNavigate } from "react-router-dom";
import TungstunListItem from "./tungstun-list-item";

const TungstunBarItem = ({ bar }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/bar/${bar.slug}`);
  };

  return (
    <TungstunListItem
      onClick={handleClick}
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
};

export default TungstunBarItem;
