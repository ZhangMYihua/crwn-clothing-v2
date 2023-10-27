import { useState } from "react";

import { createAuthWithEmailAndPassword } from "../../utils/firebase/firebase.utils";


const defaultformFileds = {
    displayName: '',
    email: '',
    password: '',
    confirmedPassword: '',
}
const SingUpForm = () =>{


    const [formFields, setFormFields] = useState(defaultformFileds)

    const {displayName, email, password, confirmedPassword} = formFields

    const handleChange = (event)=>{
        const {name, value} = event.target;

        setFormFields({ ...formFields, [name]:value})

    }

    const handleSubmit = async (event)=>{
        event.preventDefault();

        
        if(password!==confirmedPassword){
            alert("passwords don't match")
        }


        try{
            const response = await createAuthWithEmailAndPassword(email, password);
            console.log(response)
        }catch(err){
            console.log('user created encoutered an error', err)
        }

        
    }

    return (
        <div>
            <h1>Sign Up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input name="displayName" type="text" required onChange={handleChange} value={displayName} />
                <label>Email</label>
                <input name="email" type="email" required onChange={handleChange} value={email} />
                <label>Password</label>
                <input name="password" type="password" required onChange={handleChange} value={password} />
                <label>Confirm Password</label>
                <input name="confirmedPassword" type="password" required onChange={handleChange} value={confirmedPassword} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SingUpForm;