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
    LOG_OUT_REQUEST

} from '../reducers/user';

// 로그인
function logInAPI(loginData) {
    // 서버에 요청을 보내는 부분
    return axios.post('/user/login', loginData, {
      withCredentials: true,
    });
  }
  
  function* logIn(action) {
    try {
      const result = yield call(logInAPI, action.data);
      yield put({ // put은 dispatch 동일
        type: LOG_IN_SUCCESS,
        data: result.data,
      });
    } catch (e) { // loginAPI 실패
      console.error(e);
      yield put({
        type: LOG_IN_FAILURE,
      });
    }
  }
  
  function* watchLogIn() {
    yield takeEvery(LOG_IN_REQUEST, logIn);
  }
// function loginAPI(loginData) {
//     return axios.post('/user/login', loginData, {
//         withCredentials: true,  
//     })
// }

// function* login(action) {
//     try {
//         const result = yield call(loginAPI, action.data)
//         yield put({
//             type: LOG_IN_SUCCESS,
//             data: result.data,
//         })
//     } catch(e) {
//         console.log(e);
//         console.error(e);
//         yield put({
//             type: LOG_IN_FAILURE,
//             error: e,
//         })
//     }
// }

// function* watchLogin() {
//     yield takeLatest(LOG_IN_REQUEST, login)
// }

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

export default function* userSage() {
    yield all([
        fork(watchLogIn),
        fork(watchSignUp),
        fork(watchLogOut),
    ])
}