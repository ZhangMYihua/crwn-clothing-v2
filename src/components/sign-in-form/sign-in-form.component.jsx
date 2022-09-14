import Button from '../button/button.component'
import FormInput from '../form-input/form-input.component'
import { useState } from 'react'
import { signInWithGooglePopup,createUserDocumentFromAuth,signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firbase.utils"

import './sign-in-form.styles.scss'
const defaultFormFields ={
    email : '',
    password : ''
}

const SignInForm = () => {

    const [formFields,setFormFields] = useState(defaultFormFields)
    const {email,password} = formFields
    
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }
    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
        // console.log(response)   
    };
    const handleSubmit = async(event) => {
    event.preventDefault()

    try{

        const response = await signInAuthUserWithEmailAndPassword(email,password)
        console.log(response)
        resetFormFields()

    }catch(error){
        switch(error.code){
            case 'auth/wrong-password':
                alert("incorrect password")
                break
                case 'auth/user-not-found':
                alert("no user associated with this email");
                break;
                default:
                console.log(error)
        }
    }
}

const handleChange=(event) =>{
    const {name , value} = event.target ;

    setFormFields({...formFields, [name]:value})
}
    
    return(
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label = "Email" type="email"required onChange={handleChange} name="email" value={email}/>

                <FormInput label = "Password" type="password" required onChange={handleChange} name="password" value={password}/>

                <div className='buttons-container'>
                <Button buttonType='default' type="submit">Sign In</Button>
                <Button buttonType='google' type='button' onClick={signInWithGoogle}>Google sign In</Button>

                </div>

            </form>
        </div>
    )
}

export default SignInForm
