import styled from 'styled-components';

export const StyledPortfolioCard = styled.div`
  width: 327px;
  margin: auto;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;

  ${({ theme }) => theme.mq.btwMobileDesktop} {
    display: flex;
    width: 100%;
    height: 310px;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 350px;
  }

  &:hover .onHoverStyledContener {
    background-color: ${({ theme }) => theme.primaryPeach};

    p {
      color: ${({ theme }) => theme.primaryWhite};
    }
  }
`;

export const StyledTite = styled.p`
  font-size: 20px;
  line-height: 26px;
  color: ${({ theme }) => theme.primaryPeach};
  margin: 0 0 16px 0;
  text-transform: uppercase;
  letter-spacing: 5px;
  transition: color 0.3s linear;
`;

export const StyledImageWrap = styled.div`
  ${({ theme }) => theme.mq.btwMobileDesktop} {
    max-width: 338px;
  }

  .gatsby-image-wrapper {
    border-radius: 16px 16px 0 0;
    height: 320px;

    ${({ theme }) => theme.mq.btwMobileDesktop} {
      border-radius: 16px 0px 0px 16px;
      height: 310px;
    }
  }
`;

export const StyledContener = styled.div`
  background-color: ${({ theme }) => theme.secondaryLigthPeach};
  padding: 32px;
  text-align: center;
  border-radius: 0 0 16px 16px;
  transition: background-color 0.3s linear;

  ${({ theme }) => theme.mq.btwMobileDesktop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 41px;
    border-radius: 0 16px 16px 0;
  }
`;
