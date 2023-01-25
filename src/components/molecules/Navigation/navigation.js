import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';

/// Styles
import { StyledNav, MobileListWrap } from './navigation.styles';
/// Components
import Logo from '../../atoms/Logo/Logo';
import MenuLinks from '../../atoms/MenuLinks/MenuLinks';

/// Assets
import hamburgerIco from '../../../assets/icons/icon-hamburger.svg';
import closeIco from '../../../assets/icons/icon-close.svg';

const usePrevious = (value) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query getLogoImg {
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
            <img src={burger ? closeIco : hamburgerIco} alt="menu-ico" />
          </button>
        </MobileListWrap>
        <MenuLinks style={burger ? 'open' : null} />
      </StyledNav>
    </>
  );
};

export default Navigation;
