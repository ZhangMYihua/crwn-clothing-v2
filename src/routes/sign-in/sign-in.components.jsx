import { signInWithGooglePopup } from "../../utils/firebase/firebase.utlis";

const SingIn = () => {
  const logGoogleUser = async () => {
    // need to understand that one
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>This is the sign-in page</h1>
      <button onClick={logGoogleUser}>Sign with the Google Popup</button>
    </div>
  );
};
export default SingIn;
