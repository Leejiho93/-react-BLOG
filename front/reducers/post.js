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
    allPosts: [{
        id: 1,
        title: '첫번째 글',
        kategorie: null,
        User: {
            id: 1,
            nickname: '보노보노'
        },
        content: '',
        img: '',
        comments: [],
    },
    {
        id: 2,
        title: '두번째 글',
        kategorie: null,
        User: {
            id: 1,
            nickname: '보노보노'
        },
        content: '',
        img: '',
        comments: [],
    },
    {
        id: 3,
        title: '세번째 글',
        kategorie: null,
        User: {
            id: 1,
            nickname: '보노보노'
        },
        content: '',
        img: '',
        comments: [],
    },
    {
        id: 4,
        title: '네번째 글',
        kategorie: null,
        User: {
            id: 1,
            nickname: '보노보노'
        },
        content: '',
        img: '',
        comments: [],
    },
    {
        id: 5,
        title: '다섯번째 글',
        kategorie: null,
        User: {
            id: 1,
            nickname: '보노보노'
        },
        content: '',
        img: '',
        comments: [],
    }],
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
    switch (action.type) {
        case ADD_POST_REQUEST: {
            return {
                ...state,
                isAddingPost: true,
                addPostErrorReason: '',
            }
        }

        case ADD_POST_SUCCESS: {
            return {
                ...state,
                isAddingPost: false,
                postAdded: true,
                allPosts: [dummyPost, ...allPosts],
            }
        }

        case ADD_POST_FAILURE: {
            return {
                ...state,
                isAddingPost: false,
                addPostErrorReason: action.data,
            }
        }

        case ADD_COMMENT_REQUEST: {
            return {
                ...state,
                isAddingComment: true,
                addCommentErrorReason: '',
            }
        }

        case ADD_COMMENT_SUCCESS: {
            return {
                ...state,
                isAddingComment: false,
                postAdded: true,
            }
        }

        case ADD_COMMENT_FAILURE: {
            return {
                ...state,
                isAddingComment: false,
                addCommentErrorReason: action.data,
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
}