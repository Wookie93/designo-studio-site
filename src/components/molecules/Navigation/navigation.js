import * as React from 'react';
import styled from 'styled-components';
import DesktopNavList from '../../atoms/DesktopNavList/DesktopNavList';
import Logo from '../../atoms/Logo/Logo';
import MobileNavList from '../../atoms/MobileNavList/MobileNavList';

const StyledNav = styled.nav`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  padding: 0 25px;
  top: 0;
  background-color: ${({ theme }) => theme.primaryWhite};
  z-index: 10;

  ${({ theme }) => theme.mq.tablet} {
    position: relative;
    max-width: 690px;
    height: 155px;
    padding: 0;
    margin: auto;
  }

  ${({ theme }) => theme.mq.desktop} {
    max-width: 1110px;
    margin: auto;
  }
`;

const Navigation = () => {
  return (
    <>
      <StyledNav>
        <Logo type={'dark'} />
        <DesktopNavList />
        <MobileNavList />
      </StyledNav>
    </>
  );
};

export default Navigation;
