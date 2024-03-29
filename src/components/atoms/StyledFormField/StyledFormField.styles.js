import styled from 'styled-components';

export const StyledFieldWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  text-align: left;

  input:focus-visible + label {
    opacity: 0;
    pointer-events: none;
  }

  label {
    order: 0;
    margin: 0 0 0 15px;
    font-size: 15px;
    opacity: 0.5;
    transition: opacity 0.3s linear;

    &.hide {
      opacity: 0;
      pointer-events: none;
    }
  }

  input {
    order: 1;
    padding: 0 0 5px 15px;
    color: ${({ theme }) => theme.primaryWhite};
    font-size: 16px;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.primaryWhite};
    background-color: transparent;
    opacity: 0.5;

    &:focus-visible {
      outline: none;
      opacity: 1;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      -webkit-text-fill-color: #ffff;
      box-shadow: 0 0 0px 40rem rgba(231, 129, 107, 1) inset;
      -webkit-box-shadow: 0 0 0px 40rem rgba(231, 129, 107, 1) inset;
    }

    &.filled {
      opacity: 1;
    }
  }

  .error-msg {
    position: absolute;
    top: 0;
    right: 5px;
    font-style: italic;
    font-weight: 400;
    font-size: 12px;
    line-height: 26px;
  }
`;
