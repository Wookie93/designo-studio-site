import * as React from 'react';
import { graphql } from 'gatsby';

/// COMPONENTS
import Banner from '../components/atoms/Banner/Banner';
import PortfolioCardList from '../components/molecules/PortfolioCardList/PortfolioCardList';
import Header from '../components/molecules/Header/Header';
import { StyledWrapFlex50 } from '../components/atoms/StyledWrapFlex50/StyledWrapFlex50';

const WebDesignPage = ({ data }) => {
  return (
    <>
      <Header
        title={'Web Design'}
        desc={
          'We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
        }
      />
      <PortfolioCardList data={data.datoCmsPortfoliopage.portfoliocard} />
      <StyledWrapFlex50>
        <Banner
          title={'App Design'}
          link={'/app-design'}
          mobile={'appDesignMobile'}
          desktop={'appDesign'}
        />
        <Banner
          title={'Graphic Design'}
          link={'/graphic-design'}
          mobile={'graphicDesignMobile'}
          desktop={'graphicDesign'}
        />
      </StyledWrapFlex50>
      <div className="leaf-bcg"></div>
    </>
  );
};

export default WebDesignPage;

export const query = graphql`
  query {
    datoCmsPortfoliopage(pagetitle: { eq: "Web Design" }) {
      portfoliocard {
        originalId
        portfoliotitle
        portfoliodescription
        portoflioimage {
          gatsbyImageData
        }
      }
      banner {
        bannerTitle
        bannerLink {
          id
        }
        bannerImg {
          gatsbyImageData
          title
        }
      }
    }
  }
`;

// export const query = graphql`
//   query {
//     imageExpress: file(relativePath: { eq: "web-design/image-express.jpg" }) {
//       childImageSharp {
//         gatsbyImageData
//       }
//     }
//     imageTransfer: file(relativePath: { eq: "web-design/image-transfer.jpg" }) {
//       childImageSharp {
//         gatsbyImageData
//       }
//     }
//     imagePhoton: file(relativePath: { eq: "web-design/image-photon.jpg" }) {
//       childImageSharp {
//         gatsbyImageData
//       }
//     }
//     imageBuilder: file(relativePath: { eq: "web-design/image-builder.jpg" }) {
//       childImageSharp {
//         gatsbyImageData
//       }
//     }
//     imageBlogr: file(relativePath: { eq: "web-design/image-blogr.jpg" }) {
//       childImageSharp {
//         gatsbyImageData
//       }
//     }
//     imageCamp: file(relativePath: { eq: "web-design/image-camp.jpg" }) {
//       childImageSharp {
//         gatsbyImageData
//       }
//     }
//   }
// `;

export const Head = () => <title>Web Design</title>;
