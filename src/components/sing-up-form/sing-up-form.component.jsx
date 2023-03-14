import { useState } from "react";
import { createAuthUserWhitEmailAndPassword } from "../../utils/firebase/firebase.utils";



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

    const handleSubmit = async (eventh) =>{
        eventh.preventDefault();
        if ( password !== confirmPassword) {
         alert("password do not martch");
         return;
    
        }
        
        try {
           const response = await createAuthUserWhitEmailAndPassword(
            email,
            password);
            console.log(response);
        }catch (error) {
            console.log("Error type "+error);
        }
    }

    const handleChange = (event) => {
        const {name,value} = event.target; 
       
        setFormFields({...formFields,[name]: value})

    }

 return(

  <div>
  <h1>Sing Up whit your email and password</h1>
    <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input type="text" required onChange={handleChange}  name="displayName" value={displayName} />
        
        <label>Email</label>
        <input type="email" required onChange={handleChange} name="email" value={email}/>

        <label>Password</label>
        <input type="password" required onChange={handleChange} name="password"  value={password}/>

        <label>Confirm Password</label>
        <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

        <button type="submit">Sing UP</button>
    </form>
  </div>

 )

}


export default SingUpForm
