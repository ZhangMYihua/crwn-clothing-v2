import {auth,
        signInWithGooglePopup,
        createUserDocumentFromAuth,
        signInWithGoogleRedirect} 
from '../../../utils/firebase/firebase.utils'
import { getRedirectResult } from 'firebase/auth';
import { useEffect } from 'react';
import SignUpForm from '../../sign-up/sign-up-form/Sign-up-form.component';

const SignIn =()=> {
    useEffect( async ()=>{
        const responce = await getRedirectResult(auth)
        if (responce) {const userDocRef = await createUserDocumentFromAuth(responce.user);}
    }, [])

    const logGoogleUser = async()=> {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(user)
    }
    // const logGoogleRedirectUser = async()=> {
    //     const {user} = await signInWithGoogleRedirect();
    //     // const userDocRef = await createUserDocumentFromAuth(user);
    // }
    return (
        <div>
            <h1>sign in</h1>
            <button onClick ={logGoogleUser}>sign in with google popup</button>
            <button onClick ={signInWithGoogleRedirect}>sign in with google redirect</button>
            <SignUpForm/>
        </div>
        
    )
} 
export default SignIn