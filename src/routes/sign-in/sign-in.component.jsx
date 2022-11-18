// import React from "react"
import { signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/firebase.utils'





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
    </div>
  )
}

export default SignIn   