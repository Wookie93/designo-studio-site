import * as React from 'react';
import styled from 'styled-components';

//// dopisać obdługę scrolla i zmianę tła

const DesktopStyledNav = styled.ul`
  display: none;

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    padding: 48px 24px;
    list-style: none;
    font-size: ${({ theme }) => theme.font.size.l};
    li {
      font-size: 14px;
      letter-spacing: 2px;
      margin-left: 42px;
      margin-bottom: 32px;
      color: ${({ theme }) => theme.secondaryDarkGray};
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
