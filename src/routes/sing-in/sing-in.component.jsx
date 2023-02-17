import { signInWithGooglePopup, createUserDocumentFromAuth  } from "../../utils/firebase/firebase.utils";

const SingIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user)
  }

  return (
    <div>
      <h1>Sing In Page</h1>
      <button onClick={logGoogleUser}>
      sing-in
    </button>
    </div>
    
  );
};

export default SingIn;
