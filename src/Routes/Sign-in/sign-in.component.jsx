// track login
import { React, useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/Sign-up-form/sign-up-form-component';

import {
	auth,
	signInWithGooglePopup,
	signInWithGoogleRedirect,
	createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
	// go back to the page
	useEffect(async () => {
		const response = await getRedirectResult(auth);
		if (response) {
			const userDocRef = await createUserDocumentFromAuth(response.user);
			console.log(response.user);
		}
	}, []);
	//  creating a log google
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();

		const userDocRef = await createUserDocumentFromAuth(user);
		console.log(user);
	};

	return (
		<div>
			<button onClick={logGoogleUser}>sign with google pop up</button>
			<button onClick={signInWithGoogleRedirect}>
				sign with google redirect
			</button>
			<SignUpForm />
		</div>
	);
};

export default SignIn;
