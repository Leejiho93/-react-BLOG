import produce from 'immer';

const dummyPost = {
    id: 2,
    User: {
        id: 1,
        nickname: '제로초',
    },
    content: '나는 더미입니다.',
    comments: [],
};

const dummyComment = {
    id: 1,
    User: {
        id: 1,
        nickname: '포로리',
    },
    createdAt: new Date(),
    content: '더미 댓글입니다.',
};


export const initialState = {
    allPosts: [],
    imagePaths: [],
    addPostErrorReason: '',
    isAddingPost: false,
    postAdded: false,
    isAddingComment: false,
    addCommentErrorReason: '',
    commentAdded: false,
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
                draft.allPosts.unshift(dummyPost);
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