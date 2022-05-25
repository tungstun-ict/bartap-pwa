import React from "react";
import { Router } from "react-router-dom";
import TungstunLinkGroup from "../link-group/tungstun-link-group";
import TungstunLink from "../link/tungstun-link";

import TungstunHeader from "./tungstun-header";

export default {
  title: "Header",
  component: TungstunHeader,
};

export const Primary = () => {
  return (
    <TungstunHeader
      height={80}
      logo={require("/src/assets/images/logo.png")}
      left={
        <TungstunLinkGroup>
          <TungstunLink selected header text="Home" href="/" />
          <TungstunLink header text="Another" href="/" />
        </TungstunLinkGroup>
      }
      right={
        <TungstunLinkGroup>
          <TungstunLink header text="Settings" href="/" />
          
        </TungstunLinkGroup>
      }
    />
  );
};

Primary.storyName = "Primary header";
