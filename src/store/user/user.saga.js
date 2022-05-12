import { takeLatest, put, call, all } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";

import { signInSuccess, signInFailed } from "./user.action";

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );
    if (!userSnapshot.exists) return;
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
    if (!user) return;
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);

    if (!userAuth) {
      return;
    }

    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([call(onCheckUserSession), call(onGoogleSignInStart)]);
}
