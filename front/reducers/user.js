const dummyUser = {
    nickname: '보노보노',
    post: [],
    id: 1,
}

export const initialState = {
    isLoggedIn: false,
    isLoggingIn: false,
    isLoggingOut: false,
    logInErrorReason: '',
    isSignedUp: false,
    isSigningUp: false,
    signUpErrorReason: '',
    me: null,
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
    switch(action.type) {
        case LOG_IN_REQUEST: {
            return {
                ...state,
                isLoggingIn: true,
                logInErrorReason: '',
            }
        }

        case LOG_IN_SUCCESS: {
            return {
                ...state,
                isLoggedIn: true,
                isLoggingIn: false,
                me: dummyUser,
            }
        }

        case LOG_IN_FAILURE: {
            return {
                ...state,
                isLoggedIn: false,
                isLoggingIn: false,
                logInErrorReason: action.error,
                me: null,
            }

        }

        case LOG_OUT_REQUEST: {
            return {
                ...state,
                me: null,
            }
        }

        // case LOG_OUT_SUCCESS: {
        //     return {
        //         ...state,
        //         me: null,
        //     }
        // }

        // case LOG_OUT_FAILURE: {
        //     return {
        //         ...state,
        //     }
        // }

        case SIGN_UP_REQUEST: {
            return {
                ...state,
                isSigningUp: true,
                isSignedUp: false,
                signUpErrorReason: '',
            }
        }

        case SIGN_UP_SUCCESS: {
            return {
                ...state,
                isSigningUp: false,
                isSignedUp: true,
            }
        }

        case SIGN_UP_FAILURE: {
            return {
                ...state,
                isSigningUp: false,
                signUpErrorReason: action.data,
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
}