import {useEffect} from 'react'
import { auth, signInWithGooglePopup,signInWithGoogleRedirect,
  createUserDocumentFromAuth,} from '../../utils/firebase/firebase.utils';
import { getRedirectResult  } from 'firebase/auth';
import SignUpForm from '../../components/sign-up-form/sign-up-form';

const SignIn = () => {

useEffect( ()=>{

},[])


  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    <SignUpForm/>
    </div>
  );
};

export default SignIn;
