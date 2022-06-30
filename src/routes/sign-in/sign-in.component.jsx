import { signInWithGooglePopup } from '../../utils/firebase/firbase.utils'
const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        console.log(response)   
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