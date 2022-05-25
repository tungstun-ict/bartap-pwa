import { screen, userEvent } from "@storybook/testing-library";
import React from "react";

import TungstunTextButton from "./tungstun-text-button";

export default {
  title: "Text button",
  component: TungstunTextButton,
};

const Template = (args) => <TungstunTextButton {...args} />;

export const Primary = Template.bind({});

Primary.storyName = "Primary text button";
Primary.args = {
  text: "Hello world!",
};

export const SpecifiedWidth = Template.bind({});

SpecifiedWidth.storyName = "Specified width text button";
SpecifiedWidth.args = {
  text: "Hello world!",
  width: 500,
};
