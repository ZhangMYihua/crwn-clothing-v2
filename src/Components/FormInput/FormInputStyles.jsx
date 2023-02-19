import React from 'react'
import './FormInputComponent.scss'

function FormInputStyles({ label, ...otherProps }) {
  return (
    <div className="group">
      {label && <label>{label}</label>}
      <input className="form-input" {...otherProps} />
    </div>
  )
}

export default FormInputStyles
