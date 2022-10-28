import React from "react";

import TungstunForm from "./tungstun-form";
import TungstunInput from "../input/tungstun-input";
import TungstunIconButton from "../icon-button/tungstun-icon-button";
import useForm from "../../utils/useForm";

export default {
  title: "Form",
  component: TungstunForm,
};

export const Primary = () => {
  const [values, updateValues] = useForm();

  const submitForm = () => {
    console.log(values);
  };

  return (
    <TungstunForm title="Confirm identity" description="We sent you an email!">
      <TungstunInput
        hint="Email"
        type="email"
        name="email"
        error="this is an error"
        value={values.email || ""}
        onChange={updateValues}
      />
      <TungstunInput
        hint="Other thing"
        type="text"
        name="other"
        value={values.other || ""}
        onChange={updateValues}
      />
      <TungstunInput
        hint="Password"
        type="password"
        name="password"
        value={values.password || ""}
        onChange={updateValues}
      />
      <TungstunIconButton
        src={require("../../assets/icons/arrow-light.png")}
        width={30}
        onClick={submitForm}
      />
    </TungstunForm>
  );
};

Primary.storyName = "Primary form";
