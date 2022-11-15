import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.component";
const SignIn = () =>{
    const logGoogleUserPopup = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
        const userDocRef = await createUserDocumentFromAuth(response.user);
        console.log(userDocRef)
    }

    useEffect(async () =>{
        const response = await getRedirectResult(auth);
        console.log(response)
        if (response){
            const userDocRef = await createUserDocumentFromAuth(response.user);
            console.log(userDocRef)
        }
    },[]);

    return (
        <div>
            <h1>Sign In Page</h1>

            <SignUpForm/>
            <Button onClick={logGoogleUserPopup} children='Sign in with Google Popup' buttonType='google'/>
            <Button onClick={signInWithGoogleRedirect} children='Sign in With Google Redirect' buttonType='google'/>
        </div>
        
        

    )
}

export default SignIn;