import React, { FC } from "react";

import "./tungstun-account-banner.scss";
import { Props } from "./tungstun-account-banner.specs";

const TungstunAccountBanner: FC<Props> = ({
  account,
  handleDisconnect,
  handleConnect,
}: Props) => {
  const handleClick = (e) => {
    if (account) return;

    handleConnect(e);
  };

  return (
    <div
      onClick={handleClick}
      className={`account-banner__container ${!account && "disconnected"}`}
    >
      {account ? (
        <>
          <div className="account-banner__accountImage" />
          <div className="account-banner__information">
            <p className="account-banner__name">{`${account.firstName} ${account.lastName}`}</p>
            <p className="account-banner__username">{account.username}</p>
          </div>
          <div className="account-banner__close" onClick={handleDisconnect}>
            <img
              className="account-banner__close__image"
              src={require("../../assets/icons/cross-light.png")}
            />
          </div>
        </>
      ) : (
        <p className="disconnected__text">connect account</p>
      )}
    </div>
  );
};

export default TungstunAccountBanner;
