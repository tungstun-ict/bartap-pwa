import React from "react";
import TungstunLink from "../link/tungstun-link";

import "./tungstun-auth-modal.scss";

const TungstunAuthModal = ({ heroImg, logo, links, children }) => {
  return (
    <div className="auth-modal__container">
      <div className="auth-modal__hero">
        <img alt="" className="auth-modal__hero__image" src={heroImg} />
      </div>
      <div className="auth-modal__content">
        <img alt="" className="auth-modal__content__logo" src={logo} />
        <hr className="auth-modal__content__divider" />
        {children}
        <div className="auth-modal__content__links">
          {links.map(({ text, href }) => (
            <TungstunLink key={href} text={text} href={href} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TungstunAuthModal;
