import { useState } from "react";
import FormInput from "../form-input/form-input.component";

import { 
   createUserDocumentFromAuth,
   signInWithGooglePopup,
   signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

import './sign-in-form.styles.scss';
import Button from "../button/button.component";

const defaultFormFields = {
   email: '',
   password: '',
};

const SignInForm = () => {

   const [formFields, setFormFields] = useState(defaultFormFields);

   const {email, password} = formFields; 

   const resetFormFields = () => {
      setFormFields(defaultFormFields);
   }

   const signInWithGoogle = async () => {
      await signInWithGooglePopup();
   };

   const handleSubmit = async (event) => {
      //prevent any of the form's default behavior
      event.preventDefault();

      try {
         const {user} = await signInAuthUserWithEmailAndPassword(email, password);
         // console.log(user);

         //store the user detail in context
         // setCurrentUser(user);

         resetFormFields();

      } catch(error) {

         switch(error.code) {
            case 'auth/wrong-password':
               alert('Incorrect password for email');
               break;

            case 'auth/user-not-found':
               alert('No user associate with this email');
               break;

            default:
               console.log(error);
         }
      }
   }

   const handleChange = (event) => {
      const {name, value} = event.target;
      
      // Note the syntax!
      setFormFields({
         ...formFields,
         [name]: value
      })
   };

   return (
      <div className='sign-up-container'>
         <h2>Already have an account?</h2>
         <span>Sign in with your email and password</span>
         <form onSubmit={handleSubmit}>
            <FormInput 
               type='email' 
               label='Email'
               required onChange={handleChange} 
               name='email' 
               value={email} />
            
             {/*<label>Password</label> */}
            {/*<input type='password' required onChange={handleChange} name='password' value={password} /> */}
            <FormInput 
               type='password' 
               label='Password'
               required 
               onChange={handleChange} 
               name='password' 
               value={password} />

            <div className='buttons-container'>
               <Button type='submit'>Sign In</Button>
               <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
            </div>
            
         </form>
      </div>

   );
}

export default SignInForm;