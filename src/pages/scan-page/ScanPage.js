import React, { useContext, useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import { useLocation, useNavigate } from "react-router-dom";
import TungstunNotificationContext from "../../stories/notification/tungstun-notification-provider";
import TungstunInput from "../../stories/input/tungstun-input";
import TungstunPage from "../../stories/page/tungstun-page";
import TungstunTitle from "../../stories/title/tungstun-title";

import "./scan-page.scss";
import TungstunForm from "../../stories/form/tungstun-form";
import TungstunTextButton from "../../stories/text-button/tungstun-text-button";
import useForm from "../../utils/useForm";
import TungstunIconButton from "../../stories/icon-button/tungstun-icon-button";

const ScanPage = () => {
  const dispatch = useContext(TungstunNotificationContext);
  const navigate = useNavigate();
  const [scan, setScan] = useState(null);
  const [formValues, updateFormValues] = useForm();

  useEffect(() => {
    if (scan !== null) {
      handleScan(scan);
    }
  }, [scan]);

  const handleScan = (input) => {
    dispatch({
      type: "ADD_NOTIFICATION",
      payload: { text: "Succesfully added new bar" },
    });
    navigate(`/bar/${input}`);
  };

  return (
    <TungstunPage>
      <TungstunTitle text="📷 Scan QR" level={1} back />
      <div className="scan-page__camera">
        {scan === null ? (
          <QrReader
            constraints={{
              facingMode: "environment",
            }}
            scanDelay={500}
            onResult={(result, error) => {
              if (!!result && scan === null) {
                setScan(result);
              }
            }}
          />
        ) : (
          "Oops"
        )}
      </div>
      <div className="scan-page__form">
        <TungstunForm onSubmit={() => handleScan(formValues.id)}>
          <TungstunInput
            hint={"Id"}
            name="id"
            value={formValues.id}
            onChange={updateFormValues}
          />
          <TungstunIconButton
            src={require("../../assets/icons/arrow-light.png")}
            onClick={() => handleScan(formValues.id)}
          />
        </TungstunForm>
      </div>
    </TungstunPage>
  );
};

export default ScanPage;
