import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import TungstunListItem from "../tungstun-list-item";
import { Props } from "./tungstun-session-item.specs";

const TungstunSessionItem: FC<Props> = ({ session }: Props) => {
  const navigate = useNavigate();

  const payed = session.bills.every(b => b.isPayed);
  const total = session.bills.reduce((prev, b) => {prev.totalPrice += b.totalPrice; return prev}, {totalPrice: 0}).totalPrice;

  const handleClick = () => {
    navigate(`/session/${session.id}`);
  };

  return (
    <TungstunListItem
      borderColor={payed ? "#82C9C1" : "#F9525A"}
      onClick={handleClick}
      left={
        <>
          <p className="list-item__text list-item__date">{new Date(session.creationDate).toLocaleDateString()}</p>
          <p className="list-item__text list-item__name">{session.name}</p>
        </>
      }
      right={
        <>
          <p className="list-item__text list-item__price">€{total.toFixed(2)}</p>
        </>
      }
    />
  );
}

export default TungstunSessionItem;
