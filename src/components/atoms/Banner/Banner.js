import * as React from 'react';
import styled from 'styled-components';
import BannerImage from './BannerImage.js';
import Button from '../Button/Button.js';

const BannerWrapper = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  max-width: 327px;
  margin: auto;
  border-radius: 8px;

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
    opacity: 0.2;
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
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.primaryWhite};
  font-weight: 500;
`;

const Banner = ({ title, link, mobile, desktop }) => {
  return (
    <BannerWrapper>
      <BannerImage mobile={mobile} desktop={desktop} />
      <div>
        <Content>
          <StyledTitle>{title}</StyledTitle>
          <Button issecondary={true} to={link}>
            View Projects
          </Button>
        </Content>
      </div>
    </BannerWrapper>
  );
};

export default Banner;
