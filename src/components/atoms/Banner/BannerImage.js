import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

//// src set ???

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
  const data = useStaticQuery(graphql`
    query {
      appDesign: file(
        relativePath: { eq: "main-page/desktop/image-app-design.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      appDesignMobile: file(
        relativePath: { eq: "main-page/mobile/image-app-design.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      webDesignMobile: file(
        relativePath: { eq: "main-page/mobile/image-web-design.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      webDesign: file(
        relativePath: { eq: "main-page/desktop/image-web-design-large.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      graphicDesignMobile: file(
        relativePath: { eq: "main-page/mobile/image-graphic-design.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      graphicDesign: file(
        relativePath: { eq: "main-page/desktop/image-graphic-design.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  const imageMobile = data[mobile].childImageSharp.gatsbyImageData;
  const imageDesktop = data[desktop].childImageSharp.gatsbyImageData;

  return (
    <Wrapper>
      <GatsbyImage
        style={{ gridArea: '1/1', borderRadius: '8px' }}
        className="mobile-only"
        image={imageMobile}
        alt=""
      />
      {/* <GatsbyImage
        style={{ gridArea: '1/1', borderRadius: '8px', width: '100%' }}
        className="tablet-only"
        image={imageTablet}
        alt=""
      /> */}
      <GatsbyImage
        style={{ gridArea: '1/1', borderRadius: '8px', width: '100%' }}
        className="desktop-only"
        image={imageDesktop}
        alt=""
      />
    </Wrapper>
  );
};

export default BannerImage;
