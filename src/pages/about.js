import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Header from '../components/molecules/Header/Header';
import Features from '../components/molecules/Features/Features.js';
import TextAndImageCard from '../components/atoms/TextCard/TextCard';

const AboutUsPage = () => {
  return (
    <>
      <Header
        title={'About us'}
        desc={
          "Founded in 2010, we are a creative agency that produces lasting results for ourd clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences."
        }
      >
        <StaticImage
          src="../assets/images/about/mobile/image-about-hero.jpg"
          alt=""
        />
      </Header>

      <TextAndImageCard
        title={'World-class talent'}
        par1={
          'We are a crew of strategists, problem-solvers, and technologists.Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.'
        }
        par2={
          'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.'
        }
        ifImgLeft={false}
      ></TextAndImageCard>

      <Features />

      <TextAndImageCard
        title={'World-class talent'}
        par1={
          'We are a crew of strategists, problem-solvers, and technologists.Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.'
        }
        par2={
          'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.'
        }
        ifImgLeft={true}
      ></TextAndImageCard>
    </>
  );
};

export default AboutUsPage;

export const Head = () => <title>About Us</title>;
