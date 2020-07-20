import produce from '../util/produce';

export const initialState = {
    allPosts: [], // 모든 게시글
    imagePaths: [], // 이미지 저장 주소
    addPostError: null, // 게시글 업로드 실패 사유
    isAddingPost: false, // 게시글 업로드 중
    postAdded: false, // 게시글 업로드 성공
    isAddingComment: false, // 댓글 업로드 중
    addCommentError: null, // 댓글 업로드 실패 사유
    commentAdded: false, // 댓글 업로드 성공
    singlePost: null,
    removePost: false,
    removeComment: false,
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'

export const REMOVE_COMMENT_REQUEST = 'REMOVE_COMMENT_REQUEST';
export const REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS';
export const REMOVE_COMMENT_FAILURE = 'REMOVE_COMMENT_FAILURE';

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST'; 
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';

export const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
export const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';

export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export default (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case ADD_POST_REQUEST: {
                draft.isAddingPost = true;
                draft.addPostError = null;
                break;
            }

            case ADD_POST_SUCCESS: {
                draft.isAddingPost = false;
                draft.postAdded = true;
                draft.allPosts.unshift(action.data);
                draft.imagePaths = [];
                break;
            }

            case ADD_POST_FAILURE: {
                draft.isAddingPost = false;
                draft.addPostError = action.data;
                break;
            }

            case ADD_COMMENT_REQUEST: {
                draft.isAddingComment = true;
                draft.addCommentError = null;
                draft.commentAdded = false;
                break;
            }

            case ADD_COMMENT_SUCCESS: {
                const postIndex = draft.allPosts.findIndex(v => v.id === action.data.postId);
                draft.allPosts[postIndex].Comments.push(action.data.comment);
                draft.isAddingComment = false;
                draft.commentAdded = true;
                draft.postAdded = true;
                break;
            }

            case ADD_COMMENT_FAILURE: {
                draft.isAddingComment = false;
                draft.addCommentError = action.data;
                draft.commentAdded = false;
                break;
            }

            case LOAD_POST_REQUEST: {
                break;
            }

            case LOAD_POST_SUCCESS: {
                draft.singlePost = action.data;
                break;
            }

            case LOAD_POST_FAILURE: {
                break;
            }

            case LOAD_USER_POSTS_REQUEST:
            case LOAD_MAIN_POSTS_REQUEST: {
                draft.allPosts = [];
                // draft.mainPosts = !action.lastId ? [] : draft.mainPosts;
                break;   
            }

            case LOAD_USER_POSTS_SUCCESS:
            case LOAD_MAIN_POSTS_SUCCESS: {
                action.data.forEach((d) => {
                    draft.allPosts.push(d);
                })
                break;   
            }

            case LOAD_USER_POSTS_FAILURE:
            case LOAD_MAIN_POSTS_FAILURE: {
                break;   
            }

            case UPLOAD_IMAGES_REQUEST: {
                break;
            }

            case UPLOAD_IMAGES_SUCCESS: {
                action.data.forEach((p => {
                    draft.imagePaths.push(p);
                }))
                break;
            }

            case REMOVE_IMAGE: {
                const index = draft.imagePaths.findIndex((v, i) => i === action.index);
                draft.imagePaths.splice(index, 1);
                break;
            }

            case UPLOAD_IMAGES_FAILURE: {
                break;
            }

            case LOAD_USER_POSTS_REQUEST: {
                break;
            }

            case LOAD_USER_POSTS_SUCCESS: {
                break;
            }

            case LOAD_USER_POSTS_FAILURE: {
                break;
            }

            // case LOAD_COMMENTS_REQUEST: {
            //     break;
            // }

            // case LOAD_COMMENTS_SUCCESS: {
            //     const postIndex = draft.allPosts.findIndex(v => v.id === action.data.postId);
            //     draft.allPosts[postIndex].Comments = action.data.comments;
            //     break;
            // }

            // case LOAD_COMMENTS_FAILURE: {
            //     break;
            // }

            case REMOVE_POST_REQUEST: {
                draft.removePost = false;
                break;
            }

            case REMOVE_POST_SUCCESS: {
                const index = draft.allPosts.findIndex(v => v.id === action.data);
                draft.allPosts.splice(index, 1);
                draft.removePost = true;
                break;
            }

            case REMOVE_POST_FAILURE: {
                draft.removePost = false;
                break;
            }

            default: {
                break;
            }
        }
    })
}