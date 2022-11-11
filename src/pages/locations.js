import * as React from 'react';
import styled from 'styled-components';

const StyledMapWrapper = styled.div`
  width: 100vw;
  margin-left: -25px;
  margin-bottom: 40px;

  .image {
    background-color: gray;
    height: 320px;
    margin: auto;

    ${({ theme }) => theme.mq.tablet} {
      margin-bottom: 24px;
      border-radius: ${({ theme }) => theme.radius};
    }
    ${({ theme }) => theme.mq.desktop} {
      width: 350px;
      margin: 0;
      order: ${({ position }) => (position === 'first' ? 1 : 0)};
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    width: auto;
    margin-left: 0;
    margin-bottom: 120px;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
  }
`;

const StyledInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 394px;
  background-color: #fdf3f0;
  text-align: center;

  ${({ theme }) => theme.mq.tablet} {
    border-radius: ${({ theme }) => theme.radius};
  }

  ${({ theme }) => theme.mq.desktop} {
    order: ${({ position }) => (position === 'first' ? 0 : 1)};
    width: 730px;
    height: 320px;
    text-align: left;
  }
`;

const StyledInfo = styled.div`
  .map-title {
    color: #e7816b;
    font-weight: 500;
    font-size: 32px;
    line-height: 36px;
    margin-bottom: 24px;

    ${({ theme }) => theme.mq.desktop} {
      flex-basis: 100%;
    }
  }
  .info {
    margin-bottom: 24px;
    p:first-of-type {
      font-weight: 700;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 60%;
  }
`;

const LocationsPage = () => {
  return (
    <>
      <StyledMapWrapper>
        <div className="image"></div>
        <StyledInfoWrapper>
          <StyledInfo>
            <p className="map-title">Canada</p>
            <div className="info">
              <p>Designo Central Office</p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div className="info">
              <p>Contact</p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
          </StyledInfo>
        </StyledInfoWrapper>
      </StyledMapWrapper>

      <StyledMapWrapper>
        <div className="image"></div>
        <StyledInfoWrapper position={'first'}>
          <StyledInfo>
            <p className="map-title">Canada</p>
            <div className="info">
              <p>Designo Central Office</p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div className="info">
              <p>Contact</p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
          </StyledInfo>
        </StyledInfoWrapper>
      </StyledMapWrapper>

      <StyledMapWrapper>
        <div className="image"></div>
        <StyledInfoWrapper position={'first'}>
          <StyledInfo>
            <p className="map-title">Canada</p>
            <div className="info">
              <p>Designo Central Office</p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div className="info">
              <p>Contact</p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
          </StyledInfo>
        </StyledInfoWrapper>
      </StyledMapWrapper>
    </>
  );
};

export default LocationsPage;

export const Head = () => <title>Locations</title>;
