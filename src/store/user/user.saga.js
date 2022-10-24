import purgeStoredState from "redux-persist/es/purgeStoredState";

import {takeLatest,put,call,all} from 'redux-saga/effects';

import { USER_ACTION_TYPES } from "./user.types";

import { 
    signInSuccess, 
    signInFailed,
    signUpFailed, 
    signUpSuccess,
    signOutSuccess,
    signOutFailed
} from "./user.action";

import { 
        createUserDocumentFromAuth, 
        getCurrentUser,
        signInWithGooglePopup,
        signInAuthUserWithEmailAndPassword,
        createAuthUserWithEmailAndPassword,
        signOutUser,
        
    } from "../../utils/firebase/firebase.utils";



export function* signOut(){
   
    try{
        yield call(signOutUser);
        yield put(signOutSuccess()); 
    }catch(error){
        yield put(signOutFailed(error))

    }
}


export function* onSignOutStart(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
    
}


// ----------------------------------------------------

export function* signInAfterSignUp({payload:{user,additionalDetails}}){
   
        yield call(getSnapshotFromUserAuth,user,additionalDetails)
    
}

export function* onSignUpSuccess(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}


    // -----------------------------------------------


export function* signUp({payload:{email,password,displayName}}){
    try{
        const {user} = yield call(createAuthUserWithEmailAndPassword,email,password)
        yield put(signUpSuccess(user,{displayName}))
        
    }catch(error){
        put(signUpFailed(error))
    }
}

export function* onSignUpStart(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START,signUp)
}

    // -----------------------------------------

export function* signInWithEmail(action){
    const {payload:{email,password}} = action
    try{
        const {user} = yield call(signInAuthUserWithEmailAndPassword,email,password);
        yield call(getSnapshotFromUserAuth,user);
    }catch(error){
        yield put(signInFailed(error));

    }
}

export function* onEmailSignIn(){
    yield takeLatest(USER_ACTION_TYPES.EMAIL__SIGN_IN_START,signInWithEmail)
}

// -------------------------------------------------

export function* signInWithGoogle(){
try{
const {user}=yield call(signInWithGooglePopup);
yield call(getSnapshotFromUserAuth,user)
}catch(error){
yield put(signInFailed(error));
}
}


export function* onGoogleSignInStart(){
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START,signInWithGoogle)
}

// ----------------------------------------------
export function* getSnapshotFromUserAuth(userAuth,additionalDetails){
try{
    const userSnapshot = yield call(createUserDocumentFromAuth, userAuth,additionalDetails);

    
    yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    
} catch(error){
    yield put(signInFailed(error));
}
}

export function* isUserAuthinticated(){
try{
    const userAuth = yield call(getCurrentUser);
    
    if(!userAuth) return;
    yield call(getSnapshotFromUserAuth,userAuth);

} catch(error){
    yield put(signInFailed(error));
}
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION,isUserAuthinticated )
}

export function* userSagas(){
    yield all([
        call(onCheckUserSession), 
        call(onGoogleSignInStart),
        call(onEmailSignIn),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onSignOutStart),
        
    ]);
}

 