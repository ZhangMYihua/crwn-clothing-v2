import { AnyAction } from "redux";

import {
    signInFailed,
    signOutFailed,
    signUpFailed,
    signInSuccess,
    signOutSuccess,
} from "./user.action";

import { UserData } from "../../utils/firebase/firebase.utils";

export type UserState = {
    readonly currentUser: UserData | null;
    readonly isLoading: boolean;
    readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
    currentUser: null,
    isLoading: false,
    error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
    if (signInSuccess.match(action)) {
        return { ...state, currentUser: action.payload };
    }
    if (signOutSuccess.match(action)) {
        return { ...state, currentUser: null };
    }

    if (
        signInFailed.match(action) ||
        signOutFailed.match(action) ||
        signUpFailed.match(action)
    ) {
        return { ...state, error: action.payload };
    }
    return state;

    // switch (type) {
    //     case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
    //         return { ...state, currentUser: payload };
    //     case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:

    //     case USER_ACTION_TYPES.SIGN_OUT_FAILED:
    //     case USER_ACTION_TYPES.SIGN_IN_FAILED:
    //     case USER_ACTION_TYPES.SIGN_UP_FAILED:
    // return { ...state, error: payload };
    //     default:
    //         return state;
    // }
};
