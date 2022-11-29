import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { StyledHeaderWrapper, StyledHeaderTextWrapper } from './Header.styles';

const Header = ({ children, title, desc, ifImage = false, ifBcg = true }) => {
  return (
    <StyledHeaderWrapper ifImage={ifImage}>
      {children}
      <StyledHeaderTextWrapper ifImage={ifImage}>
        <h1>{title}</h1>
        <p>{desc}</p>
      </StyledHeaderTextWrapper>
      {ifBcg ? (
        <StaticImage
          className="bcg"
          src="../../../assets/bcgs/desktop/bg-pattern-intro-web.svg"
          alt=""
          width={876}
        />
      ) : null}
    </StyledHeaderWrapper>
  );
};

export default Header;
