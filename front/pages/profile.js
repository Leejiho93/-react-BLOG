import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { Button, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';
import  Router from 'next/router';


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
            <div>
                사용자 정보 프로필 화면
            </div>
        </>
    )
}

export default Profile;