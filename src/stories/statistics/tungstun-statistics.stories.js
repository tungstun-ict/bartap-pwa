import React from "react";

import TungstunStatistics from "./tungstun-statistic.tsx";

export default {
  title: "Statistics",
  component: TungstunStatistics
}

export const Primary = () => {
  return <TungstunStatistics />
}

Primary.storyName = "Primary statistics"