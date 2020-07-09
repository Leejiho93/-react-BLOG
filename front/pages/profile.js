import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';
import Router from 'next/router';
import UserProfile from '../containers/UserProfile';


const Profile = () => {
    const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

    const [color, setColor] = useState(ColorList[1]);
    const { me } = useSelector(state => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!me) {
            Router.push('/');
        }
    }, [me && me.id])


    return (
        <>

            <UserProfile />

        </>
    )
}

export default Profile;