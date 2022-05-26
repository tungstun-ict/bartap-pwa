import React from "react";
import { useNavigate } from "react-router-dom";

import TungstunPage from "../../stories/page/tungstun-page";
import TungstunAuthModal from "../../stories/auth-modal/tungstun-auth-modal";
import TungstunForm from "../../stories/form/tungstun-form";
import TungstunInput from "../../stories/input/tungstun-input";
import TungstunIconButton from "../../stories/icon-button/tungstun-icon-button";
import useForm from "../../utils/useForm";

import "./login-page.scss";
import TungstunWaves from "../../stories/waves/tungstun-waves";

const LoginPage = () => {
  const [formValues, updateFormValues] = useForm();
  const navigate = useNavigate();

  const submitForm = () => {
    navigate("/");
  };

  return (
    <TungstunPage
      style={{ justifyContent: "center", alignItems: "center" }}
      transition={true}
      noHeader
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
          value={formValues.email}
          onChange={updateFormValues}
        />
        <TungstunInput
          hint="Password"
          type="password"
          name="password"
          value={formValues.password}
          onChange={updateFormValues}
        />
        <TungstunIconButton
          onClick={submitForm}
          src={require("../../assets/icons/arrow-light.png")}
        />
      </TungstunForm>
      <TungstunWaves />
    </TungstunPage>
  );
};

export default LoginPage;
