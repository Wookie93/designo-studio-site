import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { IconSection, StyledIconWrap } from './Features.styles';
import Button from '../../atoms/Button/Button';

const Features = ({ data }) => {
  return (
    <IconSection>
      {data.map((feature, index) => (
        <StyledIconWrap key={index} haveBtn={feature.havebutton}>
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
          {feature.havebutton ? (
            <Button to="/contact" issecondary>
              See location
            </Button>
          ) : null}
        </StyledIconWrap>
      ))}
    </IconSection>
  );
};

export default Features;
