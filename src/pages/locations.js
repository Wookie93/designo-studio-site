import * as React from 'react';
import { graphql } from 'gatsby';
import LocationBox from '../components/atoms/LocationBox/locationBox';

const LocationsPage = ({ data }) => {
  const { locationbox } = data.datoCmsLocationpage;

  return (
    <>
      {locationbox.map((location, index) => (
        <LocationBox data={location} key={index} />
      ))}
    </>
  );
};

export default LocationsPage;

export const Head = () => <title>Locations</title>;

export const query = graphql`
  query {
    datoCmsLocationpage {
      locationbox {
        title
        locationimage: image {
          gatsbyImageData
        }
        info1
        info2
      }
    }
  }
`;
