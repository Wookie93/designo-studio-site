import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const Wrapper = styled.div`
  .mobile-only {
    ${({ theme }) => theme.mq.tablet} {
      display: none;
    }
  }

  .desktop-only {
    display: none;
    ${({ theme }) => theme.mq.tablet} {
      display: block;
    }
  }
`;

const BannerImage = ({ mobile, desktop }) => {
  const imageMobile = getImage(mobile.gatsbyImageData);
  const imageDesktop = getImage(desktop.gatsbyImageData);

  return (
    <Wrapper>
      <GatsbyImage
        style={{ gridArea: '1/1', borderRadius: '8px' }}
        className="mobile-only"
        image={imageMobile}
        alt={mobile.title + '-image'}
      />
      <GatsbyImage
        style={{ gridArea: '1/1', borderRadius: '8px', width: '100%' }}
        className="desktop-only"
        image={imageDesktop}
        alt={desktop.title + '-image'}
      />
    </Wrapper>
  );
};

export default BannerImage;
