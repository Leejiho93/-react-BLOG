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
    LOAD_POST_FAILURE,
    LOAD_MAIN_POSTS_REQUEST,
    LOAD_MAIN_POSTS_SUCCESS,
    LOAD_MAIN_POSTS_FAILURE,
    UPLOAD_IMAGES_REQUEST,
    UPLOAD_IMAGES_FAILURE,
    UPLOAD_IMAGES_SUCCESS,
    LOAD_COMMENTS_REQUEST,
    LOAD_COMMENTS_SUCCESS,
    LOAD_COMMENTS_FAILURE,
    LOAD_USER_POSTS_REQUEST,
    LOAD_USER_POSTS_FAILURE,
    LOAD_USER_POSTS_SUCCESS,
    REMOVE_POST_REQUEST,
    REMOVE_POST_SUCCESS,
    REMOVE_POST_FAILURE,
    REMOVE_COMMENT_REQUEST,
    REMOVE_COMMENT_SUCCESS,
    REMOVE_COMMENT_FAILURE
} from '../reducers/post';
import ActionButton from 'antd/lib/modal/ActionButton';


function addPostAPI(postData) {
    return axios.post('/post', postData, {
        withCredentials: true,
    });
}

function* addPost(action) {
    // console.log('add post action', action)
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


function addCommentAPI(data) {
    return axios.post(`/post/${data.postId}/comment`, { content: data.content}, {
        withCredentials: true,
    })
}

function* addComment(action) {
    try {
        const result = yield call(addCommentAPI, action.data);
        // console.log('addcomment result', result.data);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: {
                postId: action.data.postId,
                comment: result.data,
            }
        })
    } catch (e) {
        console.error(e);
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: e.response.data,
        })
    }
}

function loadPostAPI(postId) {
    return axios.get(`/post/${postId}`)
}

function* loadPost(action) {
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

// function loadCommentsAPI(postId) {
//     return axios.get(`/post/${postId}/comments`)
// }

// function* loadComments(action) {
//     try {
//         const result = yield call(loadCommentsAPI, action.data);
//         yield put({
//             type: LOAD_COMMENTS_SUCCESS,
//             comments: result.data,
//         })
//     } catch(e) {
//         console.error(e);
//         yield put({
//             type: LOAD_COMMENTS_FAILURE,
//             error: e,
//         })
//     }
// }

function loadMainPostsAPI() {
    return axios.get('/posts');
}

function* loadMainPosts() {
    try {
        const result = yield call(loadMainPostsAPI);
        yield put({
            type: LOAD_MAIN_POSTS_SUCCESS,
            data: result.data,
        })
    } catch(e) {
        yield put({
            type: LOAD_MAIN_POSTS_FAILURE,
            error: e,
        })
    }
}

function uploadImagesAPI(formData) {
    return axios.post('/post/images', formData, {
        withCredentials: true,
    });
}

function* uploadImages(action) {
    try {
        const result = yield call(uploadImagesAPI, action.data);
        console.log('upload image result', result.data);
        yield put({
            type: UPLOAD_IMAGES_SUCCESS,
            data: result.data,
        })
    } catch(e) {
        console.error(e);
        yield put({
            type: UPLOAD_IMAGES_FAILURE,
            error: e,
        })
    }
}

function loadUserPostsAPI(id) {
    return axios.get(`/user/${id || 0}/posts`)
}

function* loadUserPosts(action) {
    try {
        const result = yield call(loadUserPostsAPI, action.data);
        yield put({
            type: LOAD_USER_POSTS_SUCCESS,
            data: result.data,
        })
    } catch(e) {
        console.error(e);
        yield put({
            type: LOAD_USER_POSTS_FAILURE,
            error: e,
        })
    }
}

function removePostAPI(postId) {
    return axios.delete(`/post/${postId}`, {
        withCredentials: true,
    });
}

function* removePost(action) {
    try {
        const result = yield call(removePostAPI, action.data)
        yield put({
            type: REMOVE_POST_SUCCESS,
            data: result.data,
        })
    } catch(e) {
        console.error(e);
        yield put({
            type: REMOVE_POST_FAILURE,
            error: e,
        })
    }
}

function removeCommentAPI(data) {
   
    return axios.delete(`/post/${data.postId}/comment?commentId=${data.commentId}`, data, {
        withCredentials: true,
    });
}

function* removeComment(action) {
    try {
        const result = yield call(removeCommentAPI, action.data);
        console.log('result comment', result.data);
        yield put({
            type: REMOVE_COMMENT_SUCCESS,
            data: {
                postId: action.data.postId,
                commentId: result.data.commentId,
            },
        })
    } catch(e) {
        console.error(e);
        yield put({
            type: REMOVE_COMMENT_FAILURE,
            error: e,
        })
    } 
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

function* watchLoadPost() {
    yield takeLatest(LOAD_POST_REQUEST, loadPost);
}

// function* watchLoadComments() {
//     yield takeLatest(LOAD_COMMENTS_REQUEST, loadComments);
// }

function* watchLoadMainPosts() {
    yield takeLatest(LOAD_MAIN_POSTS_REQUEST, loadMainPosts);
}

function* watchUploadImages() {
    yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}

function* watchLoadUserPosts() {
    yield takeLatest(LOAD_USER_POSTS_REQUEST, loadUserPosts);
}

function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchRemoveComment() {
    yield takeLatest(REMOVE_COMMENT_REQUEST, removeComment);
}

export default function* postSage() {
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
        fork(watchLoadPost),
        // fork(watchLoadComments),
        fork(watchLoadMainPosts),
        fork(watchUploadImages),
        fork(watchLoadUserPosts),
        fork(watchRemovePost),
        fork(watchRemoveComment),
    ])
}

