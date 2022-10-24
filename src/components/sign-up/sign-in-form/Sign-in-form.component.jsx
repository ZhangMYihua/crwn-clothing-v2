import { useState,useContext } from "react";
// import { userContext } from "../../../contexts/user.context";
import { signInWithGooglePopup,signInAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";
import FormInput from "../../form-input/Form-input.component";
import {ButtonContainer,SignupContainer} from './sign-in-form.styles.jsx';
import Button from "../../button/Button.component";
import { useDispatch } from "react-redux";
import { googleSignInStart, emailSignInStart } from "../../../store/user/user.action";



const SignInForm = ()=>{

   const dispatch = useDispatch();

    const signInWithGoogle = async()=> {
        dispatch(googleSignInStart());
        
    
    }
    const resetInputFields =()=>{
        setInputFields(defultInputFields);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        
       
    try{
        dispatch(emailSignInStart(email,password));
        
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
        <SignupContainer>
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

                <ButtonContainer>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google sign In</Button>
                </ButtonContainer>
                
            </form>
        </SignupContainer>
    )

}

export default SignInForm;