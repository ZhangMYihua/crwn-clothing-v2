import React from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.js';
const SignIn = () => {
	const logGoogleUser = async () => {
		const response = await signInWithGooglePopup();
		console.log(response);
		await createUserDocumentFromAuth(response.user);
	};
	return (
		<>
			<div>SignIn</div>
			<button onClick={logGoogleUser}>SignIn with google</button>
		</>
	);
};

export default SignIn;
