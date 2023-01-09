import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  StyledPortfolioCard,
  StyledImageWrap,
  StyledContener,
  StyledTite,
} from './PortfolioCard.styles';

const PortfolioCard = ({ title, desc, portoflioImg }) => {
  const image = getImage(portoflioImg);
  return (
    <StyledPortfolioCard>
      <StyledImageWrap>
        <GatsbyImage image={image} alt="" />
      </StyledImageWrap>
      <StyledContener className="onHoverStyledContener">
        <StyledTite>{title}</StyledTite>
        <p>{desc}</p>
      </StyledContener>
    </StyledPortfolioCard>
  );
};

export default PortfolioCard;
