import * as React from 'react';
import Banners from '../components/molecules/Banners/Banners';
import Features from '../components/molecules/Features/Features';
import Header from '../components/molecules/Header/Header';

//// https://www.gatsbyjs.com/plugins/gatsby-plugin-image

const IndexPage = () => {
  return (
    <>
      <Header ifBtn={true} ifImage={true}>
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
      </Header>
      <Banners />
      <Features />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
