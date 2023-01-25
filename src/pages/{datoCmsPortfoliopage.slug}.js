import * as React from 'react';
import { graphql } from 'gatsby';
import { StructuredText } from 'react-datocms';

/// COMPONENTS
import PortfolioCardList from '../components/molecules/PortfolioCardList/PortfolioCardList';
import TopBanner from '../components/molecules/TopBanner/TopBanner';
import TextAndImageCard from '../components/atoms/TextAndImageCard/TextAndImageCard';
import BannersWrap from '../components/molecules/BannersWrap/BannersWrap';

const PortfolioPage = ({ data }) => {
  const { topcontent, portfoliocard, bottomcontent } =
    data.datoCmsPortfoliopage;
  return (
    <>
      <StructuredText
        className="top-content"
        data={topcontent}
        renderBlock={({ record }) => {
          switch (record.__typename) {
            case 'DatoCmsTextImgblock':
              return <TextAndImageCard data={record} />;
            case 'DatoCmsImage':
              return <p>image</p>;
            case 'DatoCmsTopbanner':
              return <TopBanner data={record} />;
            default:
              return null;
          }
        }}
      />
      <PortfolioCardList data={portfoliocard} />

      <StructuredText
        className="bottom-content"
        data={bottomcontent}
        renderBlock={({ record }) => {
          switch (record.__typename) {
            case 'DatoCmsTextImgblock':
              return <TextAndImageCard data={record} />;
            case 'DatoCmsImage':
              return <p>image</p>;
            case 'DatoCmsBannerwrap':
              return <BannersWrap data={record} />;
            default:
              return null;
          }
        }}
      />

      <div className="leaf-bcg"></div>
    </>
  );
};

export default PortfolioPage;

export const Head = ({ data }) => {
  const { pagetitle } = data.datoCmsPortfoliopage;

  return <title>{pagetitle}</title>;
};

export const query = graphql`
  query getPortfolioPage {
    datoCmsPortfoliopage {
      slug
      pagetitle
      topcontent {
        blocks {
          __typename
          ... on DatoCmsTextImgblock {
            id: originalId
            title
            descriptionn {
              value
            }
            imageblock: image {
              alt
              gatsbyImageData
            }
            ifimageleft
          }
          ... on DatoCmsImage {
            id: originalId
            singleImg: image {
              gatsbyImageData
            }
          }
          ... on DatoCmsTopbanner {
            id: originalId
            title
            description
            images {
              gatsbyImageData
            }
          }
        }
        links
        value
      }
      portfoliocard {
        portfoliotitle
        portfoliodescription
        portoflioimage {
          alt
          gatsbyImageData
        }
      }
      bottomcontent {
        blocks {
          __typename
          ... on DatoCmsTextImgblock {
            id: originalId
            title
            descriptionn {
              value
            }
            imageblock: image {
              alt
              gatsbyImageData
            }
            ifimageleft
          }
          ... on DatoCmsImage {
            id: originalId
            image {
              gatsbyImageData
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
              }
            }
            ifgrid
          }
        }
        links
        value
      }
    }
  }
`;
