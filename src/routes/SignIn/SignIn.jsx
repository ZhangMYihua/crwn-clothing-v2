import "./SignIn.scss";
import {
    // auth,
    signInWithGooglePopup,
    // signInWithGoogleRedirect,
    createUserDocFromAuth,
} from "../../utils/firebase/firebase";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

const SignIn = () => {
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //     if (response) {
    //         const userDocRef = await createUserDocFromAuth(response.user);
    //     }
    // }, [])

    const logGooglePopupUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
    };

    return (
        <div>
            <h2>SignIn</h2>
            <button onClick={logGooglePopupUser}>Sign In With Google Popup</button>
            {/* <br />
            <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button> */}
        </div>
    );
};

export default SignIn;
