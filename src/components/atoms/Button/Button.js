import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import arrow from '../../../assets/icons/icon-right-arrow.svg';

const StyledButton = styled.button`
  color: ${({ issecondary, theme }) =>
    issecondary ? theme.primaryWhite : theme.primaryBlack};
  padding: 18px 25px;
  background-color: ${({ issecondary, theme }) =>
    issecondary ? 'unset' : theme.primaryWhite};
  border: none;
  border-radius: 8px;
  letter-spacing: ${({ issecondary }) => (issecondary ? '2px' : '1px')};
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.3s linear;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background-color: ${({ issecondary }) =>
      issecondary ? 'unset' : '#ffad9b'};
    color: ${({ theme }) => theme.primaryWhite};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &::after {
    content: ${({ issecondary }) => (issecondary ? "''" : 'unset')};
    display: inline-block;
    background: url(${arrow}) no-repeat center;
    width: 10px;
    height: 16px;
    margin-left: 21px;
    vertical-align: text-top;
  }
`;

const Button = ({ issecondary = false, children, to = '/#' }) => {
  return (
    <StyledButton issecondary={issecondary}>
      <StyledLink to={to} issecondary={issecondary}>
        {children}
      </StyledLink>
    </StyledButton>
  );
};

export default Button;
