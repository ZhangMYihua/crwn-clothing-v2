import { useState } from "react"
import FormInput from "../form-input/form-input.component"
import { signInWithGooglePopup, createUserDocFromAuth, signInAuthUserWithEmailPassword, auth } from "../../utils/firebase/firebase.utils"
import Button from '../button/button.component'
import './login-form.styles.scss'

const defaultFormFields = {
  email: '',
  password: '',
}

const LoginForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields)
  //desturing values from formfields
  const {  email, password } = formFields

  console.log(formFields)

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup()
    await createUserDocFromAuth(user)
    // console.log(user)
  }


  const handleSubmit = async (event) => {
    //stops form from submitting
      event.preventDefault();
      

      try {
        const response = await signInAuthUserWithEmailPassword(email, password)
        console.log(response)
        
        resetFormFields();
        

      } catch  (error) {

        switch(error.code) {
          case 'auth/wrong-password': 
            alert('incorrect password for email')
            break;
          case 'auth/user-not-found' :
            alert('no user associated with this email')
            break;
          default:
            console.log(error)
        }
        // if(error.code === 'auth/wrong/wrong-password') {
        //   alert('incorrect password for email')
        // } 
        
      }

  }
  // handler function for each input inside the form, this will grab the properties: value and name - from the even.target object
  const handleChange = (event) => {
    //name and value are properties on the event.target object
    const { name, value } = event.target
    //using this setter function everytime an input from the form is fired spreading in the form fields object, then passing in the name and value the actually changed, remember the property passed in at the bottom of a setter function will over write it if its in the last object
    setFormFields({ ...formFields, [name]: value })
  }


  return (
    <div className="sign-up-container">
      <h2> Already have an account?</h2>
      <span> Sign in with email and password</span>

      <form onSubmit={handleSubmit}>
        


        <FormInput label='Email'required type="email" onChange={handleChange} name='email' value={email} />

        <FormInput label="Password"required type="password" onChange={handleChange} name='password' value={password} />



        {/* <div className="button-container"> */}
          <Button type="submit"  > Sign In</Button> 
          <Button id ='googler'type="button" onClick={signInWithGoogle}  buttonType='google'>Google sign in</Button> 
        {/* </div> */}
      </form>
    </div>
  )
}

export default LoginForm