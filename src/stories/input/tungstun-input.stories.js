import React from "react";

import TungstunInput from "./tungstun-input";

export default {
  title: "Input",
  component: TungstunInput,
  argTypes: { onClick: { action: ("clicked") } },
};

export const Primary = () => {
  return <TungstunInput hint={"Email address"} type="email" />;
};

export const Password = () => {
  return <TungstunInput hint={"Password"} type="password" />;
};

export const Error = () => {
  return <TungstunInput hint={"Email"} type="email" error="this is the error" />;
};

Primary.storyName = "Primary input";
Password.storyName = "Password input"
Error.storyName = "Error input"

