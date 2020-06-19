import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar } from 'antd'
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
        padding: 15px 0
    }

    a {
        text-decoration: none;
    }

    // @media (max-width: 1024px) {
    //     flex-direction: column;
    //     align-items: flex-start;
    // }

    @media (max-width: 768px) {
        display: flex;
        // flex-direction: column;
        justify-content: space-between;
        align-items: center;
        // align-items: flex-start;
    }
`;

export const Burger = styled(FontAwesomeIcon)`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        z-index: 100;
        font-size: 28px;
        padding-left: 10px;
    }
`

export const Logo = styled.div`
    font-size: 26px;
    color: black;
    padding: 10px;

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
    
    }

`

export const LogoIcon = styled(FontAwesomeIcon)`
    color: black;

    @media (max-width: 768px) {
       
    }
`
export const MenuList = styled.ul`
    display: flex;
    list-style: none;
    
    & > li {
        padding: 8px 12px;

        #media (max-width: 768px) {
            
        }
    }

    @media (max-width: 768px) {
        display: none;
        align-items: center;
        width: 100%;
    }  
`

export const LoginMenu = styled.ul`
    display: flex;
    list-style: none;
    padding-left: 0;

    & > li {
        padding: 8px 12px;

        @media (max-width: 1024px) {
            align-items: center;
        }   

        @media (max-width: 768px) {
         
            text-align: center;
            padding: 4px 12px;
        }
    }

    @media (max-width: 1024px) {
        align-items: center;
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