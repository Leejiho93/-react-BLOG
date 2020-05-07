import {all, delay, fork, put, takeLatest} from 'redux-saga/effects';
import { 
    SIGN_UP_REQUEST, 
    SIGN_UP_FAILURE, 
    SIGN_UP_SUCCESS, 
    LOG_IN_SUCCESS, 
    LOG_IN_FAILURE,
    LOG_IN_REQUEST} from '../reducers/user';


function loginAPI() {

}

function* login() {
    try {
        yield delay(2000);
        yield put({
            type: LOG_IN_SUCCESS,
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

function signUpAPI() {

}

function* signUp() {
    try {
        yield delay(2000);
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
        fork(watchSignUp)
    ])
}