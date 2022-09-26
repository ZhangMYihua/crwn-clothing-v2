import { useState,useContext } from "react";
import { userContext } from "../../../contexts/user.context";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";
import FormInput from "../../form-input/Form-input.component";
import '../sign-up-form/sign-up-form.styles.scss';
import Button from "../../button/Button.component";
const SignUpForm = ()=>{
    
    const resetInputFields =()=>{
        setInputFields(defultInputFields);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        
        if(password !== passwordConfirmation){
            alert("mismatch passport")
            return
        }
    try{
        const {user} = await createAuthUserWithEmailAndPassword(email, password);
        await createUserDocumentFromAuth(user, {displayName});
        
        resetInputFields();
    }catch(error){
        if (error.code === "auth/email-already-in-use"){
            alert("email in use")
        } else console.log("error", error );
        
    } 
    }

    const defultInputFields ={
    displayName:'',
    email:'',
    password:'',
    passwordConfirmation:'' 
    }


    const [inputFileds,setInputFields]= useState(defultInputFields);


    const onChangeHandler = (event)=>{
    const {name,value} = event.target
    setInputFields({...inputFileds,[name]:value});
    }

    const {displayName,email,password,passwordConfirmation} = inputFileds

    return(
        <div className = "sign-up-container">
            <h2>Do you have an account?</h2>
            <span>Sign up wirh your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="Display name"
                    required 
                    name="displayName"
                    type="text"
                    value={displayName}
                    onChange={onChangeHandler}/>
                <FormInput 
                    label="Email"
                    required 
                    name="email"
                    type="email"
                    value={email}
                    onChange={onChangeHandler}/>
                <FormInput 
                    label="Password"
                    required 
                    name="password"
                    type="password"
                    value={password}
                    onChange={onChangeHandler}/>
                <FormInput 
                    label="Password confirmation"
                    required 
                    name="passwordConfirmation"
                    type="password"
                    value={passwordConfirmation}
                    onChange={onChangeHandler}/>
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )

}

export default SignUpForm;