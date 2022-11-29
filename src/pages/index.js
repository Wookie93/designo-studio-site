import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import MainHeader from '../components/atoms/MainHeader/MainHeader';
import Banners from '../components/molecules/Banners/Banners';
import Features from '../components/molecules/Features/Features';

//// https://www.gatsbyjs.com/plugins/gatsby-plugin-image

//// to do
/*

  dodać zdjęcia oraz tła 
  ostylować formularz
  komponent z grafikami miast
  style dla przycisku 
  refactor styli
  refactor komponentów

*/

const IndexPage = () => {
  return (
    <>
      <MainHeader
        title={'Award-winning custom designs and digital branding solutions'}
        desc={
          'With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.'
        }
        ifBtn={true}
        ifImage={true}
      >
        <StaticImage
          src="../assets/images/main-page/desktop/image-hero-phone.png"
          alt="hero-image"
        />
      </MainHeader>
      <Banners />
      <Features />
      <div className="leaf-bcg main-page"></div>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
