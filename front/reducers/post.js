import produce from 'immer';

export const initialState = {
    allPosts: [
        // {
        //     id: 1,
        //     User: {
        //         id: 2,
        //         nickname: '보노보노'
        //     },
        //     title: '테크제목1',
        //     content: '테크내용1',
        //     category: 'tech',
        //     Comments: [],
        // },
        // {
        //     id: 2,
        //     User: {
        //         id: 2,
        //         nickname: '보노보노'
        //     },
        //     title: '토크1',
        //     content: '토크1@#$% 토크내용!!',
        //     category: 'talk',
        //     Comments: [],
        // },
        // {
        //     id: 3,
        //     User: {
        //         id: 2,
        //         nickname: '보노보노'
        //     },
        //     title: '테크제목2',
        //     content: '테크내용2 테크내용이 길면 height 테크내용이 길면 height 테크내용이 길면 height 테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용2 테크내용이 길면 height 테크내용이 길면 height 테크내용이 길면 height 테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height테크내용이 길면 height',
        //     category: 'tech',
        //     Comments: [],
        // },
        // {
        //     id: 4,
        //     User: { 
        //         id: 2,
        //         nickname: '보노보노'
        //     },
        //     title: '테크제목3',
        //     content: '테크내용3',
        //     category: 'tech',
        //     Comments: [],
        // },
        // {
        //     id: 5,
        //     User: {
        //         id: 2,
        //         nickname: '보노보노'
        //     },
        //     title: '다시 토크',
        //     content: '토크ㅁㄴㅇ',
        //     category: 'talk',
        //     Comments: [],
        // },
        // {
        //     id: 6,
        //     User: {
        //         id: 2,
        //         nickname: '보노보노'
        //     },
        //     title: '이건 갤러리1',
        //     content: '갤러리!!',
        //     category: 'gallery',
        //     Comments: [],
        // },
        // {
        //     id: 7,
        //     User: {
        //         id: 2,
        //         nickname: '보노보노'
        //     },
        //     title: '이건 갤러리1',
        //     content: '갤러리!!',
        //     category: 'gallery',
        //     Comments: [],
        // },
        // {
        //     id: 8,
        //     User: {
        //         id: 2,
        //         nickname: '보노보노'
        //     },
        //     title: '이건 갤러리1',
        //     content: '갤러리!!',
        //     category: 'gallery',
        //     Comments: [],
        // },
        // {
        //     id: 9,
        //     User: {
        //         id: 2,
        //         nickname: '보노보노'
        //     },
        //     title: '이건 갤러리1',
        //     content: '갤러리!!',
        //     category: 'gallery',
        //     Comments: [],
        // },
        // {
        //     id: 17,
        //     User: {
        //         id: 2,
        //         nickname: '보노보노'
        //     },
        //     title: '이건 갤러리1',
        //     content: '갤러리!!',
        //     category: 'gallery',
        //     Comments: [],
        // },
        // {
        //     id: 10,
        //     User: {
        //         id: 2,
        //         nickname: '보노보노'
        //     },
        //     title: '이건 갤러리1',
        //     content: '갤러리!!',
        //     category: 'gallery',
        //     Comments: [],
        // },
        // {
        //     id: 11,
        //     User: {
        //         id: 2,
        //         nickname: '보노보노'
        //     },
        //     title: '이건 갤러리1',
        //     content: '갤러리!!',
        //     category: 'gallery',
        //     Comments: [],
        // },
        // {
        //     id: 12,
        //     User: {
        //         id: 2,
        //         nickname: '보노보노'
        //     },
        //     title: '이건 갤러리1',
        //     content: '갤러리!!',
        //     category: 'gallery',
        //     Comments: [],
        // },
        // {
        //     id: 13,
        //     User: {
        //         id: 2,
        //         nickname: '보노보노'
        //     },
        //     title: '이건 갤러리444',
        //     content: '갤러리!!',
        //     category: 'gallery',
        //     Comments: [],
        // },
        // {
        //     id: 14,
        //     User: {
        //         id: 2,
        //         nickname: '보노보노'
        //     },
        //     title: '이건 갤러리1',
        //     content: '갤러리!!',
        //     category: 'gallery',
        //     Comments: [],
        // },
        // {
        //     id: 15,
        //     User: {
        //         id: 2,
        //         nickname: '보노보노'
        //     },
        //     title: '이건 갤러리1',
        //     content: '갤러리!!',
        //     category: 'gallery',
        //     Comments: [],
        // },
        // {
        //     id: 16,
        //     User: {
        //         id: 2,
        //         nickname: '보노보노'
        //     },
        //     title: '이건 갤러리1',
        //     content: '갤러리!!',
        //     category: 'gallery',
        //     Comments: [],
        // },
    ], // 모든 게시글
    imagePaths: [], // 이미지 저장 주소
    addPostError: null, // 게시글 업로드 실패 사유
    isAddingPost: false, // 게시글 업로드 중
    postAdded: false, // 게시글 업로드 성공
    isAddingComment: false, // 댓글 업로드 중
    addCommentError: null, // 댓글 업로드 실패 사유
    commentAdded: false, // 댓글 업로드 성공
    singlePost: null, 
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
export const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

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
                break;
            }

            case ADD_COMMENT_SUCCESS: {
                draft.isAddingComment = false;
                draft.postAdded = true;
                break;
            }

            case ADD_COMMENT_FAILURE: {
                draft.isAddingComment = false;
                draft.addCommentError = action.data;
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

            case LOAD_MAIN_POSTS_REQUEST: {
                break;   
            }

            case LOAD_MAIN_POSTS_REQUEST: {
                action.data.forEach((d) => {
                    draft.allPosts.push(d);
                })
                break;   
            }

            case LOAD_MAIN_POSTS_REQUEST: {
                break;   
            }

            default: {
                break;
            }
        }
    })
}