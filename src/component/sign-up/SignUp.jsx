import React, { useState } from 'react'
import { createAuthWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/FireBase.utils';
import { formInput as FormInput } from '../Form-input/formInput';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';



export const SignUp = () => {
    const defaultData={
        "displayName":"",
        "email":"",
        "password":"",
        "confirmPassword":""
    }
    const [formData,setformData] =useState(defaultData);
    const{password,confirmPassword,displayName,email}=formData;
    const navigate=useNavigate();

    const handleChange=(e)=>{
        const{name ,value}=e.target;
        setformData({...formData, [name] :value})
      

    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log("entered handle sub");
        if(password!==confirmPassword){
            alert("password do not match");
            return;
        }
        try{
        const {user}=await createAuthWithEmailAndPassword(email,password)
        await createUserDocumentFromAuth(user,{displayName})
        setformData(defaultData);
        navigate("/")
        }catch(er){
            if(er.code==='auth/email-already-in-use'){
                alert("cannot create user,email already exist")
            }
            console.log(er);
        }
    }
  return (
    <div className='sign-up-container'>
    <h2>Don't have an account?</h2>
    <span>Sign up with your email and password</span>
    <form onSubmit={handleSubmit}>
      <FormInput
        label='Display Name'
        type='text'
        required
        onChange={handleChange}
        name='displayName'
        value={displayName}
      />

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

      <FormInput
        label='Confirm Password'
        type='password'
        required
        onChange={handleChange}
        name='confirmPassword'
        value={confirmPassword}
      />
      <Button type='submit'>Sign Up</Button>
    </form>
  </div>
  )
}
