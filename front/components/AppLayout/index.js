import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, ContentWrapper } from './style';
import Grid from '@material-ui/core/Grid';
import NavBar from '../NavBar';

const theme = {};

const AppLayout = ({ children }) => {
    const { me } = useSelector(state => state.user);

    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <NavBar />
                <Grid container>
                    <Grid item xs>
                        
                    </Grid>
                    <Grid item xs={12} md={8} >
                        {children}
                    </Grid>
                    <Grid item xs>
                        
                    </Grid>
                </Grid>
                {/* <ContentWrapper>{children} </ContentWrapper> */}
            </>
        </ThemeProvider>
    )
}

export default AppLayout;