import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from '../assets/styles/theme';
import Footer from './molecules/Footer/Footer';
import Navigation from './molecules/Navigation/navigation';

const StyledContener = styled.div`
  margin: auto;
  padding: 0 25px;
  ${theme.mq.tablet} {
    max-width: calc(690px + 50px);
    padding: 0px;
  }
  ${theme.mq.desktop} {
    max-width: 1110px;
  }
`;

export function MainTemplate({ children }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navigation />
        <StyledContener>{children}</StyledContener>
        <Footer />
      </ThemeProvider>
    </>
  );
}
