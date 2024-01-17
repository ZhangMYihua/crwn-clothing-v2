
import React from 'react'
import styles from './button.module.scss'
import clsx from 'clsx'

const Button = ({children, buttonType, ...otherProps}) => {
  return (
    <button className={clsx(styles.buttonContainer, buttonType === 'google' ? styles.googleSignIn : styles.inverted )} {...otherProps} type='submit'>{children}</button>
  )
}

export default Button