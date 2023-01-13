import styled from 'styled-components';

export const StyledNav = styled.nav`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  padding: 0 25px;
  top: 0;
  background-color: ${({ theme }) => theme.primaryWhite};
  z-index: 10;

  ${({ theme }) => theme.mq.tablet} {
    position: relative;
    max-width: 690px;
    height: 155px;
    padding: 0;
    margin: auto;
  }

  ${({ theme }) => theme.mq.desktop} {
    max-width: 1110px;
    margin: auto;
  }
`;

export const MobileListWrap = styled.div`
  &::after {
    content: '';
    display: block;
    background-color: black;
  }
  ${({ theme }) => theme.mq.tablet} {
    display: none;
  }

  .burger-ico {
    background: none;
    border: none;
  }
`;
