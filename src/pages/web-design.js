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

export const Head = () => <title>Web Design</title>;
