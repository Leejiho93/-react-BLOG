import React from 'react';
import { useSelector } from 'react-redux';
import  { ThemeProvider } from 'styled-components';
import UserProfile from '../../containers/UserProfile';
import NavBar from '../NavBar';
import { GlobalStyle } from './style';
import { theme } from '../theme';

const AppLayout = ({ children }) => {
    const { me } = useSelector(state => state.user);

    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <NavBar />
                {me
                    ? <UserProfile />
                    : null
                }
                <div>a</div>
                <div>{children} </div>
            </>
        </ThemeProvider>
    )
}

export default AppLayout;