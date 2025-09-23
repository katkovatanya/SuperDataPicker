import React from "react";
import "./NumberInput.css";

export type NumberInputProps = {
  value: number;
  onChange: (value: number) => void;
};

const NumberInput: React.FC<NumberInputProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(0, Math.floor(Number(e.target.value)));
    onChange(newValue);
  };

  return (
    <input
      className="number-input"
      type="number"
      value={value}
      onChange={handleChange}
      min={0}
      step={1}
    />
  );
};

export default NumberInput;
