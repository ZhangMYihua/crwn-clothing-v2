import SignUpForm from '../../components/sign-up-form/SignUpForm';
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup(); //Returns a response object with a nested 'user' object which contains data needed for creating user document in firestore
        await createUserDocumentFromAuth(user);
    }
  return (
		<div>
			<h1>This is the Sign in page</h1>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <SignUpForm />
		</div>
  );
}

export default SignIn
