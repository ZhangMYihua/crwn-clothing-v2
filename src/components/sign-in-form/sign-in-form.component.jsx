import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";

import {
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const { setCurrentUser } = useContext(UserContext);

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
		console.log(userDocRef);
	};

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { user } = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);
			setCurrentUser(user);
			resetFormFields();
		} catch (error) {
			if (error) {
				alert(error.code.split("/")[1]);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};
	return (
		<div className="sign-in-container">
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					type="email"
					required
					onChange={handleChange}
					name="email"
					value={email}
				/>

				<FormInput
					label="Password"
					type="password"
					required
					onChange={handleChange}
					name="password"
					value={password}
				/>
				<div className="buttons-container">
					<Button type="submit">Sign In</Button>

					{/* button component doesn't work for the google button */}
					<button
						onClick={signInWithGoogle}
						className="button-container google-sign-in"
						type="button"
					>
						Google Sign In
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
