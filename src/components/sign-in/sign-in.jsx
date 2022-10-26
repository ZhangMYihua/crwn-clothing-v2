import { useState,  } from "react";
import { useDispatch } from 'react-redux';
import FormInput from "../form input/form-input";
import { googleSignInStart, emailSignInStart } from "../../store/user/user-action";
import "./sign-in.scss";
import Button from "../button/button";

const defaultFormFields = {
  email: '',
  password: '',
}

const SignIn = () => {
  const dispatch  = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password,  } =formFields;



  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  

    return ( 
        <div className="sign-up-container">
        <h2>Already have an account</h2>
          <span >Sign In with your Email and Password</span>
         <form onSubmit={handleSubmit}>
          <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
          <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
          <div className="buttons-container">
           <Button type="submit">Sign In</Button>    
           <Button type='button' onClick={signInWithGoogle} buttonType='google'>Google Sign In</Button>
          </div>
         </form>
        </div>
     );
}
 
export default SignIn;