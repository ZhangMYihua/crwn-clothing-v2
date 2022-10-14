import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect, auth } from '../../utils/firebase/firebase'
import  SignUp   from '../../components/sign-up/sign-up';



const SignIn = () => {
 

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    };
  
    return ( 
        <div>
          <h1>Sign In Page</h1>
          <button onClick={logGoogleUser}>
            Sign In With Google Popup
          </button>
          <SignUp />
        </div>
     );
    };

export default SignIn;