import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase'

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
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit} >
        <label>Display Name</label>
        <input name="displayName" value={displayName} type="text" required onChange={handleChange} />

        <label>Email</label>
        <input name="email" value={email} type="email" required  onChange={handleChange}/>

        <label>Password</label>
        <input name="password" value={password} type="password" required onChange={handleChange}/>

        <label>Confirm Password</label>
        <input name="confirmPassword" value={confirmPassword} type="password" required onChange={handleChange}/>

        <button type="submit" >Sign up</button>
      </form>
    </div>
  )
}