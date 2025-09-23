import React from "react";
import "./CustomButton.css";

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const CustomButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
