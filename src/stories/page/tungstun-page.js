import React, { useState } from "react";
import { motion } from "framer-motion";

import TungstunHeader from "../header/tungstun-header";
import TungstunMenu from "../menu/tungstun-menu";
import TungstunNotificationQueue from "../notification/tungstun-notification-queue";

import "./tungstun-page.scss";

const TungstunPageContainer = () => {};

const TungstunPage = ({ children, type, noHeader, title, style }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

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

      <TungstunMenu open={isMenuOpen} setOpen={setMenuOpen} />
      {!noHeader && (
        <TungstunHeader
          className="page__header"
          setMenuOpen={setMenuOpen}
          height={80}
        />
      )}
      <div className="page__content" style={style}>
        {title && <h1 className="page__title">{title}</h1>}
        {children}
      </div>
    </motion.div>
  );
};

export default TungstunPage;
