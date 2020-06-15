import {all, fork, put, takeLatest, call} from 'redux-saga/effects';
import { 
    SIGN_UP_REQUEST, 
    SIGN_UP_FAILURE, 
    SIGN_UP_SUCCESS, 
    LOG_IN_SUCCESS, 
    LOG_IN_FAILURE,
    LOG_IN_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
    LOG_OUT_REQUEST
} from '../reducers/user';
import axios from 'axios'

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

function logOutAPI(logOutData) {
    return axios.post('/user/logOut', logOutData, {
        withCredentials: true,  
    })
}

function* logOut(action) {
    try {
        const result = yield call(logOutAPI, action.data)
        yield put({
            type: LOG_OUT_SUCCESS,
            data: result.data,
        })
    } catch(e) {
        console.error(e);
        yield put({
            type: LOG_OUT_FAILURE,
            error: e,
        })
    }
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut)
}

function signUpAPI() {
    return axios.post('/user/', signUpData)
}

function* signUp(action) {
    try {
        yield call(signUpAPI, action.data);
        yield put({
            type: SIGN_UP_SUCCESS,
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