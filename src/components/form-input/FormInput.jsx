import {FormInputLabel, Input, Group } from "./form-input.styles"

export const FormInput = ({label, ...otherProps}) => {
  return (
    <Group>
      <Input {...otherProps} />
        {label && 
          <FormInputLabel 
            shrink={otherProps.value.length}>
            {label}
          </FormInputLabel>}
    </Group>
  )
}
