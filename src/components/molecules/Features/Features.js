import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { IconSection, StyledIconWrap } from './Features.styles';

const Features = ({ data }) => {
  return (
    <IconSection>
      {data.map((feature) => (
        <StyledIconWrap key={feature.id}>
          <div className="ico-wrapper">
            <div className="ico"></div>
            <GatsbyImage
              image={getImage(feature.ico.gatsbyImageData)}
              alt={feature.ico.alt}
            />
          </div>
          <div className="textWrapper">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </StyledIconWrap>
      ))}
    </IconSection>
  );
};

export default Features;
