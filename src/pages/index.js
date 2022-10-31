import * as React from 'react';
import Banners from '../components/molecules/Banners/Banners';
import Features from '../components/molecules/Features/Features';
import Header from '../components/molecules/Header/Header';

const IndexPage = () => {
  return (
    <>
      <Header />
      <Banners />
      <Features />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
