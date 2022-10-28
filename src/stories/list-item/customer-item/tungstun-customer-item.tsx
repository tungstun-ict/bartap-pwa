import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import TungstunListItem from "../tungstun-list-item";
import { Props } from "./tungstun-customer-item.specs";

const TungstunCustomerItem: FC<Props> = ({barId, customer}: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/bar/${barId}/customer/${customer.id}`);
  };

  return (
    <TungstunListItem
      onClick={handleClick}
      left={
        <>
          <div className="list-item__accountImage"></div>
          <p className="list-item__text list-item__name">
            {`${customer.name}`}
          </p>
        </>
      }
      right={
        <>
          {customer.userId !== undefined && (
            <img className="list-item__image" src={require("../../../assets/icons/connected.png")} />
          )}
        </>
      }
    />
  );
};

export default TungstunCustomerItem;
