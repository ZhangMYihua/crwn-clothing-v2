import { useState } from "react";
import {
  singWhitGooglePopup,
  createUserDocumentFromAuth,
  singInAuthUserWhitEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { SingUpContainer, ButtonsContainer } from "./sing-in-form.styles.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};
const SingInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // const {setCurrentUser} =useContext(UserContext);

  // console.log(formFields);

  const resetFromFields = () => {
    setFormFields(defaultFormFields);
  };

  const singInWhitGoogle = async () => {
    await singWhitGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await singInAuthUserWhitEmailAndPassword(
        email,
        password
      );

      resetFromFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password for Email");
          break;

        case "auth/user-not-found":
          alert("Incorrect Email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SingUpContainer>
      <h2>Already have a account </h2>
      <span>Sing In whit your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <ButtonsContainer>
          <Button buttonType="default" type="submit">
            Sing In{" "}
          </Button>
          <Button $google type="button" onClick={singInWhitGoogle}>
            {" "}
            Google sign In{" "}
          </Button>
        </ButtonsContainer>
      </form>
    </SingUpContainer>
  );
};

export default SingInForm;
