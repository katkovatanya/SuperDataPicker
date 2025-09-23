import { useEffect, useState } from "react";
import { intervalOptions } from "../../shared/constants";
import type { IntervalOption, RelativeTabProps } from "../../shared/types";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import NumberInput from "../NumberInput/NumberInput";
import "./RelativeTab.css";

const RelativeTab: React.FC<RelativeTabProps> = ({ setDate, date, label }) => {
  const [currentDate, setCurrentDate] = useState<Date>(date);
  const [numberValue, setNumberValue] = useState<number>(0);
  const [dropdownValue, setDropdownValue] = useState<IntervalOption>(
    intervalOptions[0]
  );
  const [roundToDay, setRoundToDay] = useState(false);

  const toggleRoundToDay = () => setRoundToDay((prev) => !prev);

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

  useEffect(() => {
    if (roundToDay) {
      const newDate = new Date();
      newDate.setHours(23, 59, 59, 999);
      setCurrentDate(newDate);
    } else {
      setCurrentDate(new Date());
    }
  }, [roundToDay]);

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
        <span>{label}</span>
        <p>{currentDate.toLocaleString()}</p>
      </div>
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={roundToDay}
          onChange={toggleRoundToDay}
        />
        <span className="slider"></span>
        Round to the day
      </label>
    </div>
  );
};
export default RelativeTab;
