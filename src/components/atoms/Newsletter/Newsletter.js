import * as React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

const StyledNewsletter = styled.div`
  width: 100%;
  padding: 64px 24px;
  margin-bottom: 64px;
  color: ${({ theme }) => theme.primaryWhite};
  background-color: ${({ theme }) => theme.primaryPeach};
  border-radius: ${({ theme }) => theme.radius};

  h2 {
    ${({ theme }) => theme.mq.tablet} {
      width: 300px;
      margin: auto;
    }
  }

  p {
    margin: 10px auto 32px auto;
    ${({ theme }) => theme.mq.tablet} {
      width: 425px;
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    padding: 58px;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 63px 96px;
    text-align: left;
  }
`;

const Newsletter = () => {
  return (
    <StyledNewsletter>
      <div>
        <h2>Let’s talk about your project</h2>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <Button>get in touch</Button>
    </StyledNewsletter>
  );
};

export default Newsletter;
