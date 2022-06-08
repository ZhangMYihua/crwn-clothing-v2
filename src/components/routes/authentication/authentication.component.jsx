import {
  createUserDocFromAuth,
  signInEmailAndPassword,
  signInWithGooglePopup,
} from "../../../utils/firebase/firebase.utils";
import Button from "../../button/button.component";
import FormInput from "../../form-input/form-input.component";
import SignUpForm from "../../sign-up-form/sign-up-form.component";
import { useState } from "react";
import "./authentication.styles.scss";

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocRef = await createUserDocFromAuth(user);

    return userDocRef;
  };

  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInEmailAndPassword(email, password);
      console.log(user);
    } catch (err) {
      if (err.code === "auth/wrong-password") {
        alert("Wrong password, try again");
        return;
      } else if (err.code === "auth/user-not-found") {
        alert("This email wasn't found. Try signing up?");
        return;
      }
      console.log("error signing in, try again?" + err.message);
    }
    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-and-sign-up">
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit} className="sign-in-form">
          <FormInput
            label="Email"
            type="email"
            onChange={handleChange}
            value={email}
            required
            name="email"
          />
          <FormInput
            label="Password"
            type="password"
            onChange={handleChange}
            value={password}
            required
            name="password"
          />
          <div className="buttons">
            <Button buttonType="default" type="submit">
              SIGN IN
            </Button>
            <Button buttonType="google" onClick={logGoogleUser}>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
      <SignUpForm />
    </div>
  );
};

export default Authentication;
