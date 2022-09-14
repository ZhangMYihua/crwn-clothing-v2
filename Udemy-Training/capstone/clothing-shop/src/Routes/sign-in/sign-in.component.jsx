// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../Components/sign-up-form/sign-up-form.component";

import {
  //   auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  //   signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  //   useEffect(
  //     () => async () => {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //       }
  //     },
  //     []
  //   );

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />

      {/* <button onClick={signInWithGoogleRedirect}> */}
      {/* Sign in with Google Redirect
      </button> */}
    </div>
  );
};

export default SignIn;
