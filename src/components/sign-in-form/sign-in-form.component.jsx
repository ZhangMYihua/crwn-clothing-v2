import React, {useState, useContext} from 'react';

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import {
    signInWithAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import './sign-in-form.styles.scss';
import { UserContext } from '../../contexts/user.context';


// create object
const defaultFormFields = {
    email: '',
    password: '',
}
const signInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    // destruct the object
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        const { user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInWithAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields()
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                  alert('incorrect password for email');
                  break;
                case 'auth/user-not-found':
                  alert('no user associated with this email');
                  break;
                default:
                  console.log(error);
              }
            }
    }

    // general function
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value })
    }

    return (
        <div className='sign-up-container'>
            <h2>You already have an account</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                label='Email' 
                type='email' 
                required 
                onChange={handleChange} 
                name="email" 
                value={email}
                />
                <FormInput 
                label='Password' 
                type='password' 
                required
                onChange={handleChange}
                name="password"
                value={password}
                />
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>
                        Google Sign In
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default signInForm;