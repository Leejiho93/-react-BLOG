import produce from 'immer';

export const initialState = {
    allPosts: [], // 모든 게시글
    imagePaths: [], // 이미지 저장 주소
    addPostErrorReason: '', // 게시글 업로드 실패 사유
    isAddingPost: false, // 게시글 업로드 중
    postAdded: false, // 게시글 업로드 성공
    isAddingComment: false, // 댓글 업로드 중
    addCommentErrorReason: '', // 댓글 업로드 실패 사유
    commentAdded: false, // 댓글 업로드 성공
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE'

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export default (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case ADD_POST_REQUEST: {
                draft.isAddingPost = true;
                draft.addPostErrorReason = '';
                break;
            }

            case ADD_POST_SUCCESS: {
                draft.isAddingPost = false;
                draft.postAdded = true;
                draft.allPosts.unshift(action.data);
                break;
            }

            case ADD_POST_FAILURE: {
                draft.isAddingPost = false;
                draft.addPostErrorReason = action.data;
                break;
            }

            case ADD_COMMENT_REQUEST: {
                draft.isAddingComment = true;
                draft.addCommentErrorReason = '';
                break;
            }

            case ADD_COMMENT_SUCCESS: {
                draft.isAddingComment = false;
                draft.postAdded = true;
                break;
            }

            case ADD_COMMENT_FAILURE: {
                draft.isAddingComment = false;
                draft.addCommentErrorReason = action.data;
                break;
            }

            default: {
                break;
            }
        }
    })
}