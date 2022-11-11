
import {AuthContainer} from './authintication.styles.jsx'
import SignUpForm from '../../sign-up/sign-up-form/Sign-up-form.component';
import SignInForm from '../../sign-up/sign-in-form/Sign-in-form.component';  

const Authintication =()=> {
    
    return (
        <AuthContainer>
            <SignInForm/>
            <SignUpForm/>
        </AuthContainer>
        
    )
} 
export default Authintication