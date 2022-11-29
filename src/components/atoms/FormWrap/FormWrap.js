import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  StyledWrapper,
  StyledContentWrapper,
  StyledFormWrapper,
} from './FormWrap.styles';

import StyledInput from '../StyledInput/StyledInput';

const FormWrap = () => {
  const submitForm = (e) => {
    e.preventDefault();

    validateInputs();
  };

  const validateInputs = () => {};

  return (
    <StyledWrapper>
      <StaticImage
        src="../assets/bcgs/desktop/bg-pattern-hero-home.svg"
        alt=""
      />
      <StyledContentWrapper>
        <h2>Contact Us</h2>
        <p>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </StyledContentWrapper>
      <StyledFormWrapper>
        <StyledInput label="Name" name="name" />
        <StyledInput label="Email Address" name="email" />
        <StyledInput label="Phone" name="phone" />
        <StyledInput label="Your Message" name="msg" />
        <button type="submit" onClick={submitForm}>
          Submit
        </button>
      </StyledFormWrapper>
    </StyledWrapper>
  );
};

export default FormWrap;
