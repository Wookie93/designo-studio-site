import * as React from 'react';
import Button from '../../atoms/Button/Button';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

export const StyledHeaderWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-left: -25px;
  background-color: ${({ theme }) => theme.primaryPeach};
  overflow: hidden;

  ${({ theme }) => theme.mq.tablet} {
    width: auto;
    margin-left: 0;
    border-radius: ${({ theme }) => theme.radius};
  }

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: ${({ ifImage }) => (ifImage ? '95px' : '0')};
  }

  .gatsby-image-wrapper {
    transform: translateY(108px);
    margin-top: -200px;
    z-index: 1;

    ${({ theme }) => theme.mq.desktop} {
      transform: unset;
      margin-top: 0;
      margin-left: auto;
    }
  }

  .bcg {
    position: absolute;
    top: 185px;
    left: 0;
    width: 640px;
    height: 640px;
    z-index: 0;

    ${({ theme }) => theme.mq.tablet} {
      top: 200px;
      right: -99px;
      left: unset;
    }
    ${({ theme }) => theme.mq.desktop} {
      top: 0;
      right: 0;
    }
  }
`;

export const StyledHeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 64px 24px;
  color: ${({ theme }) => theme.primaryWhite};
  text-align: center;
  z-index: 2;

  h1 {
    z-index: 0;
    ${({ theme }) => theme.mq.tablet} {
      width: 80%;
    }
    ${({ theme }) => theme.mq.desktop} {
      width: 100%;
    }
  }

  p {
    margin: 28px 0 40px 0;
    color: ${({ theme }) => theme.primaryWhite};
    z-index: 2;
    ${({ theme }) => theme.mq.tablet} {
      width: 60%;
    }
    ${({ theme }) => theme.mq.desktop} {
      margin: 28px 0 40px 0;
      width: 85%;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    order: -1;
    width: 480px;
    align-items: flex-start;
    text-align: ${({ ifImage }) => (ifImage ? 'left' : 'center')};
    margin: ${({ ifImage }) => (ifImage ? '0' : '64px 0')};
    padding: 0;
  }
`;

const MainHeader = ({
  children,
  title,
  desc,
  ifBtn = false,
  ifImage = false,
}) => {
  return (
    <StyledHeaderWrapper ifImage={ifImage}>
      <StyledHeaderTextWrapper ifImage={ifImage}>
        <h1>{title}</h1>
        <p>{desc}</p>
        {!ifBtn ? null : <Button>Learn more</Button>}
      </StyledHeaderTextWrapper>
      {children}
      <StaticImage
        src="../../../assets/bcgs/desktop/bg-pattern-hero-home.svg"
        alt=""
        className="bcg"
      />
    </StyledHeaderWrapper>
  );
};

export default MainHeader;
