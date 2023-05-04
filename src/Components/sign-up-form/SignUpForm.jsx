import React, {useState} from 'react';


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields

    const handleChange = (event) => {
        // console.log(event.target.name);
        // switch (event.target.name) {
        //     case 'displayName':
        //         setFormFields({...formFields, displayName: event.target.value})
        //         break
        //     case 'email':
        //         setFormFields({...formFields, email: event.target.value})
        //         break
        //     case 'password':
        //         setFormFields({...formFields, password: event.target.value})
        //         break
        //     case 'confirmPassword':
        //         setFormFields({...formFields, confirmPassword: event.target.value})
        //         break
        // }
        setFormFields({...formFields, [event.target.name]: event.target.value})
        console.log(formFields);
    }

    const useless = () => {
        return 32
    }
    return (
        <div>
            <h1>Sign Up with your Email</h1>
            <form onSubmit={() => {
                setFormFields()
            }}>
                <label>Display Name</label>
                <input required={true} type="text" onChange={handleChange} name={'displayName'}/><br/>
                <label>Email Address</label>
                <input required={true} type="email" onChange={handleChange} name={'email'}/><br/>
                <label>Password</label>
                <input required={true} type="password" onChange={handleChange} name={'password'}/><br/>
                <label>Confirm Password</label>
                <input required={true} type="password" onChange={handleChange} name={'confirmPassword'}/><br/>
                <button type={'submit'}>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;