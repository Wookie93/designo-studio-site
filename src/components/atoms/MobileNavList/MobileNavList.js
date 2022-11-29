import * as React from 'react';
import styled from 'styled-components';
import hamburgerIco from '../../../assets/icons/icon-hamburger.svg';
import closeIco from '../../../assets/icons/icon-close.svg';

const MobileListWrap = styled.div`
  &::after {
    content: '';
    display: block;
    background-color: black;
  }
  ${({ theme }) => theme.mq.tablet} {
    display: none;
  }

  .burger-ico {
    background: none;
    border: none;
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
  font-size: ${({ theme }) => theme.font.size.l};
  color: ${({ theme }) => theme.primaryWhite};
  background-color: ${({ theme }) => theme.primaryBlack};
  z-index: 99;

  li {
    margin-bottom: 32px;
  }
`;

const MobileNavList = () => {
  const [nav, showNav] = React.useState(false);

  function toggleMenu(nav) {
    showNav(nav);
    document.querySelector('body').classList.toggle('open-menu');
  }

  return (
    <MobileListWrap>
      <button onClick={() => toggleMenu(!nav)} className="burger-ico">
        <img src={nav ? closeIco : hamburgerIco} />
      </button>
      <MobileStyledNavList nav={nav}>
        <li>Our Company</li>
        <li>Locations</li>
        <li>Contact</li>
      </MobileStyledNavList>
    </MobileListWrap>
  );
};

export default MobileNavList;
