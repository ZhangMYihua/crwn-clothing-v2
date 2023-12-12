import React from 'react'
import { SignUp } from '../../component/sign-up/SignUp';
import { Login } from '../../component/Login/Login';
import "./authStyle.scss"

export const Auth = () => {
  
  return (
    <div className='auth-contnr'>
    <Login/>
    <SignUp/>
    </div>
  )
}
