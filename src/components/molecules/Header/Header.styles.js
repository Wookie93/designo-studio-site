import styled from 'styled-components';

export const StyledHeaderWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-left: -25px;
  background-color: ${({ theme }) => theme.primaryPeach};
  overflow: hidden;

  ${({ theme }) => theme.mq.tablet} {
    width: auto;
    margin-left: 0;
    border-radius: ${({ theme }) => theme.radius};
  }

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 95px;
  }
`;

export const StyledHeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 80px 24px;
  color: ${({ theme }) => theme.primaryWhite};
  text-align: center;
  z-index: 2;

  h1 {
    z-index: 0;
    ${({ theme }) => theme.mq.tablet} {
      width: 80%;
    }
    ${({ theme }) => theme.mq.desktop} {
      width: 100%;
    }
  }

  p {
    margin-top: 24px;
    color: ${({ theme }) => theme.primaryWhite};
    z-index: 2;
  }

  ${({ theme }) => theme.mq.tablet} {
    margin: 64px 58px;
  }

  ${({ theme }) => theme.mq.desktop} {
    order: -1;
    width: 540px;
    align-items: flex-start;
    text-align: left;
    margin: 135px 0;
    padding: 0;
  }
`;
