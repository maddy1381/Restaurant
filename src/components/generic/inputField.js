import React from "react";
import "./inputField.css";
import { RegexValidator } from "./RegexValidator";
// import useSyncState from "./useSyncState";

function InputField(props) {
//   const [value, setValue] = useSyncState("");
  const [error, setError] = React.useState(null);
  const [isOk, setIsOk] = React.useState(true);

  function TypeValidity(val) {
    return RegexValidator(val, props.inputType);
  }

  function handleChange(e) {
    props.setValue(e.target.value).then((val) => {
      if (TypeValidity(e.target.value)) {
        setError(null);
        props.setValue(e.target.value);
        setIsOk(true);
      } else {
        setError(props.errorMsg);
        setIsOk(false);
      }
    });
  }

  return (
    <>
      <div className={`input-container ${props.isRequired ? "required" : ""}`}>
        <input
          value={props.value}
          onChange={handleChange}
          placeholder={props.placeholder}
          disabled={props.isDisabled}
          required={props.isRequired}
          onBlur={() => setError("")}
          className={`input ${error ? "input-error" : ""} ${
            props.isDisabled ? "input-disable" : ""
          } ${!isOk ? "border-error" : ""}`}
        />
      </div>
      {!isOk && error && (
        <p className="error-msg">{props.errorMsg ? props.errorMsg : error}</p>
      )}
    </>
  );
}

export default InputField;
