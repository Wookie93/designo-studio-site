import * as React from 'react';
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';
import {
  BannerWrapper,
  Content,
  StyledTitle,
  StyledLink,
} from './Banner.styles';

const Banner = ({ data }) => {
  const { bannerTitle, bannerLink, bannerImg } = data;
  const images = withArtDirection(getImage(bannerImg[0].gatsbyImageData), [
    {
      media: '(max-width: 639px)',
      image: getImage(bannerImg[1].gatsbyImageData),
    },
  ]);

  return (
    <BannerWrapper>
      <GatsbyImage
        image={images}
        alt={bannerTitle}
        style={{ gridArea: '1/1', borderRadius: '8px', width: '100%' }}
      />
      <div>
        <Content>
          <StyledTitle>{bannerTitle}</StyledTitle>
          <StyledLink to={'/' + bannerLink.slug}>View Projects</StyledLink>
        </Content>
      </div>
    </BannerWrapper>
  );
};

export default Banner;
