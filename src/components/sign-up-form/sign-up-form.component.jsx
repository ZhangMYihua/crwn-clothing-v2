import { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { SignUpContainer } from './sign-up-form.styles.jsx';

import { checkPassword } from '../../utils/javascript/passwordCheck.utils';

import { signUpStart } from '../../store/user/user.action';

const userDefaults = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const dispatch = useDispatch();

    const [formFields, setFormFields] = useState(userDefaults);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormField = () => {
        setFormFields(userDefaults);
    }

    const handleChange = event => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) return;
        if (!checkPassword(password)) return;

        try {
            dispatch(signUpStart(email, password, displayName));
            resetFormField();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') { 
                // Error handling here
            } else {
                console.error(`ERR: USER CREATION FAILED - ${error}`);
            }
        }
    };

    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' type="text" required onChange={handleChange} name="displayName" value={displayName} />

                <FormInput label='Email' type="email" required onChange={handleChange} name="email" value={email} />

                <FormInput label='Password' type="password" required onChange={handleChange} name="password" value={password} />

                <FormInput label='Confirm Password' type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    );
}

export default SignUpForm;