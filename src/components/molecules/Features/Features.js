import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const IconSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledIconWrap = styled.div`
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

const Features = () => {
  const path = '../../../assets/images/main-page/desktop';

  return (
    <IconSection>
      <StyledIconWrap>
        <div className="ico-wrapper">
          <div className="ico"></div>
          <StaticImage
            className="styled-image"
            src={path + '/illustration-passionate.svg'}
            alt=""
          />
        </div>
        <div className="textWrapper">
          <h3>Passionate</h3>
          <p>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
      </StyledIconWrap>
      <StyledIconWrap>
        <div className="ico-wrapper">
          <div className="ico"></div>
          <StaticImage
            className="styled-image"
            src={path + '/illustration-resourceful.svg'}
            alt=""
          />
        </div>
        <div className="textWrapper">
          <h3>Resourceful</h3>
          <p>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>
      </StyledIconWrap>
      <StyledIconWrap>
        <div className="ico-wrapper">
          <div className="ico"></div>
          <StaticImage
            className="styled-image"
            src={path + '/illustration-friendly.svg'}
            alt=""
          />
        </div>
        <div className="textWrapper">
          <h3>Friendly</h3>
          <p>
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </StyledIconWrap>
    </IconSection>
  );
};

export default Features;
