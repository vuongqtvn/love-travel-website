import React, { useState } from "react";
import { Input } from "antd";

interface NumericInputProps {
  placeholder?: string;
}

const InputNumeric = (props: NumericInputProps) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === "" || inputValue === "-") {
      setValue(inputValue);
    }
  };

  return (
    <Input {...props} value={value} onChange={handleChange} maxLength={25} />
  );
};
export default InputNumeric;
