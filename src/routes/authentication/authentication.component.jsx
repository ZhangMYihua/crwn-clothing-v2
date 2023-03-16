
import SingUpForm from '../../components/sing-up-form/sing-up-form.component.jsx';
import SingInForm from '../../components/sing-in-form/sing-in-form.component.jsx';
import './authentication.styles.scss';

const Authentication = ()=>{



   


 return(
    <div className='authentication-container'>
      <SingInForm/>
     <SingUpForm/>

    </div>
   
 )

}


export default Authentication