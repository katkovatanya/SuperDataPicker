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
  setIntrvalProps,
  UnitsOfMeasurementType,
} from "../../shared/types";
import CustomButton from "../CustomButton/CustomButton";

const QuickSelect: React.FC<setIntrvalProps> = ({ setStart, setEnd }) => {
  const [numberValue, setNumberValue] = useState<number>(0);
  const [dropdownDirectionValue, setDropdownDirectionValue] =
    useState<ItemsDirectionType>(itemsDirection[0]);
  const [dropdownUnitsValue, setDropdownUnitsValue] =
    useState<UnitsOfMeasurementType>(unitsOfMeasurement[0]);

  const handleApplyClick = () => {
    const now = new Date();

    if (!now) return;

    const multiplier = dropdownDirectionValue === "Last" ? -1 : 1;
    const amount = numberValue * multiplier;

    let startDate = new Date(now);
    let endDate = new Date(now);

    if (dropdownDirectionValue === "Last") {
      switch (dropdownUnitsValue) {
        case "Seconds":
          startDate.setSeconds(startDate.getSeconds() + amount);
          break;
        case "Minutes":
          startDate.setMinutes(startDate.getMinutes() + amount);
          break;
        case "Hours":
          startDate.setHours(startDate.getHours() + amount);
          break;
        case "Days":
          startDate.setDate(startDate.getDate() + amount);
          break;
        case "Weeks":
          startDate.setDate(startDate.getDate() + amount * 7);
          break;
        case "Month":
          startDate.setMonth(startDate.getMonth() + amount);
          break;
        case "Years":
          startDate.setFullYear(startDate.getFullYear() + amount);
          break;
        default:
          break;
      }
      endDate = now;
    } else {
      startDate = now;
      switch (dropdownUnitsValue) {
        case "Seconds":
          endDate.setSeconds(endDate.getSeconds() + amount);
          break;
        case "Minutes":
          endDate.setMinutes(endDate.getMinutes() + amount);
          break;
        case "Hours":
          endDate.setHours(endDate.getHours() + amount);
          break;
        case "Days":
          endDate.setDate(endDate.getDate() + amount);
          break;
        case "Weeks":
          endDate.setDate(endDate.getDate() + amount * 7);
          break;
        case "Month":
          endDate.setMonth(endDate.getMonth() + amount);
          break;
        case "Years":
          endDate.setFullYear(endDate.getFullYear() + amount);
          break;
        default:
          break;
      }
    }

    setStart(startDate);
    setEnd(endDate);
  };

  const handleButtonClick = (label: string) => {
    const now = new Date();
    let startDate: Date;
    let endDate: Date;

    switch (label) {
      case "Today":
        startDate = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          0,
          0,
          0,
          0
        );
        endDate = now;
        break;

      case "Yesterday":
        startDate = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          0,
          0,
          0,
          0
        );
        endDate = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          23,
          59,
          59,
          999
        );
        break;

      case "This week": {
        const dayOfWeek = now.getDay() || 7;
        startDate = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - (dayOfWeek - 1),
          0,
          0,
          0,
          0
        );
        endDate = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() + (7 - dayOfWeek),
          23,
          59,
          59,
          999
        );
        break;
      }
      case "Week to date": {
        startDate = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 6,
          0,
          0,
          0,
          0
        );
        endDate = now;
        break;
      }
      case "This month":
        startDate = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
        endDate = new Date(
          now.getFullYear(),
          now.getMonth() + 1,
          0,
          23,
          59,
          59,
          999
        );
        break;
      case "Month to date":
        startDate = new Date(
          now.getFullYear(),
          now.getMonth() - 1,
          now.getDate(),
          0,
          0,
          0,
          0
        );
        endDate = now;
        break;

      case "This year":
        startDate = new Date(now.getFullYear(), 0, 1, 0, 0, 0, 0);
        endDate = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);
        break;
      case "Year to date":
        startDate = new Date(
          now.getFullYear() - 1,
          now.getMonth(),
          now.getDate(),
          0,
          0,
          0,
          0
        );
        endDate = now;
        break;

      default:
        return;
    }

    setStart(startDate);
    setEnd(endDate);
  };

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
        <CustomButton text="Apply" onClick={handleApplyClick} />
      </div>
      <h2>Commonly used</h2>
      <div className="dropdown-menu__buttons">
        {buttons.map((label, index) => (
          <button
            key={index}
            className="dropdown-menu__button"
            onClick={() => handleButtonClick(label)}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
};

export { QuickSelect };
