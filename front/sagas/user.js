import axios from 'axios';
import {all, fork, put, takeLatest, call, takeEvery} from 'redux-saga/effects';
import { 
    SIGN_UP_REQUEST, 
    SIGN_UP_FAILURE, 
    SIGN_UP_SUCCESS, 
    LOG_IN_SUCCESS, 
    LOG_IN_FAILURE,
    LOG_IN_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
    LOG_OUT_REQUEST,
    ID_CHECK_SUCCESS,
    ID_CHECK_FAILURE,
    ID_CHECK_REQUEST,
    NICKNAME_CHECK_SUCCESS,
    NICKNAME_CHECK_FAILURE,
    NICKNAME_CHECK_REQUEST

} from '../reducers/user';

// 로그인
function logInAPI(loginData) {
    return axios.post('/user/login', loginData, {
      withCredentials: true,
    });
  }
  
  function* logIn(action) {
    try {
      const result = yield call(logInAPI, action.data);
      yield put({ 
        type: LOG_IN_SUCCESS,
        data: result.data,
      });
    } catch (e) { 
      console.error(e);
      yield put({
        type: LOG_IN_FAILURE,
        reason: e.response && e.response.data,
      });
    }
  }
  
  function* watchLogIn() {
    yield takeEvery(LOG_IN_REQUEST, logIn);
  }

// 로그아웃
function logOutAPI() {
    return axios.post('/user/logOut', {}, {
        withCredentials: true,
    })
}

function* logOut() {
    try {
        yield call(logOutAPI);
        yield put({
            type: LOG_OUT_SUCCESS,
        });
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

// 회원가입
function signUpAPI(signUpData) {
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

// 아이디 유효성 검사
function signUpIdCheckAPI(id) {
    return axios.post('/user/checkid', id)
}

function* signUpIdCheck(action) {
    try {
        const result = yield call(signUpIdCheckAPI, action.data);
        yield put({
            type: ID_CHECK_SUCCESS,
            data: result.data,
        })
    } catch(e) {
        console.error(e);
        yield put({
            type: ID_CHECK_FAILURE,
            reason: e.response && e.response.data,
        })
    }
}

function* watchSignUpIdCheck() {
    yield takeLatest(ID_CHECK_REQUEST, signUpIdCheck)
}

//닉네임 유효성검사
function signUpNicknameCheckAPI(nickname) {
    return axios.post('/user/checknickname', nickname)
}

function* signUpNicknameCheck(action) {
    try {
        const result = yield call(signUpNicknameCheckAPI, action.data);
        yield put({
            type: NICKNAME_CHECK_SUCCESS,
            data: result.data,
        })
    } catch(e) {
        console.error(e);
        yield put({
            type: NICKNAME_CHECK_FAILURE,
            reason: e.response && e.response.data,
        })
    }
}

function* watchSignUpNicknameCheck() {
    yield takeLatest(NICKNAME_CHECK_REQUEST, signUpNicknameCheck)
}

export default function* userSage() {
    yield all([
        fork(watchLogIn),
        fork(watchSignUp),
        fork(watchLogOut),
        fork(watchSignUpIdCheck),
        fork(watchSignUpNicknameCheck),
    ])
}