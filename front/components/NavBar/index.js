import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrow, faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Nav, Logo, LogoIcon, MenuList, LoginMenu, NavToggleBtn } from './style';

const NavBar = () => {
    return (
        <Nav>
            <Logo>
                <LogoIcon icon={faCrow} />
                <Link href="/"><a>EASYHO</a></Link>
            </Logo>
            <MenuList>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/about"><a>About</a></Link></li>
                <li><Link href="/tech"><a>Tech</a></Link></li>
                <li><Link href="/free"><a>Free</a></Link></li>
                <li><Link href="/gallery"><a>Gallery</a></Link></li>
            </MenuList>
            <LoginMenu>
                <li><Link href="/login"><a>로그인</a></Link></li>
                <li><Link href="/signup"><a>회원가입</a></Link></li>
            </LoginMenu>
            <NavToggleBtn>
                <a><FontAwesomeIcon icon={faBars} /></a>
            </NavToggleBtn>


        </Nav>
    )
}

export default NavBar;