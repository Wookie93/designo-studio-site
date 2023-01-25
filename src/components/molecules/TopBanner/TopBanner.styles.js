import styled from 'styled-components';

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
    padding-left: ${({ ifImage }) => (ifImage ? '95px ' : '0')};
  }

  .bcg {
    position: absolute;
    width: 100%;
    right: 0;
    opacity: 0.5;
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

  ${({ theme }) => theme.mq.desktop} {
    order: -1;
    width: 480px;
    align-items: flex-start;
    text-align: ${({ ifImage }) => (ifImage ? 'left' : 'center')};
    margin: ${({ ifImage }) => (ifImage ? '0' : '64px 0')};
    padding: 0;
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

    ${({ theme }) => theme.mq.desktop} {
      margin: 32px auto 0 auto;
    }
  }
`;

export const StyledImageWrap = styled.div`
  width: 100%;
  height: 320px;

  ${({ theme }) => theme.mq.desktop} {
    width: 476px;
    height: 480px;
    margin-left: auto;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    margin-bottom: 16px;

    ${({ theme }) => theme.mq.tablet} {
      margin-bottom: 0;
    }
  }
`;
