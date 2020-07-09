import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from '../../reducers/user';
import { ProfileWrapper } from './style';

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
            <ProfileWrapper>{me && me.nickname}</ProfileWrapper>
        </>
    )
}

export default UserProfile;