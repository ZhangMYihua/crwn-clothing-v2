import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase'
import { FormInput } from '../form-input/FormInput'
import { Button } from '../button/Button'
import { SignUpContainer, Header } from './sign-up.styles'

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

export const SignUp = () => {

  const [formField, setFormField] = useState(defaultFormField)
  const {displayName, email, password, confirmPassword} = formField;


  const resetFormField = () => setFormField(defaultFormField);

  const handleSubmit = async(event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords don\'t match.');
      return;
    }
    try {
      const response = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(response.user, {displayName});

      resetFormField();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user since email is already in use.')
      }
      else console.log('We encountered an error:', error.message)
    }
  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormField({
      ...formField,
      [name]: value
    })
  }

  return (
    <SignUpContainer>
      <Header>Don't have an account?</Header>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} >
        <FormInput 
          label="Display Name" 
          name="displayName" 
          value={displayName} 
          type="text" 
          required 
          onChange={handleChange}/>
        <FormInput 
          label="Email" 
          name="email" 
          value={email} 
          type="email" 
          required  
          onChange={handleChange}/>
        <FormInput 
          label="Password" 
          name="password" 
          value={password} 
          type="password" 
          required 
          onChange={handleChange}/>
        <FormInput 
          label="Confirm Password" 
          name="confirmPassword" 
          value={confirmPassword} 
          type="password" 
          required 
          onChange={handleChange}/>

        <Button type="submit">Sign up</Button>
      </form>
    </SignUpContainer>
  )
}