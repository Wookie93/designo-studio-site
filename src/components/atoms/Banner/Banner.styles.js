import styled from 'styled-components';
import { Link } from 'gatsby';
import arrow from '../../../assets/icons/icon-right-arrow.svg';

export const BannerWrapper = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  max-width: 327px;
  margin: auto;
  border-radius: 8px;
  z-index: 1;

  ${({ theme }) => theme.mq.tablet} {
    max-width: unset;
    .desktop-only {
      height: 200px;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    .desktop-only {
      height: 100%;
    }
  }

  &:first-of-type {
    ${({ theme }) => theme.mq.desktop} {
      grid-row: 1 / 4;
    }
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.primaryBlack};
    z-index: 1;
    opacity: 0.6;
    border-radius: 8px;
    transition: 0.3s linear;
  }

  &:hover::before {
    background-color: ${({ theme }) => theme.primaryPeach};
    opacity: 0.7;
  }

  & > div {
    display: grid;
    grid-area: 1/1;
    place-items: center;
    position: relative;
    p {
      color: ${({ theme }) => theme.primaryWhite};
    }
  }
  .gatsby-image-wrapper {
    height: 250px;

    ${({ theme }) => theme.mq.desktop} {
      height: auto;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.primaryWhite};
  font-weight: 500;
`;

export const StyledLink = styled(Link)`
  margin-top: 24px;
  letter-spacing: 5px;
  text-transform: uppercase;
  text-decoration: unset;
  color: ${({ theme }) => theme.primaryWhite};

  &::after {
    content: '';
    display: inline-block;
    width: 15px;
    height: 15px;
    background: url(${arrow}) no-repeat center;
    margin-left: 15px;
  }
`;
