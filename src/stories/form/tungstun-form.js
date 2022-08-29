import React from "react";
import useForm from "../../utils/useForm";
import TungstunLoadingIndicator from "../loading-indicator/tungstun-loading-indicator";

import "./tungstun-form.scss";

function TungstunForm({
  title,
  className,
  description,
  style,
  children,
  onSubmit,
  submitButton,
  loading,
}) {
  return (
    <div className={`${className} form__container`} style={style}>
      <h2 className="form__title">{title}</h2>
      {description && <p className="form__description">{description}</p>}
      <form onSubmit={onSubmit} className="form__children">
        {children}
        <div className="form__row">
        <TungstunLoadingIndicator
              size={50}
              className={"form__loader"}
              loading={loading}
            />
          {submitButton}
        </div>
      </form>
    </div>
  );
}

export default TungstunForm;
