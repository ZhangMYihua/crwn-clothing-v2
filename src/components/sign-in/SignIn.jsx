import { useState } from "react";
import { FormInput } from "../../components/form-input/FormInput";
import { Button } from "../../components/button/Button";
import { 
  // auth, 
  signInWithGooglePopup, 
  // signInWithGoogleRedirect, 
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

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user)
  }
  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
    
    //   resetFormField();
    } catch (error) {
    
    }
  }

  return (
    <div className='sign-in-container'>
      <h2>I already have an account</h2>
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
        <Button 
          buttonType='google' 
          onClick={logGoogleUser}
          >Sign in with Google
        </Button>
        <Button 
        onClick={handleSubmit}
          >Sign in
        </Button>
      </form>
    </div>
  )
}
