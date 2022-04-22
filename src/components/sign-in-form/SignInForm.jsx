import { useState } from 'react';
import {
	signInAuthUserWithemailAndPassword,
	signInWithGooglePopup,
	createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';
import Button from '../button/Button';
import FormInput from '../form-input/FormInput';
import './sign-in-form.scss';

const defaultFormFields = {
	email: '',
	password: ''
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = event => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = async event => {
		event.preventDefault();
		const { email, password } = formFields;
		if (!email || !password) return;
		try {
			const response = await signInAuthUserWithemailAndPassword(email, password);
			console.log(response);
			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert('Incorrect email or password');
					break;
				case 'auth/user-not-found':
					alert('No user associated with this email');
					break;
				default:
					console.log(error);
			}
		}
	};

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup(); //Returns a response object with a nested 'user' object which contains data needed for creating user document in firestore
		await createUserDocumentFromAuth(user);
	};

	return (
		<div className="signup-container">
			<h2>Already have an account?</h2>
			<span>Sign in with email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					type="text"
					required
					name="email"
					value={email}
					onChange={handleChange}
				/>
				<FormInput
					label="Password"
					type="password"
					required
					name="password"
					value={password}
					onChange={handleChange}
				/>
				<div className="buttons-container">
					<Button type="submit">Sign in</Button>
					<Button type="button" buttonType="google" onClick={logGoogleUser}>
						Google sign in
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
