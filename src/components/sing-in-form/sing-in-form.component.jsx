import { useState } from "react";
import { singnWhitGoooglePopup,createUserDocumentFromAuth,singInAuthUserWhitEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sing-in-form.styles.scss';




const defaultFormFields = {
    email:"",
    password:"",
}
const SingInForm = ()=>{

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email,password} = formFields;
    
    // const {setCurrentUser} =useContext(UserContext);

    console.log(formFields);

    const resetFromFields = ()=>{
        setFormFields(defaultFormFields);
    }

    const singInWhitGoogle = async () => {
      
     await singnWhitGoooglePopup();
   
   }

    const handleSubmit = async (eventh) =>{
        eventh.preventDefault();
       
        
        try {
           const {user} = await singInAuthUserWhitEmailAndPassword(email,password);
       
            resetFromFields();
        }catch (error) {
            switch(error.code){
                case "auth/wrong-password":
                alert("Incorrect Pasword for Email");
                break;

                 case "auth/user-not-found":
                    alert("Incorrect Email");
                    break;
                    default: console.log(error);
            }
        }

        
    }

    const handleChange = (event) => {
        const {name,value} = event.target; 
       
        setFormFields({...formFields,[name]: value})

    }

 return(

  <div className="sing-up-container">
    <h2>Already have a account </h2>
  <span>Sing In whit your email and password</span>
    <form onSubmit={handleSubmit}>
    
        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

      
        <FormInput label="Password" type="password" required onChange={handleChange} name="password"  value={password}/>

       <div className="buttons-container">
       <Button  buttonType='default' type="submit">Sing In </Button>
        <Button  type="button" buttonType='google' onClick={singInWhitGoogle}> Google sign In </Button>
       </div>
    </form>
  </div>

 )

}


export default SingInForm
