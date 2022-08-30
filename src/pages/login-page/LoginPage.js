import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as ApiService from "../../services/BarApiService";
import * as StorageService from "../../services/BarStorageService";
import TungstunNotificationContext from "../../stories/notification/tungstun-notification-provider";

import TungstunPage from "../../stories/page/tungstun-page";
import TungstunForm from "../../stories/form/tungstun-form";
import TungstunInput from "../../stories/input/tungstun-input";
import TungstunIconButton from "../../stories/icon-button/tungstun-icon-button";
import useForm from "../../utils/useForm";

import "./login-page.scss";
import TungstunWaves from "../../stories/waves/tungstun-waves";
import { wait } from "@testing-library/user-event/dist/utils";

const LoginPage = () => {
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

  const submitForm = async () => {
    setLoading(true);

    try {
      if (await ApiService.login(formValues.email, formValues.password)) {
        sleep(1000);
        setLoading(false);
        navigate("/");
      }
    } catch (e) {
      sleep(1000);
      setLoading(false);
      notificationDispatch({
        type: "ADD_NOTIFICATION",
        payload: { text: `${e}`, error: "error" },
      });
    }
  };

  return (
    <TungstunPage
      style={{ justifyContent: "center", alignItems: "center" }}
      className={"login-page__container"}
      transition={true}
      noHeader
    >
      <TungstunForm
        title="Login"
        style={{ width: "100%" }}
        onSubmit={submitForm}
        submitButton={
          <TungstunIconButton
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
        />
        <TungstunInput
          hint="Password"
          type="password"
          name="password"
          value={formValues.password}
          onChange={updateFormValues}
        />
      </TungstunForm>
      <div className="login-page__links">
        <hr className="login-page__links__divider" />
        <a className="login-page__links__register" onClick={() => {
          navigate("/auth/register");
        }}>or register here</a>
      </div>
      <TungstunWaves />
    </TungstunPage>
  );
};

export default LoginPage;
