import React, { useEffect, useState } from "react";
import TungstunIconButton from "../icon-button/tungstun-icon-button";

import "./tungstun-install-button.scss";

function TungstunInstallButton() {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = (evt) => {
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }

  return supportsPWA ? (
    <div className="install-button__container">
      <TungstunIconButton
        src={require("../../assets/icons/download-light.png")}
        onClick={onClick}
        ariaLabel={"Install app"}
      />
      <p className="install-button__text">Work faster with our free app!</p>
    </div>
  ) : (
    <></>
  );
}

export default TungstunInstallButton;
