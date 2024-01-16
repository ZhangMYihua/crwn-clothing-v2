import { useState } from 'react';
import styles from './signup.module.scss'
import { creatAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../fomr-input/form-input';
import Button from '../button/button';

const defaultFormField = {
  displayName:'',
  email:'',
  password: '',
  confirmPassword : ''
}
const SignUpForm = () => {
 const [form, setForm] = useState(defaultFormField)
 const {displayName,
 email,
 password,
 confirmPassword} = form

 const handleChange =(e)=> {
  const {name, value} = e.target
  setForm({...form, [name]: value})
 }
 const handleSubmit = async (e)=> {
  e.preventDefault()
  if(password !== confirmPassword){
    alert("paswword pas pareil")
    return
  }

  try {
   const {user} = await creatAuthUserWithEmailAndPassword(email, password)
  await createUserDocumentFromAuth(user, {displayName})
   console.log(user)
   if(user) setForm({...defaultFormField})
  } catch (error) {
    if(error.code === 'auth/email-already-in-use') alert('email alreay in use')
    else console.error(error)
  }

 }
  return(
  <div className={styles.container}>
    <h1>Sign up form</h1>
    <form onSubmit={async (e)=> handleSubmit(e) }>
      <FormInput label={'Display Name'}   defaultValue={displayName} value={displayName} onChange={handleChange} name='displayName' type='text' required/>
      <FormInput label={'Email'}   defaultValue={email} value={email} onChange={handleChange} name='email' type='email' required/>
      <FormInput label={'Password'}    type='password' onChange={handleChange} value={password} defaultValue={password} name='password' required/>
      <FormInput label={'confirm Password'}  nChange={handleChange} value={confirmPassword} defaultValue={confirmPassword} name='confirmPassword' required/>
      <Button buttonType='inverted'>Submit</Button>
      <Button buttonType='google'>Signuupwith Google</Button>
    </form>
  </div>
  )
};

export default SignUpForm