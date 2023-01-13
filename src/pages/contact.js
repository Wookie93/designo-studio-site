import * as React from 'react';
import { graphql } from 'gatsby';

/// COMPONENTS
import FormWrap from '../components/atoms/FormWrap/FormWrap.js';
import Features from '../components/molecules/Features/Features.js';

const ContactPage = ({ data }) => {
  const { featureswrap } = data.datoCmsContactpage;

  return (
    <>
      <FormWrap />
      <Features data={featureswrap[0].featuredbox} />
      <div className="leaf-bcg contact-page"></div>
    </>
  );
};

export default ContactPage;

export const Head = () => <title>Contact Page</title>;

export const query = graphql`
  query getContactPage {
    datoCmsContactpage {
      featureswrap {
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
    }
  }
`;
