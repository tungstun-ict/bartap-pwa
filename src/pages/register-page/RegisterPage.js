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
  const [accountFormValues, updateAccountFormValues] = useForm();
  const [loading, setLoading] = useState(false);
  const [accountProgress, setAccountProgress] = useState(0);
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

      if (formValues.password !== formValues.confirm_password) {
        throw new Error("Passwords do not match.");
      }

      if (!validateEmail(formValues.email)) {
        throw new Error("This is not a valid email address.");
      }

      await ApiService.signUp(
        formValues.email,
        formValues.username,
        formValues.password
      );
      sleep(1000);
      setLoading(false);
      setAccountProgress(1);
    } catch (e) {
      setLoading(false);
      notificationDispatch({
        type: "ADD_NOTIFICATION",
        payload: { text: `${e.message}` },
      });
    }
  };

  const submitAccountForm = async () => {
    setLoading(true);;

    if (Object.keys(accountFormValues).length === 0)
        throw new Error("Some fields are empty");

    try {
      for (const prop in accountFormValues) {
        if (
          accountFormValues[prop] === "" ||
          accountFormValues[prop] === undefined ||
          accountFormValues[prop] === null ||
          accountFormValues === undefined
        ) {
          throw new Error("Some fields are empty.");
        }
      }

      if (
        accountFormValues.phone === undefined ||
        accountFormValues.phone.length !== 9 ||
        accountFormValues.phone[0] !== "6"
      ) {
        throw new Error("Phone number is not correct.");
      }

      if (
        accountFormValues.first_name === undefined ||
        accountFormValues.first_name === ""
      ) {
        throw new Error("First name must not be empty.");
      }

      if (
        accountFormValues.last_name === undefined ||
        accountFormValues.last_name === ""
      ) {
        throw new Error("Last name must not be empty.");
      }

      setLoading(false);
      navigate("/");
    } catch (e) {
      setLoading(false);
      notificationDispatch({
        type: "ADD_NOTIFICATION",
        payload: { text: `${e.message}` },
      });
    }
  };

  const loginInfo = () => {
    return (
      <TungstunForm
        title="Register"
        style={{ width: "100%" }}
        onSubmit={submitForm}
        submitButton={
          <TungstunIconButton
            ariaLabel={"Create account"}
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
          hint="Username"
          type="username"
          name="username"
          value={formValues.username}
          onChange={updateFormValues}
          autoComplete="username"
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
    );
  };

  const accountInfo = () => {
    return (
      <TungstunForm
        title="Account"
        style={{ width: "100%" }}
        onSubmit={submitAccountForm}
        submitButton={
          <TungstunIconButton
            ariaLabel={"Update account information"}
            onClick={async () => submitAccountForm()}
            src={require("../../assets/icons/arrow-light.png")}
          />
        }
        loading={loading}
      >
        <TungstunInput
          hint="First name"
          type="text"
          name="first_name"
          value={accountFormValues.first_name}
          onChange={updateAccountFormValues}
          autoComplete="given-name"
        />
        <TungstunInput
          hint="Last name"
          type="text"
          name="last_name"
          value={accountFormValues.last_name}
          onChange={updateAccountFormValues}
          autoComplete="family-name"
        />
        <TungstunInput
          prefix="+31"
          hint="Phone number"
          type="tel"
          name="phone"
          value={accountFormValues.phone}
          onChange={updateAccountFormValues}
          autoComplete="tel"
        />
      </TungstunForm>
    );
  };

  return (
    <TungstunPage
      style={{
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "750px",
        transition: 0.5,
      }}
      className={"register-page__container"}
      transition={true}
      noHeader
    >
      {accountProgress === 0 ? loginInfo() : accountInfo()}
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
