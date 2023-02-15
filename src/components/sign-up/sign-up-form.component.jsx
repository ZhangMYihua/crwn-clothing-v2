import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from '../form-input/form-input.component';
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";


const defaultFormFields = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }


const Signupform = () => {    

    const [formFields,setFormFields] = useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formFields;



    const resetFormFields = () => {
           setFormFields(defaultFormFields);
    };

    const handleSubmit = async(event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Password Do Not Match !");
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocumentFromAuth(user, {displayName});
            
            resetFormFields();
        }
        catch(error){
            if(error.code ==='auth/email-already-in-use'){
                alert("Cannot create user,email already in use");
            }
           else {
               console.log("User Creation: Encountered an Error", error);
           }
        }
    };
    
    const handleChange = (event) =>{
        const {name , value} = event.target;   
        setFormFields({...formFields , [name] : value});
    };

    return(
        <div className="sign-up-container">
            <h1>Still don't have an account ?</h1>
            <span> SignUp with Email and Password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput label = "Display Name" required type = "text" onChange={handleChange} name = "displayName" value = {displayName}/>

                
                <FormInput label = "Email" required type = "email" onChange={handleChange} name = "email" value = {email}/>
                
            
                <FormInput label = "Password" required type = "password" onChange={handleChange} name = "password" value={password}/>
                
            
                <FormInput label = "Confirm Password" required type = "password" onChange={handleChange} name = "confirmPassword" value={confirmPassword}/>

                {/* <button className="btn btn-dark" type="submit">Create Account</button> */}
                <Button butttype='submit'>Sign Up</Button>
            </form>
        </div>
    );

}
export default Signupform
