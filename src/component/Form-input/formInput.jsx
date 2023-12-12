import React from 'react'
import "./formInput.scss"
export const formInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
    <input className='form-input' {...otherProps} />
    {label && (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    )}
  </div>
  )
}
