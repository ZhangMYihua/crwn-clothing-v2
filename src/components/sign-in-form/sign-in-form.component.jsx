import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";


import './sign-in-form.style.scss';

const defaultFormFields = {
    email: "",
    password: "",
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password)

            resetFormFields()
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert('Invalid Password')
                    resetFormFields()
                    break;
                case "auth/user-not-found":
                    alert('User not found!!')
                    resetFormFields()
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target; //* name & value is a props in input.

        setFormFields({
            ...formFields,
            [name]: value
        })
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit} >

                <FormInput
                    type="email"
                    label="Email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email} />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password} />

                <div className="buttons-container">
                    <Button type="submit" >Sign In</Button>
                    <Button type="button" buttonType={"google"} onClick={signInWithGoogle} >Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;