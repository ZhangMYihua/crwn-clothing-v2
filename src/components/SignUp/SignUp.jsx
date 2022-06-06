import React, { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.js';
import FormInput from '../../components/FormInput/FormInput';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};
const SignUp = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;
	console.log(formFields);
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}
		try {
			const { user } = await createAuthUserWithEmailAndPassword(email, password);
			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
		} catch (error) {
			console.log(error.message);
		}
	};
	return (
		<div>
			<h1>Sign up with your email and password</h1>
			<form onSubmit={handleSubmit}>
				<FormInput label='Display Name' required onChange={handleChange} name='displayName' value={displayName} />
				<FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} />
				<FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password} />
				<FormInput label='Confirm Password' type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
				<button type='submit'>Sign up</button>
			</form>
		</div>
	);
};

export default SignUp;
