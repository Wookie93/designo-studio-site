import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Button from '../../atoms/Button/Button';
import { StyledHeaderWrapper, StyledHeaderTextWrapper } from './Header.styles';

const Header = ({ ifBtn, ifImage, children }) => {
  const path = '../../../assets/images/main-page/desktop';

  return (
    <StyledHeaderWrapper className={ifImage ? null : 'without-image'}>
      <StaticImage
        className={ifImage ? 'styled-bcg' : 'styled-bcg-without-image'}
        src={path + '/bg-pattern-hero-home.svg'}
        alt=""
      />
      <StyledHeaderTextWrapper className={ifImage ? null : 'without-image'}>
        {children}
        {ifBtn ? <Button>Learn more</Button> : null}
      </StyledHeaderTextWrapper>
      {ifImage ? (
        <StaticImage
          className="styled-image"
          src={path + '/image-hero-phone.png'}
          alt=""
        />
      ) : null}
    </StyledHeaderWrapper>
  );
};

export default Header;
