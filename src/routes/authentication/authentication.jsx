import  SignUp   from '../../components/sign-up/sign-up';
import  SignIn   from '../../components/sign-in/sign-in';
import './authentication.scss'



const Authentication = () => {
   return ( 
        <div className='authentication-container'>
          <SignIn />
          <SignUp />
        </div>
     );
    };

export default Authentication;