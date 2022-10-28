import React from "react";

import TungstunListItem from "./tungstun-list-item";

export default {
  title: "ListItem",
  component: TungstunListItem
}

export const Primary = () => {
  return <TungstunListItem />
}

Primary.storyName = "Primary list-item"