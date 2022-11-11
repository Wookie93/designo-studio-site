import styled from 'styled-components';

export const StyledHeaderWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 843px;
  margin-left: -25px;
  padding: 80px 25px 0 25px;
  background-color: ${({ theme }) => theme.primaryPeach};
  overflow: hidden;

  ${({ theme }) => theme.mq.tablet} {
    width: auto;
    padding: 60px 58px 0 58px;
    margin-left: 0;
    border-radius: ${({ theme }) => theme.radius};
  }

  ${({ theme }) => theme.mq.desktop} {
    align-items: flex-start;
    justify-content: center;
    height: 640px;
    padding: 0 0 0 95px;
  }

  .styled-image {
    position: absolute;
    width: 120vw;
    bottom: -130px;
    ${({ theme }) => theme.mq.tablet} {
      width: 60%;
      bottom: -110px;
    }
    ${({ theme }) => theme.mq.desktop} {
      top: 15px;
      bottom: -15px;
      right: 0;
      width: 480px;
    }
  }

  .styled-bcg {
    position: absolute;
    width: 640px;
    left: 0;
    z-index: 0;

    ${({ theme }) => theme.mq.tablet} {
      top: 101px;
      right: -121px;
      left: unset;
    }
    ${({ theme }) => theme.mq.desktop} {
      top: 0;
      right: 0;
    }

    &-without-image {
      position: absolute;
      width: 292px;
      height: 292px;
      top: 0;
      right: 0;
      transform: rotate(180deg);
      z-index: 0;
    }
  }

  &.without-image {
    height: 320px;
    padding: 0 24px;
  }
`;

export const StyledHeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 310px;
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
    color: ${({ theme }) => theme.primaryWhite};
    z-index: 2;
    ${({ theme }) => theme.mq.tablet} {
      width: 78%;
      margin: 20px 0;
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    height: 325px;
    margin-bottom: 0px;
  }

  ${({ theme }) => theme.mq.desktop} {
    height: 350px;
    width: 540px;
    align-items: flex-start;
    text-align: left;
    margin: 0;
    padding: 0;
  }

  &.without-image {
    justify-content: center;

    p {
      margin-top: 24px;
    }
  }
`;
