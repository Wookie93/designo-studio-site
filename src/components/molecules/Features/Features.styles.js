import styled from 'styled-components';

export const IconSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledIconWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 80px;
  z-index: 1;

  ${({ theme }) => theme.mq.desktop} {
    margin-bottom: 0px;
  }

  h3 {
    margin: 48px 0 32px 0;
    text-transform: uppercase;
    ${({ theme }) => theme.mq.tablet} {
      margin: 0 0 16px 0;
      font-size: 20px;
    }
  }

  .ico-wrapper {
    position: relative;
    flex-shrink: 0;

    ${({ theme }) => theme.mq.tablet} {
      margin-right: 48px;
    }
    ${({ theme }) => theme.mq.desktop} {
      margin-right: 0;
      margin-bottom: 48px;
    }

    .ico {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: linear-gradient(
        90deg,
        rgba(93, 2, 2, 0.0001) 0%,
        rgba(93, 2, 2, 0.497569) 100%
      );
      opacity: 0.2;
      &:nth-child(0) {
        transform: matrix(-1, 0, 0, 1, 0, 0);
      }
      &:nth-child(1) {
        transform: matrix(0, 1, 1, 0, 0, 0);
      }
      &:nth-child(2) {
        transform: matrix(0, -1, -1, 0, 0, 0);
      }
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
    text-align: left;
  }
  ${({ theme }) => theme.mq.desktop} {
    flex-direction: column;
    align-items: center;
    max-width: 350px;
    text-align: center;
  }
`;
