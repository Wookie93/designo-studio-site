import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import arrow from '../../../assets/icons/icon-right-arrow.svg';

const StyledButton = styled.button`
  color: ${({ theme }) => theme.primaryBlack};
  padding: 18px 25px;
  background-color: ${({ issecondary, theme }) =>
    issecondary ? 'unset' : theme.primaryWhite};
  border: none;
  border-radius: 8px;
  letter-spacing: ${({ issecondary }) => (issecondary ? '2px' : '1px')};
  font-weight: 600;
  text-transform: uppercase;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ issecondary, theme }) =>
    issecondary ? theme.primaryWhite : theme.primaryBlack};

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

const Button = ({ issecondary, children, to = '/#' }) => {
  return (
    <StyledButton issecondary={issecondary}>
      <StyledLink to={to} issecondary={issecondary}>
        {children}
      </StyledLink>
    </StyledButton>
  );
};

export default Button;
