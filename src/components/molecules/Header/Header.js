import * as React from 'react';
import Button from '../../atoms/Button/Button';
import { StyledHeaderWrapper, StyledHeaderTextWrapper } from './Header.styles';

const Header = ({ children, title, desc, ifBtn }) => {
  const path = '../../../assets/images/main-page/desktop';

  return (
    <StyledHeaderWrapper>
      {children}
      <StyledHeaderTextWrapper>
        <h1>{title}</h1>
        <p>{desc}</p>
      </StyledHeaderTextWrapper>
      {!ifBtn ? null : <Button />}
    </StyledHeaderWrapper>
  );
};

export default Header;
