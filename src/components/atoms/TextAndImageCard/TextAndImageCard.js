import * as React from 'react';
import styled from 'styled-components';

const StyledTextWithImage = styled.div`
  width: 100vw;
  margin-bottom: 120px;
  margin-left: -25px;
  z-index: 1;

  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
    margin-left: 0;
    border-radius: 15px;
    overflow: hidden;
  }
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: ${({ ifImgLeft }) => (!ifImgLeft ? 'row' : 'row-reverse')};
  }
`;
const StyledImage = styled.div`
  width: 100%;
  max-width: 375px;
  height: 350px;
  background-color: lightgrey;
  z-index: 1;

  ${({ theme }) => theme.mq.tablet} {
    max-width: 690px;
  }
  ${({ theme }) => theme.mq.desktop} {
    max-width: 476px;
    width: 476px;
    height: 640px;
    flex-shrink: 0;
  }
`;

const StyledTitle = styled.h2`
  font-size: 32px;
  line-height: 36px;
  color: ${({ theme }) => theme.primaryPeach};
  z-index: 1;
`;

const StyledWrapper = styled.div`
  padding: 80px 24px;
  background-color: ${({ theme }) => theme.secondaryLigthPeach};
  text-align: center;
  z-index: 1;
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    align-items: center;
    height: 640px;
    padding: 0 96px;
    text-align: left;
  }

  p {
    font-size: 15px;
    margin-top: 24px;
  }
`;

const TextAndImageCard = ({ children, title, par1, par2, ifImgLeft }) => {
  return (
    <StyledTextWithImage ifImgLeft={ifImgLeft}>
      {children}
      <StyledImage />
      <StyledWrapper>
        <div>
          <StyledTitle>{title}</StyledTitle>
          <p>{par1}</p>
          <p>{par2}</p>
        </div>
      </StyledWrapper>
    </StyledTextWithImage>
  );
};

export default TextAndImageCard;
