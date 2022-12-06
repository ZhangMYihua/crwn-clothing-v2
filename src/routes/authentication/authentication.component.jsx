// import React from "react"
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import Login from '../../components/login-form/login-form.component'
 import './authentication.styles.scss'

 
const Authentication = () => {
  
 

  
  return (
    <div className='authentication-container'>
      <Login/>
      <SignUpForm/>

    </div>
  )
}

export default Authentication;  