import * as React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

const StyledNewsletter = styled.div`
  position: relative;
  width: 100%;
  padding: 64px 24px;
  margin-bottom: 64px;
  color: ${({ theme }) => theme.primaryWhite};
  background-color: ${({ theme }) => theme.primaryPeach};
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;

  h2 {
    ${({ theme }) => theme.mq.tablet} {
      font-size: 40px;
      line-height: 40px;
      width: 300px;
      margin: auto;
    }
    ${({ theme }) => theme.mq.desktop} {
      margin: unset;
      margin-bottom: 14px;
    }
  }

  p {
    margin: 10px auto 32px auto;
    color: ${({ theme }) => theme.primaryWhite};
    ${({ theme }) => theme.mq.tablet} {
      margin: 13px auto 32px auto;
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

const StyledContent = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  z-index: 1;
`;

const Newsletter = () => {
  return (
    <StyledNewsletter>
      <StyledContent>
        <div>
          <h2>Let’s talk about your project</h2>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <Button>get in touch</Button>
      </StyledContent>
    </StyledNewsletter>
  );
};

export default Newsletter;
