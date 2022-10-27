import * as React from 'react';
import styled from 'styled-components';
import { theme } from '../../../assets/styles/theme';

//// dopisać obdługę scrolla i zmianę tła

const DesktopStyledNav = styled.ul`
  display: none;
  ${theme.mq.desktop} {
    display: flex;
    padding: 48px 24px;
    list-style: none;
    font-size: ${theme.font.size.l};
    li {
      margin-bottom: 32px;
    }
  }
`;

const DesktopNavList = () => {
  return (
    <>
      <DesktopStyledNav>
        <li>Our Company</li>
        <li>Locations</li>
        <li>Contact</li>
      </DesktopStyledNav>
    </>
  );
};

export default DesktopNavList;
