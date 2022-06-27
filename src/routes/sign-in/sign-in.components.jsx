
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

export const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </>
  );
};