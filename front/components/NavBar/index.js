import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrow, faBars, faSignInAlt, faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Nav, Logo, LogoIcon, MenuList, LoginMenu, Burger, UserIcon, Searching } from './style';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { UserOutlined } from '@ant-design/icons';
import LeftNav from '../LeftNav';
import RightNav from '../RigthNav';

const NavBar = () => {
    const [leftMenuOpened, setLeftMenuOpened] = useState(false);
    const [userMenuOpened, setUserMenuOpened] = useState(false);
    const { me } = useSelector(state => state.user);



    useEffect(() => {
        if (!me) {
            setUserMenuOpened(false);
        }
    }, [me && me.id])

    const onToggleLeftMenu = useCallback(() => {
        if (!leftMenuOpened && userMenuOpened) {
            setUserMenuOpened(prev => !prev)
        }
        setLeftMenuOpened(prev => !prev);
    }, [leftMenuOpened, userMenuOpened]);


    const onToggleUserMenu = useCallback(() => {
        if (leftMenuOpened && !userMenuOpened) {
            setLeftMenuOpened(prev => !prev)
        }
        setUserMenuOpened(prev => !prev);
    }, [leftMenuOpened, userMenuOpened])
    return (
        <Nav>
            <Burger icon={faBars} onClick={onToggleLeftMenu} />
            <LeftNav open={leftMenuOpened} />
            <Logo>
                <Link href="/">
                    <a>
                        <LogoIcon icon={faCrow} />
                        EASYHO
                    </a>
                </Link>
            </Logo>
            <Searching
                placeholder="단어 검색"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
            />
            <MenuList>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/about"><a>About</a></Link></li>
                <li><Link href="/tech"><a>Tech</a></Link></li>
                <li><Link href="/free"><a>Talk</a></Link></li>
                <li><Link href="/gallery"><a>Gallery</a></Link></li>
            </MenuList>
            {
                me
                    ? <UserIcon onClick={onToggleUserMenu} icon={<UserOutlined />} />
                    : <LoginMenu>
                        <li>
                            <Link href="/login">
                                <a>
                                    <FontAwesomeIcon icon={faSignInAlt} />
                                    로그인
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/signup">
                                <a>
                                    <FontAwesomeIcon icon={faUserPlus} />
                                    회원가입
                                </a>
                            </Link>
                        </li>
                    </LoginMenu>
            }
            <RightNav open={userMenuOpened} />
        </Nav>
    )
}

export default NavBar;