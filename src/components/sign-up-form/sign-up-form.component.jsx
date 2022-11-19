import React,{ useState,useContext } from 'react'
import {createAuthUserWithEmailAndPassword,createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils"

import FormInput from "../form-input/form-input.component.jsx"
import Button from '../button/button.component'
import { UserContext } from './../../contexts/user.content';
const defaultFormFields ={
  displayName:"",
  email:"",
  password:"",
  confirmPassword:""
}



const SignUpForm = ()=>{
  const [formFields,setFormFields] = useState(defaultFormFields)
  const { displayName,email,password,confirmPassword}   = formFields
 
  // console.log(formFields,"formFieldsformFields")
  
   const {setCurrentUser} = useContext(UserContext)


  const resetFormFields=()=>{
    setFormFields(defaultFormFields)
   }

   
  const handleSubmit =async(event)=>{
      console.log(event,"event in the handle submit")
      event.preventDefault()
    
  const { displayName,email,password,confirmPassword}  = formFields
     

 
  if(password!==confirmPassword){
     alert("passwords do not match");
      return
      }


      try{
          const  {user} = await createAuthUserWithEmailAndPassword(email,password)
          setCurrentUser(user)
         await createUserDocumentFromAuth(user,{displayName:displayName})
         resetFormFields()

      }catch(error){
        if(error.code === "auth/email-already-in-use"){
          alert("Cannot add the email which is already in use")
          return
        }
      }


    }
 
  const hadleChange = (event)=>{
    const {name,value}  = event.target
    setFormFields({...formFields,[name]:value})
  }

  return (
    <div className='sign-up-container'>
    <h2>Dont have an account</h2>
    <form onSubmit={(event)=>{handleSubmit(event)}}>
    <FormInput label="Display Name" type="text" required name="displayName" onChange={hadleChange} value={displayName}/>
    <FormInput label="Email" type="email" required  name="email" onChange={hadleChange} value={email}/>
    <FormInput   label="Password" type="password" required name="password" onChange={hadleChange} value={password}/>
    <FormInput label="Confirm Password" type="password" required name="confirmPassword" onChange={hadleChange} value={confirmPassword}/>
    <Button  type="submit">Sign Up</Button>
    </form>
    </div>
  )
}


export default SignUpForm 



// <FormInput 
// label="Display Name" 
// inputOptions={{type:"text",
//  required:true,
//  name:"displayName", 
//  onChange:handleChange, 
//  value:displayName
// }}
//  />