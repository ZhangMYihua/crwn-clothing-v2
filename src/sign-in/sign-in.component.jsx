import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../components/sign-up-form/sign-up-form.component";
import {
    auth,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInWithGoogleRedirect
} from "../utils/firebase/firebase.utils";

const SignIn = () => {
    useEffect(async () => {
        const response = await getRedirectResult(auth);
        if (response) {
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }
    }, [])
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

     const logGoogleRedirectUser = async () => {
         const { user } = await signInWithGoogleRedirect();
         console.log({ user });
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <button onClick={logGoogleRedirectUser}>Sign in with Google Redirect</button>
            <SignUpForm/>
        </div>
    )
};

export default SignIn;