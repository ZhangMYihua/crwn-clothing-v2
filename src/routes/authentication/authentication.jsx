// import {useEffect} from 'react'
// import { getRedirectResult } from 'firebase/auth'
import { SignUp } from "../../components/sign-up/SignUp";
import SignIn from "../../components/sign-in/SignIn";

import './authentication.scss'

const Authentication = () => {
  

  return (
    <div>
      <SignIn/>
      <SignUp />
    </div>
  )
}

export default Authentication;