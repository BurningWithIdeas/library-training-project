import React from 'react';
import { Field } from 'formik';
import styled from 'styled-components';
import './field.scss';

const StyledField = styled(Field)`
  height: 40px;
  width: 90%;
  padding: 0 10px;
  font-size: 1.4rem;
`;

const CustomField = (props: any) => <StyledField {...props} />;
export default CustomField;
