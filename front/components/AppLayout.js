import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';
import UserProfile from '../containers/UserProfile';
import NavBar from './NavBar';

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
    }
    
    a {
        text-decoration: none;
        color: black;
    }
`;
const AppLayout = ({ children }) => {
    const { me } = useSelector(state => state.user);

    return (
        <>
            <GlobalStyle />
            <NavBar />
            {me
                ? <UserProfile />
                :
                <>
                    <div>a</div>
                </>
            }

            <div>{children} </div>
        </>
    )
}

export default AppLayout;