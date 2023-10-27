import './authentication.styles.scss'


import SignInForm from '../../components/sign-in-form/sign-in-from.component';

import SignUpFrom from '../../components/sign-up-form/sign-up-from.component';    


  


const Authentication = () =>{
    return(
        <div className='authentication-container'>
            <SignInForm />
           <SignUpFrom />
        </div>
    )
}

export default Authentication 