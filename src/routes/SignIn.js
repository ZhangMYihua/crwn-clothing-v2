import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../utils/firebase";
import SignUpForm from "../components/SignUpForm";
const SignIn = () => {
  const logGoogleuser = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log(response);
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log(user);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleuser}>Sign In With Google</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign In With GoogleRedirect
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
