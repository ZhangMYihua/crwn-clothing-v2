import { useState } from "react"
import FormInput from "../form-input/form-input.component"
import { createAuthUserWithEmailPassword, createUserDocFromAuth } from "../../utils/firebase/firebase.utils"

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}
const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields)
  //desturing values from formfields
  const { displayName, email, password, confirmPassword } = formFields

  console.log(formFields)

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }


  const handleSubmit = async (event) => {
    //stops form from submitting
      event.preventDefault();
      //confirm is password matches
      if(password !== confirmPassword) {
      //see if we have autheticated that user with the email and password
        alert('passwords do not match')
      //create a user document from what it returns
      return;
      }

      try {
        const {user} = await createAuthUserWithEmailPassword(email, password)
        // console.log(response)

        await  createUserDocFromAuth(user, {displayName});
        
        resetFormFields();
        

      } catch  (error) {
        console.log('user creation encountered an error', error)
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
    <div>

      <h1> Sign Up with your email and password</h1>

      <form onSubmit={handleSubmit}>
        

        <FormInput label='Display Name' required type="text" onChange={handleChange} name='displayName' value={displayName} />


        <FormInput label='Email'required type="email" onChange={handleChange} name='email' value={email} />

        <FormInput label="Password"required type="password" onChange={handleChange} name='password' value={password} />


        <FormInput label="Confirm Password"required type="password" onChange={handleChange} name='confirmPassword' value={confirmPassword} />

        
        <button type="submit"> Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm