import * as React from 'react';

/// Styles
import { BannerWrap } from './BannersWrap.styles.js';

/// Components
import Banner from '../../atoms/Banner/Banner.js';

const BannersWrap = ({ data }) => {
  const { banner, ifgrid } = data;
  return (
    <BannerWrap ifGrid={ifgrid}>
      {banner.map((ban, index) => (
        <Banner data={ban} key={index} />
      ))}
    </BannerWrap>
  );
};

export default BannersWrap;
