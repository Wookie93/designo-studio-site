import * as React from 'react';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
/// Styles
import { StyledHeroWrapper, StyledTextWrapper } from './HeroBanner.styles';

/// Components
import Button from '../Button/Button';

const HeroBanner = ({ data }) => {
  const { title, description, buttontext, buttonlink, image } = data[0];
  return (
    <StyledHeroWrapper>
      <StyledTextWrapper>
        <h1>{title}</h1>
        <p>{description}</p>
        <Button to={buttonlink}>{buttontext}</Button>
      </StyledTextWrapper>
      <GatsbyImage image={getImage(image.gatsbyImageData)} alt={image.alt} />
      <StaticImage
        src="../../../assets/bcgs/desktop/bg-pattern-hero-home.svg"
        alt=""
        className="bcg"
      />
    </StyledHeroWrapper>
  );
};

export default HeroBanner;
