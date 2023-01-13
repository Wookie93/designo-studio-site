import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';
import * as React from 'react';
import {
  StyledMapWrapper,
  StyledInfoWrapper,
  StyledInfo,
} from './locationBox.styles';

const LocationBox = ({ data }) => {
  const images = withArtDirection(getImage(data.locationimage[0]), [
    {
      media: '(max-width: 1024px)',
      image: getImage(data.locationimage[1]),
    },
  ]);

  return (
    <StyledMapWrapper>
      <GatsbyImage image={images} alt="" />
      <StyledInfoWrapper>
        <StyledInfo>
          <h2 className="map-title">{data.title}</h2>
          <div className="info">{data.info1}</div>
          <div className="info">{data.info2}</div>
        </StyledInfo>
      </StyledInfoWrapper>
    </StyledMapWrapper>
  );
};

export default LocationBox;
