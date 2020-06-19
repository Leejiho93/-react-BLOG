import React from 'react';
import { useSelector } from 'react-redux';
import  { ThemeProvider } from 'styled-components';
import UserProfile from '../../containers/UserProfile';
import NavBar from '../NavBar';
import { GlobalStyle, ContentWrapper } from './style';
import { theme } from '../theme';

const AppLayout = ({ children }) => {
    const { me } = useSelector(state => state.user);

    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <NavBar />

                <ContentWrapper>{children} </ContentWrapper>
            </>
        </ThemeProvider>
    )
}

export default AppLayout;