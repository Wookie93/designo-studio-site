import * as React from 'react';
import styled from 'styled-components';

const StyledPortfolioCard = styled.div`
  width: 327px;
  margin: auto;
  overflow: hidden;

  ${({ theme }) => theme.mq.btwMobileDesktop} {
    display: flex;
    width: 100%;
    height: 310px;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 350px;
  }
`;

const StyledImageWrap = styled.div`
  min-height: 320px;
  .gatsby-image-wrapper {
    min-height: 320px;
    border-radius: 16px 16px 0 0;
  }
`;

const StyledContener = styled.div`
  background-color: ${({ theme }) => theme.secondaryLigthPeach};
  padding: 32px;
  text-align: center;
  border-radius: 0 0 16px 16px;

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 41px;
    border-radius: 0 16px 16px 0;
  }
`;

const StyledTitle = styled.p`
  font-size: 20px;
  line-height: 26px;
  color: ${({ theme }) => theme.primaryPeach};
  margin: 0 0 16px 0;
  text-transform: uppercase;
  letter-spacing: 5px;
`;

const PortfolioCard = ({ children, title, desc }) => {
  return (
    <StyledPortfolioCard>
      <StyledImageWrap>{children}</StyledImageWrap>
      <StyledContener>
        <StyledTitle>{title}</StyledTitle>
        <p>{desc}</p>
      </StyledContener>
    </StyledPortfolioCard>
  );
};

export default PortfolioCard;
