import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as ApiService from "../../services/BarApiService";
import TungstunNotificationContext from "../../stories/notification/tungstun-notification-provider";

import TungstunPage from "../../stories/page/tungstun-page";
import TungstunForm from "../../stories/form/tungstun-form";
import TungstunInput from "../../stories/input/tungstun-input";
import TungstunIconButton from "../../stories/icon-button/tungstun-icon-button";
import useForm from "../../utils/useForm";

import "./login-page.scss";
import TungstunWaves from "../../stories/waves/tungstun-waves";

const LoginPage = () => {
  const [formValues, updateFormValues] = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const notificationDispatch = useContext(TungstunNotificationContext);

  const submitForm = async () => {
    setLoading(true);

    try {
      if (Object.keys(formValues).length === 0)
        throw new Error("Some fields are empty");

      for (const prop in formValues) {
        if (
          formValues[prop] === "" ||
          formValues[prop] === undefined ||
          formValues[prop] === null
        ) {
          throw new Error("Some fields are empty.");
        }
      }

      if (await ApiService.login(formValues.email, formValues.password)) {
        setLoading(false);
        navigate("/");
      }
    } catch (e) {
      setLoading(false);
      notificationDispatch({
        type: "ADD_NOTIFICATION",
        payload: { text: `${e.message}` },
      });
    }
  };

  return (
    <TungstunPage
      style={{
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "750px",
      }}
      className={"login-page__container"}
      transition={true}
      noHeader
      noMenu
    >
      <TungstunForm
        title="Login"
        style={{ width: "100%" }}
        onSubmit={submitForm}
        submitButton={
          <TungstunIconButton
            ariaLabel={"Login"}
            onClick={async () => await submitForm()}
            src={require("../../assets/icons/arrow-light.png")}
          />
        }
        loading={loading}
      >
        <TungstunInput
          hint="Email"
          type="email"
          name="email"
          value={formValues.email}
          onChange={updateFormValues}
          autoComplete="email"
        />
        <TungstunInput
          hint="Password"
          type="password"
          name="password"
          value={formValues.password}
          onChange={updateFormValues}
          autoComplete="current-password"
        />
      </TungstunForm>
      <div className="login-page__links">
        <hr className="login-page__links__divider" />
        <p
          className="login-page__links__register"
          onClick={() => {
            navigate("/auth/register");
          }}
        >
          or register here
        </p>
        <div className="login-page__links__statements">
          <p
            className="login-page__links__statement"
            onClick={() => {
              navigate("/terms-and-conditions");
            }}
          >
            terms and conditions
          </p>
          <p
            className="login-page__links__statement"
            onClick={() => {
              navigate("/privacy-statement");
            }}
          >
            privacy statement
          </p>
        </div>
      </div>
      <TungstunWaves />
    </TungstunPage>
  );
};

export default LoginPage;
