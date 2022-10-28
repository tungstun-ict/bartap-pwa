import React, { useContext } from "react";
import TungstunListItem from "./tungstun-list-item";
import TungstunNotificationContext from './../notification/tungstun-notification-provider';

const TungstunOrderItem = ({ order }) => {
  const creationDate = new Date(order.creationDate);
  const notificationDispatch = useContext(TungstunNotificationContext);

  const handleClick = () => {
    notificationDispatch({
      type: "ADD_NOTIFICATION",
      payload: { text: `Entered by: ${order.bartender.name}` },
    });
  };

  return (
    <TungstunListItem
      onClick={handleClick}
      left={
        <>
          <p className="list-item__text list-item__date">
            {`${creationDate.getHours()}:${creationDate
              .getMinutes()
              .toString()
              .padStart(2, "0")}`}
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
          <p className="list-item__text list-item__price">
            €{(order.product.price * order.amount).toFixed(2)}
          </p>
        </>
      }
    />
  );
};

export default TungstunOrderItem;
