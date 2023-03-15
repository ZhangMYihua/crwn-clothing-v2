import { USER_ACTION_TYPES } from "./user.types";
import {
    ActionWithPayload,
    Action,
    createAction,
    withMatcher,
} from "../../utils/reducer/reducer.utils";
import { User } from "firebase/auth";

// ********   Types **************
// **** types for reducer****
export type SignInSuccess = ActionWithPayload<
    USER_ACTION_TYPES.SIGN_IN_SUCCESS,
    User
>;

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;

export type SignInFailed = ActionWithPayload<
    USER_ACTION_TYPES.SIGN_IN_FAILED,
    Error
>;
export type SignUpFailed = ActionWithPayload<
    USER_ACTION_TYPES.SIGN_UP_FAILED,
    Error
>;
export type SignOutFailed = ActionWithPayload<
    USER_ACTION_TYPES.SIGN_OUT_FAILED,
    Error
>;

// ----------- finished types for reducer -------

export type SetCurrentUser = ActionWithPayload<
    USER_ACTION_TYPES.SET_CURRENT_USER,
    User
>;

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

// ********   Actions ********************

export const setCurrentUser = (user: User) =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = () =>
    createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () =>
    createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email: string, password: string) =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = withMatcher(
    (user: User): SignInSuccess =>
        createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
);

export const signInFailed = withMatcher(
    (error: Error): SignInFailed =>
        createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
);

export const signUpStart = (
    email: string,
    password: string,
    displayName: string
) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_START, {
        email,
        password,
        displayName,
    });

export const signUpSuccess = (user: User, additionalDetails: string) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {
        user,
        additionalDetails,
    });

export const signUpFailed = withMatcher(
    (error: Error): SignUpFailed =>
        createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
);

export const signOutStart = () =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = withMatcher(
    (): SignOutSuccess => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
);

export const signOutFailed = withMatcher(
    (error: Error): SignOutFailed =>
        createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)
);
