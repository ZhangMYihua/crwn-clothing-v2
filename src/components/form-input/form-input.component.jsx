import './form-input.styles.scss';


// const FormInput = ({label, changeHandler, value}) => {

//    return (
//       <div>
//          <label>{label}</label>
//          <input 
//             type='email' 
//             required onChange={handleChange} 
//             name='email' 
//             value={email} />
//       </div>
//    );

const FormInput = ({label, ...otherProps}) => {

   return (
      <div className='group'>
         <input className="form-input" {...otherProps} />
         
         {label && (
            <label 
               className={`${
                  otherProps.value.length ? 'shrink' : ''
               } form-input-label`}
            >
               {label}
            </label>
            )
         }
         
      </div>
   );
}

export default FormInput;