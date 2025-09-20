import { CiCalendar } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuMoveRight } from "react-icons/lu";
import "./SuperDataPicker.css";
import { useState } from "react";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import NumberInput from "../NumberInput/NumberInput";

function SuperDataPicker() {
  const [start, setStart] = useState("30 минут назад");
  const [end, setEnd] = useState("сейчас");
  const [isOpenCalendarDropdown, setIsOpenCalendarDropdown] = useState(false);

  const itemsDirection = ["Last", "Next"];
  const unitsOfMeasurement = [
    "Seconds",
    "Minutes",
    "Hours",
    "Days",
    "Weeks",
    "Month",
    "Years",
  ];
  const buttons = [
    "Today",
    "Yesterday",
    "This week",
    "Week to date",
    "This month",
    "Month to date",
    "This year",
    "Year to date",
  ];

  const toggleCalendarDropdown = () =>
    setIsOpenCalendarDropdown(!isOpenCalendarDropdown);

  return (
    <div className="sdp">
      <div className="sdp__wrapper">
        <button className="calendar__button" onClick={toggleCalendarDropdown}>
          <CiCalendar /> <MdKeyboardArrowDown />
        </button>
        <button className="interval__button">{`${start}`}</button>
        <LuMoveRight />
        <button className="interval__button">{`${end}`}</button>
        <button className="update-button">Refresh</button>
      </div>
      <div
        className={`dropdown-menu ${
          isOpenCalendarDropdown ? "dropdown-menu_open" : ""
        }`}
      >
        <h2>Quick select</h2>
        <div className="interval-selection">
          <CustomDropdown options={itemsDirection} />
          <NumberInput />
          <CustomDropdown options={unitsOfMeasurement} />
          <button className="apply-button">Apply</button>
        </div>
        <h2>Commonly used</h2>
        <div className="dropdown-menu__buttons">
          {buttons.map((label, index) => (
            <button key={index} className="dropdown-menu__button">
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export { SuperDataPicker };
