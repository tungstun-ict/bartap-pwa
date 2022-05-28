import React from "react";

import TungstunStatistics from "./tungstun-statistics";

export default {
  title: "Statistics",
  component: TungstunStatistics
}

export const Primary = () => {
  return <TungstunStatistics />
}

Primary.storyName = "Primary statistics"