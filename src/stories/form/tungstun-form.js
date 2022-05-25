import React from "react";
import useForm from "../../utils/useForm";

import "./tungstun-form.scss";

function TungstunForm({ title, className, description, style, children, onSubmit }) {
  return (
    <div className={`${className} form__container`} style={style}>
      <h2 className="form__title">{title}</h2>
      {description && <p className="form__description">{description}</p>}
      <form onSubmit={onSubmit} className="form__children">
        {children}
      </form>
    </div>
  );
}

export default TungstunForm;
