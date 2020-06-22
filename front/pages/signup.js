import React from 'react';
import SignupForm from '../containers/SignupForm'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { LOG_IN_ERRORREASON_RESET_REQUEST } from '../reducers/user';

const Signup= () => {
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch({
          type: LOG_IN_ERRORREASON_RESET_REQUEST,
        })
    })
    return (
            <SignupForm />
    )
}

export default Signup;