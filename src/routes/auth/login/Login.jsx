// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import {
  // auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  // signInwithGoogleRedirect,
} from "../../../utils/firbase/firebaseutils";
import SignUpForm from "../Sign-up-form/SignUpForm";
function Login() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //         console.log(
  //           "userCreated  after signInwithGoogleRedirect",
  //           userDocRef
  //         );
  //       }
  //     } catch (error) {
  //       console.log("error from logincomponent", error);
  //     }
  //   };
  //   fetchData();
  //   // console.log("getUserRedirectResult", response);
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log("logGoogleUser", user);
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log("user created succesfuly in Firebase", userDocRef);
  };

  return (
    <>
      <div>
        <h1>Sign in page</h1>
        <button onClick={logGoogleUser}>sign in with google pop up </button>
        {/* <button onClick={signInwithGoogleRedirect}>
        sign in with google redirect
      </button> */}
      </div>
      <div>
        <SignUpForm />
      </div>
    </>
  );
}

export default Login;
