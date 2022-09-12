import { signInWithGooglePopup,createUserDocumentFromAuth } from '../../utils/firebase/firbase.utils'


const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        // console.log(response)   
    }
    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={ logGoogleUser }>
                sign in with Google 
            </button>
        </div>
    )
}
export default SignIn