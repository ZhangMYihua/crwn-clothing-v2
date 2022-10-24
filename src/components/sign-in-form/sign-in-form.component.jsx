import { useState } from "react";
import {
    userDocFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";

const defaultFormFields = {
    email: "",
    password: "",
}
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await userDocFromAuth(user);
        console.log("userDocRef: ", userDocRef);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(email, password);
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            console.log(response);
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert("wrong password");
                    break;
                case "auth/user-not-found":
                    alert("User not found");
                    break;
                default:
                    console.log(error);
                    break;
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return ( 
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password.</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email:" type="email" required name="email" onChange={handleChange} value={email} />
                <FormInput label="Password:" type="password" required name="password" onChange={handleChange} value={password} />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button buttonType="google" type="button" onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
     );
}

export default SignInForm;