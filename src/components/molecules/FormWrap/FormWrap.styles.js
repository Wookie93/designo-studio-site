import styled from 'styled-components';
import { Form } from 'formik';

export const StyledWrapper = styled.div`
  position: relative;
  width: 100vw;
  padding: 72px 24px;
  margin-bottom: 120px;
  margin-left: -25px;
  background-color: ${({ theme }) => theme.primaryPeach};
  color: ${({ theme }) => theme.primaryWhite};
  overflow: hidden;

  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
    margin-left: 0px;
    padding: 72px 58px;
    border-radius: ${({ theme }) => theme.radius};
  }

  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 95px;
    align-items: center;
    padding: 55px 95px;
    margin-bottom: 160px;
  }

  .gatsby-image-wrapper {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;

    ${({ theme }) => theme.mq.tablet} {
      display: block;
      left: calc(50% - 640px / 2 - 146.05px);
      top: calc(50% - 640px / 2 - 118.5px);
    }

    ${({ theme }) => theme.mq.desktop} {
      top: unset;
      bottom: 0;
      left: -34px;
      transform: rotate(100deg);
    }
  }
`;

export const StyledContentWrapper = styled.div`
  text-align: center;
  ${({ theme }) => theme.mq.tablet} {
    text-align: left;
  }
  p {
    margin-top: 24px;
    color: ${({ theme }) => theme.primaryWhite};
  }
`;

export const StyledFormWrapper = styled(Form)`
  margin-top: 48px;
  text-align: center;

  ${({ theme }) => theme.mq.tablet} {
    text-align: right;
  }
`;

export const StyledFormButton = styled.button`
  color: ${({ theme }) => theme.primaryBlack};
  padding: 18px 25px;
  background-color: ${({ theme }) => theme.primaryWhite};
  border: none;
  border-radius: 8px;
  letter-spacing: 1px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.3s linear;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background-color: #ffad9b;
    color: ${({ theme }) => theme.primaryWhite};
  }
`;
