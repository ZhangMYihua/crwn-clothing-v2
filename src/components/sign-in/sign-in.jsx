import { useState } from "react";
import FormInput from "../form input/form-input";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase";
import "./sign-in.scss";
import Button from "../button/button";

const defaultFormFields = {
  email: '',
  password: '',
}

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password,  } =formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const SignInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    };

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(response)
      resetFormFields();

    } catch(error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert('incorrect password');
          break;
          case 'auth/user-not-found':
            alert('no user associated with this email');
         default:
              console.log(error)
      }
    }
  }

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value});
  }

    return ( 
        <div className="sign-up-container">
        <h2>Already have an account</h2>
          <span >Sign In with your Email and Password</span>
         <form onSubmit={handleSubmit}>
          <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
          <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
          <div className="buttons-container">
           <Button type="submit">Sign In</Button>    
           <Button type='button' onClick={signInWithGooglePopup} buttonType='google'>Google Sign In</Button>
          </div>
         </form>
        </div>
     );
}
 
export default SignIn;