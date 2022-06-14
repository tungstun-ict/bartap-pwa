import React, { createContext, useState } from "react";

const TungstunNotificationContext = createContext({
  notification: null,
  notificationText: null,
  success: () => {},
  error: () => {},
});

const TungstunNotificationProvider = (props) => {
  const [notification, setNotification] = useState(null);
  const [notificationText, setNotificationText] = useState(null);

  const success = (text) => {
    setNotificationText(text);
    setNotification(success);
  };

  const error = (text) => {
    setNotificationText(text);
    setNotification(error);
  };

  const clear = () => {
    setNotificationText(null);
    setNotification(null);
  };

  return (
    <TungstunNotificationContext.Provider
      value={{
        success,
        error,
        clear,
        notification,
        notificationText,
      }}
    >
      {props.children}
    </TungstunNotificationContext.Provider>
  );
};
export { TungstunNotificationProvider };
export default TungstunNotificationContext;