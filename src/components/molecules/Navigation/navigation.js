import * as React from 'react';
import { useLocation } from '@reach/router';
import styled from 'styled-components';
import Logo from '../../atoms/Logo/Logo';
import hamburgerIco from '../../../assets/icons/icon-hamburger.svg';
import closeIco from '../../../assets/icons/icon-close.svg';
import MenuLinks from '../../atoms/MenuLinks/MenuLinks';
import { useStaticQuery, graphql } from 'gatsby';

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

const usePrevious = (value) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsHeader {
        logo {
          logo {
            gatsbyImageData(width: 202)
          }
        }
      }
    }
  `);

  const [burger, toggleBurger] = React.useState(false);
  const location = useLocation();
  const prevLocation = usePrevious(location);

  function toggleMenu(burger) {
    toggleBurger(burger);
    document.querySelector('body').classList.toggle('open-menu');
  }

  React.useEffect(() => {
    if (location !== prevLocation) {
      toggleBurger(false);
      document.querySelector('body').classList.remove('open-menu');
    }
  }, [location, prevLocation, toggleBurger]);

  return (
    <>
      <StyledNav>
        <Logo data={data.datoCmsHeader.logo[0].logo} />
        <MobileListWrap>
          <button
            className="burger-ico"
            onClick={() => {
              toggleMenu(!burger);
            }}
          >
            <img src={burger ? closeIco : hamburgerIco} />
          </button>
        </MobileListWrap>
        <MenuLinks style={burger ? 'open' : null} />
      </StyledNav>
    </>
  );
};

export default Navigation;
