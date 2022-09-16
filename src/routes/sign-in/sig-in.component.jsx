import {
  signInWithGooglePopup,
  createUserFromAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserFromAuth(user);
  };
  return (
    <div>
      <button onClick={logGoogleUser}>SIGN IN</button>
      sig-in.component
    </div>
  );
};

export default SignIn;
