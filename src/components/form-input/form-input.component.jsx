import { Fragment } from 'react'
import {Group,FormInputLabel,Input} from './form-input.styles.jsx'

const FormInput = ({label, ...otherProps}) => {
    return (
        <Group>
            <Input {...otherProps}/>
            { label && (
                <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
            )}         
        </Group>
    )
}

export default FormInput;