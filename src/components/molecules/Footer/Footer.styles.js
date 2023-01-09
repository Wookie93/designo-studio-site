import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledFooter = styled.footer`
  position: relative;
  margin-top: 120px;
  padding-bottom: 80px;
  color: ${({ theme }) => theme.primaryWhite};
  background: ${({ theme }) => theme.primaryBlack};
  background: ${({ theme }) =>
    `linear-gradient(180deg, ${theme.transparent} 0%, ${theme.transparent} 17%, ${theme.primaryBlack} 17%, ${theme.primaryBlack} 100%)`};

  ${({ theme }) => theme.mq.tablet} {
    background: ${({ theme }) =>
      `linear-gradient(180deg, ${theme.transparent} 0%, ${theme.transparent} 35%, ${theme.primaryBlack} 35%, ${theme.primaryBlack} 100%)`};
  }

  .inner-footer-wrap {
    padding: 0 24px;
    text-align: center;

    ${({ theme }) => theme.mq.tablet} {
      max-width: calc(690px + 50px);
      margin: auto;
      padding: 0;
    }
    ${({ theme }) => theme.mq.desktop} {
      max-width: 1110px;
    }
  }

  .sico {
    width: 24px;
    height: 24px;
    background-color: gray;
  }
`;

export const StyledInnerFooter = styled.div`
  .inner-top,
  .inner-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.primaryWhite};
  }

  .inner-top {
    margin-bottom: 8px;

    ${({ theme }) => theme.mq.tablet} {
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;

      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        margin: 32px 0;
        background-color: ${({ theme }) => theme.primaryWhite};
        opacity: 0.1;
      }
    }

    .logo {
      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        margin: 32px 0;
        background-color: ${({ theme }) => theme.primaryWhite};
        opacity: 0.1;

        ${({ theme }) => theme.mq.tablet} {
          content: none;
        }
      }

      ${({ theme }) => theme.mq.tablet} {
        margin-right: auto;
      }
    }
  }

  .inner-bottom {
    ${({ theme }) => theme.mq.tablet} {
      flex-direction: row;
    }

    & > div {
      opacity: 0.5;
      margin-bottom: 40px;

      p:first-of-type {
        font-weight: 700;
      }
      p {
        color: ${({ theme }) => theme.primaryWhite};
      }
      ${({ theme }) => theme.mq.tablet} {
        margin-right: 56px;
      }
      ${({ theme }) => theme.mq.desktop} {
        margin-right: 200px;
      }
    }

    .social-media {
      display: flex;
      gap: 16px;
      opacity: 1;

      ${({ theme }) => theme.mq.tablet} {
        margin-right: 0;
        margin-left: auto;
      }

      .gatsby-image-wrapper {
        cursor: pointer;
        transition: opacity 0.3 linear;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.primaryWhite};
  margin-bottom: 32px;

  ${({ theme }) => theme.mq.tablet} {
    margin-right: 42px;
    margin-bottom: 0px;

    &:last-of-type {
      margin-right: 0;
    }
  }

  &:hover {
    text-decoration: underline;
  }
`;
