import React from "react";

import TungstunButton from "./tungstun-button";

export default {
  title: "Button",
  component: TungstunButton,
  argTypes: { onClick: { action: ("clicked") } },
};

export const Primary = ({ onClick }) => {
  return <TungstunButton onClick={onClick} text={"Hello world!"} />;
};

Primary.storyName = "Primary button";
