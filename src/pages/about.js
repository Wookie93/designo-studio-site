import * as React from 'react';
import Header from '../components/molecules/Header/Header';

const AboutUsPage = () => {
  return (
    <>
      <Header>
        <h1>About us</h1>
        <p>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients' audiences.
        </p>
      </Header>
      <p>AboutUsPage</p>
    </>
  );
};

export default AboutUsPage;

export const Head = () => <title>About Us</title>;
