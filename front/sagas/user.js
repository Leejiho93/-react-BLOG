import axios from 'axios';
import {all, fork, put, takeLatest, call} from 'redux-saga/effects';
import { 
    SIGN_UP_REQUEST, 
    SIGN_UP_FAILURE, 
    SIGN_UP_SUCCESS, 
    LOG_IN_SUCCESS, 
    LOG_IN_FAILURE,
    LOG_IN_REQUEST

} from '../reducers/user';


function loginAPI(loginData) {
    return axios.post('/user/login', loginData, {
        withCredentials: true,  
    })
}

function* login(action) {
    try {
        const result = yield call(loginAPI, action.data)
        yield put({
            type: LOG_IN_SUCCESS,
            data: result.data,
        })
    } catch(e) {
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE,
            error: e,
        })
    }
}

function* watchLogin() {
    yield takeLatest(LOG_IN_REQUEST, login)
}

function logOutAPI() {
    return axios.post('/user/logOut', {
        withCredentials: true,
    })
}

function* logOut() {
    try {
        yield call(logOutAPI);
        yield put({
            type: LOG_IN_SUCCESS,
        });
    } catch(e) {
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE,
            error: e,
        })
    }
}

function* watchLogOut() {
    yield takeLatest(LOG_IN_REQUEST, logOut)
}

function signUpAPI() {
    return axios.post('/user/', signUpData)
}

function* signUp(action) {
    try {
        const result = yield call(signUpAPI, action.data);
        yield put({
            type: SIGN_UP_SUCCESS,
            data: result.data,
        })
    } catch(e) {
        console.error(e);
        yield put({
            type: SIGN_UP_FAILURE,
            error: e,
        })
    }
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp)
}

export default function* userSage() {
    yield all([
        fork(watchLogin),
        fork(watchSignUp),
        fork(watchLogOut),
    ])
}