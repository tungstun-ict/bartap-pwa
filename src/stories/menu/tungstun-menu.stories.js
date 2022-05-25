import React from "react";

import TungstunMenu from "./tungstun-menu";

export default {
  title: "Menu",
  component: TungstunMenu
}

export const Primary = () => {
  return <TungstunMenu />
}

Primary.storyName = "Primary menu"