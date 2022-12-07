import * as React from 'react';
import { graphql } from 'gatsby';

/// COMPONENTS
import Banner from '../components/atoms/Banner/Banner';
import PortfolioCardList from '../components/molecules/PortfolioCardList/PortfolioCardList';
import Header from '../components/molecules/Header/Header';
import { StyledWrapFlex50 } from '../components/atoms/StyledWrapFlex50/StyledWrapFlex50';

const GraphicDesignPage = ({ data }) => {
  return (
    <>
      <Header
        title={'Graphic Design'}
        desc={
          'We deliver eye-catching branding materials that are tailored to meet your business objectives.'
        }
      />
      <PortfolioCardList data={data.datoCmsPortfoliopage.portfoliocard} />
      <StyledWrapFlex50>
        {data.datoCmsPortfoliopage.banner.map((banner, index) => (
          <Banner
            title={banner.bannerTitle}
            link={'/' + banner.bannerLink.slug}
            mobile={banner.bannerImg[1]}
            desktop={banner.bannerImg[0]}
            key={index}
          />
        ))}
      </StyledWrapFlex50>
      <div className="leaf-bcg"></div>
    </>
  );
};

export default GraphicDesignPage;

export const Head = () => <title>Graphic Design</title>;

export const query = graphql`
  query {
    datoCmsPortfoliopage(pagetitle: { eq: "Graphic Design" }) {
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
          slug
        }
        bannerImg {
          gatsbyImageData
          title
        }
      }
    }
  }
`;
