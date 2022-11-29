import * as React from 'react';
import { StyledList } from '../../atoms/StyledList/StyledList';
import PortfolioCard from '../../atoms/PortfolioCard/PortfolioCard';

const PortfolioCardList = ({ data = [] }) => {
  return (
    <StyledList>
      {data.map((el) => (
        <PortfolioCard
          key={el.originalId}
          title={el.portfoliotitle}
          desc={el.portfoliodescription}
          portoflioImg={el.portoflioimage}
        />
      ))}
    </StyledList>
  );
};

export default PortfolioCardList;
