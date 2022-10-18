import { signInWithGooglePopup, userDocFromAuth } from "../../utils/firebase/firebase.utils"
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
        </div>
      );
}

export default SignIn;