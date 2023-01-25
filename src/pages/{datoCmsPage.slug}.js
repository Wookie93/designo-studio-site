import * as React from 'react';
import { graphql } from 'gatsby';
import { StructuredText } from 'react-datocms';

/// Components
import TextAndImageCard from '../components/atoms/TextAndImageCard/TextAndImageCard';
import BannersWrap from '../components/molecules/BannersWrap/BannersWrap';
import LocationBox from '../components/atoms/LocationBox/locationBox';
import TopBanner from '../components/molecules/TopBanner/TopBanner';
import Features from '../components/molecules/Features/Features';
import { ImageBox } from '../components/atoms/ImageBox/ImageBox';

const Page = ({ data }) => {
  const { content } = data.datoCmsPage;

  return (
    <StructuredText
      data={content}
      renderBlock={({ record }) => {
        switch (record.__typename) {
          case 'DatoCmsTextImgblock':
            return <TextAndImageCard data={record} />;
          case 'DatoCmsImage':
            return <ImageBox data={record} />;
          case 'DatoCmsBannerwrap':
            return <BannersWrap data={record} />;
          case 'DatoCmsLocationbox':
            return <LocationBox data={record} />;
          case 'DatoCmsTopbanner':
            return <TopBanner data={record} />;
          case 'DatoCmsFeaturewrap':
            return <Features data={record.featuredbox} />;
          default:
            return null;
        }
      }}
    />
  );
};

export const query = graphql`
  query getPage {
    datoCmsPage {
      pagetitle
      content {
        links
        value
        blocks {
          __typename
          ... on DatoCmsLocationbox {
            id: originalId
            title
            info1
            info2
            locationimage: image {
              gatsbyImageData
            }
          }
          ... on DatoCmsTextImgblock {
            id: originalId
            title
            descriptionn {
              value
            }
            ifimageleft
            imageblock: image {
              gatsbyImageData
            }
          }
          ... on DatoCmsImage {
            id: originalId
            image {
              alt
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
          ... on DatoCmsFeaturewrap {
            id: originalId
            featuredbox {
              title
              description
              ico {
                gatsbyImageData
              }
              havebutton
            }
          }
          ... on DatoCmsBannerwrap {
            id: originalId
            ifgrid
            banner {
              bannerTitle
              bannerLink {
                slug
              }
              bannerImg {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;

export default Page;
