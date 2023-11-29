import React, { useState } from 'react'
import { formInput as FormInput } from '../Form-input/formInput';
import Button from '../Button/Button';
import { signInWithGooglePopup } from '../../utils/firebase/FireBase.utils';
import  "./login.scss"
import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase/FireBase.utils';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate=useNavigate();
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
        await signInWithGooglePopup();
        navigate("/")
    }


    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
          await signInAuthUserWithEmailAndPassword(email,password)
          setformData(defaultData);
          navigate("/")
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
      <Button type="button" buttonType="google" onClick={signInwithGoogleUser}>Google Sign In</Button>
      </div>
    </form>
    </div>
  )
}
