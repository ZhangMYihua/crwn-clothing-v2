import React from "react";
import { signInWithGooglePopup } from "../../../utils/firbase/firebaseutils";
function Login() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>sign in with google pop up </button>
    </div>
  );
}

export default Login;
