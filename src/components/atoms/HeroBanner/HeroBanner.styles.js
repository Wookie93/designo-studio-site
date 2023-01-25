import styled from 'styled-components';

export const StyledHeroWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-left: -25px;
  background-color: ${({ theme }) => theme.primaryPeach};
  overflow: hidden;

  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
    margin-left: 0;
    border-radius: ${({ theme }) => theme.radius};
  }

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: 95px;
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

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 64px 24px;
  color: ${({ theme }) => theme.primaryWhite};
  text-align: center;
  z-index: 2;

  ${({ theme }) => theme.mq.desktop} {
    width: 480px;
    align-items: flex-start;
    text-align: left;
    margin: 0;
  }

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
`;
