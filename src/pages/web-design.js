import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Banner from '../components/atoms/Banner/Banner';
import PortfolioCard from '../components/atoms/PortfolioCard/PortfolioCard';
import { StyledList } from '../components/atoms/StyledList/StyledList';
import Header from '../components/molecules/Header/Header';

const WebDesignPage = () => {
  return (
    <>
      <Header>
        <h1>Web Design</h1>
        <p>
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </p>
      </Header>
      <StyledList>
        <PortfolioCard
          title={'Express'}
          desc={'A multi-carrier shipping website for ecommerce businesses'}
        >
          <StaticImage
            src="../assets/images/web-design/image-express.jpg"
            alt=""
          />
        </PortfolioCard>
        <PortfolioCard
          title={'Express'}
          desc={'A multi-carrier shipping website for ecommerce businesses'}
        >
          <StaticImage
            src="../assets/images/web-design/image-express.jpg"
            alt=""
          />
        </PortfolioCard>
        <PortfolioCard
          title={'Express'}
          desc={'A multi-carrier shipping website for ecommerce businesses'}
        >
          <StaticImage
            src="../assets/images/web-design/image-express.jpg"
            alt=""
          />
        </PortfolioCard>
        <PortfolioCard
          title={'Express'}
          desc={'A multi-carrier shipping website for ecommerce businesses'}
        >
          <StaticImage
            src="../assets/images/web-design/image-express.jpg"
            alt=""
          />
        </PortfolioCard>
      </StyledList>
      <div>
        <Banner
          title={'App Design'}
          link={'/app-design'}
          mobile={'appDesignMobile'}
          desktop={'appDesign'}
        />
        <Banner
          title={'Graphic Design'}
          link={'/graphic-design'}
          mobile={'graphicDesignMobile'}
          desktop={'graphicDesign'}
        />
      </div>
    </>
  );
};

export default WebDesignPage;

export const Head = () => <title>Web Design</title>;
