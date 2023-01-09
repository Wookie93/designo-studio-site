import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledNewsletter = styled.div`
  position: relative;
  width: 100%;
  padding: 64px 24px;
  margin-bottom: 64px;
  color: ${({ theme }) => theme.primaryWhite};
  background-color: ${({ theme }) => theme.primaryPeach};
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;

  ${({ theme }) => theme.mq.tablet} {
    padding: 58px;
    margin-bottom: 80px;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 63px 96px;
    text-align: left;
  }

  h2 {
    ${({ theme }) => theme.mq.tablet} {
      font-size: 40px;
      line-height: 40px;
      width: 300px;
      margin: auto;
    }
    ${({ theme }) => theme.mq.desktop} {
      margin: unset;
      margin-bottom: 14px;
    }
  }

  p {
    margin: 10px auto 32px auto;
    color: ${({ theme }) => theme.primaryWhite};
    ${({ theme }) => theme.mq.tablet} {
      margin: 13px auto 32px auto;
      width: 425px;
    }
  }

  .bcg-desktop {
    display: none;

    ${({ theme }) => theme.mq.tablet} {
      display: block;
      position: absolute;
      top: -120px;
      right: -134px;
      z-index: 0;
    }
    ${({ theme }) => theme.mq.desktop} {
      top: unset;
      right: 0;
    }
  }
`;

export const StyledContent = styled.div`
  z-index: 1;
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;
