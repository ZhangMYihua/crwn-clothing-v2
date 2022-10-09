import {Group,Input,FormInputLabel} from "./form-input.style.jsx"
const FormInput = ({label, ...inputOptions}) =>{
    
return(
    <Group>
        <Input {...inputOptions}/>
        {label && (
            <FormInputLabel shrink= {inputOptions.value.length}>{label}</FormInputLabel>
        )}
    </Group>
);

};
export default FormInput