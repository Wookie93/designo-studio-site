import * as React from 'react';
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';
import { StructuredText } from 'react-datocms';

/// Styles
import {
  StyledTextWithImage,
  StyledWrapper,
  StyledTitle,
} from './TextAndImageCard.styles';

const TextAndImageCard = ({ data }) => {
  const { title, descriptionn, ifimageleft, imageblock } = data;

  const images = withArtDirection(getImage(imageblock[2].gatsbyImageData), [
    {
      media: '(max-width: 476px)',
      image: getImage(imageblock[0].gatsbyImageData),
    },
    {
      media: '(max-width: 1024px)',
      image: getImage(imageblock[1].gatsbyImageData),
    },
  ]);

  return (
    <StyledTextWithImage ifImgLeft={ifimageleft}>
      <GatsbyImage image={images} alt="about-us-image" />
      <StyledWrapper>
        <div>
          <StyledTitle>{title}</StyledTitle>
          <StructuredText data={descriptionn} />
        </div>
      </StyledWrapper>
    </StyledTextWithImage>
  );
};

export default TextAndImageCard;
