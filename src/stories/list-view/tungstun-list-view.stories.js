import React from "react";

import TungstunListView from "./tungstun-list-view";

export default {
  title: "ListView",
  component: TungstunListView
}

export const Primary = () => {
  return <TungstunListView />
}

Primary.storyName = "Primary list-view"