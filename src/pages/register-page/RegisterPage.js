import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as ApiService from "../../services/BarApiService";
import TungstunNotificationContext from "../../stories/notification/tungstun-notification-provider";

import TungstunPage from "../../stories/page/tungstun-page";
import TungstunForm from "../../stories/form/tungstun-form";
import TungstunInput from "../../stories/input/tungstun-input";
import TungstunIconButton from "../../stories/icon-button/tungstun-icon-button";
import useForm from "../../utils/useForm";

import "./register-page.scss";
import TungstunWaves from "../../stories/waves/tungstun-waves";

const RegisterPage = () => {
  const [formValues, updateFormValues] = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const notificationDispatch = useContext(TungstunNotificationContext);

  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const submitForm = async () => {
    setLoading(true);

    try {
      for (const prop in formValues) {
        console.log(formValues[prop]);
        if (
          formValues[prop] === "" ||
          formValues[prop] === undefined ||
          formValues[prop] === null
        ) {
          throw new Error("Some fields are empty.");
        }
      }

      if (formValues.password !== formValues.confirm_password) {
        throw new Error("Passwords do not match.");
      }

      if (!validateEmail(formValues.email)) {
        throw new Error("This is not a valid email address.");
      }

      if (
        await ApiService.signUp(
          formValues.email,
          formValues.email,
          formValues.password
        )
      ) {
        sleep(1000);
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
      className={"register-page__container"}
      transition={true}
      noHeader
    >
      <TungstunForm
        title="Register"
        style={{ width: "100%" }}
        onSubmit={submitForm}
        submitButton={
          <TungstunIconButton
            onClick={async () => submitForm()}
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
          autoComplete="new-password"
        />
        <TungstunInput
          hint="Confirm password"
          type="password"
          name="confirm_password"
          value={formValues.confirm_password}
          onChange={updateFormValues}
          autoComplete="new-password"
        />
      </TungstunForm>
      <div className="register-page__links">
        <hr className="register-page__links__divider" />
        <p
          className="register-page__links__login"
          onClick={() => {
            navigate("/auth/login");
          }}
        >
          or login here
        </p>
      </div>
      <TungstunWaves />
    </TungstunPage>
  );
};

export default RegisterPage;
