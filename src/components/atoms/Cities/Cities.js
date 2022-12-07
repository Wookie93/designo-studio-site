import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const CityWrap = styled.div`
  margin-bottom: 80px;
  text-align: center;
  z-index: 1;
`;

const ImageWrap = styled.div`
  position: relative;
  z-index: 1;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 202px;
    height: 202px;
    border-radius: 50%;

    background: linear-gradient(
      90deg,
      rgba(93, 2, 2, 0.0001) 0%,
      rgba(93, 2, 2, 0.497569) 100%
    );
    mix-blend-mode: normal;
    opacity: 0.2;
  }
  &.canada::after {
    transform: matrix(0, -1, -1, 0, 0, 0);
  }
  &.australia::after {
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  &.united-kingdom::after {
    transform: matrix(0, 1, 1, 0, 0, 0);
  }
`;

const ContentWrap = styled.div`
  margin-top: 48px;
  p {
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 5px;
    margin-bottom: 32px;
  }
`;

const Cities = () => {
  return (
    <Wrap>
      <CityWrap>
        <ImageWrap className="canada">
          <StaticImage
            src="../../../assets/images/Cities/illustration-canada.svg"
            alt=""
          />
        </ImageWrap>
        <ContentWrap>
          <p>Canada</p>
          <Button issecondary to="/locations">
            See Location
          </Button>
        </ContentWrap>
      </CityWrap>

      <CityWrap>
        <ImageWrap className="australia">
          <StaticImage
            src="../../../assets/images/Cities/illustration-australia.svg"
            alt=""
          />
        </ImageWrap>
        <ContentWrap>
          <p>Australia</p>
          <Button issecondary to="/locations">
            See Location
          </Button>
        </ContentWrap>
      </CityWrap>

      <CityWrap>
        <ImageWrap className="united-kingdom">
          <StaticImage
            src="../../../assets/images/Cities/illustration-united-kingdom.svg"
            alt=""
          />
        </ImageWrap>
        <ContentWrap>
          <p>United Kingdom</p>
          <Button issecondary to="/locations">
            See Location
          </Button>
        </ContentWrap>
      </CityWrap>
    </Wrap>
  );
};

export default Cities;
