import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../reducers/user';
import Router from 'next/router';
import LoginForm from '../containers/LoginForm';
import SigninForm from '../containers/SigninForm';

const Login = () => {
    const {  me } = useSelector(state => state.user);

    useEffect(() => {
        if (me) {
            Router.push('/');
        }
    }, [me && me.id])

    return (
        <>
        <SigninForm />
            {/* <LoginForm /> */}
        </>
    )
}

export default Login;