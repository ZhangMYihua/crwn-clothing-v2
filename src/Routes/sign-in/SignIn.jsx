import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../Components/sign-up-form/SignUpForm";


export const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        console.log(user)
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return (
        <div>
            <h1>SIGN IN PAGE</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button><br/>
            <SignUpForm />
        </div>
    )
}