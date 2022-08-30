import React, { useEffect, useState } from "react";

import "./tungstun-notification.scss";

function TungstunNotification({ id, text, error, dispatch }) {
  const [exit, setExit] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [progress, setProgress] = useState(0);
  const speed = 10000;

  useEffect(() => {
    startTimer();
  }, []);

  useEffect(() => {
    if (progress === 100) {
      closeNotification();
    }
  }, [progress]);

  const startTimer = () => {
    const id = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        }

        return prev;
      });
    }, speed / 100);

    setIntervalId(id);
  };

  const pauseTimer = () => {
    clearInterval(intervalId);
  };

  const closeNotification = () => {
    clearInterval(intervalId);
    setExit(true);

    setTimeout(() => {
      dispatch({
        type: "REMOVE_NOTIFICATION",
        id: id,
      });
    }, 400);
  };

  return (
    <div
      onMouseEnter={pauseTimer}
      onMouseLeave={startTimer}
      className={`
        notification__container 
        ${error ? "notification-error" : ""} 
        ${exit ? "notification-exit" : ""}`}
    >
      <div
        className="notification__overlay"
        style={{ width: `${progress}%`, transition: `${speed / 100}ms linear` }}
      ></div>
      {error ? (
        <img
          alt=""
          className="notification__icon"
          src={require("../../assets/icons/caution-light.png")}
        />
      ) : (
        <img
          alt=""
          className="notification__icon"
          src={require("../../assets/icons/info.png")}
        />
      )}
      <p className="notification__text">{text}</p>
    </div>
  );
}

export default TungstunNotification;
