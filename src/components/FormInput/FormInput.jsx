import React from 'react';
import { FormInputLabel, Input, Group } from './FormInputStyle';
const FormInput = (props) => {
	const { label, ...otherProps } = props;
	return (
		<Group>
			<Input {...otherProps} />
			{label && <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>}
		</Group>
	);
};

export default FormInput;
