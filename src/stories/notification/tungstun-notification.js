import React, { useEffect, useState } from "react";

import "./tungstun-notification.scss";

function TungstunNotification({ id, text, error, dispatch }) {
  const [exit, setExit] = useState(false);
  const [progress, setProgress] = useState(0);
  const speed = 5000;

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const startTimer = async () => {
    setProgress(100);

    setTimeout(() => {
      closeNotification();
    }, speed);
  };

  useEffect(() => {
    async function start() {
      await startTimer();
    }

    start();
  }, []);

  const closeNotification = () => {
    setExit(true);

    setTimeout(() => {
      dispatch({
        type: "REMOVE_NOTIFICATION",
        id: id
      });
    }, 400);
  };

  return (
    <div
      className={`
        notification__container 
        ${error ? "notification-error" : ""} 
        ${exit ? "notification-exit" : ""}`}
    >
      <div
        className="notification__overlay"
        style={{ width: `${progress}%`, transition: `${speed}ms linear` }}
      ></div>
      <p className="notification__text">{text}</p>
    </div>
  );
}

export default TungstunNotification;
