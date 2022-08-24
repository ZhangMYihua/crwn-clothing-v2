import React from 'react'
import { signInwithGooglePopup,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'


const SingIn =()=> {
const logGoogleUser = async ()=>{
  const {user}  = await signInwithGooglePopup()
   const userDocRef = createUserDocumentFromAuth(user);
   console.log(userDocRef,"56789")
}

  return (
  <div>Sign in
  <button onClick={logGoogleUser}>Login</button>
  </div>

  )
}

export default SingIn
