import React from "react";
import { motion } from "framer-motion";

import TungstunHeader from "../header/tungstun-header";
import TungstunLinkGroup from "../link-group/tungstun-link-group";
import TungstunLink from "../link/tungstun-link";

import "./tungstun-page.scss";

function TungstunPage({ children, type, noHeader, title, style }) {
  const standardVariants = {
    initial: {
      transform: "translate(0, 0)",
    },
    in: {
      transform: ["translate(0, 0)", "translate(-100vw, 0)"],
    },
    out: {
      transform: ["translate(200vw, 0)", "translate(0vw, 0)"],
    },
  };

  const standardTransition = {
    duration: 0.4,
    ease: "easeOut",
  };

  return (
    <motion.div className={`page__container`}>
      {!type && (
        <motion.div
          className="page__standard"
          initial={"initial"}
          exit={"out"}
          animate={"in"}
          variants={standardVariants}
          transition={standardTransition}
        >
          <div className="page__standard__in" />
          <div className="page__standard__out" />
        </motion.div>
      )}
      <>
        {!noHeader && (
          <TungstunHeader
            className="page__header"
            height={80}
            logo={require("../../assets/images/logo.png")}
            left={
              <TungstunLinkGroup>
                <TungstunLink header text="🏠 Home" href="/" />
                <TungstunLink header text="👽 Another" href="/another" />
              </TungstunLinkGroup>
            }
            right={
              <TungstunLinkGroup>
                <TungstunLink header text="⚙️ Settings" href="/settings" />
              </TungstunLinkGroup>
            }
          />
        )}
        <div className="page__content" style={style}>
          {title && (<h1 className="page__title">{title}</h1>)}
          {children}
        </div>
      </>
    </motion.div>
  );
}

export default TungstunPage;
