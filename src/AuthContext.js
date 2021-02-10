import firebase from 'firebase/app';
import { createContext, useContext, useEffect, useReducer } from "react";

const AuthContext = createContext();

export const SIGN_IN_USER_SUCCESS = "SIGN_IN_USER_SUCCESS";
export const SIGN_IN_USER_ERROR = "SIGN_IN_USER_ERROR";
export const SIGN_OUT_USER = "SIGN_OUT_USER";

export function signInUserSuccess(user) {
   return { type: SIGN_IN_USER_SUCCESS, user };
}

export function signInUserError(error) {
    return { type: SIGN_IN_USER_ERROR, error };
}

export function signOutUser() {
    return { type: SIGN_OUT_USER };
}

export function AuthReducer(state, action) {
    switch (action.type) {
        case SIGN_IN_USER_SUCCESS:
            return { user: action.user, error: null };
        case SIGN_IN_USER_ERROR:
            return { user: null, error: action.error };
        case SIGN_OUT_USER:
            return { user: null, error: null };
        default:
            return state;
    }
}

function AuthProvider(props) {
    const [auth, dispatch] = useReducer(AuthReducer, { user: null, error: null});

    useEffect(async () => {
        let response = null;
        await firebase.auth().onAuthStateChanged((e) => response = e);
        response ? dispatch(signInUserSuccess(response)) : dispatch(signOutUser);
    }, [])

    return <AuthContext.Provider value={{ auth, dispatch }} {...props} />;
};

function useAuthContext() {
    return useContext(AuthContext);
}

export { AuthProvider, useAuthContext };