// import {useEffect} from 'react'
// import { getRedirectResult } from 'firebase/auth'
import { SignUp } from "../../components/sign-up/SignUp";

import { 
  // auth, 
  signInWithGooglePopup, 
  // signInWithGoogleRedirect, 
  createUserDocumentFromAuth } from "../../utils/firebase/firebase"

const SignIn = () => {

  // useEffect(async () => {
  //   const response = await getRedirectResult(auth)
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user)  
  //   }
  // }, [])

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user)
  }
  // const logGoogleRedirectUser = async () => {
  //   const response = await signInWithGoogleRedirect();
  //   console.log(response.user)
  // }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser} >Sign in with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect} >Sign in with Google Redirect</button> */}
      <SignUp/>
    </div>
  )
}

export default SignIn