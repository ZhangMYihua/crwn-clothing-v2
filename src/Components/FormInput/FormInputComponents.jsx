import React from 'react'
import './FormInputStyles.scss'

function FormInputComponent({ label, ...otherProps }) {
  return (
    <div className="group">
      {label && <label>{label}</label>}
      <input className="form-input" {...otherProps} />
    </div>
  )
}

export default FormInputComponent
