import './authentication.scss'
import SignInForm from '../../components/sign-in/sign-in-form';
import SignUpForm from '../../components/sign-up/sign-up-form';


const Aunthentication = () => {


  return (
    <div className='authentication-container'>
   
      <SignInForm />
      < SignUpForm />
    </div>
  );
};

export default Aunthentication;