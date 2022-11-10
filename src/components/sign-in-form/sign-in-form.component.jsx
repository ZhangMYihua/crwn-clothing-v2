import { useState, useContext } from 'react';

import { 
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth
 } from '../../utils/firebase/firebase.utils';

import FormInput from "../form-input/form-input.component";
import Button from '../button/button.component';

import { UserContext } from '../../contexts/user.context';

import './sign-in-form.styles.scss';

const defaultFormValues = {
  email: 'mike@gmail.com',
  password: '',
};

const SignInForm = () => {
  // state declaration
  const [formFields, setFormFields] = useState(defaultFormValues);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  // state/form handling
  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formFields;

    if(!email || !password) {
      alert('You must provide a valid email and password!');
      return;
    }

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(user);
      setCurrentUser(user);
    } catch(err) {
      switch(err.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(err);
      }
    }
  }

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label='Email'
          type='text'
          required
          name='email'
          value={ email }
          onChange={handleChange}
        />
        <FormInput 
          label='Password'
          type='password'
          required
          name='password'
          value={ password }
          onChange={handleChange}
        />
        <div className='buttons-container'>
          <Button type='submit'>SIGN IN</Button>
          <Button type='button' onClick={signInWithGoogle} buttonType={'google'}>
            SIGN IN WITH GOOGLE
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;