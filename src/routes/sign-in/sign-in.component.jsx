import { signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async() => {//Were going to do is we are just goign to create a log Google User which is asynchronous 
        //function because whenever you make a call to soem database its to be asynchronous
        const {user} = await signInWithGooglePopup();// were destructering
        createUserDocFromAuth(user);
        const userDocRef = await createUserDocFromAuth(user);
    };
    return(
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
        </div>
    )
};

export default SignIn;