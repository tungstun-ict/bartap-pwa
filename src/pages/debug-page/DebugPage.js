import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TungstunNotificationContext from "../../stories/notification/tungstun-notification-provider";

import "./debug-page.scss"

import TungstunPage from "../../stories/page/tungstun-page";
import TungstunTextButton from "../../stories/text-button/tungstun-text-button";
import TungstunTitle from "../../stories/title/tungstun-title";

const DebugPage = () => {
  const navigate = useNavigate();
  const notificationDispatch = useContext(TungstunNotificationContext);

  return (
    <TungstunPage authenticated>
      <TungstunTitle text={"🪲 Debug"} level={1} />
      <TungstunTitle text="🔔 Notifications" level={2} />
      <div className="notifications__container">
        <TungstunTextButton
          width={"100%"}
          text={"Push new notification"}
          onClick={() =>
            notificationDispatch({
              type: "ADD_NOTIFICATION",
              payload: { text: "This is a friendly notification." },
            })
          }
        />
        <TungstunTextButton
          width={"100%"}
          text={"Push new error"}
          onClick={() =>
            notificationDispatch({
              type: "ADD_NOTIFICATION",
              payload: { text: "This is a critical error.", error: "error" },
            })
          }
        />
      </div>
      <TungstunTitle text="🧭 Navigation" level={2} />
      <div className="notifications__container">
      <TungstunTextButton
          width={"100%"}
          text={"Go to login"}
          onClick={() =>
            navigate("/auth/login")
          }
        />
      </div>
    </TungstunPage>
  );
};

export default DebugPage;
