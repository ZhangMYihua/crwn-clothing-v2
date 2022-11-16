import { useState, useEffect } from "react";
import { auth,signInWithGooglePopup,checkAuthUserWtihEmailPassword,createUserDocumentFromAuth,signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-in-form.styles.scss'
import { getRedirectResult } from "firebase/auth";

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        
        setFormFields({...formFields,[name]:value})
    }

    const clearFormFields = () =>{
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await checkAuthUserWtihEmailPassword(email,password);
            const user = response.user
            console.log(user)
            clearFormFields();
        } catch (error) {
            if (error.code = 'auth/wrong-password'){
                alert("Incorrect Credentials")
            }
            return;
        }
        
    }

    useEffect(async () =>{
        const response = await getRedirectResult(auth);
        console.log(response)
        if (response){
            const userDocRef = await createUserDocumentFromAuth(response.user);
            console.log(userDocRef)
        }
    },[]);

    return(
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label="Email" name="email" type="email" required onChange={handleChange} value={email}/>
                
                <FormInput label="Password" name="password" type="password" required onChange={handleChange} value={password}/>
                
                <div className="buttons-container">
                    <Button children='Sign In' type="submit"/>

                    <Button type="button" onClick={signInWithGooglePopup} children='Google Sign In' buttonType='google'/>
                </div>
            </form>
           
            {/* <Button onClick={signInWithGoogleRedirect} children='Sign in With Google Redirect' buttonType='google'/> */}
        </div>
    )
}

export default SignInForm;