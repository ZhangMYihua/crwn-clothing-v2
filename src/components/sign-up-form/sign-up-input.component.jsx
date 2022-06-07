const SignUpInput = (props) => {
  return (
    <div className="group">
      <input
        required
        className="form-input"
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={(e) => props.onChange(e)}
      />
      <label className="form-input-label">{props.label}</label>
    </div>
  );
};

export default SignUpInput;
