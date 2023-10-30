import { AuthenticationContainer } from './authentication.styles';


import SignInForm from '../../components/sign-in-form/sign-in-from.component';

import SignUpFrom from '../../components/sign-up-form/sign-up-from.component';    


  


const Authentication = () =>{
    return(
        <AuthenticationContainer>
            <SignInForm />
           <SignUpFrom />
        </AuthenticationContainer>
    )
}

export default Authentication 