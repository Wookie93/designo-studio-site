import * as React from 'react';
import { graphql } from 'gatsby';
import LocationBox from '../components/atoms/LocationBox/locationBox';

const LocationsPage = ({ data }) => {
  console.log(data.datoCmsPage.locationbox);
  return (
    <>
      {data.datoCmsPage.locationbox.map((location, index) => (
        <LocationBox data={location} key={index} />
      ))}
    </>
  );
};

export default LocationsPage;

export const Head = () => <title>Locations</title>;

export const query = graphql`
  query {
    datoCmsPage(pagetitle: { eq: "Location" }) {
      locationbox {
        title
        image {
          gatsbyImageData
        }
        info1
        info2
      }
    }
  }
`;
