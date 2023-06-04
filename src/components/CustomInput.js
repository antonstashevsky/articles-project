import React from "react";

const CustomInput = ({
  inputLabel,
  inputName,
  inputValue,
  handleInputChange,
}) => {
  return (
    <div className="m-2 d-flex flex-column align-items-center gap-2">
      <label>{inputLabel}</label>
      <input
        name={inputName}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="form-input"
      />
    </div>
  );
};

export default CustomInput;
