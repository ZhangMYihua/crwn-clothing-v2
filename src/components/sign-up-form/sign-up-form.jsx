import {useState} from 'react'
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

const defaultFormFields={
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm=()=>{
    const [formFields, setFormFields]=useState(defaultFormFields)
    const {displayName, email, password, confirmPassword}=formFields;

const handleSubmit=async(event)=>{
event.preventefault()

if(password!==confirmPassword){
    alert('passwords ont match')
    return
}
try{
const response=await createAuthUserWithEmailAndPassword(email, password)
console.log(response)
}catch(err){
console.log(err+ 'user creation error')
}


}

    const handleChange=(event)=>{
        const {name, value}=event.target
        setFormFields({...formFields, [name]: value})
    }


return(
    <div>
<h1>Sign up with your email an password</h1>
<form onSubmit={handleSubmit}>
    <label> Display Name</label>
    <input type="text" required onChange={handleChange}  name="displayName"
    value={displayName} />

    <label> Email</label>
    <input type="email" required onChange={handleChange} name="email"
     value={email}/>

    <label> Password</label>
    <input type="password" required onChange={handleChange} name="password"
     value={password}/>

    <label> Confirm Password</label>
    <input type="password" required onChange={handleChange} name="confirmPassword"
     value={confirmPassword}/>

<button type="submit">Sign Up</button>
</form>

    </div>
)

}

export default SignUpForm