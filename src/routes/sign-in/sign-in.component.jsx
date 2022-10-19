import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, userDocFromAuth } from "../../utils/firebase/firebase.utils"

const SignIn = () => {
    useEffect ( () => {
        async function fetchData() {
            const response = await getRedirectResult(auth);
            if (response) {
              const userDocRef = await userDocFromAuth(response.user);
              console.log("userDocRef: ", userDocRef);
            }
        }
        fetchData();
    }, [])
    
    const signInGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await userDocFromAuth(user);
        console.log("userDocRef: ", userDocRef);
    }
    return (
        <div>
            <h1>sign in page</h1>
            <button onClick={signInGoogle}>Google login</button>
            <button onClick={signInWithGoogleRedirect}>Google login Redirect</button>
        </div>
      );
}

export default SignIn;