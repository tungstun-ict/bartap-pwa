import React from "react";
import { useNavigate } from "react-router-dom";
import TungstunListItem from "./tungstun-list-item";

const TungstunBarItem = ({ bar, loading }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/bar/${bar.id}`);
  };

  return (
    <TungstunListItem
      onClick={handleClick}
      loading={loading}
      left={
        <>
          <p className="list-item__text list-item__name">{bar.name}</p>
        </>
      }
    />
  );
};

export default TungstunBarItem;
