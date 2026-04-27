import styled from 'styled-components';
import SignUpForm from '../../components/sign-up-form/sign-up.component';
import SignInForm from '../../components/sign-in-form/sign-in.component';

const AuthenticationContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;
`;

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
