import React from "react";

import TungstunIconButton from "./tungstun-icon-button";

export default {
  title: "Icon button",
  component: TungstunIconButton,
};

const Template = (args) => <TungstunIconButton {...args} />;

export const Primary = Template.bind({});

Primary.storyName = "Primary";
Primary.args = {
  src: require("../../assets/icons/arrow-light.png"),
  width: 40
};
