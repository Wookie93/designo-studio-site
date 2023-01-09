import * as React from 'react';
import { StyledButton, StyledLink } from './Button.styles';

const Button = ({ issecondary, children, to = '/#' }) => {
  return (
    <StyledButton issecondary={issecondary}>
      <StyledLink to={to}>{children}</StyledLink>
    </StyledButton>
  );
};

export default Button;
