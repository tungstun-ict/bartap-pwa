import React from "react";
import { QrReader } from "react-qr-reader";
import TungstunPage from "../../stories/page/tungstun-page";
import TungstunTitle from "../../stories/title/tungstun-title";

import "./scan-page.scss";

const ScanPage = () => {
  return (
    <TungstunPage>
      <TungstunTitle text="📷 Scan QR" level={1} back/>
      <QrReader className="scan-page__camera" />
    </TungstunPage>
  );
};

export default ScanPage;
