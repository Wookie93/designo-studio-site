import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const ImageBox = ({ data }) => {
  const { alt, gatsbyImageData } = data.image;
  const images = getImage(gatsbyImageData);

  return (
    <section>
      <GatsbyImage image={images} alt={alt} />
    </section>
  );
};
