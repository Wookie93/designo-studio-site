import * as React from 'react';
import styled from 'styled-components';
import Banner from '../../atoms/Banner/Banner.js';

const ImageWithTextSection = styled.section`
  display: grid;
  margin-bottom: 120px;
  row-gap: 24px;

  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 30px;
    row-gap: 0;
  }
`;

const Banners = () => {
  return (
    <ImageWithTextSection>
      <Banner
        title={'Web Design'}
        link={'/web-design'}
        mobile={'webDesignMobile'}
        desktop={'webDesign'}
      />
      <Banner
        title={'App Design'}
        link={'/app-design'}
        mobile={'appDesignMobile'}
        desktop={'appDesign'}
      />
      <Banner
        title={'Graphic Design'}
        link={'/graphic-desing'}
        mobile={'graphicDesignMobile'}
        desktop={'graphicDesign'}
      />
    </ImageWithTextSection>
  );
};

export default Banners;
