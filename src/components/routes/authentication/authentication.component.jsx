// import {useEffect} from 'react';
// import {getRedirectResult} from 'firebase/auth'
// import { signInWithGooglePopup, createUserDocumentFromAuth, 
//     //auth
//      } from "../../../utils/firebase/firebase.utils";
import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sign-in-form/sign-in-form.component"
import './authentication.styles.scss'

const Authentication = () =>{
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //     console.log(response)
    // }, []);

    // const logGoogleUser = async () => {
    //     const {user} = await signInWithGooglePopup();
    //     createUserDocumentFromAuth(user);
    // };

   

    return(
        <div className="authentication-container">
            <SignInForm/>
            {/* <button onClick={logGoogleUser}>
                Sign in with Google Popup </button> */}
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Redirect
            </button> */}
            <SignUpForm/>
        </div>
    )
}


export default Authentication;