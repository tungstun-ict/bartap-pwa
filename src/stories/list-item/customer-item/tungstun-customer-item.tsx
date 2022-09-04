import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import TungstunListItem from "../tungstun-list-item";
import { Props } from "./tungstun-customer-item.specs";

const TungstunCustomerItem: FC<Props> = ({customer}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/bar/${customer.firstName}/${customer.id}`);
  };

  return (
    <TungstunListItem
      onClick={handleClick}
      left={
        <>
          <div className="list-item__accountImage"></div>
          <p className="list-item__text list-item__name">
            {`${customer.firstName} ${customer.lastName}`}
          </p>
        </>
      }
      right={
        <>
          {customer.accountId !== undefined && (
            <img className="list-item__image" src={require("../../../assets/icons/connected.png")} />
          )}
        </>
      }
    />
  );
};

export default TungstunCustomerItem;
