import * as React from 'react';
import {
  GatsbyImage,
  getImage,
  StaticImage,
  withArtDirection,
} from 'gatsby-plugin-image';
import {
  StyledHeaderWrapper,
  StyledHeaderTextWrapper,
} from './TopBanner..styles';

const TopBanner = ({ data }) => {
  const { title, description, images } = data;
  let imageToShow = null;

  if (images.length > 0) {
    imageToShow = withArtDirection(getImage(images[2].gatsbyImageData), [
      {
        media: '(max-width: 476px)',
        image: getImage(images[0].gatsbyImageData),
      },
      {
        media: '(max-width: 1024px)',
        image: getImage(images[1].gatsbyImageData),
      },
    ]);
  }

  return (
    <StyledHeaderWrapper>
      <StyledHeaderTextWrapper>
        <h1>{title}</h1>
        <p>{description}</p>
      </StyledHeaderTextWrapper>
      <div className="image-wrap">
        {images.length > 0 ? (
          <GatsbyImage image={imageToShow} alt="our-company" />
        ) : null}
      </div>

      <StaticImage
        className="bcg"
        src="../../../assets/bcgs/desktop/bg-pattern-intro-web.svg"
        alt=""
        width={876}
      />
    </StyledHeaderWrapper>
  );
};

export default TopBanner;
