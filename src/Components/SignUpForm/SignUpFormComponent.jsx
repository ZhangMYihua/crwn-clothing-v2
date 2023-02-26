import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'

import FormInputComponent from '../FormInput/FormInputComponents'
import ButtonFormComponents from '../ButtonForm/ButtonFormComponents'

import { createAuthUserWithEmailAndPassword } from '../../utility/firebase/FirebaseComponent'
import { createUserDocumentFromAuth } from '../../utility/firebase/FirebaseComponent'
import { UserContext } from '../../Kontext/FontextContext'

function SignUpFormComponent() {
  const { setCurrentUser } = useContext(UserContext)

  const defaultForm = {
    email: '',
    password: '',
    confirm: '',
  }

  const [field, setField] = useState(defaultForm)
  const { displayName, email, password, confirm } = field

  const useHandler = (event) => {
    const { name, value } = event.target
    setField({ ...field, [name]: value })
  }

  const handlerSubmit = async (event) => {
    event.preventDefault()
    if (password !== confirm) {
      alert('vvedite odinKOVIJE PAROLi')
      return
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth({ user }, { displayName })
      setCurrentUser(user)
    } catch (eroor) {
      if (eroor.code === 'auth/email-already-in-use')
        alert('vi uze ispoljzovali etot email')
    }
  }

  return (
    <div>
      <h1>Sign up with your email and password </h1>
      <form onSubmit={handlerSubmit}>
        <FormInputComponent
          label="yours name"
          type="name"
          required
          onChange={useHandler}
          value={displayName}
          name="name"
        />
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
        <FormInputComponent
          label="please confiorm"
          type="password"
          required
          onChange={useHandler}
          value={confirm}
          name="confirm"
        />
        {/* knopka menajet cvet pri smene type */}
        <ButtonFormComponents buttonType="google" type="submit">
          Sign up
        </ButtonFormComponents>
      </form>
    </div>
  )
}

export default SignUpFormComponent
