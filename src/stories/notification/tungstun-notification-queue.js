import React, {useContext} from "react";

import "./tungstun-notification-queue.scss";
import TungstunNotification from "./tungstun-notification";

const TungstunNotificationQueue = ({state, dispatch}) => {
  return (
    <>
      {state.length > 0 && (
        <div className="notification-queue__container">
          {state.map((n) => (
            <TungstunNotification key={n.id} id={n.id} text={n.text} error={n.error} dispatch={dispatch}/>))}
        </div>
      )}
    </>
  );
};

export default TungstunNotificationQueue;
