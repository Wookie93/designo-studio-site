import * as React from 'react';
import { StructuredText } from 'react-datocms';
import { graphql } from 'gatsby';

/// Components
import TopBanner from '../components/molecules/TopBanner/TopBanner';
import TextAndImageCard from '../components/atoms/TextAndImageCard/TextAndImageCard';
import Features from '../components/molecules/Features/Features';

const AboutUsPage = ({ data }) => {
  const { content } = data.datoCmsAboutpage;

  return (
    <>
      <StructuredText
        data={content}
        renderBlock={({ record }) => {
          switch (record.__typename) {
            case 'DatoCmsTopbanner':
              return <TopBanner data={record} />;
            case 'DatoCmsFeaturewrap':
              return <Features data={record.featuredbox} />;
            case 'DatoCmsTextImgblock':
              return <TextAndImageCard data={record} />;
            default:
              return null;
          }
        }}
      />

      <div className="leaf-bcg main-page"></div>
    </>
  );
};

export default AboutUsPage;

export const Head = () => <title>About Us</title>;

export const query = graphql`
  query getAboutPage {
    datoCmsAboutpage {
      content {
        blocks {
          __typename
          ... on DatoCmsTopbanner {
            id: originalId
            title
            description
            images {
              alt
              gatsbyImageData
            }
          }
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
          ... on DatoCmsFeaturewrap {
            id: originalId
            featuredbox {
              title
              description
              havebutton
              ico {
                alt
                gatsbyImageData
              }
            }
          }
        }
        links
        value
      }
    }
  }
`;
