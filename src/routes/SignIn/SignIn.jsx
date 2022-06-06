import React, { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect, auth } from '../../utils/firebase/firebase.js';
import SignUp from '../../components/SignUp/SignUp';
import Button from '../../components/Button/Button';
const SignIn = () => {
	const logGoogleUser = async () => {
		const response = await signInWithGooglePopup();
		await createUserDocumentFromAuth(response.user);
	};
	// const logGoogleRedirectUser = async () => {
	// 	const response = await signInWithGoogleRedirect();
	// 	//we wont see a console.log becase google will redirect without thinking about our app state
	// 	//so this logGoogleRedirectUser will not be trigger when this happens
	// 	console.log(response.user);
	// 	// await createUserDocumentFromAuth(response.user);
	// };

	async function redirectResultFromGoogle() {
		//auth will track of all the authentication regardless where our app is going
		const result = await getRedirectResult(auth);

		if (result) {
			await createUserDocumentFromAuth(result.user);
		}
	}
	useEffect(() => {
		redirectResultFromGoogle();
	});
	return (
		<>
			<div>SignIn</div>
			{/* <button onClick={logGoogleUser}>SignIn with google</button> */}
			<Button buttonType='google' onClick={signInWithGoogleRedirect}>
				SignIn with google
			</Button>
			{/* <Button buttonType='google' onClick={signInWithGoogleRedirect}>
				SignIn with google redirect
			</Button> */}
			{/* <button onClick={signInWithGoogleRedirect}>SignIn with google redirect</button> */}
			<SignUp />
		</>
	);
};

export default SignIn;
