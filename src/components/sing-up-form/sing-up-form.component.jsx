import { useState } from "react";
import { createAuthUserWhitEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sing-up-form.styles.scss';


const defaultFormFields = {
    displayName:"",
    email:"",
    password:"",
    confirmPassword:"",

}
const SingUpForm = ()=>{

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formFields;

    console.log(formFields);

    const resetFromFields = ()=>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (eventh) =>{
        eventh.preventDefault();
        if ( password !== confirmPassword) {
         alert("password do not martch");
         return;
    
        }
        
        try {
           const {user} = await createAuthUserWhitEmailAndPassword(
            email,
            password);
            
            await createUserDocumentFromAuth(user,{displayName});
            resetFromFields();
            alert("Already Sing Up")
        }catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Cannot create a user, email already in use ");
            } 
            console.log("Error type "+ error);
        }

        
    }

    const handleChange = (event) => {
        const {name,value} = event.target; 
       
        setFormFields({...formFields,[name]: value})

    }

 return(

  <div className="sing-up-container">
    <h2>Don't have a account? </h2>
  <span>Sing Up whit your email and password</span>
    <form onSubmit={handleSubmit}>
    
        <FormInput  label="Display Name" type="text" required onChange={handleChange}  name="displayName" value={displayName} />
        
        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

      
        <FormInput label="Password" type="password" required onChange={handleChange} name="password"  value={password}/>

        
        <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

        <Button  buttonType='default' type="submit">Sing UP</Button>
    </form>
  </div>

 )

}


export default SingUpForm
