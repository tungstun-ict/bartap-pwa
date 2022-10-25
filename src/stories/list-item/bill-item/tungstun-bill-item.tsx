import React, { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TungstunListItem from "../tungstun-list-item";
import { Props } from "./tungstun-bill-item.specs";
import "./tungstun-bill-item.scss";

const TungstunBillItem: FC<Props> = ({ bill }: Props) => {
  const { barId } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/bar/${barId}/session/${bill.session.id}/bill/${bill.id}`);
  };
  return (
    <TungstunListItem
      className={`session-item__container`}
      borderColor={bill.isPayed ? "#82C9C1" : "#F9525A"}
      onClick={handleClick}
      left={
        <>
          <p className="list-item__text list-item__date">
            {new Date(bill.session.date).toLocaleDateString()}
          </p>
          <p className="list-item__text list-item__name">{bill.session.name}</p>
        </>
      }
      right={
        <p className="list-item__text list-item__price">
          €{bill.totalPrice.toFixed(2)}
        </p>
      }
    ></TungstunListItem>
  );
};

export default TungstunBillItem;
