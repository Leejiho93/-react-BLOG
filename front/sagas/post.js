import {all, call, fork, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import { 
    ADD_POST_REQUEST, 
    ADD_POST_FAILURE, 
    ADD_POST_SUCCESS, 
    ADD_COMMENT_SUCCESS, 
    ADD_COMMENT_FAILURE, 
    ADD_COMMENT_REQUEST} from '../reducers/post';


function addPostAPI() {
    axios.post('post/id')
}

function* addPost() {
    try {
        yield delay(2000);
        put({
            type: ADD_POST_SUCCESS,
        })
    } catch(e) {
        console.error(e);
        put({
            type: ADD_POST_FAILURE,
        })
    }
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost)
}


function addCommentAPI() {
    
}

function* addComment() {
    try {
        yield delay(2000);
        put({
            type: ADD_COMMENT_SUCCESS,
        })
    } catch(e) {
        console.error(e);
        put({
            type: ADD_COMMENT_FAILURE,
        })
    }
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment)
}


export default function* postSage() {
    yield all([
        fork(watchAddPost),
        fork(watchAddComment)
    ])
}

