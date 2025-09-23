import { useState } from "react";
import {
  buttons,
  itemsDirection,
  unitsOfMeasurement,
} from "../../shared/constants";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import NumberInput from "../NumberInput/NumberInput";
import "./QuickSelect.css";
import type {
  ItemsDirectionType,
  setDateProps,
  UnitsOfMeasurementType,
} from "../../shared/types";
import CustomButton from "../CustomButton/CustomButton";

const QuickSelect: React.FC<setDateProps> = ({ setDate, date }) => {
  const [currentDate, setCurrentDate] = useState<Date>(date);
  const [numberValue, setNumberValue] = useState<number>(0);
  const [dropdownDirectionValue, setDropdownDirectionValue] =
    useState<ItemsDirectionType>(itemsDirection[0]);
  const [dropdownUnitsValue, setDropdownUnitsValue] =
    useState<UnitsOfMeasurementType>(unitsOfMeasurement[0]);

  return (
    <>
      <h2>Quick select</h2>
      <div className="interval-selection">
        <CustomDropdown
          options={itemsDirection}
          value={dropdownDirectionValue}
          onChange={setDropdownDirectionValue}
        />
        <NumberInput value={numberValue} onChange={setNumberValue} />
        <CustomDropdown
          options={unitsOfMeasurement}
          value={dropdownUnitsValue}
          onChange={setDropdownUnitsValue}
        />
        <CustomButton text="Apply" onClick={() => {}} />
      </div>
      <h2>Commonly used</h2>
      <div className="dropdown-menu__buttons">
        {buttons.map((label, index) => (
          <button key={index} className="dropdown-menu__button">
            {label}
          </button>
        ))}
      </div>
    </>
  );
};

export { QuickSelect };
