import * as React from 'react';
import styled from 'styled-components';
import { theme } from '../../../assets/styles/theme';
import DesktopNavList from '../../atoms/DesktopNavList/DesktopNavList';
import MobileNavList from '../../atoms/MobileNavList/MobileNavList';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  height: 96px;
  background-color: ${theme.primaryWhite};
`;

const Navigation = () => {
  return (
    <>
      <StyledNav>
        <div>LOGO</div>
        <DesktopNavList />
        <MobileNavList />
      </StyledNav>
    </>
  );
};

export default Navigation;
