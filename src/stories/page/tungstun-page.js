import React, { useState } from "react";
import { motion } from "framer-motion";
import * as ApiService from "../../services/BarApiService";
import * as StorageService from "../../services/BarStorageService";

import TungstunHeader from "../header/tungstun-header";
import TungstunMenu from "../menu/tungstun-menu";

import "./tungstun-page.scss";
import TungstunTextButton from "../text-button/tungstun-text-button";
import { useNavigate } from "react-router-dom";

const TungstunPage = ({
  children,
  type,
  noHeader,
  bottomBar,
  title,
  style,
  className,
  authenticated,
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const heavyVariants = {
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

  const heavyTransition = {
    duration: 0.4,
    ease: "easeOut",
  };

  if (authenticated) {
    if (!ApiService.checkTokenValidity(StorageService.getRefreshToken())) {
      children = (
        <TungstunTextButton
          text={"You should not be here, please log in!"}
          width="100%"
          onClick={() => {
            navigate("/auth/login");
          }}
        />
      );
    }
  }

  return (
    <motion.div
      className={`page__container ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ duration: 2 }}
    >
      {type && (
        <motion.div
          className="page__standard"
          initial={"initial"}
          exit={"out"}
          animate={"in"}
          variants={heavyVariants}
          transition={heavyTransition}
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
        {bottomBar}
      </div>
    </motion.div>
  );
};

export default TungstunPage;
