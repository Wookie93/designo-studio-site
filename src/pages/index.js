import * as React from 'react';
import styled from 'styled-components';
import Button from '../components/atoms/Button/Button';

const StyledHeaderWrapper = styled.section`
  background-color: ${({ theme }) => theme.primaryPeach};
  padding: 80px 25px 0 25px;
  margin-bottom: 120px;

  .image {
    height: 370px;
    width: 275px;
    background-color: gray;
    margin: auto;
  }
`;

const StyledHeaderTextWrapper = styled.div`
  color: white;
  text-align: center;
  margin-bottom: 80px;

  p {
    max-width: 95%;
    margin: 24px auto;
  }
`;

const ImageWithTextSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 120px;
`;

const ImageWithText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 327px;
  height: 250px;
  margin: auto;
  background-color: gray;
  border-radius: 8px;
  margin-bottom: 24px;
`;

const IconSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

const StyledFooter = styled.footer`
  margin-top: 120px;

  .logo {
    width: 202px;
    height: 27px;
    background-color: gray;
  }
  .sico {
    width: 24px;
    height: 24px;
    background-color: gray;
  }
`;

const IndexPage = () => {
  return (
    <>
      <StyledHeaderWrapper>
        <StyledHeaderTextWrapper>
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Button>Learn more</Button>
        </StyledHeaderTextWrapper>
        <div className="image"></div>
      </StyledHeaderWrapper>

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

      <IconSection>
        <StyledIconWrap>
          <div className="ico"></div>
          <h3>Passionate</h3>
          <p>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </StyledIconWrap>
        <StyledIconWrap>
          <div className="ico"></div>
          <h3>Passionate</h3>
          <p>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </StyledIconWrap>
        <StyledIconWrap>
          <div className="ico"></div>
          <h3>Passionate</h3>
          <p>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </StyledIconWrap>
      </IconSection>

      <StyledFooter>
        <div className="inner-wrap">
          <div className="newsletter">
            <h2>Let’s talk about your project</h2>
            <p>
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
            <Button>get in touch</Button>
          </div>
          <div className="innerFooter">
            <div className="inner-top">
              <div className="logo"></div>
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
              <div className="social-media">
                <span className="sico"></span>
                <span className="sico"></span>
                <span className="sico"></span>
                <span className="sico"></span>
                <span className="sico"></span>
              </div>
            </div>
          </div>
        </div>
      </StyledFooter>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
