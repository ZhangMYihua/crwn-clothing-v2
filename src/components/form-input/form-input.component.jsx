import './form-input.styles.scss';
import classNames from 'classnames';

export const FormInput = ({ label, ...otherProps }) => {
  const labelClass = classNames('form-input-label', {
    shrink: otherProps.value.length
  });
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && <label className={labelClass}>{label}</label>}
    </div>
  );
};
