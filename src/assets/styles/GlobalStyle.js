import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
*, *::before,*::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html{
    font-family: ${theme.familiy.jost};
}


h1{
    font-size: ${theme.font.sizeMobile.xxl};
    line-height: 36px;

    ${theme.mq.desktop}{
        font-size: ${theme.font.size.xxl};
        line-height: 46px;
    }
}
h2{
    font-size: ${theme.font.size.xl};
    letter-spacing: 2px;
}
h3{
    font-size: ${theme.font.size.l};
    letter-spacing: 5px;
    font-weight: 400;
}
section{
    padding: 0 24px;
}
p,
button, 
a{
    font-size: ${theme.font.sizeMobile.m};
    font-weight: 400;
    line-height: 26px;
}
`;
