import React from "react";

import TungstunAuthModal from "./tungstun-auth-modal";
import TungstunForm from "../form/tungstun-form";
import TungstunInput from "../input/tungstun-input";
import TungstunIconButton from "../icon-button/tungstun-icon-button";
import useForm from "../../utils/useForm";

export default {
  title: "AuthModal",
  component: TungstunAuthModal,
};

export const Primary = () => {
  const [formValues, updateFormValues] = useForm();

  return (
    <TungstunAuthModal
      heroImg={require("../../assets/images/office.jpg")}
      logo={require("../../assets/images/logo.png")}
      links={[
        { text: "Go to Google", href: "https://google.com" },
        { text: "Forgot password", href: "/forgot-password" },
      ]}
    >
      <TungstunForm
        title="Login"
        style={{ width: "100%" }}
        onSubmit={submitForm}
      >
        <TungstunInput
          hint="Email"
          type="email"
          name="email"
          value={formValues.email || ""}
          onChange={updateFormValues}
        />
        <TungstunInput
          hint="Password"
          type="password"
          name="password"
          value={formValues.password || ""}
          onChange={updateFormValues}
        />
        <TungstunIconButton
          src={require("../../assets/icons/arrow-light.png")}
        />
      </TungstunForm>
    </TungstunAuthModal>
  );
};

Primary.storyName = "Primary auth-modal";
