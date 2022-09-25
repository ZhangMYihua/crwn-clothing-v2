import { useState } from "react";
import { FormInput } from "../../components/form-input/FormInput";
import { Button } from "../../components/button/Button";
import { 
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth } from "../../utils/firebase/firebase"
import './sign-in.scss'
  

const defaultFormField = {
  email: '',
  password: ''
}

export default function SignIn() {
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
    const response = await signInWithGooglePopup();
    await createUserDocumentFromAuth(response.user)
    if (email.length || password.length) {
      resetFormField()
    };
  }

  const handleSignIn = async(event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password)
      // console.log(response)
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
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
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
        <div className="buttons-container">
          <Button 
            type="button"
            onClick={handleSignIn}
            >
              Sign in
          </Button>
          <Button 
            buttonType='google' 
            onClick={signInWithGoogle}
            type="button">
              Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  )
}
