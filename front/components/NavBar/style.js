import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Input } from 'antd'
import { faCrow, } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'

export const Nav = styled.nav`
    width: 100%;
    height: 100px;
    border-bottom: 2px solid #f1f1f1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & div {
        // padding: 15px 0
    }

    & a {
        text-decoration: none;
    }


    @media (max-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const Burger = styled(FontAwesomeIcon)`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        z-index: 100;
        font-size: 28px;
    }
`

export const Logo = styled.div`
    font-size: 30px;
    color: black;
    font-family: 'MuseoModerno', cursive;

    & a {
        color: black;
    }

    & a:hover {
        opacity: .6
    }

    @media (max-width: 768px) {
        font-family: 'MuseoModerno', cursive;
        display: flex;
        align-items: center;
    
    }

`

export const LogoIcon = styled(FontAwesomeIcon)`
    color: black;

    @media (max-width: 768px) {
       
    }
`

export const Searching = styled(Input.Search)`
    border-radius: 20px;

    &::selection {
        background: black
    }

    @media (max-width: 1024px) {
        display: none;
    }
`

export const MenuList = styled.ul`
    display: flex;
    list-style: none;
    font-family: 'Roboto Slab', serif;
    margin: 0;

    & > li {
        padding: 8px 12px;

        #media (max-width: 768px) {
            
        }
    }

    & a {
        color: #495057;
        opacity: .6;
    }

    & a:hover {
        color: black;
    }

    @media (max-width: 768px) {
        display: none;
    }  
`

export const LoginMenu = styled.ul`
    display: flex;
    list-style: none;
    padding-left: 0;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;

    & a {
        color: #495057;
        opacity: .6;

        @media (max-width: 1024px) {
            align-items: center;
            
        }   
    }

    & a:hover {
        color: black;
    }

    & > li {
        padding: 8px 12px;

        @media (max-width: 1024px) {
            align-items: center;

        }   
    }

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
       
    }     
`;

export const UserIcon = styled(Avatar)`
    display: flex;
    font-size: 28px;
    padding-right: 10px;
    z-index: 100;

    @media (max-width: 768px) {
        z-index: 100;
        display: flex;
        font-size: 28px;
        padding-right: 10px;
    }
`;