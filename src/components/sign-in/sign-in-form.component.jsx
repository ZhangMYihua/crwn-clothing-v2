import { useState} from "react";
import { signInWithGooglePopup,
         createUserDocumentFromAuth,
         signInAuthUserWithEmailAndPassword} 
from "../../utils/firebase/firebase.utils";
import FormInput from '../form-input/form-input.component';
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";


const defaultFormFields = {
        email: "",
        password: "",
    }


const SignInForm = () => {    

    const [formFields,setFormFields] = useState(defaultFormFields);
    const {email,password} = formFields

  
    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    };
    
    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
//        setCurrentUser(user);

    };

    const handleSubmit = async(event) => {
        event.preventDefault();

        try{
            const {user} = await signInAuthUserWithEmailAndPassword(email,password);
//          setCurrentUser(user);
            resetFormFields();

        }
        catch(error){
            
        switch(error.code){
            
            case "auth/wrong-password":
                alert("Wrong Password");
                break;
            
            case "auth/user-not-found":
                alert("User Not Found");
                break;
            
            default:
                console.log(error);
            }
            

           
        }
    };
    
    const handleChange = (event) =>{
        const {name , value} = event.target;   
        setFormFields({...formFields , [name] : value});
    };

    return(
        <div className="sign-in-container">
            <h1>I already have an account </h1>
            <span> Sign in with Email and Password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput label = "Email" required type = "email" onChange={handleChange} name = "email" value = {email}/>
                
            
                <FormInput label = "Password" required type = "password" onChange={handleChange} name = "password" value={password}/>

            <div className="buttons-container">
                
                <Button type = 'submit' > Sign In </Button> 
                <Button type = 'button' buttontype= "google" onClick={signInWithGoogle} >Google Sign in </Button>

            </div>
            
            
            </form>
        </div>
    );

}
export default SignInForm;
