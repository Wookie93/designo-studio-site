import * as React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

const StyledHeaderWrapper = styled.section`
  background-color: ${({ theme }) => theme.primaryPeach};
  padding: 80px 25px 0 25px;

  ${({ theme }) => theme.mq.tablet} {
    border-radius: ${({ theme }) => theme.radius};
  }

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 95px;
  }

  .image {
    height: 370px;
    width: 275px;
    background-color: gray;
    margin: auto;
  }
`;

const StyledHeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 310px;
  color: ${({ theme }) => theme.primaryWhite};
  text-align: center;
  margin-bottom: 80px;

  h1 {
    ${({ theme }) => theme.mq.tablet} {
      width: 50%;
    }
  }

  p {
    width: 95%;
    ${({ theme }) => theme.mq.tablet} {
      width: 65%;
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    height: 325px;
  }

  ${({ theme }) => theme.mq.desktop} {
    height: 350px;
    text-align: left;
    margin: 0;
    padding: 0;
  }
`;

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledHeaderTextWrapper>
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Button>Learn more</Button>
      </StyledHeaderTextWrapper>
      <div className="image"></div>
    </StyledHeaderWrapper>
  );
};

export default Header;
