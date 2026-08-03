import { Group, ForminputLabel } from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <input className='form-input' {...otherProps} />
      {label && (
        <ForminputLabel
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </ForminputLabel>
      )}
    </Group>
  );
};

export default FormInput;
