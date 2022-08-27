import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utilities/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDofRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign-in Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};
export default SignIn;
