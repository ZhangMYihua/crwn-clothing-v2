import { useEffect, useState } from 'react';

import { getRedirectResult } from 'firebase/auth';

import { auth, signInWithGoogleRedirect, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-in-form.styles.scss';

const userDefaults = {
    email: '',
    password: ''
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(userDefaults);
    const { email, password } = formFields;

    const resetFormField = () => {
        setFormFields(userDefaults);
    }

    const handleChange = event => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async event => {
        event.preventDefault();

        if (!email || !password) return;

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormField();
            console.log(user);
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    break;
                case 'auth/user-not-found':
                    break;
                default:
                    console.log(error);
            }
        }
    };

    useEffect(() => {
        (async () => {
            const response = await getRedirectResult(auth);
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        })();
    }, []);

    return (
        <div className='sign-in-container'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password, or with Google</span>
            <form onSubmit={handleSubmit}> 
                <FormInput label='Email' type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label='Password' type="password" required onChange={handleChange} name="password" value={password} />
                <div className='buttons-container'>
                    <Button>Sign in</Button>
                    <Button type='button' onClick={signInWithGoogleRedirect} buttonType='google-sign-in'>Sign in with Google</Button>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;