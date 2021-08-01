import React from "react";
import { Field } from "formik";
import "./field.scss";

const CustomField = ({ name, type = "input", ...props }: any) => {
  return <Field {...props} className="form-field" name={name} type={type} />;
};

export default CustomField;
