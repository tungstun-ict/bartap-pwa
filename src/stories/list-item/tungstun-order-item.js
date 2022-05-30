import React from "react";
import TungstunListItem from "./tungstun-list-item";

const TungstunOrderItem = ({ order }) => {
  const timestamp = new Date(order.timestamp);

  return (
    <TungstunListItem
      left={
        <>
          <p className="list-item__text list-item__date">
            {`${timestamp.getHours()} : ${timestamp.getMinutes()}`}
          </p>
          <p className="list-item__text list-item__name">
            {order.product.brand}
          </p>

          <p className="list-item__text list-item__name">
            {order.product.name}
          </p>
        </>
      }
      right={
        <>
          <p className="list-item__text list-item__multiplier">
            {order.amount}x
          </p>
          <p className="list-item__text list-item__price">€{order.total}</p>
        </>
      }
    />
  );
};

export default TungstunOrderItem;
