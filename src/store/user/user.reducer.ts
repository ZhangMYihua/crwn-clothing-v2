import { AnyAction } from "redux";
import { USER_ACTION_TYPES } from "./user.types";

import {
    signInFailed,
    signOutFailed,
    signUpFailed,
    signInSuccess,
    signOutSuccess,
} from "./user.action";
import { act } from "@testing-library/react";

const INITIAL_STATE = {
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

    if (signInFailed.match(action)) {
        return { ...state, error: action.payload };
    }
    if (signOutFailed.match(action)) {
        return { ...state, error: action.payload };
    }

    if (signUpFailed.match(action)) {
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
