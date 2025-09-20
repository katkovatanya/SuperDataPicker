import React, { useState } from "react";
import "./NumberInput.css";

const NumberInput: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(0, Math.floor(Number(e.target.value)));
    setValue(newValue);
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
