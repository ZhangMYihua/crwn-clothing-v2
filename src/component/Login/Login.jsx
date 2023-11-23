import React, { useState } from 'react'
import { formInput as FormInput } from '../Form-input/formInput';
import Button from '../Button/Button';
import { signInWithGooglePopup ,createUserDocumentFromAuth} from '../../utils/firebase/FireBase.utils';
import  "./login.scss"
import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase/FireBase.utils';

export const Login = () => {
    const defaultData={ 
        "email":"",
        "password":""
    }

    const [formData,setformData] =useState(defaultData);
    const{password,email}=formData;
    const handleChange=(e)=>{
        const{name ,value}=e.target;
        setformData({...formData, [name] :value})
      


    }


    const signInwithGoogleUser=async()=>{
        const {user}=await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
        
    }


    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log("entered handle sub");
        try{
        await signInAuthUserWithEmailAndPassword(email,password)
         setformData(defaultData);
         
        }catch(er){
            switch(er.code){
                case "auth/user-not-found":
                    alert("no usser assoicited with this email ")
                    break;
                case "auth/invalid-login-credentials":
                    alert("invalid-login-credentials")
                    break;
                
                default:
                    console.log(er);
            }
        
        }
        
    }
  return (
   
    <div className='sign-up-container'>
    <h2>Already have an account</h2>
    <span>Sign in with your email and password</span>

    <form onSubmit={handleSubmit}>

      <FormInput
        label='Email'
        type='email'
        required
        onChange={handleChange}
        name='email'
        value={email}
      />

      <FormInput
        label='Password'
        type='password'
        required
        onChange={handleChange}
        name='password'
        value={password}
      />

   
      <div className="buttons-container">
      <Button type='submit'>Sign In</Button>
      <Button buttonType="button" onClick={signInwithGoogleUser}>Google Sign In</Button>
      </div>
    </form>
    </div>
  )
}
