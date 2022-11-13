import * as React from 'react';
import styled from 'styled-components';
import Button from '../components/atoms/Button/Button.js';
import Features from '../components/molecules/Features/Features.js';

const StyledWrapper = styled.div`
  padding: 72px 24px;
  margin-bottom: 120px;
  background-color: ${({ theme }) => theme.primaryPeach};
  color: ${({ theme }) => theme.primaryWhite};
  border-radius: ${({ theme }) => theme.radius};

  ${({ theme }) => theme.mq.tablet} {
    padding: 72px 58px;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 95px;
    align-items: center;
    padding: 55px 95px;
    margin-bottom: 160px;
  }
`;

const StyledContentWrapper = styled.div`
  text-align: center;
  ${({ theme }) => theme.mq.desktop} {
    text-align: left;
  }
  p {
    margin-top: 24px;
    color: ${({ theme }) => theme.primaryWhite};
  }
`;

const StyledFormWrapper = styled.form`
  margin-top: 48px;
  text-align: center;

  ${({ theme }) => theme.mq.tablet} {
    text-align: right;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    text-align: left;
  }

  label {
    margin: 0 0 10px 15px;
    font-size: 15px;
    opacity: 0.5;
  }

  input {
    padding: 0 0 5px 15px;
    color: ${({ theme }) => theme.primaryWhite};
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.primaryWhite};
    background-color: transparent;
  }
`;

const ContactPage = () => {
  return (
    <>
      <StyledWrapper>
        <StyledContentWrapper>
          <h2>Contact Us</h2>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </StyledContentWrapper>
        <StyledFormWrapper>
          <div>
            <label>Name</label>
            <input></input>
          </div>
          <div>
            <label>Email Address</label>
            <input></input>
          </div>
          <div>
            <label>Phone</label>
            <input></input>
          </div>
          <div>
            <label>Your Message</label>
            <input></input>
          </div>
          <Button>Submit</Button>
        </StyledFormWrapper>
      </StyledWrapper>
      <Features />
    </>
  );
};

export default ContactPage;

export const Head = () => <title>Contact Page</title>;
