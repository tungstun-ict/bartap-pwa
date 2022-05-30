import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import TungstunPage from "../../stories/page/tungstun-page";
import TungstunTitle from "../../stories/title/tungstun-title";

import "./scan-page.scss";

const ScanPage = () => {
  const [data, setData] = useState("No result");

  return (
    <TungstunPage>
      <TungstunTitle text="📷 Scan QR" level={1} back />
      <QrReader
        style={{ width: "250px", height: "20px" }}
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
      />
    </TungstunPage>
  );
};

export default ScanPage;
