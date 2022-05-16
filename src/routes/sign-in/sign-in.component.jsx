import React from 'react'
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils'
function SignIn() {
    const logGoogleUsers = async() => { 
        const response = await signInWithGooglePopup();
        createUserDocumentFromAuth(response.user)
    }
  return (
      <div>SignIn Page
          <button onClick={logGoogleUsers}>Log Google User</button>
    </div>
  )
}

export default SignIn