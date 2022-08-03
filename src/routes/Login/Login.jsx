import "./login.scss";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import LoginForm from "../../components/login-form/login-form";

const Login = () => {
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //     if (response) {
    //         const userDocRef = await createUserDocFromAuth(response.user);
    //     }
    // }, [])

    return (
        <div className='login-page-container'>
            <LoginForm />
            {/* <button onClick={signInWithGoogleRedirect}>
                Login With Google Redirect
            </button> */}
        </div>
    );
};

export default Login;
