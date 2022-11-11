import * as React from 'react';
import styled from 'styled-components';
import DesktopNavList from '../../atoms/DesktopNavList/DesktopNavList';
import Logo from '../../atoms/Logo/Logo';
import MobileNavList from '../../atoms/MobileNavList/MobileNavList';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  height: 96px;
  background-color: ${({ theme }) => theme.primaryWhite};

  ${({ theme }) => theme.mq.tablet} {
    max-width: calc(690px + 50px);
    margin: auto;
  }

  ${({ theme }) => theme.mq.desktop} {
    max-width: calc(1110px + 50px);
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
