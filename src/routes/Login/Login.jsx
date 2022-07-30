import "./Login.scss";
import {
    // auth,
    signInWithGooglePopup,
    // signInWithGoogleRedirect,
    createUserDocFromAuth,
} from "../../utils/firebase/firebase";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
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
        <div  className='login-page-container'>
            {/* <h2>Login</h2> */}
            <LoginForm />
            {/* <button onClick={logGooglePopupUser}>Login With Google Popup</button> */}
            {/* <br />
            <button onClick={signInWithGoogleRedirect}>Login With Google Redirect</button> */}
        </div>
    );
};

export default Login;
