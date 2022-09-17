import React, { useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import TungstunListItem from "../tungstun-list-item";
import { Props } from "./tungstun-session-item.specs";
import "./tungstun-session-item.scss";

const TungstunSessionItem: FC<Props> = ({ session }: Props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);

  const payed = session.bills.every((b) => b.isPayed);
  const total = session.bills.reduce(
    (prev, b) => {
      prev.totalPrice += b.totalPrice;
      return prev;
    },
    { totalPrice: 0 }
  ).totalPrice;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <TungstunListItem
      childrenClassName={`session-item__children ${
        open && "session-item__children--open"
      }`}
      className={`session-item__container ${
        open && "session-item__container--open"
      }`}
      borderColor={payed ? "#82C9C1" : "#F9525A"}
      onClick={handleClick}
      left={
        <>
          <p className="list-item__text list-item__date">
            {new Date(session.creationDate).toLocaleDateString()}
          </p>
          <p className="list-item__text list-item__name">{session.name}</p>
        </>
      }
      right={
        <>
          <p className="list-item__text list-item__price">
            €{total.toFixed(2)}
          </p>
        </>
      }
    >
      {session.bills.map((b) => (
        <div className="customer" onClick={() => navigate(`/bill/${b.id}`)}>
          <p className="customer__name">{b.customer.name}</p>
          <p className="customer__price">€{b.totalPrice.toFixed(2)}</p>
        </div>
      ))}
    </TungstunListItem>
  );
};

export default TungstunSessionItem;
