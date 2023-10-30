import { ButtonContainer, SignInContainer } from "./sign-in-form.styles";
import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from '../button/button.component';
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';



const defaultformFileds = {
    email: '',
    password: '',
}
const SignInForm = () =>{


    const [formFields, setFormFields] = useState(defaultformFileds)

    const { email, password} = formFields;


    const resetFormFileds = ()=>{
        setFormFields(defaultformFileds)
    }

    const handleChange = (event)=>{
        const {name, value} = event.target;

        setFormFields({ ...formFields, [name]:value})

    }

    const signInWithGoogle = async()=>{
            await signInWithGooglePopup();
         
       } 

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{

            await signInAuthUserWithEmailAndPassword(email, password);


            resetFormFileds();
        }catch(err){
            switch(err.code){
                case 'auth/invalid-login-credentials':
                    console.log('wrong credentials')
                console.log('Wrong Credentials', err);
                break;
                case 'auth/user-not-found':
                    alert('no user found')
                console.log('Wrong Credentials', err);
                break;

                default:
                    console.log(err);
            }
            
        }
        
      };

      

    return (
        <SignInContainer>
            <h2>Already have an account ?</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" name="email" type="email" required onChange={handleChange} value={email} />
                <FormInput label="Password" name="password" type="password" required onChange={handleChange} value={password} />
                <ButtonContainer>
                    <Button type="submit">Sign in</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Sign in with google</Button>
                </ButtonContainer>
            </form>
        </SignInContainer> 
    )
}  

export default SignInForm;