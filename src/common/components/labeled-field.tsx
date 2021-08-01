import React from "react";
import Field from "./field";
import "./labeled-field.scss";

const LabeledField = ({ label, ...props }: any) => {
  return (
    <div className="labeled-field">
      <span className="labeled-field__label">{label}</span>
      <Field {...props} />;
    </div>
  );
};

export default LabeledField;
