import './form-input.scss'

import React from 'react'

export const FormInput = ({label, ...otherProps}) => {
  console.log(label, otherProps)
  return (
    <div className='group' >
      <input className='form-input' {...otherProps} />
      {label && <label className={`${otherProps.value.length ? 'shrink' : '' } form-input-label`}>{label}</label>}
    </div>
  )
}
