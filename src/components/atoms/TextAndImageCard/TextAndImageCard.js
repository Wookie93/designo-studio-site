import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

/// Styles
import {
  StyledTextWithImage,
  StyledWrapper,
  StyledTitle,
} from './TextAndImageCard.styles';

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
