import { signInWithGooglePopup, userDocFromAuth } from "../../utils/firebase/firebase.utils"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
    const signInGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await userDocFromAuth(user);
        console.log("userDocRef: ", userDocRef);
    }
    return (
        <div>
            <h1>sign in page</h1>
            <button onClick={signInGoogle}>Google login</button>
            <SignUpForm/>
        </div>
      );
}

export default SignIn;