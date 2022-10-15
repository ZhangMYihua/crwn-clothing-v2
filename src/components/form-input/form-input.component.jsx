import { FormInputLabel, Input, Group } from './form-input.styles';

function FormInput({ label, ...otherProps }) {
  return (
    <Group>
      <Input {...otherProps} />
      <FormInputLabel shrik={otherProps.value.length}>{label}</FormInputLabel>
    </Group>
  );
}

export default FormInput;
