import SignInForm from '../../components/sign-in-form/SignInForm';
import SignUpForm from '../../components/sign-up-form/SignUpForm';
import './authentication.scss'

const SignIn = () => {
  return (
		<div>
            <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
            </div>
		</div>
  );
}

export default SignIn
