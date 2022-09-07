import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      }
      console.log("User creation error", error);
    }
  };
  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div>
      <h1>Sign up with email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          required
          onChange={handleInputChange}
          value={displayName}
          name="displayName"
        />

        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleInputChange}
          value={email}
          name="email"
        />

        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleInputChange}
          value={password}
          name="password"
        />

        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleInputChange}
          value={confirmPassword}
          name="confirmPassword"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
