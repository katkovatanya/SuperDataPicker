import React, { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./CustomDropdown.css";

interface CustomDropdownProps {
  options: string[];
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>(options[0] || "");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="dropdown">
      <button className="dropdown__button" onClick={() => setIsOpen(!isOpen)}>
        {selected}
        <MdKeyboardArrowDown />
      </button>
      {isOpen && (
        <ul className="dropdown__list">
          {options.map((option, index) => (
            <li
              key={index}
              className="dropdown__list-item"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
