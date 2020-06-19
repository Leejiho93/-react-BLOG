import React from 'react';
import { RigthUl } from './style';
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from '../../reducers/user';

const RigthNav = ({ open }) => {
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch({
            type: LOG_OUT_REQUEST,
        })
    }

    return (
        <RigthUl open={open}>
            
            <li><Link href="/profile"><a>내정보</a></Link></li>
            <li>내가 쓴 글</li>
            <li>내가 쓴 댓글</li>
            <li onClick={onLogout}>로그아웃</li>
        </RigthUl>
    )
}

export default RigthNav;