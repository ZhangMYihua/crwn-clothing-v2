import './sign-up-form.styles.scss'
import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from '../button/button.component';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


const defaultformFileds = {
    displayName: '',
    email: '',
    password: '',
    confirmedPassword: '',
}
const SignUpFrom = () =>{


    const [formFields, setFormFields] = useState(defaultformFileds)

    const {displayName, email, password, confirmedPassword} = formFields

    const resetFormFileds = ()=>{
        setFormFields(defaultformFileds)
    }

    const handleChange = (event)=>{
        const {name, value} = event.target;

        setFormFields({ ...formFields, [name]:value})

    }

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (password !== confirmedPassword) {
          alert('passwords do not match');
          return;
        }
    
        try {
          const {user} = await createAuthUserWithEmailAndPassword(
            email,
            password
          ); 
            await createUserDocumentFromAuth(user, {displayName})
            resetFormFileds();

        } catch (error) {
          if (error.code === 'auth/email-already-in-use') {
            alert('Cannot create user, email already in use');
          } else {
            console.log('user creation encountered an error', error);
          }
        }
      };

    return (
        <div className="sign-up-container">
            <h2>Don't have an account ?</h2>
            <span>Sign Up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                label="Display Name" name="displayName" 
                type="text" 
                required 
                onChange={handleChange} 
                value={displayName} 
                />
                <FormInput label="Email" name="email" type="email" required onChange={handleChange} value={email} />
                <FormInput label="Password" name="password" type="password" required onChange={handleChange} value={password} />
                <FormInput label="Confirm Password" name="confirmedPassword" type="password" required onChange={handleChange} value={confirmedPassword} />
                <Button buttonType='default' type="submit">Sign Up</Button>
            </form>
        </div> 
    )
}  

export default SignUpFrom;