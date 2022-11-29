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

    ${theme.mq.tablet}{
        font-size: ${theme.font.size.xxl};
        line-height: 48px;
    }
}
h2{
    font-size: 32px;
    letter-spacing: 2px;
    line-height: 36px;

    ${theme.mq.desktop}{
        font-size: ${theme.font.size.xl};
        line-height: 48px;
    }
}
h3{
    font-size: ${theme.font.size.l};
    letter-spacing: 5px;
    font-weight: 400;
}
section{
    margin-bottom: 120px;
    z-index: 1;
    
    ${theme.mq.tablet} {
    padding: 0;
    }
}
p,
button, 
a{
    font-size: ${theme.font.size.m};
    font-weight: 400;
    line-height: 26px;
}
p{
    color:${theme.primaryBlack};
    transition: color 0.3s linear;
}

.open-menu{
    overflow: hidden;
    -webkit-overflow-scrolling: touch;

    &::before{
        content: '';
        position: fixed;
        display: block;
        top:0;
        height: 100vh;
        width: 100vw;
        background: ${theme.primaryBlack};
        opacity: .6;
        z-index: 5;
    }
}

.leaf-bcg{
    ${theme.mq.desktop}{
    position: absolute;
    width: 1006px;
    height: 594px;
    left: 0px;
    top: 281px;
    background: #F1F3F5;
    mix-blend-mode: normal;
    opacity: 0.5;
    border-radius: 297px 297px 297px 0px;
    z-index:0 ;

    &.main-page{
    top: 475px;
    }

    &.contact-page{
    left: 434px;
    top: 885px;
    }
    }
}
`;
