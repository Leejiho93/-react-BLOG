import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
    ADD_POST_REQUEST,
    ADD_POST_FAILURE,
    ADD_POST_SUCCESS,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILURE,
    ADD_COMMENT_REQUEST,
    LOAD_POST_REQUEST,
    LOAD_POST_SUCCESS,
    LOAD_POST_FAILURE
} from '../reducers/post';


function addPostAPI(postData) {
    return axios.post('/post', postData, {
        withCredentials: true,
    });
}

function* addPost(action) {
    console.log('add post action', action)
    try {
        // console.log('add post action', action)
        const result = yield call(addPostAPI, action.data);
        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data,
        });
    } catch (e) {
        yield put({
            type: ADD_POST_FAILURE,
            error: e.response && e.response.data,
        });
        // alert(e.response && e.response.data);
    }
}


function addCommentAPI() {

}

function* addComment() {
    try {
        yield delay(2000);
        put({
            type: ADD_COMMENT_SUCCESS,
        })
    } catch (e) {
        console.error(e);
        put({
            type: ADD_COMMENT_FAILURE,
        })
    }
}

function loadPostAPI(data) {
    return axios.get(`/post/${data}`)
}

function* loadPost() {
    try {
        const result = yield call(loadPostAPI, action.data);
        yield put({
            type: LOAD_POST_SUCCESS,
            data: result.data,
        })
    } catch (e) {
        yield put({
            type: LOAD_POST_FAILURE,
            data: e.response.data,
        })
    }
}

function* watchAddPost() {
    console.log('watch add Post')
    yield takeLatest(ADD_POST_REQUEST, addPost)
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment)
}

function* watchLoadPost() {
    yield takeLatest(LOAD_POST_REQUEST, loadPost)
}


export default function* postSage() {
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
        fork(watchLoadPost)
    ])
}

