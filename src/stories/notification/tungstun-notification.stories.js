import React from "react";

import TungstunNotification from "./tungstun-notification";

export default {
  title: "NotificatinTungstunNotification",
  component: TungstunNotification
}

export const Primary = () => {
  return <TungstunNotification />
}

Primary.storyName = "Primary notification"