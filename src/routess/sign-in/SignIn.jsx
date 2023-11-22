import React from 'react'
import { signInWithGooglePopup ,createUserDocumentFromAuth} from '../../utils/firebase/FireBase.utils';

export const SignIn = () => {
    const logGoogleUser=async()=>{
        const {user}=await signInWithGooglePopup();
        const userRef=await createUserDocumentFromAuth(user)
        console.log(userRef);
    }
  return (
    <>
    <div>SignIn</div>
    <button onClick={logGoogleUser}>
        sign in
    </button>
    </>
  )
}
