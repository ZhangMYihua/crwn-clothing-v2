import "./sign-in-form.styles.scss";
import { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setFormFields(defaultFormFields);
      navigate("/");
      return user.accessToken;
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("Wrong password, please try again.");
          break;
        case "auth/user-not-found":
          alert("This email wasn't found. Try signing up?");
          break;
        default:
          alert("Error signing in: " + err.message);
          console.log(err);
      }
    }
  };

  return (
    <div className="sign-in">
      <h2 className="title">Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit} className="sign-in-form">
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className="buttons-container">
          <Button buttonType="default" type="submit">
            SIGN IN
          </Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
