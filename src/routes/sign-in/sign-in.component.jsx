
import { signInWithGooglePopup,createUserDocumentFromAuth } from '../../utils/firebase/firbase.utils'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        // console.log(response)   
    };



    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={ logGoogleUser }>
                sign in with Google Popup
            </button>
            <SignUpForm/>
        </div>
    )
}
export default SignIn