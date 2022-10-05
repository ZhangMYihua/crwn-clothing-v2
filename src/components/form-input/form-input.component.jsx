import './form-input.styles.scss';

function FormInput({ label, ...otherProps }) {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />

      <label
        className={`${otherProps.value?.length && 'shrink'} form-input-label`}
      >
        {label}
      </label>
    </div>
  );
}

export default FormInput;
