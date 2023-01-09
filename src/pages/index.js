import * as React from 'react';
import { graphql } from 'gatsby';

/// COMPONENTS
import MainHeader from '../components/atoms/MainHeader/MainHeader';
import Banners from '../components/molecules/BannersWrap/Banners';
import Features from '../components/molecules/Features/Features';
import TextAndImageCard from '../components/atoms/TextAndImageCard/TextAndImageCard';
import { StructuredText } from 'react-datocms';

const IndexPage = ({ data }) => {
  return (
    <>
      <MainHeader
        title={'Award-winning custom designs and digital branding solutions'}
        desc={
          'With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.'
        }
      />
      <StructuredText
        data={data.datoCmsIndexpage.content}
        renderBlock={({ record }) => {
          switch (record.__typename) {
            case 'DatoCmsFeaturewrap':
              return <Features data={record.featuredbox} />;
            case 'DatoCmsBannerwrap':
              return <Banners data={record.banner} />;
            case 'DatoCmsTextImgblock':
              return <TextAndImageCard title={'World-class talent'} />;
            default:
              return null;
          }
        }}
      />
      <div className="leaf-bcg main-page"></div>
      <div className="leaf-bcg main-page bottom"></div>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

export const query = graphql`
  query {
    datoCmsIndexpage {
      content {
        blocks {
          __typename
          ... on DatoCmsFeaturewrap {
            id: originalId
            featuredbox {
              id: originalId
              title
              description
              havebutton
              ico {
                alt
                gatsbyImageData
              }
            }
          }
          ... on DatoCmsBannerwrap {
            id: originalId
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
            ifgrid
          }
          ... on DatoCmsTextImgblock {
            id: originalId
          }
        }
        links
        value
      }
    }
  }
`;

console.log(query);
