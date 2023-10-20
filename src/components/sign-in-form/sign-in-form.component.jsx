import { useState } from "react";
import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils.js'
import FormInput from "../form-input/form-input.component.jsx";
import './sign-in-form.styles.scss'
import Button from "../button/button.component.jsx";


const defaultformFields = {
    email: '',
    password: '',
}



const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultformFields);
    const {email,password,} = formFields;
    

    // console.log(formFields);

    const signInWIthGoogle = async () => {
       await signInWithGooglePopup();
        
    };

    const resetFormFields = () =>{
        setFormFields(defaultformFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        
        try {
            await signInAuthUserWithEmailAndPassword(email,password);
            resetFormFields();
      

        }catch (error){
            switch(error.code){
                case 'auth/wrong-password':
                alert ('incorrect password');
                break;
                case 'auth/user-not-found':
                alert('no user associated with this email');
                break;
                default:
                console.log(error)
            }

            }
           
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields,[name]:value})
    };

    return(
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label='Password' type="password" required onChange={handleChange} name="password" value={password}/>
                <div className="buttons-container">
                <Button buttonType ='' type="submit">SIGN IN</Button>
                <Button type ='button' buttonType ='google' onClick={signInWIthGoogle}>GOOGLE SIGN IN</Button>
                </div>
                
            </form>
        </div>
    )
}
export default SignInForm;