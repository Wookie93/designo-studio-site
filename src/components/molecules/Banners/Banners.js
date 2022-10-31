import * as React from 'react';
import styled from 'styled-components';

const ImageWithTextSection = styled.section`
  display: grid;
  row-gap: 24px;
  margin-bottom: 120px;

  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 30px;
  }
`;

const ImageWithText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: gray;
  border-radius: 8px;
  &:first-of-type {
    ${({ theme }) => theme.mq.desktop} {
      grid-row: 1 / 4;
    }
  }
`;

const Banners = () => {
  return (
    <ImageWithTextSection>
      <ImageWithText>
        <div>
          <p>Web Design</p>
          <button>View Projects</button>
        </div>
      </ImageWithText>
      <ImageWithText>
        <div>
          <p>Web Design</p>
          <button>View Projects</button>
        </div>
      </ImageWithText>
      <ImageWithText>
        <div>
          <p>Web Design</p>
          <button>View Projects</button>
        </div>
      </ImageWithText>
    </ImageWithTextSection>
  );
};

export default Banners;
