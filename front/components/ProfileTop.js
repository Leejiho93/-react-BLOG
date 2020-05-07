import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Avatar, Dropdown, Menu } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';


const ProfileTop = () => {
    const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

    const [color, setColor] = useState(ColorList[1]);
    const { me } = useSelector(state => state.user);

    const dispatch = useDispatch();

    const onClickLogout = () => {
        dispatch({
            type: LOG_OUT_REQUEST,
        })
    };

    const onClickProfile = () => {

    };

    const onClickMyProfile = e => {
        e.preventDefault();
    }

    const menu = (
        <Menu>
            <Menu.Item>
                <Link href="profile"><a>내 프로필</a></Link>
            </Menu.Item>
            <Menu.Item onClick={onClickLogout}>
                    내가쓴 글
            </Menu.Item>
            <Menu.Item onClick={onClickLogout}>
                    내가 쓴 댓글
            </Menu.Item>
            <Menu.Item onClick={onClickLogout}>
                    로그아웃
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <div>
                <Dropdown overlay={menu}>
                    <a onClick={onClickMyProfile}>
                    <Avatar
                    onClick={onClickProfile}
                    style={{
                        backgroundColor: color,
                    }}
                    size="large"
                    icon={<UserOutlined />}
                >
                </Avatar> 
                    
                         <DownOutlined />
                    </a>
                </Dropdown>,
                
            </div>
        </>
    )
}

export default ProfileTop;