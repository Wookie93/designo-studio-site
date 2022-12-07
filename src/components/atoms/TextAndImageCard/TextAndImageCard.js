import { GatsbyImage } from 'gatsby-plugin-image';
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

  .gatsby-image-wrapper {
    width: 100%;
    height: 320px;
    z-index: 1;

    ${({ theme }) => theme.mq.desktop} {
      width: 476px;
      height: unset;
    }

    img {
      width: 100%;
      ${({ theme }) => theme.mq.tablet} {
        width: auto;
      }
    }
  }
`;

const StyledTitle = styled.h2`
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
    width: 624px;
    height: 640px;
    padding: 0 96px;
    text-align: left;
  }

  p {
    margin-top: 24px;
  }
`;

const TextAndImageCard = ({ title, par1, par2, ifImgLeft, images }) => {
  return (
    <StyledTextWithImage ifImgLeft={ifImgLeft}>
      <GatsbyImage image={images} alt="about-us-image" />
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
