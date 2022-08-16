import React from "react";
import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      console.log(user);
      createUserDocumentFromAuth(user, { displayName });

      //======================================================
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already present");
      } else {
        console.log("User creation through email and password encountered an error", error);
      }
    }
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input required type="text" onChange={handleChange} name="displayName" value={displayName} />

        <label>Email</label>
        <input required type="text" onChange={handleChange} name="email" value={email} />

        <label>Password</label>
        <input required type="password" onChange={handleChange} name="password" value={password} />

        <label>Confirm Password</label>
        <input required type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
