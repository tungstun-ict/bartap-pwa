import React, { useContext } from "react";

import "./tungstun-notification-queue.scss";
import TungstunNotificationContext from "./tungstun-notification-provider";
import TungstunNotification from "./tungstun-notification";

const TungstunNotificationQueue = () => {
  const notificationContext = useContext(TungstunNotificationContext);
  return (
    <div className="notification-queue__container">
      <TungstunNotification text="This is a notification" />
    </div>
  );
};

export default TungstunNotificationQueue;
