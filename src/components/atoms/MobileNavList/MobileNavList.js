import * as React from 'react';
import styled from 'styled-components';
import { theme } from '../../../assets/styles/theme';

const MobileListWrap = styled.div`
  ${theme.mq.desktop} {
    display: none;
  }
`;

const MobileStyledNavList = styled.ul`
  position: absolute;
  transform: ${({ nav }) => (nav ? 'translateY(96px)' : 'translateY(-100%)')};
  top: 0;
  left: 0;
  right: 0;
  padding: 48px 24px;
  list-style: none;
  font-size: ${theme.font.size.l};
  color: ${theme.primaryWhite};
  background-color: ${theme.primaryBlack};

  li {
    margin-bottom: 32px;
  }
`;

const MobileNavList = () => {
  const [nav, showNav] = React.useState(false);

  return (
    <MobileListWrap>
      <button onClick={() => showNav(!nav)}>X</button>
      <MobileStyledNavList nav={nav}>
        <li>Our Company</li>
        <li>Locations</li>
        <li>Contact</li>
      </MobileStyledNavList>
    </MobileListWrap>
  );
};

export default MobileNavList;
