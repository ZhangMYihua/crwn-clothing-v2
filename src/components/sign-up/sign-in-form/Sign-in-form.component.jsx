import { useState,useContext } from "react";
import { userContext } from "../../../contexts/user.context";
import { signInWithGooglePopup,signInAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";
import FormInput from "../../form-input/Form-input.component";
import '../sign-in-form/sign-in-form.styles.scss';
import Button from "../../button/Button.component";



const SignInForm = ()=>{

   

    const signInWithGoogle = async()=> {
        await signInWithGooglePopup();
        
    
    }
    const resetInputFields =()=>{
        setInputFields(defultInputFields);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        
       
    try{
        const {user} = await signInAuthUserWithEmailAndPassword(email,password);
        
        resetInputFields();
    }catch(error){
        console.log (error)
        switch (error.code){
            case 'auth/wrong-password':
                alert('Incorrect password');
                break;
            case 'auth/user-not-found':
                alert('No such user');
                break;
            default:
                console.log(error);
        }
    
        if (error.code ===''){
            alert('Incorrect password')
        } 

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

    const {email,password} = inputFileds

    return(
        <div className = "sign-up-container">
            <h2>Already have an acount?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
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

                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google sign In</Button>
                </div>
                
            </form>
        </div>
    )

}

export default SignInForm;