// import React from "react"
import { signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'




const SignIn = () => {
  const logGoogleUser= async () => {
    const { user } = await signInWithGooglePopup()
    createUserDocFromAuth(user)
    // console.log(user)
  }


  
  return (
    <div>
      <h1>Sign IN Page</h1>
      <button onClick={logGoogleUser}>
        Sign in With Google  Popup
      </button>
      <SignUpForm/>
    </div>
  )
}

export default SignIn   