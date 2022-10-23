import React from "react";

import TungstunStatistic from "./tungstun-statistic.tsx";

export default {
  title: "Statistic",
  component: TungstunStatistic
}

export const Primary = () => {
  return <TungstunStatistic />
}

Primary.storyName = "Primary statistic"