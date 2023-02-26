import React from 'react'

import { useState } from 'react'
import { useContext } from 'react'

import FormInputComponent from '../FormInput/FormInputComponents'
import ButtonFormComponents from '../ButtonForm/ButtonFormComponents'

import { signInWithGooglePopup } from '../../utility/firebase/FirebaseComponent'
import { createUserDocumentFromAuth } from '../../utility/firebase/FirebaseComponent'
import { signAuthInWithEmailAndPassword } from '../../utility/firebase/FirebaseComponent'
import { UserContext } from '../../Kontext/FontextContext'

function SignInFormComponents() {
  const defaultForm = {
    email: '',
    password: '',
  }

  const otvet = async () => {
    const user = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  const [field, setField] = useState(defaultForm)
  const { email, password } = field

  const { setCurrentUser } = useContext(UserContext)

  const useHandler = (event) => {
    const { name, value } = event.target
    setField({ ...field, [name]: value })
  }

  const handlerSubmit = async (event) => {
    event.preventDefault()
    try {
      const result = signAuthInWithEmailAndPassword(email, password)
      setCurrentUser(result)
    } catch (eroor) {
      switch (eroor.code) {
        case 'auth/user-not-found':
          alert('user ne najden')
          break
        case 'auth/wrong-password':
          alert('parolj ne vernij')
          break
        default:
          console.log(eroor)
      }
    }
  }
  return (
    <div>
      <h1>Dlja zaregistrirovannih </h1>
      <form onSubmit={handlerSubmit}>
        <FormInputComponent
          label="yours email"
          type="email"
          required
          onChange={useHandler}
          value={email}
          name="email"
        />
        <FormInputComponent
          label="yours password"
          type="password"
          required
          onChange={useHandler}
          value={password}
          name="password"
        />
        <ButtonFormComponents buttonType="inverted" type="submit">
          SignIn
        </ButtonFormComponents>
        <ButtonFormComponents
          onClick={otvet}
          buttonType="google"
          type="google-sub"
        >
          Google SignIn
        </ButtonFormComponents>
      </form>
    </div>
  )
}

export default SignInFormComponents
