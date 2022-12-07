import * as React from 'react';
import { graphql } from 'gatsby';

/// COMPONENTS
import MainHeader from '../components/atoms/MainHeader/MainHeader';
import Banners from '../components/molecules/Banners/Banners';
import Features from '../components/molecules/Features/Features';

const IndexPage = ({ data }) => {
  return (
    <>
      <MainHeader
        title={'Award-winning custom designs and digital branding solutions'}
        desc={
          'With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.'
        }
      />
      <Banners data={data.datoCmsPage.banner} />
      <Features />
      <div className="leaf-bcg main-page"></div>
      <div className="leaf-bcg main-page bottom"></div>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

export const query = graphql`
  query {
    datoCmsPage(pagetitle: { eq: "Index" }) {
      id
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
