import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';

const UserProfile = () => {
    const { me } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch({
            type: LOG_OUT_REQUEST,
        })
    }

    return (
        <>
            <div>{me.nickname}</div>
            <button onClick={onLogout}>로그아웃</button>
        </>
    )
}

export default UserProfile;