import produce from 'immer';

export const initialState = {
    isLoggedIn: false, // 로그인 성공 여부
    isLoggingIn: false, // 로그인 진행중
    isLoggingOut: false, // 로그아웃 진행중
    logInErrorReason: '', // 로그인 실패 사유
    isSignedUp: false, // 회원가입 성공
    isSigningUp: false, // 회원가입 진행중
    signUpErrorReason: '',  // 회원사입 실패 사유
    me: null, // 내정보
}

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export default (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case LOG_IN_REQUEST: {
                draft.isLoggingIn = true;
                draft.logInErrorReason = '';
                break;
            }

            case LOG_IN_SUCCESS: {
                draft.isLoggedIn = true;
                draft.isLoggingIn = false;
                draft.me = action.data;
                break;
            }

            case LOG_IN_FAILURE: {
                draft.isLoggedIn = false;
                draft.isLoggingIn = false;
                draft.logInErrorReason = action.error;
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
                draft.signUpErrorReason = '';
                break;
            }

            case SIGN_UP_SUCCESS: {
                draft.isSigningUp = false;
                draft.isSignedUp = true;
                break;
            }

            case SIGN_UP_FAILURE: {
                draft.isSigningUp = false;
                draft.signUpErrorReason = action.data;
                break;
            }

            default: {
                break;
            }
        }
    })
}
