import * as React from 'react';
import styled from 'styled-components';
import Banner from '../../atoms/Banner/Banner.js';

const GridThreeImg = styled.section`
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

const Banners = ({ data }) => {
  return (
    <GridThreeImg>
      {data.map((banner, index) => (
        <Banner data={banner} key={index} />
      ))}
    </GridThreeImg>
  );
};

export default Banners;
