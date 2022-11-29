import styled from 'styled-components';

export const FieldWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  text-align: left;

  label {
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
    padding: 0 0 5px 15px;
    color: ${({ theme }) => theme.primaryWhite};
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.primaryWhite};
    background-color: transparent;
    opacity: 0.5;

    &:focus-visible {
      outline: none;
      opacity: 1;
    }
  }
`;
