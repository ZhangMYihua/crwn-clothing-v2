import SingInForm from "../../components/sing-in-form/sing-in-form.component";
import SingUpForm from "../../components/sing-up-form/sing-up-form.component";

import './auth.styles.scss';

const SingIn = () => {

  return (
    <div className="auth-container">      
      <SingInForm />
      <SingUpForm />
    </div>
  );
};

export default SingIn;
