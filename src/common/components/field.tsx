import React from 'react';
import { Field } from 'formik';
import './field.scss';

const CustomField = (props: any) => <Field {...props} className="form-field" />;
export default CustomField;
