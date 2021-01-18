import produce from '../util/produce';

// const produce = require('immer');
export const initialState = {
    isLoggingIn: false, // 로그인 진행중
    isLoggingOut: false, // 로그아웃 진행중
    logInErrorReason: '', // 로그인 실패 사유
    isSignedUp: false, // 회원가입 성공
    isSigningUp: false, // 회원가입 진행중
    signUpError: null,  // 회원가입 실패 사유
    signUpIdError: null,  // 아이디 유효성 검사 실패
    signUpIdSuccess: null, // 아이디 유효성 검사 성공
    signUpNicknameError: null, // 닉네임 유효성 검사 실패 
    signUpNicknameSuccess: null, // 닉네임 유효성 검사 성공
    signUpPasswordError: null, // 비밀번호 유효성 검사 실패
    signUpPasswordSuccess: null, // 비밀번호 유효성 검사 성공
    me: null, // 내정보
}

export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const ID_CHECK_REQUEST = 'ID_CHECK_REQUEST';
export const ID_CHECK_SUCCESS = 'ID_CHECK_SUCCESS';
export const ID_CHECK_FAILURE = 'ID_CHECK_FAILURE';

export const NICKNAME_CHECK_REQUEST = 'NICKNAME_CHECK_REQUEST';
export const NICKNAME_CHECK_SUCCESS = 'NICKNAME_CHECK_SUCCESS';
export const NICKNAME_CHECK_FAILURE = 'NICKNAME_CHECK_FAILURE';

export const PASSWORD_CHECK_REQUEST = 'PASSWORD_CHECK_REQUEST';
export const PASSWORD_CHECK_SUCCESS = 'PASSWORD_CHECK_SUCCESS';
export const PASSWORD_CHECK_FAILURE = 'PASSWORD_CHECK_FAILURE';

export const LOG_IN_ERRORREASON_RESET_REQUEST = 'LOG_IN_ERRORREASON_RESET_REQUEST';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export default (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case LOG_IN_ERRORREASON_RESET_REQUEST: {
                draft.logInError = null;
                break;
            }

            case LOG_IN_REQUEST: {
                draft.isLoggingIn = true;
                draft.logInError = null;
                break;
            }

            case LOG_IN_SUCCESS: {
                draft.isLoggingIn = false;
                draft.me = action.data;
                break;
            }

            case LOG_IN_FAILURE: {
                draft.isLoggingIn = false;
                draft.logInError = action.reason;
                draft.me = null;
                break;
            }

            case LOG_OUT_REQUEST: {
                draft.isLoggingOut = true;
                break;
            }

            case LOG_OUT_SUCCESS: {
                draft.isLoggingOut = false;
                draft.me = null;
                break;
            }

            case SIGN_UP_REQUEST: {
                draft.isSigningUp = true;
                draft.isSignedUp = false;
                draft.signUpError = null;
                break;
            }

            case SIGN_UP_SUCCESS: {
                draft.isSigningUp = false;
                draft.isSignedUp = true;
                break;
            }

            case SIGN_UP_FAILURE: {
                draft.isSigningUp = false;
                draft.signUpError = action.reason;
                break;
            }

            case ID_CHECK_REQUEST: {
                draft.signUpIdError = null;
                draft.signUpIdSuccess = null;
                break;
            }

            case ID_CHECK_SUCCESS: {
                draft.signUpIdError = null;
                draft.signUpIdSuccess = action.data;
                break;
            }

            case ID_CHECK_FAILURE: {
                draft.signUpIdError = action.reason;
                draft.signUpIdSuccess = null;
                break;
            }

            case NICKNAME_CHECK_REQUEST: {
                draft.signUpNicknameError = null;
                draft.signUpNicknameSuccess = null;
                break;
            }

            case NICKNAME_CHECK_SUCCESS: {
                draft.signUpNicknameError = null;
                draft.signUpNicknameSuccess = action.data;
                break;
            }

            case NICKNAME_CHECK_FAILURE: {
                draft.signUpNicknameError = action.reason;
                draft.signUpNicknameSuccess = null;
                break;
            }

            case LOAD_MY_INFO_REQUEST: {
                break;
            }

            case LOAD_MY_INFO_SUCCESS: {
                draft.me = action.data;
            }

            case LOAD_MY_INFO_FAILURE: {
                break;
            }

            default: {
                break;
            }
        }
    })
}
