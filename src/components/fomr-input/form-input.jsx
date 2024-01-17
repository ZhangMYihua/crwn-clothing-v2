import styles from './form-input.module.scss'
import clsx from 'clsx';
const FormInput =({label, ...props})=> {
  return(
    <div className={styles.group}>
      <input className={styles.formInput} {...props}/>
      {label &&  <label  className={clsx(props.value.length && styles.shrink, styles.formInputLabel)}>{label}</label>}
    </div>
  )
}

export default FormInput