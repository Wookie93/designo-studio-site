import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';
import * as React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/molecules/Header/Header';
import TextAndImageCard from '../components/atoms/TextAndImageCard/TextAndImageCard';
import Cities from '../components/atoms/Cities/Cities';

const AboutUsPage = ({ data }) => {
  const heroImages = withArtDirection(getImage(data.aboutHero.edges[0].node), [
    {
      media: '(max-width: 476px)',
      image: getImage(data.aboutHeroMobile.edges[0].node),
    },
    {
      media: '(max-width: 1024px)',
      image: getImage(data.aboutHeroTablet.edges[0].node),
    },
  ]);

  const worldClassImages = withArtDirection(
    getImage(data.worldClassTalent.edges[0].node),
    [
      {
        media: '(max-width: 476px)',
        image: getImage(data.worldClassTalentMobile.edges[0].node),
      },
      {
        media: '(max-width: 1024px)',
        image: getImage(data.worldClassTalentTablet.edges[0].node),
      },
    ]
  );

  const realDealImages = withArtDirection(
    getImage(data.realDeal.edges[0].node),
    [
      {
        media: '(max-width: 476px)',
        image: getImage(data.realDealMobile.edges[0].node),
      },
      {
        media: '(max-width: 1024px)',
        image: getImage(data.realDealTablet.edges[0].node),
      },
    ]
  );

  return (
    <>
      <Header
        title={'About us'}
        desc={
          "Founded in 2010, we are a creative agency that produces lasting results for ourd clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences."
        }
        ifImage={true}
        ifBcg={false}
      >
        <GatsbyImage image={heroImages} alt="hero-image" />
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
        images={worldClassImages}
      />

      <TextAndImageCard
        title={'The real deal'}
        par1={
          'As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.'
        }
        par2={
          'We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.'
        }
        ifImgLeft={true}
        images={realDealImages}
      />
      <div className="leaf-bcg main-page"></div>
    </>
  );
};

export default AboutUsPage;

export const Head = () => <title>About Us</title>;
export const query = graphql`
  query {
    aboutHero: allDatoCmsAsset(filter: { notes: { eq: "about-hero" } }) {
      edges {
        node {
          gatsbyImageData
        }
      }
    }
    aboutHeroTablet: allDatoCmsAsset(
      filter: { notes: { eq: "about-hero-tablet" } }
    ) {
      edges {
        node {
          gatsbyImageData
        }
      }
    }
    aboutHeroMobile: allDatoCmsAsset(
      filter: { notes: { eq: "about-hero-mobile" } }
    ) {
      edges {
        node {
          gatsbyImageData
        }
      }
    }
    worldClassTalent: allDatoCmsAsset(
      filter: { notes: { eq: "world-class-talent" } }
    ) {
      edges {
        node {
          gatsbyImageData
        }
      }
    }
    worldClassTalentTablet: allDatoCmsAsset(
      filter: { notes: { eq: "world-class-talent-tablet" } }
    ) {
      edges {
        node {
          gatsbyImageData
        }
      }
    }
    worldClassTalentMobile: allDatoCmsAsset(
      filter: { notes: { eq: "world-class-talent-mobile" } }
    ) {
      edges {
        node {
          gatsbyImageData
        }
      }
    }
    realDeal: allDatoCmsAsset(filter: { notes: { eq: "real-deal" } }) {
      edges {
        node {
          gatsbyImageData
        }
      }
    }
    realDealTablet: allDatoCmsAsset(
      filter: { notes: { eq: "real-deal-tablet" } }
    ) {
      edges {
        node {
          gatsbyImageData
        }
      }
    }
    realDealMobile: allDatoCmsAsset(
      filter: { notes: { eq: "real-deal-mobile" } }
    ) {
      edges {
        node {
          gatsbyImageData
        }
      }
    }
  }
`;
