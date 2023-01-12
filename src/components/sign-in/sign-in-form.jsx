import "./sign-in-form.scss";
import { useState,useContext } from "react";
import { UserContext } from "../contexts/user-cotext";
import FormInput from "../form-input/form-input-component";
import Button from "../button/button-component";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithAuthEmailAndPassword
} from "../../utils/firebase/firebase";

const defaultFormFields = {
  email: "",
  password: "",
};



const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

const {setCurentUser}=useContext(UserContext)

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const SingnInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const heandleSubmit = async (event) => {
    event.preventDefault();
    try {
        const {user}=await signInWithAuthEmailAndPassword(email,password)
        setCurentUser(user)
        
      resetFormFields();
    } catch (error) {
        switch(error.code ){
            case "auth/wrong-password":
            alert('incorrect password for email')
            break
            case "auth/user-not-found":
            alert('no user associated with this email')
            break
        default:
            console.log('err')

        }
    
    }
  };

  const heandelChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Alredy have an account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={heandleSubmit} action="">
        <FormInput
          label="Email"
          type="email"
          required
          onChange={heandelChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={heandelChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" onClick={SingnInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
