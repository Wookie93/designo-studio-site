import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const DesktopStyledNav = styled.ul`
  display: none;

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    list-style: none;
    font-size: ${({ theme }) => theme.font.size.l};
    li {
      font-size: 14px;
      letter-spacing: 2px;
      margin-left: 42px;
      color: ${({ theme }) => theme.secondaryDarkGray};
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.primaryBlack};

  &:hover::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.secondaryDarkGray};
    margin-top: -5px;
    opacity: 0.3;
  }
`;

const DesktopNavList = () => {
  return (
    <>
      <DesktopStyledNav>
        <li>
          <StyledLink to="/about/">Our Company</StyledLink>
        </li>
        <li>
          <StyledLink to="/locations/">Locations</StyledLink>
        </li>
        <li>
          <StyledLink to="/contact/">Contact</StyledLink>
        </li>
      </DesktopStyledNav>
    </>
  );
};

export default DesktopNavList;
