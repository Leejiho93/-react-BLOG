import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	* {
        margin: 0;
        padding 0;
        outline: 0;
        box-sizing: border-box;
    },
    body {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
 }
`;

export const ContentWrapper = styled.div`
    display: flex;
`