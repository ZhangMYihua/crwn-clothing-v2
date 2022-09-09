import React,{ useState ,useContext} from 'react'
import {createAuthUserWithEmailAndPassword,createUserDocumentFromAuth, signInwithGooglePopup} from "../../utils/firebase/firebase.utils"
import "./sign-in-form.styles.scss"
import FormInput from "../form-input/form-input.component.jsx"
import Button,{BUTTON_TYPE_CLASSES} from '../button/button.component'
import { signInUserWithEmailAndPassword } from './../../utils/firebase/firebase.utils';
import { UserContext } from './../../contexts/user.content';
const defaultFormFields ={
  email:"",
  password:"",
}



const SignInForm = ()=>{
  const [formFields,setFormFields] = useState(defaultFormFields)
  const {email,password}   = formFields
  
  const {setCurrentUser} = useContext(UserContext)
      

  const resetFormFields=()=>{
    setFormFields(defaultFormFields)
   }

   const signInWithGoogle = async ()=>{
    const {user}  = await signInwithGooglePopup()
    // setCurrentUser(user)
    createUserDocumentFromAuth(user);
    //  const userDocRef = createUserDocumentFromAuth(user);
    //  console.log(userDocRef,"56789")
  }

   
  const handleSubmit =async(event)=>{
      event.preventDefault()
    
  const { email,password}  = formFields
     

 

      try{
        const { user } = await signInUserWithEmailAndPassword(email,password)
        //  console.log(response,"response in sign in ")
         resetFormFields()
         setCurrentUser(user)

      }catch(error){
       switch(error.code)
       {
   case "auth/user-not-found":
    alert("No user with this email")
    break
  case "auth/wrong-password":
    alert("incorrect password for email")
    break
  default:
    console.log(error)
       }
        // if(error.code === "auth/user-not-found"){
        //   alert("user not exist , please enter proper credentials or sign up")
        //   return
        // }
        
       
      }


    }
 
  const hadleChange = (event)=>{
    const {name,value}  = event.target
    setFormFields({...formFields,[name]:value})
  }

  return (
    <div className='sign-in-conatiner'>
    <h2>Already have a account</h2>
    <form onSubmit={(event)=>{handleSubmit(event)}}>
    <FormInput label="Email" type="email" required  name="email" onChange={hadleChange} value={email}/>
    <FormInput   label="Password" type="password" required name="password" onChange={hadleChange} value={password}/>
   <div className='buttons-container'>
   <Button  type="submit" >Sign In</Button>
  <Button type="button" onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google} >Google Sign in </Button>
   </div>
    
    </form>
    </div>
  )
}


export default SignInForm 



// <FormInput 
// label="Display Name" 
// inputOptions={{type:"text",
//  required:true,
//  name:"displayName", 
//  onChange:handleChange, 
//  value:displayName
// }}
//  />