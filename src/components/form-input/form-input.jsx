import './form-input.scss'

const FormInput = ({ label, ...otherProps }) => {
    return (
        <>
            <label className='labels'>{label}</label>
            <input className='inputs' {...otherProps} />
            <br />
        </>
    )
}

export default FormInput