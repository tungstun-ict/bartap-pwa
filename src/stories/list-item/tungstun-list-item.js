import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./tungstun-list-item.scss";

const TungstunListItem = ({
  left,
  right,
  borderColor,
  onClick,
  loading,
  className,
  children,
  childrenClassName,
}) => {
  const handleClick = () => {
    onClick();
  };

  return loading ? (
    <Skeleton style={{ height: 60, borderRadius: 20 }} />
  ) : (
    <div className={`list-item__container ${className}`} onClick={handleClick}>
      <div className="list-item">
        <div className="list-item__content">
          <div className="list-item__content__left">{left}</div>
          <div className="list-item__content__right">{right}</div>
        </div>
        <div className={childrenClassName}>{children}</div>
        {borderColor && (
          <div
            className="list-item__border"
            style={{ backgroundColor: borderColor }}
          ></div>
        )}
      </div>
      {onClick && (
        <img
          alt="open item"
          className="arrow"
          src={require("../../assets/icons/arrow.png")}
        />
      )}
    </div>
  );
};

export default TungstunListItem;
