import * as React from 'react';
import { graphql } from 'gatsby';
import { StructuredText } from 'react-datocms';

/// COMPONENTS
import HeroBanner from '../components/atoms/HeroBanner/HeroBanner';
import Features from '../components/molecules/Features/Features';
import TextAndImageCard from '../components/atoms/TextAndImageCard/TextAndImageCard';
import BannersWrap from '../components/molecules/BannersWrap/BannersWrap';

const IndexPage = ({ data }) => {
  const { mainbanner, content } = data.datoCmsIndexpage;

  console.log(mainbanner);
  return (
    <>
      <HeroBanner data={mainbanner} />
      <StructuredText
        data={content}
        renderBlock={({ record }) => {
          switch (record.__typename) {
            case 'DatoCmsFeaturewrap':
              return <Features data={record.featuredbox} />;
            case 'DatoCmsBannerwrap':
              return <BannersWrap data={record} />;
            case 'DatoCmsTextImgblock':
              return <TextAndImageCard data={record} />;
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
      mainbanner {
        title
        description
        buttontext
        buttonlink
        image {
          gatsbyImageData
          alt
        }
      }
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
