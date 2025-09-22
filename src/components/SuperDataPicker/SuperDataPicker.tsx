import { CiCalendar } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuMoveRight } from "react-icons/lu";
import "./SuperDataPicker.css";
import { useRef, useState } from "react";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import NumberInput from "../NumberInput/NumberInput";
import EndPointSelect from "../EndPointSelect/EndPointSelect";
import {
  buttons,
  itemsDirection,
  unitsOfMeasurement,
} from "../../shared/constants";

function SuperDataPicker() {
  const [start, setStart] = useState<Date>(() => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - 30);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
  });

  const [end, setEnd] = useState<Date>(() => {
    const date = new Date();
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
  });
  const [activeDropdown, setActiveDropdown] = useState<
    "calendar" | "start" | "end" | null
  >(null);
  const [dropdownPosition, setDropdownPosition] = useState<number>(0);

  const calendarButtonRef = useRef<HTMLButtonElement>(null);
  const startButtonRef = useRef<HTMLButtonElement>(null);
  const endButtonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = (dropdown: "calendar" | "start" | "end") => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
      return;
    }

    let buttonRef;
    switch (dropdown) {
      case "calendar":
        buttonRef = calendarButtonRef;
        break;
      case "start":
        buttonRef = startButtonRef;
        break;
      case "end":
        buttonRef = endButtonRef;
        break;
    }

    if (buttonRef?.current && calendarButtonRef?.current) {
      if (dropdown === "calendar") {
        setDropdownPosition(0);
      } else {
        const startComponent =
          calendarButtonRef.current.getBoundingClientRect().left;
        const rect = buttonRef.current.getBoundingClientRect();
        const left = rect.left - startComponent;
        console.log(left);

        setDropdownPosition(left);
      }
    }

    setActiveDropdown(dropdown);
  };

  return (
    <div className="sdp">
      <div className="sdp__wrapper">
        <button
          className="calendar__button"
          onClick={() => toggleDropdown("calendar")}
          ref={calendarButtonRef}
        >
          <CiCalendar /> <MdKeyboardArrowDown />
        </button>
        <button
          className="interval__button"
          onClick={() => toggleDropdown("start")}
          ref={startButtonRef}
        >{`${start.toLocaleString()}`}</button>
        <LuMoveRight />
        <button
          className="interval__button"
          onClick={() => toggleDropdown("end")}
          ref={endButtonRef}
        >{`${end.toLocaleString()}`}</button>
        <button className="update-button">Refresh</button>
      </div>
      <div
        className={`dropdown-menu ${
          activeDropdown === "calendar" ? "dropdown-menu_open" : ""
        }`}
        style={{
          left: dropdownPosition,
        }}
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
      <div
        className={`dropdown-menu ${
          activeDropdown === "start" ? "dropdown-menu_open" : ""
        }`}
        style={{
          left: dropdownPosition,
        }}
      >
        <EndPointSelect />
      </div>
      <div
        className={`dropdown-menu ${
          activeDropdown === "end" ? "dropdown-menu_open" : ""
        }`}
        style={{
          left: dropdownPosition,
        }}
      >
        <EndPointSelect />
      </div>
    </div>
  );
}

export { SuperDataPicker };
