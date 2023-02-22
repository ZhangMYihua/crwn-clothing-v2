
import { useState } from 'react';

import Button from '../button/button.component.jsx'
import FormInput from '../form-input/form-input.component';

import { createAuthUsersWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import './sing-up-form.styles.scss';


const defaultFormFields = {
  displayName :'',
  email :'',
  password :'',
  confirmPassword :'',
}

const SingUpForm = ({categories}) => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({...formFields, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(password !== confirmPassword ) {
      alert("The password does not match")
    }   
    
    try {

      const { user } = await createAuthUsersWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, {displayName})
      resetFormFields();
    
    } catch (error) {
      if(error.code === 'auth/email-already-in-use') alert('the email is alredy in use')
      else console.log(error)
    }
    
  }

  return (
    <div className='sing-up-container'>
      <h2>Don't have an account</h2>
      <span>Sing up with your email-and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Display Name" type="text" required onChange={handleChange} name='displayName' value={displayName} />

        <FormInput label="Email" type="email" required onChange={handleChange} name='email' value={email} />

        <FormInput label="Password" type="password" required onChange={handleChange} name='password' value={password}/>

        <FormInput label="Confirm password" type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword} />

        <Button type='submit'>Sing Up</Button>
      </form>
    </div>
    )
};

export default SingUpForm;
