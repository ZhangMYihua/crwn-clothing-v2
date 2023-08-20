import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from "../form-input/form-input.component";

import './sign-up-form.style.scss'
import Button from "../button/button.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formField, setFormField] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formField;

    console.log(formField);

    const resetFormField = () => {
        setFormField(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Password do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormField();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user email already to use');
            } else {
                console.log('User creation encontered an error', error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormField({ ...formField, [name]: value })

    }
    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <h1>Sign-In Up With Your Email and Password</h1>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name'
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />

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

                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
}

export default SignUpForm;