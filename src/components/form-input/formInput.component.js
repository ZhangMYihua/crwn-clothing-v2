import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ label, ...otherFormAttributes }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherFormAttributes} />
      <label className={`${otherFormAttributes.value.length ? "shrink" : ""} form-input-label`}>{label}</label>
    </div>
  );
};

export default FormInput;
