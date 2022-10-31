import * as React from 'react';
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

  .ico {
    width: 202px;
    height: 202px;
    background-color: gray;
    border-radius: 50%;
  }
  h3 {
    margin: 48px 0 32px 0;
    text-transform: uppercase;
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
  return (
    <IconSection>
      <StyledIconWrap>
        <div className="ico"></div>
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
        <div className="ico"></div>
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
        <div className="ico"></div>
        <div className="textWrapper">
          <h3>Passionate</h3>
          <p>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
      </StyledIconWrap>
    </IconSection>
  );
};

export default Features;
