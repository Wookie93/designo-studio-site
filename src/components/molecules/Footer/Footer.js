import * as React from 'react';
import styled from 'styled-components';
import Logo from '../../atoms/Logo/Logo';
import Newsletter from '../../atoms/Newsletter/Newsletter';

const StyledFooter = styled.footer`
  position: relative;
  margin-top: 120px;
  padding-bottom: 80px;
  color: ${({ theme }) => theme.primaryWhite};
  background: ${({ theme }) => theme.primaryBlack};
  background: ${({ theme }) =>
    `linear-gradient(180deg, ${theme.primaryWhite} 0%, ${theme.primaryWhite} 19%, ${theme.primaryBlack} 19%, ${theme.primaryBlack} 100%)`};

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

const StyledInnerFooter = styled.div`
  .inner-top,
  .inner-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.primaryWhite};
  }

  .inner-top {
    margin-bottom: 8px;
    a {
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
  }

  .inner-bottom {
    div {
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
      width: 184px;
      height: 24px;
      background-color: gray;
      ${({ theme }) => theme.mq.tablet} {
        margin-right: 0;
        margin-left: auto;
      }
    }

    ${({ theme }) => theme.mq.tablet} {
      flex-direction: row;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="inner-footer-wrap">
        <Newsletter />
        <StyledInnerFooter>
          <div className="inner-top">
            <div className="logo">
              <Logo />
            </div>
            <a href="/#">our company</a>
            <a href="/#">our company</a>
            <a href="/#">our company</a>
          </div>
          <div className="inner-bottom">
            <div>
              <p>Designo Central Office</p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div>
              <p>Designo Central Office</p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div className="social-media"></div>
          </div>
        </StyledInnerFooter>
      </div>
    </StyledFooter>
  );
};

export default Footer;
