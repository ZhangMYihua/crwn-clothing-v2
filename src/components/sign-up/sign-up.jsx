import { useState } from "react";
import { useDispatch } from 'react-redux';
import { signUpStart } from "../../store/user/user-action";
import FormInput from "../form input/form-input";
import "./sign-up.scss";
import Button from "../button/button";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword } =formFields;
  const dispatch = useDispatch();



  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      dispatch(signUpStart(email, password , displayName));
      resetFormFields();


    } catch(error) {
      if(error.code === 'auth/email-already-in-use') {
        alert('cannot create user , email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
      
    }
  }

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value});
  }

    return ( 
        <div className="sign-up-container">
        <h2>Dont have an account</h2>
          <span >Sign Up with Email And Password</span>
         <form onSubmit={handleSubmit}>
          
          <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />

          
          <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />

          
          <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />

          
          <FormInput label="Confirm Passord" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

          <Button type="submit" buttonType='default'>Sign Up</Button>
         </form>
        </div>
     );
}
 
export default SignUp;