
import { useState } from 'react';
import Button from '../button/button.component.jsx'
import FormInput from '../form-input/form-input.component';
import { 
  signInWithEmailAndPasswordUtil, 
  signInWithGooglePopup,   
  createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils';

import './sing-in-form.styles.scss';

const defaultFormFields = {
  email :'',
  password :'',
}

const SingInForm = ({categories}) => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const singInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    await createUserDocumentFromAuth(response.user)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({...formFields, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    console.log({e});

    try {
      const response = await  signInWithEmailAndPasswordUtil(email, password);
      console.log({response})
      resetFormFields();
    
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <div className='sign-in-container'>
      <h2>Alredy have an account</h2>
      <span>Sign in with your e-mail and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput label="Email" type="email" required onChange={handleChange} name='email' value={email} />

        <FormInput label="Password" type="password" required onChange={handleChange} name='password' value={password}/>
        <div className='buttons-container'>
          <Button type='submit'>SING IN</Button>
          <Button type='button' onClick={singInWithGoogle} buttonType='google'>SING IN GOOGLE</Button>
        </div>
      </form>
      

    </div>
    )
};

export default SingInForm;
