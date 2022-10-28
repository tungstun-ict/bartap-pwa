import React from "react";

import TungstunTitle from "./tungstun-title";

export default {
  title: "Title",
  component: TungstunTitle
}

export const Primary = () => {
  return <TungstunTitle text="hallo" level={1}/>
}

Primary.storyName = "Primary title"