import React from "react";

import TungstunLinkGroup from "./tungstun-link-group";
import TungstunLink from "../link/tungstun-link";

export default {
  title: "Link Group",
  component: TungstunLinkGroup,
};

export const Primary = () => {
  return (
    <TungstunLinkGroup>
      <TungstunLink header href="/" text="Link  1" />
      <TungstunLink header href="/" text="Link  2" />
      <TungstunLink header href="/" text="Link  3" />
    </TungstunLinkGroup>
  );
};

Primary.storyName = "Primary link-group";
