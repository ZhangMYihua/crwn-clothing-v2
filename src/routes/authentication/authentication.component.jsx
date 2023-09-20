import SignUpForm from '../../components/sign-up-form/';
import SignInForm from '../../components/sign-in-form/';

import './authentication.styles.scss';

export const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
