import * as React from 'react';
import { StyledFieldWrap } from './StyledFormField.styles';
import { Field, ErrorMessage } from 'formik';

const StyledFormField = ({ label, name, type, validate, value }) => {
  function showValue(e) {
    const nameAttr = e.target.getAttribute('name');
    const label = document.querySelector(`label[for=${nameAttr}]`);
    label.classList.remove('hide');
    e.target.classList.remove('filled');

    if (value) {
      label.classList.add('hide');
      e.target.classList.add('filled');
    }
  }

  return (
    <StyledFieldWrap onBlur={showValue}>
      <Field name={name} type={type} validate={validate} />
      <label htmlFor={name}>{label}</label>
      <ErrorMessage name={name} component="div" className="error-msg" />
    </StyledFieldWrap>
  );
};

export default StyledFormField;
