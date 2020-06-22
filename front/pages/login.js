import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import LoginForm from '../containers/LoginForm';
import { LOG_IN_ERRORREASON_RESET_REQUEST } from '../reducers/user';

const Login = () => {
    const {  me } = useSelector(state => state.user);
    
    const dispatch = useDispatch();
    useEffect(() => {
        if (me) {
            Router.push('/');
        }
    }, [me && me.id])

  

    return (
        <>
            <LoginForm />
        </>
    )
}

export default Login;