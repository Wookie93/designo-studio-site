import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledButton = styled.button`
  color: ${({ issecondary, theme }) =>
    issecondary ? theme.primaryWhite : theme.primaryBlack};
  padding: 18px 25px;
  background-color: ${({ issecondary, theme }) =>
    issecondary ? theme.primaryPeach : theme.primaryWhite};
  border: none;
  border-radius: 8px;
  letter-spacing: ${({ issecondary }) => (issecondary ? '2px' : '1px')};
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.3s linear;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background-color: #ffad9b;
    color: ${({ theme }) => theme.primaryWhite};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
