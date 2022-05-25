import React from "react";

import TungstunLink from "./tungstun-link";

export default {
  title: "Link",
  component: TungstunLink
}

export const Primary = () => {
  return <TungstunLink href="https://google.com" text="This is a link" />
}

Primary.storyName = "Primary link"