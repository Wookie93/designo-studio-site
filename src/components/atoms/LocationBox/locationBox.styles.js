import styled from 'styled-components';

export const StyledMapWrapper = styled.div`
  width: 100vw;
  margin-left: -25px;
  margin-bottom: 40px;

  ${({ theme }) => theme.mq.tablet} {
    width: auto;
    margin-left: 0;
    margin-bottom: 120px;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 320px;
    margin: auto;

    ${({ theme }) => theme.mq.tablet} {
      margin-bottom: 24px;
      border-radius: ${({ theme }) => theme.radius};
    }
    ${({ theme }) => theme.mq.desktop} {
      width: 350px;
      margin: 0;
    }
  }
`;

export const StyledInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 394px;
  background-color: #fdf3f0;
  text-align: center;

  ${({ theme }) => theme.mq.tablet} {
    border-radius: ${({ theme }) => theme.radius};
    text-align: left;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 730px;
    height: 320px;
  }
`;

export const StyledInfo = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 60%;
  }
  .map-title {
    color: #e7816b;
    font-weight: 500;
    margin-bottom: 24px;

    ${({ theme }) => theme.mq.tablet} {
      flex-basis: 100%;
    }
  }
  .info {
    margin-bottom: 24px;
    p:first-of-type {
      font-weight: 700;
    }
  }
`;
