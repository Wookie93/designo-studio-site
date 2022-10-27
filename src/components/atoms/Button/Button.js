import * as React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: ${({ theme }) => theme.primaryBlack};
  padding: 18px 25px;
  background-color: ${({ theme }) => theme.primaryWhite};
  border: none;
  border-radius: 8px;
  letter-spacing: 1px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
