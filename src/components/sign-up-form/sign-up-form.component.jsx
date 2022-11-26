import { useState, useContext } from "react";
import FormInput from "../form-input/form-input.component";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import './sign-up-form.styles.scss';
import Button from "../button/button.component";

const defaultFormFields = {
   displayName: '',
   email: '',
   password: '',
   confirmPassword: ''
};

const SignUpForm = () => {

   const [formFields, setFormFields] = useState(defaultFormFields);

   const {displayName, email, password, confirmPassword} = formFields; 

   const resetFormFields = () => {
      setFormFields(defaultFormFields);
   }

   const handleSubmit = async (event) => {
      //prevent any of the form's default behavior
      event.preventDefault();

      if(password !== confirmPassword) {
         alert('passwords do not match');
         return;
      }

      try {
         const {user} = await createAuthUserWithEmailAndPassword(email, password);

         createUserDocumentFromAuth(user, {displayName});
         resetFormFields();

      } catch(error) {
         if(error.code === 'auth/email-already-in-use') {
            alert('Cannot create user; email already in use');
         } else {
            console.log('user creation encountered an error', error);
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
         <h2>Dont' have an account?</h2>
         <span>Sign up with your email and password</span>
         <form onSubmit={handleSubmit}>
            {/*<label>Display Name</label> */}
            {/* 
               Set the name of the input field to be the same of the form field we want to update.
               We will then be able to extract the value of the name attribute in handleChange above
            */}
            {/*<input type='text' required onChange={handleChange} name='displayName' value={displayName} /> */}
            <FormInput 
               type='text' 
               label='Display Name' 
               required
               onChange={handleChange} 
               name='displayName' 
               value={displayName}  
            />


             {/*<label>Email</label> *}
            {/*<input type='email' required onChange={handleChange} name='email' value={email} /> */}
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
            
             {/*<label>Confirm Password</label> */}
            {/*<input type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} /> */ }
            <FormInput 
               type='password' 
               label='Confirm Password'
               required 
               onChange={handleChange} 
               name='confirmPassword' 
               value={confirmPassword} />

            <Button type='submit'>Sign Up</Button>
         </form>
      </div>

   );
}

export default SignUpForm;