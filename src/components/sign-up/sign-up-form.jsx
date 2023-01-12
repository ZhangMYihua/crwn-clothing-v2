import './sign-up-form.scss'
import { useState } from "react"
import FormInput from "../form-input/form-input-component"
import Button from '../button/button-component'
import { createAuthUserWithEmailAndPasswoed,createUserDocumentFromAuth } from "../../utils/firebase/firebase"
const defaultFormFields={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''

}
const SignUpForm=()=>{
    const [formFields,setFormFields]=useState(defaultFormFields)
    const {displayName,email,password,confirmPassword}=formFields
    const resetFormFields=()=>{
        setFormFields(defaultFormFields)
    }
            const heandleSubmit=async (event )=> {
            event.preventDefault()
            
            if(password !== confirmPassword){
                alert('passwords do not match')
                return;
            }
            try{
                const {user}=await createAuthUserWithEmailAndPasswoed(email,password);
                await createUserDocumentFromAuth(user,{displayName})
                resetFormFields()
            }catch(error){
                if(error.code ==="auth/email-alredy-in-use"){
                    alert('cannot creaate user ,user already in use')
                }else{
                    console.error('user make make some error '+  error)
                }
            }

        }


        const heandelChange=(event)=>{
        const {name,value}=event.target;

        setFormFields({...formFields,[name]:value})
        }

    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>
            Sign up with your email and password

            </span>
          
            <form onSubmit={heandleSubmit} action="">     
                < FormInput label="Display Name" type="text" required onChange={heandelChange} name='displayName' value={displayName} />
                < FormInput label="Email" type="email" required  onChange={heandelChange} name='email' value={email}  />
                < FormInput label="Password" type="password" required  onChange={heandelChange} name='password' value={password} />
                < FormInput label="Confirm Password" type="password" required  onChange={heandelChange} name='confirmPassword'  value={confirmPassword}/>
                <Button type="submit">Sign up</Button>
            </form>
        </div>
    )
}
export default SignUpForm
