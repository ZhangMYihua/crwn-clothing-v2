import { useState } from 'react';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';
import Button from '../button/Button';
import FormInput from '../form-input/FormInput';
import './signup-form.scss'

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: ''
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = event => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = async event => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = formFields;
		if (password !== confirmPassword) {
			alert('Passwords do not match!');
			return;
		}
		try {
			const { user } = await createAuthUserWithEmailAndPassword(email, password); //Returns an authenticated User object.
			user.displayName = displayName;
			await createUserDocumentFromAuth(user); //Create a user document in firebase Auth for the newly created user
			resetFormFields();
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('Cannot create user. Email already in use');
			} else {
				console.log('User creation failed', error.message);
			}
		}
	};

	return (
		<div className='signup-container'>
            <h2>Dont have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					type="text"
					required
					name="displayName"
					value={displayName}
					onChange={handleChange}
				/>
				<FormInput
					label="Email"
					type="email"
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
				<FormInput
					label=" Confirm password"
					type="password"
					required
					name="confirmPassword"
					value={confirmPassword}
					onChange={handleChange}
				/>
				<Button type="submit">Sign up</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
