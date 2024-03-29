import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primaryWhite};
  font-size: ${({ theme }) => theme.fontSize.l};

  ${({ theme }) => theme.mq.tablet} {
    color: ${({ theme }) => theme.secondaryDarkGray};
    font-size: ${({ theme }) => theme.fontSize.s};

    &:hover::after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background: ${({ theme }) => theme.secondaryDarkGray};
      margin-top: -5px;
      opacity: 0.3;
    }
  }
`;

export const StyledMenu = styled.ul`
  position: absolute;
  transform: translateY(-100%);
  top: 0;
  left: 0;
  right: 0;
  padding: 48px 24px;
  list-style: none;
  background-color: ${({ theme }) => theme.primaryBlack};
  z-index: 99;

  &.open {
    transform: translateY(96px);
  }

  ${({ theme }) => theme.mq.tablet} {
    position: relative;
    display: flex;
    padding: 0;
    background-color: transparent;
    top: unset;
    left: unset;
    right: unset;
    transform: unset;
    flex-wrap: wrap;
  }

  li {
    margin-bottom: 32px;
    &:last-child {
      margin-bottom: 0;
    }
    ${({ theme }) => theme.mq.tablet} {
      font-size: 14px;
      letter-spacing: 2px;
      margin-left: 42px;
      margin-bottom: 0;
    }
  }
`;
