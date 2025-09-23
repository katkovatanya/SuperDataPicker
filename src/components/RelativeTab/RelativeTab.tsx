import { useEffect, useState } from "react";
import { intervalOptions } from "../../shared/constants";
import type { IntervalOption, setDateProps } from "../../shared/types";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import NumberInput from "../NumberInput/NumberInput";
import "./RelativeTab.css";

const RelativeTab: React.FC<setDateProps> = ({ setDate, date }) => {
  const [currentDate, setCurrentDate] = useState<Date>(date);
  const [numberValue, setNumberValue] = useState<number>(0);
  const [dropdownValue, setDropdownValue] = useState<IntervalOption>(
    intervalOptions[0]
  );

  useEffect(() => {
    if (numberValue && dropdownValue) {
      const newDate = new Date(currentDate);
      switch (dropdownValue) {
        case "Seconds ago":
          newDate.setSeconds(currentDate.getSeconds() - numberValue);
          break;
        case "Minutes ago":
          newDate.setMinutes(currentDate.getMinutes() - numberValue);
          break;
        case "Hours ago":
          newDate.setHours(currentDate.getHours() - numberValue);
          break;
        case "Days ago":
          newDate.setDate(currentDate.getDate() - numberValue);
          break;
        case "Weeks ago":
          newDate.setDate(currentDate.getDate() - numberValue * 7);
          break;
        case "Months ago":
          newDate.setMonth(currentDate.getMonth() - numberValue);
          break;
        case "Years ago":
          newDate.setFullYear(currentDate.getFullYear() - numberValue);
          break;
        case "Seconds from now":
          newDate.setSeconds(currentDate.getSeconds() + numberValue);
          break;
        case "Minutes from now":
          newDate.setMinutes(currentDate.getMinutes() + numberValue);
          break;
        case "Hours from now":
          newDate.setHours(currentDate.getHours() + numberValue);
          break;
        case "Days from now":
          newDate.setDate(currentDate.getDate() + numberValue);
          break;
        case "Weeks from now":
          newDate.setDate(currentDate.getDate() + numberValue * 7);
          break;
        case "Months from now":
          newDate.setMonth(currentDate.getMonth() + numberValue);
          break;
        case "Years from now":
          newDate.setFullYear(currentDate.getFullYear() + numberValue);
          break;
        default:
          break;
      }
      setDate(newDate);
    }
  }, [numberValue, dropdownValue, setDate, currentDate]);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  return (
    <div className="relative-tab__wrapper">
      <div className="relative-tab">
        <NumberInput value={numberValue} onChange={setNumberValue} />
        <CustomDropdown
          options={intervalOptions}
          value={dropdownValue}
          onChange={setDropdownValue}
        />
      </div>
      <div className="relative-tab__today">
        <span>Start date</span>
        <p>{currentDate.toLocaleString()}</p>
      </div>
    </div>
  );
};
export default RelativeTab;
