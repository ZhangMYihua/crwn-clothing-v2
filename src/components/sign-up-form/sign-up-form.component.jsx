import { useState } from 'react';
import {
  createAuthUserWithEmailAndPass,
  createUserFromAuth,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss';

const defaultFormFiels = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
function SignupForm() {
  const [formFields, setFormFields] = useState(defaultFormFiels);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetForm = () => {
    setFormFields(defaultFormFiels);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    if (!displayName) {
      alert('Please enter a name');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPass(email, password);

      await createUserFromAuth(user, { displayName });
    } catch (error) {
      console.log(error);
    }

    resetForm();
    return;
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account? </h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          label="Display Name"
        />
        <FormInput
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          label="Email"
        />
        <FormInput
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          label="Password"
        />
        <FormInput
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
        />
        <Button type="submit">Signup</Button>
      </form>
    </div>
  );
}

export default SignupForm;
