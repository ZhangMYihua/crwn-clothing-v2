import { useEffect } from 'react';

import { getRedirectResult } from 'firebase/auth';

// import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import { auth, signInWithGoogleRedirect, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

import './sign-in.styles.scss';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
    useEffect(() => {
        (async () => {
            const response = await getRedirectResult(auth);
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        })();
    }, []);

    // const logGoogleUserPopup = async () => {
    //     const { user } = await signInWithGooglePopup();
    //     const userDocRef = await createUserDocumentFromAuth(user);
    // };

    return (
        <div>
            <h1>Hello Sign In Page!</h1>
            <button onClick={signInWithGoogleRedirect}>Sign in with Google Using Redirect</button>
            <SignUpForm />
        </div>
    );
}

export default SignIn;