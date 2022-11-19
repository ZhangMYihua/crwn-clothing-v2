import React from "react";
import "./form-input.styles.scss";
const FormInput = ({ label, ...otherAttributes }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherAttributes} />
      {label && (
        <label
          className={`${
            otherAttributes.value.length ? "shrink" : ""
          } form-input-label`}
          htmlFor=""
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
