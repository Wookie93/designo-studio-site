import * as React from 'react';
import {
  StyledWrapper,
  StyledContentWrapper,
  StyledFormWrapper,
  StyledFormButton,
} from './FormWrap.styles';

import { Formik } from 'formik';
import StyledFormField from '../../atoms/StyledFormField/StyledFormField';

const FormWrap = () => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Can’t be empty';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }

  function validateField(value) {
    let error;
    if (!value) {
      error = 'Can’t be empty';
    }
    return error;
  }
  function validatePhone(value) {
    let error;
    if (!value) {
      error = 'Can’t be empty';
    } else if (!/^\d+$/i.test(value)) {
      error = 'Invalid phone number';
    }
    return error;
  }

  return (
    <StyledWrapper>
      <StyledContentWrapper>
        <h2>Contact Us</h2>
        <p>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </StyledContentWrapper>

      <Formik
        initialValues={{ name: '', email: '', phone: '', msg: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, isSubmitting }) => (
          <StyledFormWrapper>
            <StyledFormField
              label="Name"
              type="text"
              name="name"
              validate={validateField}
              value={values.name}
            />
            <StyledFormField
              label="Email Address"
              type="email"
              name="email"
              validate={validateEmail}
              value={values.email}
            />
            <StyledFormField
              label="Phone"
              type="phone"
              name="phone"
              validate={validatePhone}
              value={values.phone}
            />
            <StyledFormField
              label="Your Message"
              type="text"
              name="msg"
              validate={validateField}
              value={values.msg}
            />

            <StyledFormButton type="submit" disabled={isSubmitting}>
              Submit
            </StyledFormButton>
          </StyledFormWrapper>
        )}
      </Formik>
    </StyledWrapper>
  );
};

export default FormWrap;
