// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import {
	// auth,
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	// signInGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
	// useEffect(async () => {
	// 	const response = await getRedirectResult(auth);
	// 	if (response) {
	// 		const userDocRef = await createUserDocumentFromAuth(response.user);
	// 	}
	// }, []);

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h1>Sign in Page</h1>
			<button onClick={logGoogleUser}>Sign in with Google</button>
			<SignUpForm />
		</div>
	);
};

export default SignIn;
