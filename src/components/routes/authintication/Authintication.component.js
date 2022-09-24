
import './authintication.styles.scss'
import SignUpForm from '../../sign-up/sign-up-form/Sign-up-form.component';
import SignInForm from '../../sign-up/sign-in-form/Sign-in-form.component';  

const Authintication =()=> {
    
    return (
        <div className= 'authintication-container'>
        
            <SignInForm/>
            <SignUpForm/>
        </div>
        
    )
} 
export default Authintication