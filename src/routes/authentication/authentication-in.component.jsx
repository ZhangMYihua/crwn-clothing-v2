import React, { useEffect } from 'react'
import { signInwithGooglePopup,createUserDocumentFromAuth,auth} from '../../utils/firebase/firebase.utils'
import { getRedirectResult } from 'firebase/auth'

import SignUpForm  from "../../components/sign-up-form/sign-up-form.component.jsx"
import SignInForm from '../../components/sign-in-form/sign-in-form.component.jsx'
import "./authentication.styles.scss"

const Authentication =()=> {
const logGoogleUser = async ()=>{
  const {user}  = await signInwithGooglePopup()
   const userDocRef = createUserDocumentFromAuth(user);
   console.log(userDocRef,"56789")
}


// useEffect(async() => {
//  const response = await getRedirectResult(auth)
//    if(response){
//     const userDocRef = createUserDocumentFromAuth(response.user)
//    }


//  console.log(response,"response")
// }, [])




  return (
  <div className='authentication-container'>
  <SignInForm/>
  <SignUpForm/>
  </div>

  )
}

export default Authentication
