import { useState } from "react";
import { FormInput } from "../../components/form-input/FormInput";
import { Button, BUTTON_TYPE_CLASSES } from "../../components/button/Button";
import { 
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth } from "../../utils/firebase/firebase"

import { SignInContainer, Header, ButtonsContainer } from "./sign-in.styles";
  

const defaultFormField = {
  email: '',
  password: ''
}

export const SignIn = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const {email, password} = formField;

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormField({
      ...formField,
      [name]: value
    })
  }
  const resetFormField = () => setFormField(defaultFormField);

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    
    if (email.length || password.length) {
      resetFormField()
    };
  }

  const handleSignIn = async(event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password)
      resetFormField();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert("Incorrect password.")
          break;
        case 'auth/user-not-found':
          alert('Email not found.');
          break;
        default: 
          console.log('An error occurred:', error.message)
      } 
    }
  }

  return (
    <SignInContainer>
      <Header>Already have an account?</Header>
      <span>Sign in with your email and password</span>
      <form>
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
        <ButtonsContainer>
          <Button 
            type="button"
            onClick={handleSignIn}>
              Sign in
          </Button>
          <Button 
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}>
              Sign in with Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}
