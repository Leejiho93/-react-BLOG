import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrow, } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 8px 12px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }

`;

export const Logo = styled.div`
    font-size: 26px;
    color: black;
    padding: 10px;
`

export const LogoIcon = styled(FontAwesomeIcon)`
    color: black;
`

export const MenuList = styled.ul`
    display: flex;
    list-style: none;
    padding-left: 0;

    & > li {
        padding: 8px 12px;

        @media (max-width: 768px) {
            width: 100%;
            text-align: center;
        }
    }

    & li:hover {
        border-top: 2px black solid;
    }

    & .active {
        display: flase;
    }

    @media (max-width: 768px) {
        display: none;
        flex-direction: column;
        align-items: center;
        width: 100%
    }
`

export const LoginMenu = styled.ul`
    display: flex;
    list-style: none;
    padding-left: 0;

    & > li {
        padding: 8px 12px;

        @media (max-width: 768px) {
            width: 100%;
            text-align: center;
        }
    }

    & li:hover {
        border-top: 2px black solid;
        
    }

    & .active {
        display: flase;
    }

    @media (max-width: 768px) {
        display: none;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }   
`;

export const NavToggleBtn = styled.button`
    display: none;
    margin-top: 10px;
    position: absolute;
    font-size: 30px;
    right: 32px;
    background-color: white;
    border: none;
    outline: 0;

    @media (max-width: 768px) {
        display: block;
    }   
`;